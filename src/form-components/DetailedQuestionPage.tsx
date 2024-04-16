import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../App.css';


export function DetailedQuestionsPage(): JSX.Element {
    const [answer, setAnswer] = useState<string> ("");
    const answers: string[] = [];

    function updateAnswers (event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value)
        answers.push(answer);
      }

    return (
      <div className="DetailedPage">
      <h1>Career Quiz Detailed Questions</h1>
      <p>Question 1: How inclined are you to take leadership roles when working in groups?</p> 
      <Form.Group controlId="Answer 1">
        <Form.Control
          placeholder="Answer here"
          value={answers[0]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 2: What physical environment do you prefer to be in, beyond just working?</p>
      <Form.Group controlId="Answer 2">
        <Form.Control
          placeholder="Answer here"
          value={answers[1]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 3: If you could do anything, without needing to worry about money, what would be and why?</p>
      <Form.Group controlId="Answer 3">
        <Form.Control
          placeholder="Answer here"
          value={answers[2]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 4: What part of classes do you excel the most in (group work, exams, projects, etc)</p>
      <Form.Group controlId="Answer 4">
        <Form.Control
          placeholder="Answer here"
          value={answers[3]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 5: What was your favorite class you've taken, and why? Be specific about the class!</p>
      <Form.Group controlId="Answer 5">
        <Form.Control
          placeholder="Answer here"
          value={answers[4]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 6: What is a work environment you did not work well in at all, and would not like to return to?</p>
      <Form.Group controlId="Answer 6">
        <Form.Control
          placeholder="Answer here"
          value={answers[5]}
          onChange={updateAnswers}/>
      </Form.Group>
      <p>Question 7: What aspect of working are you most looking forward to in the future?</p>
      <Form.Group controlId="Answer 7">
        <Form.Control
          placeholder="Answer here"
          value={answers[6]}
          onChange={updateAnswers}/>
      </Form.Group>
    </div>
    );
}