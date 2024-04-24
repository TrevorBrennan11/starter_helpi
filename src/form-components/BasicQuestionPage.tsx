import React, { useState } from "react";
import '../App.css';
import OpenAI from "openai";
import { Button, Col, Form } from "react-bootstrap";

export let response = "";
const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") as string), dangerouslyAllowBrowser: true});



export function BasicQuestionsPage():  JSX.Element {

    
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", "", "", ""]);

  const [numAnswered, setNumAnswered] = useState<number>(0);

  function updateNumAnswered(updatedAnswers: string[]) {
    let totalAnswered = updatedAnswers.filter(answer => !!answer).length;
    setNumAnswered(totalAnswered);
  }

  function updateAnswer(index: number, input: string) {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = input;
      updateNumAnswered(updatedAnswers);
      console.log(answers);
      return updatedAnswers;
    });

  }

  //change this functiond de=dprifnreijbfieriuerrjenfjr f

  async function showMyResults() {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a career counselor who is giving me a list of careers that will suit me."},
          {"role": "user", "content": "When asked 'What kind of workplace environment interests you?' they responded" + answers[0]},
          {"role": "user", "content": "When asked 'What social cause do you care about the most?' they responded" + answers[1]},
          {"role": "user", "content": "When asked 'Congrats you have the day off! How will you spend your spare time?' they responded" + answers[2]},
          {"role": "user", "content": "When asked 'What’s your preferred work style?' they responded" + answers[3]},
          {"role": "user", "content": "When asked 'Which of the following environments do you thrive in?' they responded" + answers[4]},
          {"role": "user", "content": "When asked 'Which of the following best describes your preferred work style?' they responded" + answers[5]},
          {"role": "user", "content": "When asked 'What kind of tasks do you enjoy doing in your free time?' they responded" + answers[6]},],
      model: "gpt-4-turbo",
    });
  
    console.log(completion.choices[0].message.content);
    response = JSON.stringify(completion.choices[0].message.content);
  
  }
    
   
return (
        <div className="BasicPage">
            <h1>Career Quiz Basic Questions</h1>
            <h3>
                In order for us to estimate your personal Interests and Usual Style, you will first need to answer a series of questions. 
                Read each pair of phrases below and decide which one of the two most describes you, then select the radio button next to that phrase.
            </h3>
            
            <p>Question 1: What kind of workplace environment interests you? </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question1"
                    onChange={(e) => updateAnswer(0, e.target.value)}
                    id="Career-Question1"
                    label="Working outdoors"
                    value="Working outdoors"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question1"
                    onChange={(e) => updateAnswer(0, e.target.value)}
                    id="Career-Question1"
                    label="Working in an office"
                    value="Working in an office"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question1"
                    onChange={(e) => updateAnswer(0, e.target.value)}
                    id="Career-Question1"
                    label="Working in a lab"
                    value="Working in a lab"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question1"
                    onChange={(e) => updateAnswer(0, e.target.value)}
                    id="Career-Question1"
                    label="Working in a classroom"
                    value="Working in a classroom"
                />
                
            </Form>
            <p>Question 2: What social cause do you care about the most? </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question2"
                    onChange={(e) => updateAnswer(1, e.target.value)}
                    id="Career-Question2"
                    label="Environmental sustainability"
                    value="Environmental sustainability"
                    
                />
                <Form.Check
                    type="radio"
                    name="Career-Question2"
                    onChange={(e) => updateAnswer(1, e.target.value)}
                    id="Career-Question2"
                    label="Social justice and equity"
                    value="Social justice and equity"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question2"
                    onChange={(e) => updateAnswer(1, e.target.value)}
                    id="Career-Question2"
                    label="Education and Youth development"
                    value="Education and Youth development"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question2"
                    onChange={(e) => updateAnswer(1, e.target.value)}
                    id="Career-Question2"
                    label="Public health and wellness"
                    value="Public health and wellness"
                />
                
            </Form>
            <p>Question 3:Congrats you have the day off! How will you spend your spare time?</p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question3"
                    onChange={(e) => updateAnswer(2, e.target.value)}
                    id="Career-Question3"
                    label="Exploring new hobbies and interests"
                    value="Exploring new hobbies and interests"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question3"
                    onChange={(e) => updateAnswer(2, e.target.value)}
                    id="Career-Question3"
                    label="Volunteering or giving back to my community"
                    value="Volunteering or giving back to my community"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question3"
                    onChange={(e) => updateAnswer(2, e.target.value)}
                    id="Career-Question3"
                    label="Socializing with friends and family"
                    value="Socializing with friends and family"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question3"
                    onChange={(e) => updateAnswer(2, e.target.value)}
                    id="Career-Question3"
                    label="Relaxing and recharging at home"
                    value="Relaxing and recharging at home"
                />
                
            </Form>
            <p>Question 4: What’s your preferred work style?</p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question4"
                    onChange={(e) => updateAnswer(3, e.target.value)}
                    id="Career-Question4"
                    label="Leading groups and taking on leadership roles"
                    value="Leading groups and taking on leadership roles"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question4"
                    onChange={(e) => updateAnswer(3, e.target.value)}
                    id="Career-Question4"
                    label="Participating with and collaborative projects"
                    value="Participating with and collaborative projects"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question4"
                    onChange={(e) => updateAnswer(3, e.target.value)}
                    id="Career-Question4"
                    label="Connecting one-on-one with others"
                    value="Connecting one-on-one with others"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question4"
                    onChange={(e) => updateAnswer(3, e.target.value)}
                    id="Career-Question4"
                    label="I enjoy working independently"
                    value="I enjoy working independently"
                />
                
            </Form>
            <p>Question 5: Which of the following environments do you thrive in? </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question5"
                    onChange={(e) => updateAnswer(4, e.target.value)}
                    id="Career-Question5"
                    label="Analytical and structured environments with clear guidelines"
                    value="Analytical and structured environments with clear guidelines"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question5"
                    onChange={(e) => updateAnswer(4, e.target.value)}
                    id="Career-Question5"
                    label=" Dynamic and creative environments with room for experimentation"
                    value=" Dynamic and creative environments with room for experimentation"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question5"
                    onChange={(e) => updateAnswer(4, e.target.value)}
                    id="Career-Question5"
                    label="Supportive and collaborative environments where teamwork is valued"
                    value="Supportive and collaborative environments where teamwork is valued"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question5"
                    onChange={(e) => updateAnswer(4, e.target.value)}
                    id="Career-Question5"
                    label="Active and practical environments where you can work with tools or equipment"
                    value="Active and practical environments where you can work with tools or equipment"
                />
                
            </Form>
            <p>Question 6: Which of the following best describes your preferred work style? </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question6"
                    onChange={(e) => updateAnswer(5, e.target.value)}
                    id="Career-Question6"
                    label="Methodical and detail-oriented"
                    value="Methodical and detail-oriented"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question6"
                    onChange={(e) => updateAnswer(5, e.target.value)}
                    id="Career-Question6"
                    label="Flexible and adaptable"
                    value="Flexible and adaptable"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question6"
                    onChange={(e) => updateAnswer(5, e.target.value)}
                    id="Career-Question6"
                    label="Empathetic and compassionate"
                    value="Empathetic and compassionate"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question6"
                    onChange={(e) => updateAnswer(5, e.target.value)}
                    id="Career-Question6"
                    label="Practical and hands-on"
                    value="Practical and hands-on"
                />
                
            </Form>
            <p>Question 7: What kind of tasks do you enjoy doing in your free time?</p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question7"
                    onChange={(e) => updateAnswer(6, e.target.value)}
                    id="Career-Question7"
                    label="Solving puzzles or playing strategy games"
                    value="Solving puzzles or playing strategy games"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question7"
                    onChange={(e) => updateAnswer(6, e.target.value)}
                    id="Career-Question7"
                    label="Painting, drawing, or crafting"
                    value="Painting, drawing, or crafting"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question7"
                    onChange={(e) => updateAnswer(6, e.target.value)}
                    id="Career-Question7"
                    label="Volunteering or helping others in need"
                    value="Volunteering or helping others in need"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question7"
                    onChange={(e) => updateAnswer(6, e.target.value)}
                    id="Career-Question7"
                    label="Building or fixing things around the house"
                    value="Building or fixing things around the house"
                />
                
            </Form>
            
           
            
           <div> {answers[0] && answers[1] && answers[2] && answers[3] && answers[4] && answers[5] && answers[6] && <div>
        <Button onClick={showMyResults}>Submit!</Button>
    <span></span><h2>Congrats you completed the quiz!</h2></div>} </div>

        
        </div>
    );
}
    

