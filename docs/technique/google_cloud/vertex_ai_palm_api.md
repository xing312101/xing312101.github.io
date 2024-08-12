# Vertex AI PaLM API
>> https://www.cloudskillsboost.google/games/4713/labs/30674


## Ideation prompt
```
MODEL_ID="text-bison"
PROJECT_ID=$DEVSHELL_PROJECT_ID

curl \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/${MODEL_ID}:predict -d \
$'{
  "instances": [
    { "prompt": "Give me ten interview questions for the role of program manager."}
  ],
  "parameters": {
    "temperature": 0.2,
    "maxOutputTokens": 1024,
    "topK": 40,
    "topP": 0.8
  }
}'
```

## chat prompts
```
MODEL_ID="chat-bison"
PROJECT_ID=$DEVSHELL_PROJECT_ID

curl \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/${MODEL_ID}:predict -d \
'{
  "instances": [{
      "context":  "My name is Ned. You are my personal assistant. My favorite movies are Lord of the Rings and Hobbit.",
      "examples": [ {
          "input": {"content": "Who do you work for?"},
          "output": {"content": "I work for Ned."}
      },
      {
          "input": {"content": "What do I like?"},
          "output": {"content": "Ned likes watching movies."}
      }],
      "messages": [
      {
          "author": "user",
          "content": "Are my favorite movies based on a book series?",
      }],
  }],
  "parameters": {
    "temperature": 0.3,
    "maxDecodeSteps": 200,
    "topP": 0.8,
    "topK": 40
  }
}'
```

