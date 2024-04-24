from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

completion = client.chat.completions.create(
  model="gpt-4-turbo",
  messages=[
    {"role": "system", "content": "You are a career-starter assistant, skilled in recommending three jobs starting with the most compatabile."},
    {"role": "user", "content": "Give me a list of jobs if I like to work outside and work with machines"}
  ]
)


print(completion.choices[0].message)