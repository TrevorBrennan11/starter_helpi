import { useState } from "react";
import '../App.css';
import OpenAI from "openai";
import { Button, Form } from "react-bootstrap";
import { ResultsPage } from "./ResultsPage";
import { Color } from "react-bootstrap/esm/types";

export let basicResponse = "";
const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") as string), dangerouslyAllowBrowser: true});

export function BasicQuestionsPage({responseMode, colorPalate}: {responseMode: string, colorPalate: Color[]}):  JSX.Element {    
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
            <ResultsPage Response={basicResponse} Page="basic" responseMode={responseMode} colorPalate={colorPalate}></ResultsPage>
        )
    } else {
        return (
            <div className="BasicPage">
                <h1 style={{paddingTop: "30px"}}>Career Quiz Basic Questions</h1>
                <progress className="Progress-Bar" value={numAnswered} max={7}></progress>
                <h3>Question 1: What kind of workplace environment interests you? </h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q1"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(0, e.target.value)}
                            value="Working outdoors"
                        />
                        Working outdoors
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q1"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(0, e.target.value)}
                            value="Working in an office"
                        />
                        Working in an office
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q1"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(0, e.target.value)}
                            value="Working in a lab"
                        />
                        Working in a lab
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q1"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(0, e.target.value)}
                            value="Working in a classroom"
                        />
                        Working in a classroom
                    </label>
                </div>
                <h3>Question 2: What social cause do you care about the most? </h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q2"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(1, e.target.value)}
                            value="Environmental sustainability"
                        />
                        Environmental sustainability
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q2"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(1, e.target.value)}
                            value="Social justice and equity"
                        />
                        Social justice and equity
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q2"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(1, e.target.value)}
                            value="Education and Youth development"
                        />
                        Education and Youth development
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q2"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(1, e.target.value)}
                            value="Public health and wellness"
                        />
                        Public health and wellness
                    </label>
                </div>
                <h3>Question 3: Congrats you have the day off! How will you spend your spare time?</h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q3"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(2, e.target.value)}
                            value="Exploring new hobbies and interests"
                        />
                        Exploring new hobbies and interests
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q3"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(2, e.target.value)}
                            value="Volunteering or giving back to my community"
                        />
                        Volunteering or giving back to my community
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q3"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(2, e.target.value)}
                            value="Socializing with friends and family"
                        />
                        Socializing with friends and family
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q3"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(2, e.target.value)}
                            value="Relaxing and recharging at home"
                        />
                        Relaxing and recharging at home
                    </label>
                </div>
                <h3>Question 4: What’s your preferred work style?</h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q4"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(3, e.target.value)}
                            value="Leading groups and taking on leadership roles"
                        />
                        Leading groups and taking on leadership roles
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q4"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(3, e.target.value)}
                            value="Participating with and collaborative projects"
                        />
                        Participating with and collaborative projects
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q4"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(3, e.target.value)}
                            value="Connecting one-on-one with others"
                        />
                        Connecting one-on-one with others
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q4"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(3, e.target.value)}
                            value="I enjoy working independently"
                        />
                        I enjoy working independently
                    </label>
                </div>
                <h3>Question 5: Which of the following environments do you thrive in? </h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q5"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(4, e.target.value)}
                            value="Analytical and structured environments with clear guidelines"
                        />
                        Analytical and structured environments with clear guidelines
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q5"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(4, e.target.value)}
                            value="Dynamic and creative environments with room for experimentation"
                        />
                        Dynamic and creative environments with room for experimentation
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q5"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(4, e.target.value)}
                            value="Supportive and collaborative environments where teamwork is valued"
                        />
                        Supportive and collaborative environments where teamwork is valued
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q5"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(4, e.target.value)}
                            value="Active and practical environments where you can work with tools or equipment"
                        />
                        Active and practical environments where you can work with tools or equipment
                    </label>
                </div>
                <h3>Question 6: Which of the following best describes your preferred work style? </h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q6"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(5, e.target.value)}
                            value="Methodical and detail-oriented"
                        />
                        Methodical and detail-oriented
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q6"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(5, e.target.value)}
                            value="Flexible and adaptable"
                        />
                        Flexible and adaptable
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q6"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(5, e.target.value)}
                            value="Empathetic and compassionate"
                        />
                        Empathetic and compassionate
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q6"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(5, e.target.value)}
                            value="Practical and hands-on"
                        />
                        Practical and hands-on
                    </label>
                </div>
                <h3>Question 7: What kind of tasks do you enjoy doing in your free time?</h3>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q7"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(6, e.target.value)}
                            value="Solving puzzles or playing strategy games"
                        />
                        Solving puzzles or playing strategy games
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q7"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(6, e.target.value)}
                            value="Painting, drawing, or crafting"
                        />
                        Painting, drawing, or crafting
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q7"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(6, e.target.value)}
                            value="Volunteering or helping others in need"
                        />
                        Volunteering or helping others in need
                    </label>
                    <label style={{marginBottom: "5px"}}>
                        <input 
                            type="radio"
                            name="q7"
                            style={{accentColor: colorPalate[1], verticalAlign: "middle", marginRight: '15px', height: "20px", width: "20px"}}
                            onChange={(e) => updateAnswer(6, e.target.value)}
                            value="Building or fixing things around the house"
                        />
                        Building or fixing things around the house
                    </label>
                </div>
                {answers[0] && answers[1] && answers[2] && answers[3] && answers[4] && answers[5] && answers[6] && 
                    <Button onClick={showMyResults}>Get Results!</Button>
                } 
            </div>
        );  
    }
}
    

