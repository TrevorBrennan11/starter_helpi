import OpenAI from "openai";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ResultsPage } from "./ResultsPage";
import { Color } from "react-bootstrap/esm/types";


export let detailedResponse = "";
const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") as string), dangerouslyAllowBrowser: true});

export function DetailedQuestionsPage({responseMode}: {responseMode: string}, {colorPalate}: {colorPalate: Color[]}): JSX.Element {
  const[detailedResponse,setDetailedResponse] = useState<string>("");
  const[isResultsPage,setIsResultsPage] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", "", "", ""]);
  const [numAnswered, setNumAnswered] = useState<number>(0);

  function updateAnswer(index: number, input: string) {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = input;
      updateNumAnswered(updatedAnswers);
      return updatedAnswers;
    });
    //console.log(answers);
  }

  function updateNumAnswered(updatedAnswers: string[]) {
    let totalAnswered = updatedAnswers.filter(answer => !!answer).length;
    setNumAnswered(totalAnswered);
  }

  async function showMyResults() {
    setIsResultsPage(true);
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a"  + responseMode  + "who is giving me a list of careers that will suit me."},
          {"role": "user", "content": "When asked 'How inclined are you to take leadership roles when working in groups?' they responded" + answers[0]},
          {"role": "user", "content": "When asked 'What physical environment do you prefer to be in, beyond just working?' they responded" + answers[1]},
          {"role": "user", "content": "When asked 'If you could do anything, without needing to worry about money, what would be and why?' they responded" + answers[2]},
          {"role": "user", "content": "When asked 'What part of classes do you excel the most in (group work, exams, projects, etc)' they responded" + answers[3]},
          {"role": "user", "content": "When asked 'What was your favorite class you've taken, and why? Be specific about the class!' they responded" + answers[4]},
          {"role": "user", "content": "When asked 'What is a work environment you did not work well in at all, and would not like to return to?' they responded" + answers[5]},
          {"role": "user", "content": "When asked 'What aspect of working are you most looking forward to in the future?' they responded" + answers[6]},],
      model: "gpt-4-turbo",
      temperature: 0.75,
    });
    console.log(completion.choices[0].message.content);
    setDetailedResponse(completion.choices[0].message.content || '');
  }

  if (isResultsPage){
    return(
      <ResultsPage Response={detailedResponse} Page="detailed" responseMode={responseMode}></ResultsPage>
    )
  } else {
    return ( 
      <div className="DetailedPage">
        <h1 style={{paddingTop: "30px"}}>Career Quiz Detailed Questions</h1>
        <progress className="Progress-Bar" value={numAnswered} max={7}></progress>
        <h3>Question 1: How inclined are you to take leadership roles when working in groups?</h3> 
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[0]}
            onChange={(e) => updateAnswer(0, e.target.value)}/>
        <h3>Question 2: What physical environment do you prefer to be in, beyond just working?</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[1]}
            onChange={(e) => updateAnswer(1, e.target.value)}/>
        <h3>Question 3: If you could do anything, without needing to worry about money, what would be and why?</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[2]}
            onChange={(e) => updateAnswer(2, e.target.value)}/>
        <h3>Question 4: What part of classes do you excel the most in (group work, exams, projects, etc)</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[3]}
            onChange={(e) => updateAnswer(3, e.target.value)}/>
        <h3>Question 5: What was your favorite class you've taken, and why? Be specific about the class!</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[4]}
            onChange={(e) => updateAnswer(4, e.target.value)}/>
        <h3>Question 6: What is a work environment you did not work well in at all, and would not like to return to?</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[5]}
            onChange={(e) => updateAnswer(5, e.target.value)}/>
        <h3>Question 7: What aspect of working are you most looking forward to in the future?</h3>
        <textarea 
            style={{width: "75%"}}
            placeholder="Answer here"
            value={answers[6]}
            onChange={(e) => updateAnswer(6, e.target.value)}/>
        {answers[0] && answers[1] && answers[2] && answers[3] && answers[4] && answers[5] && answers[6] && 
          <Button onClick={showMyResults}>Get Results!</Button>
        }
      </div>
    );
  }
}