import { useState } from "react";
import '../App.css';
import OpenAI from "openai";
import { Button, Form } from "react-bootstrap";
import { ResultsPage } from "./ResultsPage";
import { Color } from "react-bootstrap/esm/types";

export let basicResponse = "";
const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") as string), dangerouslyAllowBrowser: true});

export function BasicQuestionsPage({responseMode}: {responseMode: string}, {colorPalate}: {colorPalate: Color[]}):  JSX.Element {    
    const [answers, setAnswers] = useState<string[]>(["", "", "", "", "", "", ""]);
    const [numAnswered, setNumAnswered] = useState<number>(0);
    const [basicResponse,setBasicResponse] = useState<string>("");
    const [isResultsPage,setIsResultsPage] = useState<boolean>(false);
  
    function updateNumAnswered(updatedAnswers: string[]) {
        let totalAnswered = updatedAnswers.filter(answer => !!answer).length;
        setNumAnswered(totalAnswered);
    }

    function updateAnswer(index: number, input: string) {
        setAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[index] = input;
        updateNumAnswered(updatedAnswers);
        return updatedAnswers;
        });
        //console.log(answers);
    }

    async function showMyResults() {
        setIsResultsPage(true);
        const completion = await openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are a " +  responseMode + " skilled in recommending three jobs starting with the most compatabile."},
            {"role": "user", "content": "When asked 'What kind of workplace environment interests you?' they responded" + answers[0]},
            {"role": "user", "content": "When asked 'What social cause do you care about the most?' they responded" + answers[1]},
            {"role": "user", "content": "When asked 'Congrats you have the day off! How will you spend your spare time?' they responded" + answers[2]},
            {"role": "user", "content": "When asked 'What’s your preferred work style?' they responded" + answers[3]},
            {"role": "user", "content": "When asked 'Which of the following environments do you thrive in?' they responded" + answers[4]},
            {"role": "user", "content": "When asked 'Which of the following best describes your preferred work style?' they responded" + answers[5]},
            {"role": "user", "content": "When asked 'What kind of tasks do you enjoy doing in your free time?' they responded" + answers[6]},],
            model: "gpt-4-turbo",
            temperature: 0.75,
        });
        console.log(completion.choices[0].message.content);
        setBasicResponse(completion.choices[0].message.content || '');
    }

    if (isResultsPage){
        return(
            <ResultsPage Response={basicResponse} Page="basic" responseMode={responseMode}></ResultsPage>
        )
    } else {
        return (
            <div className="BasicPage">
                <h1 style={{paddingTop: "30px"}}>Career Quiz Basic Questions</h1>
                <progress className="Progress-Bar" value={numAnswered} max={7}></progress>
                <h3>Question 1: What kind of workplace environment interests you? </h3>
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
                <h3>Question 2: What social cause do you care about the most? </h3>
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
                <h3>Question 3: Congrats you have the day off! How will you spend your spare time?</h3>
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
                <h3>Question 4: What’s your preferred work style?</h3>
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
                <h3>Question 5: Which of the following environments do you thrive in? </h3>
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
                <h3>Question 6: Which of the following best describes your preferred work style? </h3>
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
                <h3>Question 7: What kind of tasks do you enjoy doing in your free time?</h3>
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
                {answers[0] && answers[1] && answers[2] && answers[3] && answers[4] && answers[5] && answers[6] && 
                    <Button onClick={showMyResults}>Get Results!</Button>
                } 
            </div>
        );  
    }
}
    

