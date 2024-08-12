"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[4504],{4374:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=i(4848),r=i(8453);const o={},a="FirstCustomModelTraining",s={id:"technique/imageai/firstcustommodeltraining",title:"FirstCustomModelTraining",description:"ref//github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Classification/CUSTOMTRAINING.md",source:"@site/docs/technique/imageai/firstcustommodeltraining.md",sourceDirName:"technique/imageai",slug:"/technique/imageai/firstcustommodeltraining",permalink:"/docs/technique/imageai/firstcustommodeltraining",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"FirstCustomDetection",permalink:"/docs/technique/imageai/firstcustomdetection"},next:{title:"FirstCustomPrediction",permalink:"/docs/technique/imageai/firstcustomprediction"}},m={},l=[{value:"I&#39;m tried, but there is some wrong",id:"im-tried-but-there-is-some-wrong",level:4},{value:"example: idenprof",id:"example-idenprof",level:4},{value:"continue train model",id:"continue-train-model",level:4},{value:"Transfer Learning (Training from a pre-trained model)",id:"transfer-learning-training-from-a-pre-trained-model",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"firstcustommodeltraining",children:"FirstCustomModelTraining"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["ref: ",(0,t.jsx)(n.a,{href:"https://github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Classification/CUSTOMTRAINING.md",children:"https://github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Classification/CUSTOMTRAINING.md"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"im-tried-but-there-is-some-wrong",children:"I'm tried, but there is some wrong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"LOGO_DATA_SET_DIR = '/Users/xing312101/study/xImageAi/logos'\nmodel_trainer = ClassificationModelTrainer()\nmodel_trainer.setModelTypeAsResNet50()\nmodel_trainer.setDataDirectory(LOGO_DATA_SET_DIR)\nmodel_trainer.trainModel(num_objects=10, num_experiments=100,\n                         enhance_data=True, batch_size=32, show_network_summary=True)\n\n## continue train model\ntrainer = ClassificationModelTrainer()\ntrainer.setModelTypeAsResNet50()\ntrainer.setDataDirectory(LOGO_DATA_SET_DIR)\ntrainer.trainModel(\n    num_objects=10,\n    num_experiments=50,\n    enhance_data=True,\n    batch_size=8,\n    show_network_summary=True,\n    continue_from_model=\"/Users/xing312101/study/xImageAi/logos/models/model_ex-004_acc-0.702703.h5\",\n    initial_num_objects=1000\n)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-idenprof",children:"example: idenprof"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'from io import open\nimport requests\nimport shutil\nfrom zipfile import ZipFile\nimport os\nfrom imageai.Classification.Custom import ClassificationModelTrainer\n\n# execution_path = os.getcwd()\nexecution_path = \'/Users/xing312101/study/xImageAi/modelTrain\'\n\nZIP_URL = "https://github.com/OlafenwaMoses/IdenProf/releases/download/v1.0/idenprof-jpg.zip"\nTRAIN_ZIP_PATH = os.path.join(execution_path, "idenprof-jpg.zip")\n\nDATASET_DIR = os.path.join(execution_path, "idenprof")\n\nif(os.path.exists(DATASET_DIR) == False):\n    os.mkdir(DATASET_DIR)\n\nif(os.path.exists(TRAIN_ZIP_PATH) == False):\n    print("Downloading idenprof-jpg.zip")\n    data = requests.get(ZIP_URL, stream=True)\n    with open(TRAIN_ZIP_PATH, "wb") as file:\n        shutil.copyfileobj(data.raw, file)\n    del data\n\nextract1 = ZipFile(TRAIN_ZIP_PATH)\nextract1.extractall(execution_path)\nextract1.close()\n\nmodel_trainer = ClassificationModelTrainer()\nmodel_trainer.setModelTypeAsResNet50()\nmodel_trainer.setDataDirectory(DATASET_DIR)\nmodel_trainer.trainModel(num_objects=10, num_experiments=100,\n                         enhance_data=True, batch_size=32, show_network_summary=True)\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"continue-train-model",children:"continue train model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'from imageai.Classification.Custom import ClassificationModelTrainer\nimport os\n\ntrainer = ClassificationModelTrainer()\ntrainer.setModelTypeAsDenseNet121()\ntrainer.setDataDirectory("idenprof")\ntrainer.trainModel(num_objects=10, num_experiments=50, enhance_data=True, batch_size=8, show_network_summary=True, continue_from_model="idenprof_densenet-0.763500.h5")\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"transfer-learning-training-from-a-pre-trained-model",children:"Transfer Learning (Training from a pre-trained model)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'from imageai.Classification.Custom import ClassificationModelTrainer\nimport os\n\ntrainer = ClassificationModelTrainer()\ntrainer.setModelTypeAsResNet50()\ntrainer.setDataDirectory("idenprof")\ntrainer.trainModel(num_objects=10, num_experiments=50, enhance_data=True, batch_size=32, show_network_summary=True,transfer_from_model="resnet50_imagenet_tf.2.0.h5", initial_num_objects=1000)\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);