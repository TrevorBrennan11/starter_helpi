
import OpenAI from "openai";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

export let response = "";
const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") as string), dangerouslyAllowBrowser: true});

export function DetailedQuestionsPage(): JSX.Element {

  const [answers, setAnswers] = useState<string[]>(["", "", "", "", "", "", ""]);

  const [numAnswered, setNumAnswered] = useState<number>(0);

  function updateAnswer(index: number, input: string) {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = input;
      updateNumAnswered(updatedAnswers);
      return updatedAnswers;
    });
  }

  function updateNumAnswered(updatedAnswers: string[]) {
    let totalAnswered = updatedAnswers.filter(answer => !!answer).length;
    setNumAnswered(totalAnswered);
  }
  async function showMyResults() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a career counselor who is giving me a list of careers that will suit me."},
        {"role": "user", "content": "When asked 'How inclined are you to take leadership roles when working in groups?' they responded" + answers[0]},
        {"role": "user", "content": "When asked 'What physical environment do you prefer to be in, beyond just working?' they responded" + answers[1]},
        {"role": "user", "content": "When asked 'If you could do anything, without needing to worry about money, what would be and why?' they responded" + answers[2]},
        {"role": "user", "content": "When asked 'What part of classes do you excel the most in (group work, exams, projects, etc)' they responded" + answers[3]},
        {"role": "user", "content": "When asked 'What was your favorite class you've taken, and why? Be specific about the class!' they responded" + answers[4]},
        {"role": "user", "content": "When asked 'What is a work environment you did not work well in at all, and would not like to return to?' they responded" + answers[5]},
        {"role": "user", "content": "When asked 'What aspect of working are you most looking forward to in the future?' they responded" + answers[6]},],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
  response = JSON.stringify(completion.choices[0].message.content);

}
  return ( 
    <div className="DetailedPage">
      <h1>Career Quiz Detailed Questions</h1>
      <progress className="Progress-Bar" value={numAnswered} max={7}></progress>
      <p>Question 1: How inclined are you to take leadership roles when working in groups?</p> 
      <Form.Group controlId="Answer 1">
        <Form.Control
          placeholder="Answer here"
          value={answers[0]}
          onChange={(e) => updateAnswer(0, e.target.value)}/>
      </Form.Group>
      <p>Question 2: What physical environment do you prefer to be in, beyond just working?</p>
      <Form.Group controlId="Answer 2">
        <Form.Control
          placeholder="Answer here"
          value={answers[1]}
          onChange={(e) => updateAnswer(1, e.target.value)} />
      </Form.Group>
      <p>Question 3: If you could do anything, without needing to worry about money, what would be and why?</p>
      <Form.Group controlId="Answer 3">
        <Form.Control
          placeholder="Answer here"
          value={answers[2]}
          onChange={(e) => updateAnswer(2, e.target.value)}/>
      </Form.Group>
      <p>Question 4: What part of classes do you excel the most in (group work, exams, projects, etc)</p>
      {answers[0] && answers[1] && answers[2] && answers[3] && answers[4] && answers[5] && answers[6] && <div>
        <Col as={Button} onClick={showMyResults}>Home</Col>
    <span></span><h2>Congrats you completed the quiz!</h2></div>}
      <Form.Group controlId="Answer 4">
        <Form.Control
          placeholder="Answer here"
          value={answers[3]}
          onChange={(e) => updateAnswer(3, e.target.value)}/>
      </Form.Group>
      <p>Question 5: What was your favorite class you've taken, and why? Be specific about the class!</p>
      <Form.Group controlId="Answer 5">
        <Form.Control
          placeholder="Answer here"
          value={answers[4]}
          onChange={(e) => updateAnswer(4, e.target.value)}/>
      </Form.Group>
      <p>Question 6: What is a work environment you did not work well in at all, and would not like to return to?</p>
      <Form.Group controlId="Answer 6">
        <Form.Control
          placeholder="Answer here"
          value={answers[5]}
          onChange={(e) => updateAnswer(5, e.target.value)}/>
      </Form.Group>
      <p>Question 7: What aspect of working are you most looking forward to in the future?</p>
      <Form.Group controlId="Answer 7">
        <Form.Control
          placeholder="Answer here"
          value={answers[6]}
          onChange={(e) => updateAnswer(6, e.target.value)}/>
      </Form.Group>
    </div>
  );
}