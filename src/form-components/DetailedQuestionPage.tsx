import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DetailedQuestionsPage(): JSX.Element {
  const [answer1, setAnswer1] = useState<string> ("");
  const [answer2, setAnswer2] = useState<string> ("");
  const [answer3, setAnswer3] = useState<string> ("");
  const [answer4, setAnswer4] = useState<string> ("");
  const [answer5, setAnswer5] = useState<string> ("");
  const [answer6, setAnswer6] = useState<string> ("");
  const [answer7, setAnswer7] = useState<string> ("");

  const [isAnswered1, setIsAnswered1] = useState<boolean>(false);
  const [isAnswered2, setIsAnswered2] = useState<boolean>(false);
  const [isAnswered3, setIsAnswered3] = useState<boolean>(false);
  const [isAnswered4, setIsAnswered4] = useState<boolean>(false);
  const [isAnswered5, setIsAnswered5] = useState<boolean>(false);
  const [isAnswered6, setIsAnswered6] = useState<boolean>(false);
  const [isAnswered7, setIsAnswered7] = useState<boolean>(false);

  const [numAnswered, setNumAnswered] = useState<number>(0);

  function updateAnswer1 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer1(event.target.value)
    if (answer1) {
      setIsAnswered1(true);
    }
    updateNumAnswered();
  }
  function updateAnswer2 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer2(event.target.value)
    if (answer2) {
      setIsAnswered2(true);
    }
    updateNumAnswered();
  }
  function updateAnswer3 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer3(event.target.value)
    if (answer3) {
      setIsAnswered3(true);
    }
    updateNumAnswered();
  }
  function updateAnswer4 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer4(event.target.value)
    if (answer4) {
      setIsAnswered4(true);
    }
    updateNumAnswered();
  }
  function updateAnswer5 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer5(event.target.value)
    if (answer5) {
      setIsAnswered5(true);
    }
    updateNumAnswered();
  }
  function updateAnswer6 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer6(event.target.value)
    if (answer6) {
      setIsAnswered6(true);
    }
    updateNumAnswered();
  }
  function updateAnswer7 (event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer7(event.target.value)
    if (answer7) {
      setIsAnswered7(true);
    }
    updateNumAnswered();
  }

  function updateNumAnswered() {
    let totalAnswered = 0;
    if (isAnswered1) { totalAnswered += 1 }
    if (isAnswered2) { totalAnswered += 1 }
    if (isAnswered3) { totalAnswered += 1 }
    if (isAnswered4) { totalAnswered += 1 }
    if (isAnswered5) { totalAnswered += 1 }
    if (isAnswered6) { totalAnswered += 1 }
    if (isAnswered7) { totalAnswered += 1 }
    setNumAnswered(totalAnswered);
  }

  return ( 
    <div className="App-detailed">
      <h1>Career Quiz Detailed Questions</h1>
      <progress className="Progress-Bar" value={numAnswered} max={7}></progress>
      <p>Question 1: How inclined are you to take leadership roles when working in groups?</p> 
      <Form.Group controlId="Answer 1">
        <Form.Control
          placeholder="Answer here"
          value={answer1}
          onChange={updateAnswer1}/>
      </Form.Group>
      <p>Question 2: What physical environment do you prefer to be in, beyond just working?</p>
      <Form.Group controlId="Answer 2">
        <Form.Control
          placeholder="Answer here"
          value={answer2}
          onChange={updateAnswer2}/>
      </Form.Group>
      <p>Question 3: If you could do anything, without needing to worry about money, what would be and why?</p>
      <Form.Group controlId="Answer 3">
        <Form.Control
          placeholder="Answer here"
          value={answer3}
          onChange={updateAnswer3}/>
      </Form.Group>
      <p>Question 4: What part of classes do you excel the most in (group work, exams, projects, etc)</p>
      <Form.Group controlId="Answer 4">
        <Form.Control
          placeholder="Answer here"
          value={answer4}
          onChange={updateAnswer4}/>
      </Form.Group>
      <p>Question 5: What was your favorite class you've taken, and why? Be specific about the class!</p>
      <Form.Group controlId="Answer 5">
        <Form.Control
          placeholder="Answer here"
          value={answer5}
          onChange={updateAnswer5}/>
      </Form.Group>
      <p>Question 6: What is a work environment you did not work well in at all, and would not like to return to?</p>
      <Form.Group controlId="Answer 6">
        <Form.Control
          placeholder="Answer here"
          value={answer6}
          onChange={updateAnswer6}/>
      </Form.Group>
      <p>Question 7: What aspect of working are you most looking forward to in the future?</p>
      <Form.Group controlId="Answer 7">
        <Form.Control
          placeholder="Answer here"
          value={answer7}
          onChange={updateAnswer7}/>
      </Form.Group>
    </div>
  );
}