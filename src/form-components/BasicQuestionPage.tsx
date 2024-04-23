import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../App.css';
import axios from 'axios';
import { generateResponse } from "../chatapi";


interface BasicProps{
    changePage: (page: string) => void;
}

export function BasicQuestionsPage({changePage}: BasicProps):  JSX.Element {
    
    const questions = [
        {
            question:"Question 1: What kind of workplace environment interests you?",
            options:[
                "Working outdoors",
                "Working in an office",
                "Working in a lab",
                "Working in a classroom"
            ]
            
        },
        {
            question:"Question 2: What social cause do you care about the most?",
            options:[
                "Exploring new hobbies and interests",
                "Volunteering or giving back to my community",
                "Socializing with friends and family",
                "Relaxing and recharging at home"
            ]
            
        },
        {
            question:"Question 3: Congrats you have the day off! How will you spend your spare time?",
            options:[
                "Exploring new hobbies and interests",
                "Volunteering or giving back to my community",
                "Socializing with friends and family",
                "Relaxing and recharging at home"
            ]
            
        },
        {
            question:"Question 4: What’s your preferred work style?",
            options:[
                "Environmental sustainability",
                "Social justice and equity",
                "Education and Youth development",
                "Public health and wellness"
            ]
            
        },
        {
            question:"Do you enjoy working inside or outside",
            options:[
                "Environmental sustainability",
                "Social justice and equity",
                "Education and Youth development",
                "Public health and wellness"
            ]
            
        },
        {
            question:"Do you enjoy working inside or outside",
            options:[
                "Environmental sustainability",
                "Social justice and equity",
                "Education and Youth development",
                "Public health and wellness"
            ]
            
        },
        {
            question:"Do you enjoy working inside or outside",
            options:[
                "Environmental sustainability",
                "Social justice and equity",
                "Education and Youth development",
                "Public health and wellness"
            ]
            
        },
        {
            question:"Do you enjoy working inside or outside",
            options:[
                "Environmental sustainability",
                "Social justice and equity",
                "Education and Youth development",
                "Public health and wellness"
            ]
            
        },
    
    ];

    

    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[selectOption, setSelectedOption] = useState("");
    
    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        const answer = option;
        updateAnswer(currentQuestionIndex, answer);
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
               
            }
            else{
                handleFormSubmit(); 
            }
        }, 900)
    }
    const question = questions[currentQuestionIndex];

    const [answer1, setAnswer1] = useState<string> ("");
    const [answer2, setAnswer2] = useState<string> ("");
    const [answer3, setAnswer3] = useState<string> ("");
    const [answer4, setAnswer4] = useState<string> ("");
    const [answer5set, setAnswer5] = useState<string[]> (["stuff"]);
    const [answer6set, setAnswer6] = useState<string[]> (["Inside"]);
    const [answer7set, setAnswer7] = useState<string[]> (["Handy"]);


    
    const [answers, setAnswers] = useState<string[]>([]);
   
   


    function updateAnswer(questionIndex: number, answer: string) {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = answer;
        setAnswers(updatedAnswers);
    }
  
    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        setAnswer1(answer);
        updateAnswer(currentQuestionIndex, answer);
    }
    
    function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        setAnswer2(answer);
        updateAnswer(currentQuestionIndex, answer);
    }
    

    

    
    async function handleFormSubmit() {
          const result = await generateResponse(answers);
          console.log(result);
    };
    
      
  

   
return (
        <div className="BasicPage">
            <h1>Career Quiz Basic Questions</h1>
            <h3>
                In order for us to estimate your personal Interests and Usual Style, you will first need to answer a series of questions. 
                Read each pair of phrases below and decide which one of the two most describes you, then select the radio button next to that phrase.
            </h3>
            
            <p> {question.question} </p>
            {question.options.map((option, index) => (
                <Form.Check
                key={index}
                type="radio"
                name={`question${currentQuestionIndex + 1}`}
                label={option}
                onChange={() => handleOptionChange(option)}
                checked={selectOption === option}
                />


            )
            )}
           
            
            <button onClick={handleFormSubmit}>Submit</button>
            {/* Display the response */}

        
        </div>
    );
}
    

