# Cloud Computing Fundamentals
> https://www.cloudskillsboost.google/paths/36/course_templates/153

## check info
```
gcloud auth list

gcloud config list project
```

## Configuring environment
```
gcloud config set compute/region REGION

gcloud config get-value compute/region

gcloud config set compute/zone ZONE

gcloud config get-value compute/zone
```

## Finding project information
```
gcloud config get-value project

gcloud compute project-info describe --project $(gcloud config get-value project)
```

## Setting environment variables
```
export PROJECT_ID=$(gcloud config get-value project)

export ZONE=$(gcloud config get-value compute/zone)

echo -e "PROJECT ID: $PROJECT_ID\nZONE: $ZONE"
```

## Creating a virtual machine
```
gcloud compute instances create gcelab2 --machine-type e2-medium --zone $ZONE

gcloud compute instances create --help

gcloud compute instances list

gcloud compute instances list --filter="name=('gcelab2')"

gcloud compute firewall-rules list

gcloud compute firewall-rules list --filter="network='default'"

gcloud compute firewall-rules list --filter="NETWORK:'default' AND ALLOW:'icmp'"

gcloud compute ssh gcelab2 --zone $ZONE

# http
gcloud compute instances add-tags gcelab2 --tags http-server,https-server

# firewall
gcloud compute firewall-rules create default-allow-http --direction=INGRESS --priority=1000 --network=default --action=ALLOW --rules=tcp:80 --source-ranges=0.0.0.0/0 --target-tags=http-server

gcloud compute firewall-rules list --filter=ALLOW:'80'

curl http://$(gcloud compute instances list --filter=name:gcelab2 --format='value(EXTERNAL_IP)')

gcloud logging logs list
gcloud logging logs list --filter="compute"

```

## Deploy app
```
1. Enable Google App Engine Admin API

gcloud app deploy

gcloud app browse

```

## Create a function
```
# create a bucket
gsutil mb -p [PROJECT_ID] gs://[BUCKET_NAME]

# deploy
gcloud functions deploy helloWorld \
  --stage-bucket [BUCKET_NAME] \
  --trigger-topic hello_world \
  --runtime nodejs20

# check the function
gcloud functions describe helloWorld

# send data and run the function
DATA=$(printf 'Hello World!'|base64) && gcloud functions call helloWorld --data '{"data":"'$DATA'"}'

gcloud functions logs read helloWorld
```

## GKE cluster
```
gcloud container clusters create --machine-type=e2-medium --zone=ZONE lab-cluster

gcloud container clusters get-credentials lab-cluster --zone=ZONE

kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:2.0

kubectl expose deployment hello-server --type=LoadBalancer --port 8080

kubectl get service

gcloud container clusters delete lab-cluster

```

## Create a bucket
```
gsutil mb gs://<YOUR-BUCKET-NAME>

gsutil cp ada.jpg gs://YOUR-BUCKET-NAME

gsutil cp -r gs://YOUR-BUCKET-NAME/ada.jpg .

gsutil cp gs://YOUR-BUCKET-NAME/ada.jpg gs://YOUR-BUCKET-NAME/image-folder/

gsutil ls gs://YOUR-BUCKET-NAME

gsutil rm gs://YOUR-BUCKET-NAME/ada.jpg

# Make object publicly accessible
gsutil acl ch -u AllUsers:R gs://YOUR-BUCKET-NAME/ada.jpg
# Remove public access
gsutil acl ch -d AllUsers gs://YOUR-BUCKET-NAME/ada.jpg

```

##  Cloud SQL instance
```
Create a Cloud SQL instance in dashborad

gcloud sql connect myinstance --user=root

--- mysql console
CREATE DATABASE guestbook;

USE guestbook;

CREATE TABLE entries (guestName VARCHAR(255), content VARCHAR(255),
    entryID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(entryID));
    INSERT INTO entries (guestName, content) values ("first guest", "I got here!");
INSERT INTO entries (guestName, content) values ("second guest", "Me too!");

SELECT * FROM entries;
--- sql end
```

## Pub/Sub: Python
```
## Create a virtual environment

sudo apt-get install -y virtualenv
python3 -m venv venv
source venv/bin/activate

## Install the client library

pip install --upgrade google-cloud-pubsub
git clone https://github.com/googleapis/python-pubsub.git
cd python-pubsub/samples/snippets

## Pub/Sub - the Basics
## Create a topic
echo $GOOGLE_CLOUD_PROJECT
cat publisher.py

## Create a topic
python publisher.py $GOOGLE_CLOUD_PROJECT create MyTopic
python publisher.py $GOOGLE_CLOUD_PROJECT list

## Create a subscription
python subscriber.py $GOOGLE_CLOUD_PROJECT create MyTopic MySub
python subscriber.py $GOOGLE_CLOUD_PROJECT list-in-project
python subscriber.py -h

## Publish messages
gcloud pubsub topics publish MyTopic --message "Hello"

## View messages
python subscriber.py $GOOGLE_CLOUD_PROJECT receive MySub

```

## Pub/Sub:
```
gcloud pubsub topics create myTopic
gcloud pubsub topics list
gcloud pubsub topics create Test1
gcloud pubsub topics delete Test1

gcloud pubsub subscriptions create --topic myTopic mySubscription
gcloud pubsub topics list-subscriptions myTopic
gcloud pubsub subscriptions create --topic myTopic Test1
gcloud pubsub subscriptions delete Test1

gcloud pubsub topics publish myTopic --message "Hello"
gcloud pubsub subscriptions pull mySubscription --auto-ack
gcloud pubsub topics publish myTopic --message "Publisher 1"
gcloud pubsub topics publish myTopic --message "Publisher a"
gcloud pubsub topics publish myTopic --message "Publisher @"
gcloud pubsub subscriptions pull mySubscription --auto-ack --limit=3


### receive a message
gcloud pubsub subscriptions pull --auto-ack MySub

```

## User Authentication: Identity-Aware Proxy
gsutil cp gs://spls/gsp499/user-authentication-with-iap.zip .

Restrict access with IAP
Navigation menu Navigation menu icon > Security > Identity-Aware Proxy.

```
## Deploy the application and protect it with IAP
gcloud services disable appengineflex.googleapis.com
```

```
## The X-Goog-Authenticated-User- headers are provided by IAP, and the names are case-insensitive,

user_email = request.headers.get('X-Goog-Authenticated-User-Email')
user_id = request.headers.get('X-Goog-Authenticated-User-ID')

page = render_template('index.html', email=user_email, id=user_id)
Hello, {{ email }}! Your persistent ID is {{ id }}.

def user():
    assertion = request.headers.get('X-Goog-IAP-JWT-Assertion')
    if assertion is None:
        return None, None

    info = jwt.decode(
        assertion,
        keys(),
        algorithms=['ES256'],
        audience=audience()
    )

    return info['email'], info['sub']

```

## VPC networks
```

### Create the managementnet network by dashboard
gcloud compute networks create managementnet --project=qwiklabs-gcp-03-52837f06f240 --subnet-mode=custom --mtu=1460 --bgp-routing-mode=regional

gcloud compute networks subnets create managementsubnet-europe-west1 --project=qwiklabs-gcp-03-52837f06f240 --range=10.130.0.0/20 --stack-type=IPV4_ONLY --network=managementnet --region=europe-west1

### Create the privatenet network
gcloud compute networks create privatenet --subnet-mode=custom
gcloud compute networks subnets create privatesubnet-europe-west1 --network=privatenet --region=europe-west1 --range=172.16.0.0/24
gcloud compute networks subnets create privatesubnet-us-east1 --network=privatenet --region=us-east1 --range=172.20.0.0/20

gcloud compute networks list
gcloud compute networks subnets list --sort-by=NETWORK

### Create the firewall rules for managementnet by dashboard
gcloud compute --project=qwiklabs-gcp-03-52837f06f240 firewall-rules create managementnet-allow-icmp-ssh-rdp --direction=INGRESS --priority=1000 --network=managementnet --action=ALLOW --rules=tcp:22,tcp:3389,icmp --source-ranges=0.0.0.0/0

### Create the firewall rules for privatenet
gcloud compute firewall-rules create privatenet-allow-icmp-ssh-rdp --direction=INGRESS --priority=1000 --network=privatenet --action=ALLOW --rules=icmp,tcp:22,tcp:3389 --source-ranges=0.0.0.0/0

gcloud compute firewall-rules list --sort-by=NETWORK

### create managementnet VM
gcloud compute instances create managementnet-europe-west1-vm --project=qwiklabs-gcp-03-52837f06f240 --zone=europe-west1-c --machine-type=e2-micro --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=managementsubnet-europe-west1 --metadata=enable-oslogin=true --maintenance-policy=MIGRATE --provisioning-model=STANDARD --service-account=860215612917-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --create-disk=auto-delete=yes,boot=yes,device-name=managementnet-europe-west1-vm,image=projects/debian-cloud/global/images/debian-11-bullseye-v20231212,mode=rw,size=10,type=projects/qwiklabs-gcp-03-52837f06f240/zones/europe-west1-c/diskTypes/pd-standard --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --labels=goog-ec-src=vm_add-gcloud --reservation-affinity=any

### create privatenet VM
gcloud compute instances create privatenet-europe-west1-vm --zone=europe-west1-c --machine-type=e2-micro --subnet=privatesubnet-europe-west1
gcloud compute instances list --sort-by=ZONE

### Explore the connectivity between VM instances
ping internal IPs and External IPs

### Create a VM instance with multiple network interfaces
set up multiple network

```

## VPC Networks - Controlling Access
```
create two vm instances and install nginx. one is set http-server tag and open the http-traffic
Create the firewall rule

Create a test-vm
gcloud compute instances create test-vm --machine-type=e2-micro --subnet=default --zone=us-central1-f

1. to curl internal IPs and External IPs of the two instances
2. firewall
gcloud compute firewall-rules list
gcloud compute firewall-rules delete allow-http-web-server

3. authorize in IAM: Network Admin and Security Admin roles
4. create service account in IAM and make a key then save to json file
gcloud auth activate-service-account --key-file credentials.json
gcloud compute firewall-rules list

5. Add Role: Compute Security Admin.
gcloud compute firewall-rules delete allow-http-web-server


```

## HTTP Load Balancer with Cloud Armor
> https://www.cloudskillsboost.google/course_sessions/7047645/labs/377214
> https://stackoverflow.com/questions/64362197/nginx-instance-problems

```
1. set firewall for http-80 and allow-health-check
In the Cloud Console, navigate to Navigation menu (Navigation menu icon) > VPC network > Firewall.

2. Configure instance templates and create instance groups
In the Cloud console, go to Navigation menu (Navigation menu icon) > Compute Engine > Instance templates
In the Cloud console, go to Navigation menu (Navigation menu icon) > Compute Engine > Instance groups

3. Configure the HTTP Load Balancer
In the Cloud Console, click Navigation menu (Navigation menu icon) > click Network Services > Load balancing

4. Use a VM instance to test
In the Console, navigate to Navigation menu (Navigation menu icon) > Compute Engine > VM instances
sudo apt-get -y install siege
export LB_IP=[LB_IP_v4]
siege -c 150 -t120s http://$LB_IP
=> go to load balencing then check monitor


5. Create the security policy
set denylist for change balance
In the Cloud console, navigate to Navigation menu > Network Security > Cloud Armor Policies

curl http://$LB_IP
siege -c 150 -t120s http://$LB_IP

check log
In the console, navigate to Navigation menu > Network Security > Cloud Armor Policies.

```

## Monitoring
```
Set your region and zone

gcloud config set compute/zone "us-east4-c"
export ZONE=$(gcloud config get compute/zone)

gcloud config set compute/region "us-east4"
export REGION=$(gcloud config get compute/region)


Create a Compute Engine instance

Add Apache2 HTTP Server to your instance
sudo apt-get update
sudo apt-get install apache2 php7.0

sudo service apache2 restart

## Create a Monitoring Metrics Scope
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install
sudo systemctl status google-cloud-ops-agent"*"
sudo apt-get update

## Create an uptime check

## Create an alerting policy

## Create a dashboard and chart

## View your logs

## Check out what happens when you start and stop the VM instance.

## Check the uptime check results and triggered alerts

```

## Dataproc
Navigation menu > APIs & Services > Library: Cloud Dataproc API
```
## Create a cluster
In the Cloud Platform Console, select Navigation menu > Dataproc > Clusters, then click Create cluster

## Submit a job
Click Jobs in the left pane to switch to Dataproc's jobs view, then click Submit job.

## View the job output

## Update a cluster

```

Command Line
```
## Create a cluster
gcloud config set dataproc/region us-east1

PROJECT_ID=$(gcloud config get-value project) && \
gcloud config set project $PROJECT_ID

PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \
  --role=roles/storage.admin

gcloud dataproc clusters create example-cluster --worker-boot-disk-size 500 --worker-machine-type=e2-standard-4 --master-machine-type=e2-standard-4

##  Submit a job
gcloud dataproc jobs submit spark --cluster example-cluster \
  --class org.apache.spark.examples.SparkPi \
  --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000

## Update a cluster
gcloud dataproc clusters update example-cluster --num-workers 4
gcloud dataproc clusters update example-cluster --num-workers 2

```

## Dataflow
Navigation menu > APIs & Services > Library: Dataflow API
```
## Create a Cloud BigQuery dataset and table Using Cloud Shell
bq mk taxirides

bq mk \
--time_partitioning_field timestamp \
--schema ride_id:string,point_idx:integer,latitude:float,longitude:float,\
timestamp:timestamp,meter_reading:float,meter_increment:float,ride_status:string,\
passenger_count:integer -t taxirides.realtime

## Create a Cloud Storage bucket
export BUCKET_NAME=qwiklabs-gcp-00-cf54720c4a17
gsutil mb gs://$BUCKET_NAME/

## Run the pipeline
gcloud dataflow jobs run iotflow \
    --gcs-location gs://dataflow-templates-us-east4/latest/PubSub_to_BigQuery \
    --region us-east4 \
    --worker-machine-type e2-medium \
    --staging-location gs://qwiklabs-gcp-00-cf54720c4a17/temp \
    --parameters inputTopic=projects/pubsub-public-data/topics/taxirides-realtime,outputTableSpec=qwiklabs-gcp-00-cf54720c4a17:taxirides.realtime


## Submit a query
SELECT * FROM `qwiklabs-gcp-00-cf54720c4a17.taxirides.realtime` LIMIT 1000


*** Dataflow - Python
## Create a Cloud Storage bucket

## Install pip and the Cloud Dataflow SDK
docker run -it -e DEVSHELL_PROJECT_ID=$DEVSHELL_PROJECT_ID python:3.9 /bin/bash
pip install 'apache-beam[gcp]'==2.42.0
python -m apache_beam.examples.wordcount --output OUTPUT_FILE

## Run an example pipeline remotely
BUCKET=gs://<bucket name provided earlier>
python -m apache_beam.examples.wordcount --project $DEVSHELL_PROJECT_ID \
  --runner DataflowRunner \
  --staging_location $BUCKET/staging \
  --temp_location $BUCKET/temp \
  --output $BUCKET/results/output \
  --region us-east1

```

## Dataprep
```
create a bucket first

## Initialize Cloud Dataprep
gcloud beta services identity create --service=dataprep.googleapis.com

go to Navigation menu > Dataprep




```



# Vertex AI

```
## Enable Google Cloud services
gcloud services enable \
  compute.googleapis.com \
  iam.googleapis.com \
  iamcredentials.googleapis.com \
  monitoring.googleapis.com \
  logging.googleapis.com \
  notebooks.googleapis.com \
  aiplatform.googleapis.com \
  bigquery.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  container.googleapis.com

## Create Vertex AI custom service account for Vertex Tensorboard integration
SERVICE_ACCOUNT_ID=vertex-custom-training-sa
gcloud iam service-accounts create $SERVICE_ACCOUNT_ID  \
    --description="A custom service account for Vertex custom training with Tensorboard" \
    --display-name="Vertex AI Custom Training"

PROJECT_ID=$(gcloud config get-value core/project)
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/bigquery.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/aiplatform.user"

## Launch Vertex AI Workbench notebook
create a JupyterLab environment

## Clone the lab repository
git clone --depth=1 https://github.com/GoogleCloudPlatform/training-data-analyst

## Install lab dependencies
cd training-data-analyst/self-paced-labs/vertex-ai/vertex-ai-qwikstart
pip3 install --user -r requirements.txt

```

# Cloud Natural Language API
```
## Create an API key
export GOOGLE_CLOUD_PROJECT=$(gcloud config get-value core/project)

gcloud iam service-accounts create my-natlang-sa \
  --display-name "my natural language service account"

gcloud iam service-accounts keys create ~/key.json \
  --iam-account my-natlang-sa@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com

export GOOGLE_APPLICATION_CREDENTIALS="/home/USER/key.json"

## Make an entity analysis request
in a VM instance
gcloud ml language analyze-entities --content="Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." > result.json

```

# Google Cloud Speech API

```
## Create an API key
export API_KEY=<YOUR_API_KEY>

## Create your Speech API request
touch request.json

nano request.json
{
  "config": {
      "encoding":"FLAC",
      "languageCode": "en-US"
  },
  "audio": {
      "uri":"gs://cloud-samples-tests/speech/brooklyn.flac"
  }
}

## Call the Speech API
curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}"

curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}" > result.json

```

# Video Intelligence
```
## Enable the Video Intelligence API

## Set up authorization
gcloud iam service-accounts create quickstart

gcloud iam service-accounts keys create key.json --iam-account quickstart@<your-project-123>.iam.gserviceaccount.com

gcloud auth activate-service-account --key-file key.json

gcloud auth print-access-token

## Make an annotate video request
cat > request.json <<EOF
{
   "inputUri":"gs://spls/gsp154/video/train.mp4",
   "features": [
       "LABEL_DETECTION"
   ]
}
EOF

curl -s -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer '$(gcloud auth print-access-token)'' \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json

curl -s -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer '$(gcloud auth print-access-token)'' \
    'https://videointelligence.googleapis.com/v1/projects/PROJECTS/locations/LOCATIONS/operations/OPERATION_NAME'
```

## Remote Desktop (RDP) into the Windows Server
```
gcloud compute instances get-serial-port-output instance-1

gcloud compute reset-windows-password [instance] --zone [zone] --user [username]

```

# Set Up Network and HTTP Load Balancers
> https://www.cloudskillsboost.google/course_sessions/7111004/labs/423777
```
## Set the default region and zone for all resources
gcloud config set compute/region us-east4

gcloud config set compute/zone us-east4-c

## Create multiple web server instances
gcloud compute instances create www1 \
    --zone=us-east4-c \
    --tags=network-lb-tag \
    --machine-type=e2-small \
    --image-family=debian-11 \
    --image-project=debian-cloud \
    --metadata=startup-script='#!/bin/bash
      apt-get update
      apt-get install apache2 -y
      service apache2 restart
      echo "
<h3>Web Server: www1</h3>" | tee /var/www/html/index.html'

gcloud compute instances create www2 \
    --zone=us-east4-c \
    --tags=network-lb-tag \
    --machine-type=e2-small \
    --image-family=debian-11 \
    --image-project=debian-cloud \
    --metadata=startup-script='#!/bin/bash
      apt-get update
      apt-get install apache2 -y
      service apache2 restart
      echo "
<h3>Web Server: www2</h3>" | tee /var/www/html/index.html'

gcloud compute instances create www3 \
    --zone=us-east4-c  \
    --tags=network-lb-tag \
    --machine-type=e2-small \
    --image-family=debian-11 \
    --image-project=debian-cloud \
    --metadata=startup-script='#!/bin/bash
      apt-get update
      apt-get install apache2 -y
      service apache2 restart
      echo "
<h3>Web Server: www3</h3>" | tee /var/www/html/index.html'

gcloud compute firewall-rules create www-firewall-network-lb \
    --target-tags network-lb-tag --allow tcp:80

gcloud compute instances list
curl http://[IP_ADDRESS]

## Configure the load balancing service
gcloud compute addresses create network-lb-ip-1 \
  --region us-east4

gcloud compute http-health-checks create basic-check

gcloud compute target-pools create www-pool \
  --region us-east4 --http-health-check basic-check

gcloud compute target-pools add-instances www-pool \
    --instances www1,www2,www3

gcloud compute forwarding-rules create www-rule \
    --region  us-east4 \
    --ports 80 \
    --address network-lb-ip-1 \
    --target-pool www-pool

## Sending traffic to your instances
gcloud compute forwarding-rules describe www-rule --region us-east4

IPADDRESS=$(gcloud compute forwarding-rules describe www-rule --region us-east4 --format="json" | jq -r .IPAddress)
echo $IPADDRESS

while true; do curl -m1 $IPADDRESS; done

## Create an HTTP load balancer
gcloud compute instance-templates create lb-backend-template \
   --region=us-east4 \
   --network=default \
   --subnet=default \
   --tags=allow-health-check \
   --machine-type=e2-medium \
   --image-family=debian-11 \
   --image-project=debian-cloud \
   --metadata=startup-script='#!/bin/bash
     apt-get update
     apt-get install apache2 -y
     a2ensite default-ssl
     a2enmod ssl
     vm_hostname="$(curl -H "Metadata-Flavor:Google" \
     http://169.254.169.254/computeMetadata/v1/instance/name)"
     echo "Page served from: $vm_hostname" | \
     tee /var/www/html/index.html
     systemctl restart apache2'

gcloud compute instance-groups managed create lb-backend-group \
   --template=lb-backend-template --size=2 --zone=us-east4-c

gcloud compute firewall-rules create fw-allow-health-check \
  --network=default \
  --action=allow \
  --direction=ingress \
  --source-ranges=130.211.0.0/22,35.191.0.0/16 \
  --target-tags=allow-health-check \
  --rules=tcp:80

gcloud compute addresses create lb-ipv4-1 \
  --ip-version=IPV4 \
  --global

gcloud compute addresses describe lb-ipv4-1 \
  --format="get(address)" \
  --global

gcloud compute health-checks create http http-basic-check \
  --port 80

gcloud compute backend-services create web-backend-service \
  --protocol=HTTP \
  --port-name=http \
  --health-checks=http-basic-check \
  --global

gcloud compute backend-services add-backend web-backend-service \
  --instance-group=lb-backend-group \
  --instance-group-zone=us-east4-c \
  --global

gcloud compute url-maps create web-map-http \
    --default-service web-backend-service

gcloud compute target-http-proxies create http-lb-proxy \
    --url-map web-map-http

gcloud compute forwarding-rules create http-content-rule \
   --address=lb-ipv4-1\
   --global \
   --target-http-proxy=http-lb-proxy \
   --ports=80

```


## Create and Manage Cloud Resources: Challenge Lab
```
export INSTANCE_NAME=nucleus-jumphost-868
export REGION=us-west3
export ZONE=us-west3-a
export PORT=8083
export FIREWALL_RULE_NAME=accept-tcp-rule-897

gcloud compute instances create $INSTANCE_NAME \
  --zone=$ZONE \
  --machine-type=e2-micro

gcloud container clusters create nucleus-cluster \
  --zone=$ZONE \
  --num-nodes=1 \
  --machine-type=n1-standard-1

kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:2.0

kubectl expose deployment hello-server \
--type=LoadBalancer \
--port $PORT


cat << EOF > startup.sh
#! /bin/bash
apt-get update
apt-get install -y nginx
service nginx start
sed -i -- 's/nginx/Google Cloud Platform - '"\$HOSTNAME"'/' /var/www/html/index.nginx-debian.html
EOF



gcloud compute instance-templates create web-server-template \
          --metadata-from-file startup-script=startup.sh \
          --machine-type e2-micro \
          --region $REGION
gcloud compute instance-groups managed create web-server-group \
          --base-instance-name web-server \
          --size 2 \
          --template web-server-template \
          --region us-east1 \
          --target-pool nginx-pool

gcloud compute firewall-rules create $FIREWALL_RULE_NAME \
          --allow tcp:80
gcloud compute http-health-checks create http-basic-check
gcloud compute instance-groups managed \
          set-named-ports web-server-group \
          --named-ports http:80 \
          --region $REGION
gcloud compute backend-services create web-server-backend \
          --protocol HTTP \
          --http-health-checks http-basic-check \
          --global
gcloud compute backend-services add-backend web-server-backend \
          --instance-group web-server-group \
          --instance-group-region $REGION \
          --global
gcloud compute url-maps create web-server-map \
          --default-service web-server-backend
gcloud compute target-http-proxies create http-lb-proxy \
          --url-map web-server-map
gcloud compute forwarding-rules create http-content-rule \
        --global \
        --target-http-proxy http-lb-proxy \
        --ports 80

gcloud compute forwarding-rules list

```


## Securing Virtual Machines using BeyondCorp
```
## Demonstrate tunneling using SSH and RDP connections
gcloud compute ssh linux-iap
gcloud compute start-iap-tunnel windows-iap 3389 --local-host-port=localhost:0  --zone=us-east4-c

```


## Build and Secure Networks in Google Cloud: Challenge Lab
```
export SSH_IAP_NETWORK_TAG=accept-ssh-iap-ingress-ql-497
export SSH_INTERNAL_NETWORK_TAG=accept-ssh-internal-ingress-ql-497
export HTTP_NETWORK_TAG=accept-http-ingress-ql-497
export ZONE=us-central1-c


gcloud compute firewall-rules delete open-access

gcloud compute firewall-rules create ssh-ingress --allow=tcp:22 --source-ranges 35.235.240.0/20 --target-tags $SSH_IAP_NETWORK_TAG --network acme-vpc

gcloud compute instances add-tags bastion --tags=$SSH_IAP_NETWORK_TAG --zone=$ZONE

gcloud compute firewall-rules create http-ingress --allow=tcp:80 --source-ranges 0.0.0.0/0 --target-tags $HTTP_NETWORK_TAG --network acme-vpc

gcloud compute instances add-tags juice-shop --tags=$HTTP_NETWORK_TAG --zone=$ZONE

gcloud compute firewall-rules create internal-ssh-ingress --allow=tcp:22 --source-ranges 192.168.10.0/24 --target-tags $SSH_INTERNAL_NETWORK_TAG --network acme-vpc

gcloud compute instances add-tags juice-shop --tags=$SSH_INTERNAL_NETWORK_TAG --zone=$ZONE

gcloud compute ssh juice-shop --internal-ip

```

## Perform Foundational Data, ML, and AI Tasks in Google Cloud: Challenge Lab
```
export LAB_SCHEMA=gs://cloud-training/gsp323/lab.schema
export LAB_CSV=gs://cloud-training/gsp323/lab.csv
export LAB_JS=gs://cloud-training/gsp323/lab.js

export PROJECT_ID=qwiklabs-gcp-00-0ff0ec036075
export DATASET=lab_803
export REGION=us-east1
export TABLE=customers_673

export SCHEMA=guid:STRING,isActive:BOOLEAN,firstname:STRING,surname:STRING,company:STRING,email:STRING,phone:STRING,address:STRING,about:STRING,registered:TIMESTAMP,latitude:FLOAT,longitude:FLOAT
export CLUSTER=cluster-x
export MACHINETYPE=e2-standard-2

gcloud config set dataproc/region $REGION
bq mk $DATASET
gsutil mb gs://$PROJECT_ID-marking
gsutil cp $LAB_SCHEMA .
gsutil cp $LAB_CSV .
cat lab.schema

bq mk --table $DATASET.$TABLE $SCHEMA

gcloud dataflow jobs run lab-transform --gcs-location gs://dataflow-templates-$REGION/latest/GCS_Text_to_BigQuery --worker-machine-type $MACHINETYPE --region $REGION --staging-location gs://$PROJECT_ID-marking/temp --parameters javascriptTextTransformGcsPath=$LAB_JS,JSONPath=$LAB_SCHEMA,javascriptTextTransformFunctionName=transform,outputTable=$PROJECT_ID:$DATASET.$TABLE,inputFilePattern=$LAB_CSV,bigQueryLoadingTemporaryDirectory=gs://$PROJECT_ID-marking/bigquery_temp

gcloud dataproc clusters create $CLUSTER --worker-boot-disk-size 500 --worker-machine-type=$export --master-machine-type=$export

---ssh
gcloud compute ssh cluster-x-m
hdfs dfs -cp gs://cloud-training/gsp323/data.txt /data.txt

---back
gcloud dataproc jobs submit spark --cluster $CLUSTER \
  --class org.apache.spark.examples.SparkPageRank \
  --cluster=$CLUSTER \
  --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- /data.txt

--- task 1 done

gcloud services enable apikeys.googleapis.com
gcloud alpha services api-keys create --display-name="testname1"
KEY_NAME=$(gcloud alpha services api-keys list --format="value(name)" --filter "displayName=testname1")
API_KEY=$(gcloud alpha services api-keys get-key-string $KEY_NAME --format="value(keyString)")
echo $API_KEY

--- grant GOOGLE CLOUD SDK and auth
gcloud iam service-accounts create techvine \
  --display-name "my natural language service account"
gcloud iam service-accounts keys create ~/key.json \
  --iam-account techvine@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS="/home/$USER/key.json"
gcloud auth activate-service-account techvine@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com --key-file=$GOOGLE_APPLICATION_CREDENTIALS
gcloud ml language analyze-entities --content="Old Norse texts portray Odin as one-eyed and long-bearded, frequently wielding a spear named Gungnir and wearing a cloak and a broad hat." > result.json
gcloud auth login --no-launch-browser

--- task 2 done

gsutil cp result.json gs://qwiklabs-gcp-00-0ff0ec036075-marking/task4-cnl-160.result
--- task 4 done





--- task 3 start
cat > request.json <<EOF
{
  "config": {
      "encoding":"FLAC",
      "languageCode": "en-US"
  },
  "audio": {
      "uri":"gs://cloud-training/gsp323/task3.flac"
  }
}
EOF
curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}" > result.json
gsutil cp result.json gs://qwiklabs-gcp-00-0ff0ec036075-marking/task3-gcs-624.result
--- task 3 done


gcloud iam service-accounts create quickstart
gcloud iam service-accounts keys create key.json --iam-account quickstart@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
gcloud auth activate-service-account --key-file key.json
export ACCESS_TOKEN=$(gcloud auth print-access-token)
cat > request.json <<EOF
{
   "inputUri":"gs://spls/gsp154/video/train.mp4",
   "features": [
       "TEXT_DETECTION"
   ]
}
EOF

--------------------------------------------------------------------------------------------------------------------------

curl -s -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json
curl -s -H 'Content-Type: application/json' -H "Authorization: Bearer $ACCESS_TOKEN" 'https://videointelligence.googleapis.com/v1/operations/OPERATION_FROM_PREVIOUS_REQUEST' > result1.json
```