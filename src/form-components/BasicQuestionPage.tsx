import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../App.css';

export function BasicQuestionsPage(): JSX.Element {
    const [answer1, setAnswer1] = useState<string> ("");
    const [answer2, setAnswer2] = useState<string> ("");
    const [answer3, setAnswer3] = useState<string> ("");
    const [answer4, setAnswer4] = useState<string> ("");
    const [answer5set, setAnswer5] = useState<string[]> (["stuff"]);
    const [answer6set, setAnswer6] = useState<string[]> (["Inside"]);
    const [answer7set, setAnswer7] = useState<string[]> (["Handy"]);

    //const [answer, setAnswer] = useState<string> ("");
    //const answers: string[] = [];
  
    function updateAnswer1 (event: React.ChangeEvent<HTMLInputElement>) {
      setAnswer1(event.target.value)
      //answers.push(answer);
    }
    function updateAnswer2 (event: React.ChangeEvent<HTMLInputElement>) {
      setAnswer2(event.target.value)
      //answers.push(answer);
    }
    function updateAnswer3 (event: React.ChangeEvent<HTMLInputElement>) {
      setAnswer3(event.target.value)
      //answers.push(answer);
    }
    function updateAnswer4 (event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer4(event.target.value)
        //answers.push(answer);
      }
    function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
        const option = event.target.value;
        
        if (answer5set.includes(option)) {
            setAnswer5(answer5set.filter((e) => e !== option));
            //answers.push(answer);
        } else {
            setAnswer5([...answer5set, option]);
            //answers.push(answer);
        }
    }   
    function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
        const option = event.target.value;
        
        if (answer6set.includes(option)) {
            setAnswer6(answer6set.filter((e) => e !== option));
            //answers.push(answer);
        } else {
            setAnswer6([...answer6set, option]);
            //answers.push(answer);
        }
    } 
    function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        const option = event.target.value;
        
        if (answer7set.includes(option)) {
            setAnswer7(answer7set.filter((e) => e !== option));
            //answers.push(answer);
        } else {
            setAnswer7([...answer7set, option]);
            //answers.push(answer);
        }
    }   


    
   
return (
            <div className="BasicPage">
            <h1>Career Quiz Basic Questions</h1>
            <h3>
                In order for us to estimate your personal Interests and Usual Style, you will first need to answer a series of questions. 
                Read each pair of phrases below and decide which one of the two most describes you, then select the radio button next to that phrase.
            </h3>

            <p>This is just a radio type question </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer1}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer1}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer1}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
            </Form>

            <p>This is just a radio type question </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer2}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer2}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer2}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
            </Form>

            <p>This is just a radio type question </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer3}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer3}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer3}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
            </Form>

            <p>This is just a radio type question </p>
            <Form>
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer4}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer4}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
                <Form.Check
                    type="radio"
                    name="Career-Question"
                    onChange={updateAnswer4}
                    id="Career-Question"
                    label="Default"
                    value="Default"
                />
            </Form>

            <p>Multi-Choice Question</p>
            <Form>
                <Form.Check
                    type="checkbox"
                    id="emotion-check-happy"
                    label="Happy"
                    name="emotions"
                    value="happy"
                    checked={answer5set.includes("happy")}
                    onChange={updateAnswer5}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-sad"
                    label="Sad"
                    name="emotions"
                    value="sad"
                    checked={answer5set.includes("sad")}
                    onChange={updateAnswer5}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-angry"
                    label="Angry"
                    name="emotions"
                    value="angry"
                    checked={answer5set.includes("angry")}
                    onChange={updateAnswer5}
                />
            </Form>

            <p>Multi-Choice Question</p>
            <Form>
                <Form.Check
                    type="checkbox"
                    id="emotion-check-happy"
                    label="Happy"
                    name="emotions"
                    value="happy"
                    checked={answer6set.includes("happy")}
                    onChange={updateAnswer6}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-sad"
                    label="Sad"
                    name="emotions"
                    value="sad"
                    checked={answer6set.includes("sad")}
                    onChange={updateAnswer6}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-angry"
                    label="Angry"
                    name="emotions"
                    value="angry"
                    checked={answer6set.includes("angry")}
                    onChange={updateAnswer6}
                />
            </Form>

            <p>Multi-Choice Question</p>
            <Form>
                <Form.Check
                    type="checkbox"
                    id="emotion-check-happy"
                    label="Happy"
                    name="emotions"
                    value="happy"
                    checked={answer7set.includes("happy")}
                    onChange={updateAnswer7}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-sad"
                    label="Sad"
                    name="emotions"
                    value="sad"
                    checked={answer7set.includes("sad")}
                    onChange={updateAnswer7}
                />
                <Form.Check
                    type="checkbox"
                    id="emotion-check-angry"
                    label="Angry"
                    name="emotions"
                    value="angry"
                    checked={answer7set.includes("angry")}
                    onChange={updateAnswer7}
                />
            </Form>
        </div>
    );
}
    

