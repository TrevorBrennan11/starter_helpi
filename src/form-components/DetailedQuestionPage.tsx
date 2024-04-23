
import { useState } from "react";
import { Form } from "react-bootstrap";

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