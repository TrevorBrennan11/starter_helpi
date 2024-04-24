from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

app = Flask(__name__)
CORS(app, resources={r"/run-python-script": {"origins": "*"}})

@app.route('/run-python-script', methods=['POST'])
def run_python_script():
    # Get the answers data from the request
    answers = request.json['answers']

    # Call OpenAI API
    completion = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": "You are a career-starter assistant, skilled in recommending three jobs starting with the most compatible."},
            {"role": "user", "content": f"Give me a list of jobs if I like {}."}
        ]
    )

    response = completion.choices[0].message

    # Extract response text and choices
    response_text = response.get("content", "")
    choices = [{"role": choice.get("role", ""), "content": choice.get("content", "")} for choice in response.get("choices", [])]

    return jsonify({"response": {"text": response_text, "choices": choices}})

if __name__ == '__main__':
    app.run(debug=True)
