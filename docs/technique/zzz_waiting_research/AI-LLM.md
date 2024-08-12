# AI

## tokenization
```
from transformers import AutoTokenizer, AutoModel

# Initializing the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
model = AutoModel.from_pretrained("distilbert-base-uncased")

# Step 1: Tokenize raw text using the chosen method (word or subword tokenization)
sentence = "Transformers are quite amazing"
tokens = tokenizer.tokenize(sentence)
print("Tokens:", tokens)
# Tokens:['transformers', 'are', 'quite', 'amazing']

# Step2: Convert tokens into numerical indices corresponding to model vocabulary
input_ids = tokenizer.encode(sentence)
print("Input Ids:", input_ids)
# Input Ids [[101, 19067, 2024, 3243, 6429, 102]]

# Step3: Fetch context-specific embeddings from the model and process through multiple layers
output = model(input_ids)
embeddings = output.last_hidden_state
print("Embeddings:", embeddings);
# Embeddings: tensor([[[-0.0555, 0.1111, ..., -0.3933, 0.2311]], ...])

# Step4: Process/decode output back into text (Here, we use theembeddings directly to illustrate)
decoded_output = tokenizer.decode(input_ids[0])

print("Decoded output:", decoded_output)
# Decoded output: [CLS] transformers are quite amazing [SEP]

```

## EMBEDDINGS WORKFLOW
```
import torch
from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
model = AutoModel.from_pretrained("bert-base-uncased")

# Two sentences with different contexts for the word "rose"
sentence1 = "She took a rose from the garden."
sentence2 = "The sun rose in the morning."

# Tokenize sentences to obtain input_ids
input_ids1 = tokenizer(sentence1, return_tensors="pt")["input_ids"]
input_ids2 = tokenizer(sentence2, return_tensors="pt")["input_ids"]

# Obtain embeddings from the model
with torch.no_grad():
    embeddings1 = model(input_ids1).last_hidden_state
    embeddings2 = model(input_ids2).last_hidden_state

# Extract the embeddings for the word "rose".
embedding1 = embeddings1[0][tokenizer.convert_tokens_to_ids("rose")]
embedding2 = embeddings2[0][tokenizer.convert_tokens_to_ids("rose")]

# Compare the similarity between the two "rose" embeddings through cosine similarity.
cosine_similarity = torch.nn.CosineSimilarity(dim=0)
similarity = cosine_similarity(embedding1, embedding2)

print(f"Cosine similarity between the two embeddings:{similarity}")
# Cosine similarity between the two embeddings: 0.4351

# sentence1 -> "rose" -> 3123 => tensor([-0.1230, 0.6666, ..])
# sentence2 -> "rose" -> 3123 => tensor([-0.0999, 0.7777, ..])

```

## tokenizer.py
```
# Import required libraries
from transformers import BertModel, AutoTokenizer
import pandas as pd

# Specify the pre-trained model to use: BERT-base-cased
model_name = "bert-base-cased"

# Instantiate the model and tokenizer for the specified pre-trained model
model = BertModel.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Set a sentence for analysis
sentence = "When life gives you lemons, don't make lemonade."

# Tokenize the sentence
tokens = tokenizer.tokenize(sentence)

# Create a DataFrame with the tokenizer's vocabulary
vocab = tokenizer.vocab
vocab_df = pd.DataFrame({"token": vocab.keys(), "token_id": vocab.values()})
vocab_df = vocab_df.sort_values(by="token_id").set_index("token_id")

# Encode the sentence into token_ids using the tokenizer
token_ids = tokenizer.encode(sentence)

# Print the length of tokens and token_ids
len(tokens)
len(token_ids)

# Access the tokens in the vocabulary DataFrame by index
vocab_df.iloc[101]
vocab_df.iloc[102]

# Zip tokens and token_ids (excluding the first and last token_ids for [CLS] and [SEP])
list(zip(tokens, token_ids[1:-1]))

# Decode the token_ids (excluding the first and last token_ids for [CLS] and [SEP]) back into the original sentence
tokenizer.decode(token_ids[1:-1])

# Tokenize the sentence using the tokenizer's `__call__` method
tokenizer_out = tokenizer(sentence)

# Create a new sentence by removing "don't " from the original sentence
sentence2 = sentence.replace("don't ", "")

# Tokenize both sentences with padding
tokenizer_out2 = tokenizer([sentence, sentence2], padding=True)

# Decode the tokenized input_ids for both sentences
tokenizer.decode(tokenizer_out2["input_ids"][0])
tokenizer.decode(tokenizer_out2["input_ids"][1])
```

## model_embeddings.py
```
from transformers import BertModel, AutoTokenizer
from scipy.spatial.distance import cosine

model_name = "bert-base-cased"

model = BertModel.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)


def predict(text):
    encoded_inputs = tokenizer(text, return_tensors="pt")

    return model(**encoded_inputs)[0]


sentence1 = "There was a fly drinking from my soup"
sentence2 = "There is a fly swimming in my juice"
# sentence2 = "To become a commercial pilot, he had to fly for 1500 hours."

tokens1 = tokenizer.tokenize(sentence1)
tokens2 = tokenizer.tokenize(sentence2)

out1 = predict(sentence1)
out2 = predict(sentence2)

emb1 = out1[0:, tokens1.index("fly"), :].detach()
emb2 = out2[0:, tokens2.index("fly"), :].detach()

# emb1 = out1[0:, 3, :].detach()
# emb2 = out2[0:, 3, :].detach()


emb1.shape
emb2.shape

cosine(emb1, emb2)
```

## 3 masked_language.py
```
# Import required libraries
from transformers import AutoTokenizer, AutoModelForMaskedLM
from scipy.special import softmax
import numpy as np

# Specify the pre-trained model to use: BERT-base-cased
model_name = "bert-base-cased"

# Instantiate the tokenizer and model for the specified pre-trained model
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForMaskedLM.from_pretrained(model_name)

# Get the mask token from the tokenizer
mask = tokenizer.mask_token

# Create a sentence with a mask token to be filled in by the model
sentence = f"I want to {mask} pizza for tonight."

# Tokenize the sentence
tokens = tokenizer.tokenize(sentence)

# Encode the sentence using the tokenizer and return the input tensors
encoded_inputs = tokenizer(sentence, return_tensors='pt')

# Get the model's output for the input tensors
outputs = model(**encoded_inputs)
# Detach the logits from the model's output and convert them to numpy arrays
logits = outputs.logits.detach().numpy()[0]

# Extract the logits for the mask token
mask_logits = logits[tokens.index(mask) + 1]
# Calculate the confidence scores for each possible token using softmax
confidence_scores = softmax(mask_logits)

# Print the top 5 predicted tokens and their confidence scores
for i in np.argsort(confidence_scores)[::-1][:5]:
    pred_token = tokenizer.decode(i)
    score = confidence_scores[i]

    # Print the predicted sentence with the mask token replaced by the predicted token, and the confidence score
    print(sentence.replace(mask, pred_token), score)
```

## semantic_index.py
```
# Import required libraries
from datasets import load_dataset
from sentence_transformers import SentenceTransformer, util
import torch

# Load the multi_news dataset from Hugging Face and take only the 'test' split for efficiency
dataset = load_dataset("multi_news", split="test")

# Convert the test dataset to a pandas DataFrame and take only 2000 random samples
df = dataset.to_pandas().sample(2000, random_state=42)

# Load a pre-trained sentence transformer model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Encode each summary in the DataFrame using the sentence transformer model and store the embeddings in a list
passage_embeddings = list(model.encode(df['summary'].to_list(), show_progress_bar=True))

# Print the shape of the first passage embedding
passage_embeddings[0].shape

# Declare a query string
query = "Find me some articles about technology and artificial intelligence"

# Define a function to find relevant news articles based on a given query
def find_relevant_news(query):
    # Encode the query using the sentence transformer model
    query_embedding = model.encode(query)
    # Print the shape of the query embedding
    query_embedding.shape

    # Calculate the cosine similarity between the query embedding and the passage embeddings
    similarities = util.cos_sim(query_embedding, passage_embeddings)

    # Find the indices of the top 3 most similar passages
    top_indicies = torch.topk(similarities.flatten(), 3).indices

    # Get the top 3 relevant passages by slicing the summaries at 200 characters and adding an ellipsis
    top_relevant_passages = [df.iloc[x.item()]['summary'][:200] + "..." for x in top_indicies]

    # Return the top 3 relevant passages
    return top_relevant_passages

# Find relevant news articles for different queries
find_relevant_news("Natural disasters")
find_relevant_news("Law enforcement and police")
find_relevant_news("Politics, diplomacy and nationalism")
```

## BERT for Question Answering.ipynb
```
# Importing necessary libraries
import torch
from transformers import (
    BertForQuestionAnswering,
    BertTokenizerFast,
)
from scipy.special import softmax
import plotly.express as px
import pandas as pd
import numpy as np

# Defining the context and the question
context = "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into up to eight extant species due to new research into their mitochondrial and nuclear DNA, as well as morphological measurements. Seven other extinct species of Giraffa are known from the fossil record."
question = "How many giraffe species are there?"

# Defining the model name and loading the tokenizer and the model
model_name = "deepset/bert-base-cased-squad2"
tokenizer = BertTokenizerFast.from_pretrained(model_name)
model = BertForQuestionAnswering.from_pretrained(model_name)

# Tokenizing the context and the question
inputs = tokenizer(question, context, return_tensors="pt")
tokenizer.tokenize(context)

# Running the model and getting the start and end scores
with torch.no_grad():
    outputs = model(**inputs)
start_scores, end_scores = softmax(outputs.start_logits)[0], softmax(outputs.end_logits)[0]

# Creating a dataframe with the scores and plotting them
scores_df = pd.DataFrame({
    "Token Position": list(range(len(start_scores))) * 2,
    "Score": list(start_scores) + list(end_scores),
    "Score Type": ["Start"] * len(start_scores) + ["End"] * len(end_scores),
})
px.bar(scores_df, x="Token Position", y="Score", color="Score Type", barmode="group", title="Start and End Scores for Tokens")

# Getting the answer from the model
start_idx = np.argmax(start_scores)
end_idx = np.argmax(end_scores)
answer_ids = inputs.input_ids[0][start_idx: end_idx + 1]
answer_tokens = tokenizer.convert_ids_to_tokens(answer_ids)
answer = tokenizer.convert_tokens_to_string(answer_tokens)

# Part 2
# Defining a function to predict the answer to a question given a context
def predict_answer(context, question):
    inputs = tokenizer(question, context, return_tensors="pt", truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    start_scores, end_scores = softmax(outputs.start_logits)[0], softmax(outputs.end_logits)[0]
    start_idx = np.argmax(start_scores)
    end_idx = np.argmax(end_scores)
    confidence_score = (start_scores[start_idx] + end_scores[end_idx]) /2
    answer_ids = inputs.input_ids[0][start_idx: end_idx + 1]
    answer_tokens = tokenizer.convert_ids_to_tokens(answer_ids)
    answer = tokenizer.convert_tokens_to_string(answer_tokens)
    if answer != tokenizer.cls_token:
        return answer, confidence_score
    return None, confidence_score

# Defining a new context and predicting answers to some questions
context = """Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.[2][unreliable source?]
...
"""
len(tokenizer.tokenize(context))
predict_answer(context, "What is coffee?")
predict_answer(context, "What are the most common coffee beans?")
predict_answer(context, "How can I make ice coffee?")
predict_answer(context[4000:], "How many people are dependent on coffee for their income?")

# Defining a function to chunk sentences
def chunk_sentences(sentences, chunk_size, stride):
    chunks = []
    num_sentences = len(sentences)
    for i in range(0, num_sentences, chunk_size - stride):
        chunk = sentences[i: i + chunk_size]
        chunks.append(chunk)
    return chunks

sentences = [
    "Sentence 1.",
    "Sentence 2.",
    "Sentence 3.",
    "Sentence 4.",
    "Sentence 5.",
    "Sentence 6.",
    "Sentence 7.",
    "Sentence 8.",
    "Sentence 9.",
    "Sentence 10."
]

chunked_sentences = chunk_sentences(sentences, chunk_size=3, stride=1)


questions = ["What is coffee?", "What are the most common coffee beans?", "How can I make ice coffee?", "How many people are dependent on coffee for their income?"]

answers = {}

for chunk in chunked_sentences:
    context = "\n".join(chunk)
    for question in questions:
        answer, score = predict_answer(context, question)

        if answer:
            if question not in answers:
                answers[question] = (answer, score)
            else:
                if score > answers[question][1]:
                    answers[question] = (answer, score)

answers
```

## GPT for Instruction Following
> https://huggingface.co/TheFuzzyScientist/diabloGPT_open-instruct
```
from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    DataCollatorForLanguageModeling,
    Trainer,
    TrainingArguments,
)
from datasets import load_dataset


dataset = load_dataset("hakurei/open-instruct-v1", split='train')
dataset.to_pandas().sample(20)


def preprocess(example):
    example['prompt'] = f"{example['instruction']} {example['input']} {example['output']}"

    return example

def tokenize_datasets(dataset):
    tokenized_dataset = dataset.map(lambda example: tokenizer(example['prompt'], truncation=True, max_length=128), batched=True, remove_columns=['prompt'])

    return tokenized_dataset

dataset = dataset.map(preprocess, remove_columns=['instruction', 'input', 'output'])
dataset =  dataset.shuffle(42).select(range(100000)).train_test_split(test_size=0.1, seed=42)


train_dataset = dataset['train']
test_dataset = dataset['test']


MODEL_NAME = "microsoft/DialoGPT-medium"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
tokenizer.pad_token = tokenizer.eos_token

train_dataset = tokenize_datasets(train_dataset)
test_dataset = tokenize_datasets(test_dataset)

model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)

traing_args = TrainingArguments(output_dir="models/diablo_gpt",
                                num_train_epochs=1,
                                per_device_train_batch_size=32,
                                per_device_eval_batch_size=32)\

trainer = Trainer(model=model,
                    args=traing_args,
                    train_dataset=train_dataset,
                    eval_dataset=test_dataset,
                    data_collator=data_collator)

trainer.train()

# Get the trained checkpoint directly
model = AutoModelForCausalLM.from_pretrained("TheFuzzyScientist/diabloGPT_open-instruct")


def generate_text(prompt):
    inputs = tokenizer.encode(prompt, return_tensors='pt').to("cuda")
    outputs = model.generate(inputs, max_length=64, pad_token_id=tokenizer.eos_token_id)
    generated = tokenizer.decode(outputs[0], skip_special_tokens=True)

    return generated[:generated.rfind('.')+1]


generate_text("What's the best way to cook chiken breast?")

generate_text("Should I invest stocks?")

generate_text("I need a place to go for this summer vacation, what locations would you recommend")

generate_text("What's the fastest route from NY City to Boston?")



```

## T5 for Product Reviews
> https://huggingface.co/TheFuzzyScientist/T5-base_Amazon-product-reviews
```
!pip install numpy==1.25.1
!pip install transformers
!pip install datasets===2.13.1

# Importing necessary modules
import numpy as np
from datasets import load_dataset
from transformers import T5Tokenizer, T5ForConditionalGeneration, Trainer, TrainingArguments
from transformers import DataCollatorWithPadding

# Loading the dataset and removing unnecessary columns
dataset = load_dataset('amazon_us_reviews', 'Electronics_v1_00', split='train')
dataset = dataset.remove_columns([x for x in dataset.features if x not in ['review_body', 'verified_purchase', 'review_headline', 'product_title', 'star_rating']])

# Filtering the dataset and encoding the 'star_rating' column
dataset = dataset.filter(lambda x: x['verified_purchase'] and len(x['review_body']) > 100).shuffle(42).select(range(100000))
dataset = dataset.class_encode_column("star_rating")

# Splitting the dataset into training and testing sets
dataset = dataset.train_test_split(test_size=0.1, seed=42, stratify_by_column="star_rating")

train_dataset = dataset['train']
test_dataset = dataset['test']

# Initializing the tokenizer
MODEL_NAME = 't5-base'
tokenizer = T5Tokenizer.from_pretrained('t5-base')|

# Defining the function to preprocess the data
def preprocess_data(examples):
    examples['prompt'] = [f"review: {example['product_title']}, {example['star_rating']} Stars!" for example in examples]
    examples['response'] = [f"{example['review_headline']} {example['review_body']}" for example in examples]

    inputs = tokenizer(examples['prompt'], padding='max_length', truncation=True, max_length=128)
    targets = tokenizer(examples['response'], padding='max_length', truncation=True, max_length=128)

    # Set -100 at the padding positions of target tokens
    target_input_ids = []
    for ids in targets['input_ids']:
        target_input_ids.append([id if id != tokenizer.pad_token_id else -100 for id in ids])

    inputs.update({'labels': target_input_ids})
    return inputs

# Preprocessing the training and testing datasets
train_dataset = train_dataset.map(preprocess_data, batched=True)
test_dataset = test_dataset.map(preprocess_data, batched=True)

data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

# Fine-tuning the T5 model
model = T5ForConditionalGeneration.from_pretrained(MODEL_NAME)

TRAINING_OUTPUT = "./models/t5_fine_tuned_reviews"
training_args = TrainingArguments(
    output_dir=TRAINING_OUTPUT,
    num_train_epochs=3,
    per_device_train_batch_size=12,
    per_device_eval_batch_size=12,
    save_strategy='epoch',
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    data_collator=data_collator,
)

trainer.train()

# Saving the model
trainer.save_model(TRAINING_OUTPUT)

# Loading the fine-tuned model
model = T5ForConditionalGeneration.from_pretrained(TRAINING_OUTPUT)

# or get it directly trained from here:
# model = T5ForConditionalGeneration.from_pretrained("TheFuzzyScientist/T5-base_Amazon-product-reviews")

# Defining the function to generate reviews
def generate_review(text):
    inputs = tokenizer("review: " + text, return_tensors='pt', max_length=512, padding='max_length', truncation=True)
    outputs = model.generate(inputs['input_ids'], max_length=128, no_repeat_ngram_size=3, num_beams=6, early_stopping=True)
    summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return summary

# Generating reviews for random products
random_products = test_dataset.shuffle(42).select(range(10))['product_title']

print(generate_review(random_products[0] + ", 3 Stars!"))
print(generate_review(random_products[1] + ", 5 Stars!"))
print(generate_review(random_products[2] +
```