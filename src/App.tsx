import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form , Row} from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  const [isBasicPage, setIsBasicPage] = useState<boolean>(false);
  const [isDetailedPage, setIsDetailedPage] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string> ("");

const answers: string[] = [];
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function updateBasicPageButton() {
    setIsBasicPage(true);
    setIsDetailedPage(false);
    setIsHomePage(false);
}
  function updateHomePageButton() {
  setIsHomePage(true);
  setIsBasicPage(false);
  setIsDetailedPage(false);
}
  function updateDetailedPageButton() {
  setIsDetailedPage(true);
  setIsBasicPage(false);
  setIsHomePage(false);
}
function updateAnswers (event: React.ChangeEvent<HTMLInputElement>) {
  setAnswer(event.target.value)
  answers.push(answer);
}
  return (
    <div className="App">
      {/*Header will contain navigation bar*/}
      <header className="App-header">
  <Container fluid>
    <Col as={Button} onClick={updateHomePageButton}>Home</Col>
    <Col as={Button} onClick={updateBasicPageButton}>Basic</Col>
    <Col as={Button} onClick={updateDetailedPageButton}>Detailed</Col>
  </Container>
</header>

      {/*Home Page*/}
      {isHomePage && 
        <div>
          <label>Home Page</label>
          <Container>
            <Row>
                <Col>Our basic questions quiz provides you with short, easy to answer prompts that can help
                gauge a general career path for you!</Col>
                <Col>
                    Our detailed questions quiz provides you with longer, and more in-depth prompts, that will be more 
                    effective in gauging a specific career path that suits you!
                </Col>
            </Row>
        </Container>
        </div>
      }

  {/*Basic Questions Page*/}
  {isBasicPage && 
    <div>
      <label>Basic Questions Page</label>
    </div>
  }
     
  {/*Detailed Questions Page*/}
  {isDetailedPage && 
    <div>
      <header className="App-details">
      <label>Detailed Questions Page</label>
      <p>Question 1: How inclined are you to take leadership roles when working in groups?</p> 
      <Form.Group controlId="Answer 1">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[0]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 2: What physical environment do you prefer to be in, beyond just working?</p>
      <Form.Group controlId="Answer 2">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[1]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 3: If you could do anything, without needing to worry about money, what would be and why?</p>
      <Form.Group controlId="Answer 3">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[2]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 4: What part of classes do you excel the most in (group work, exams, projects, etc)</p>
      <Form.Group controlId="Answer 4">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[3]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 5: What was your favorite class you've taken, and why? Be specific about the class!</p>
      <Form.Group controlId="Answer 5">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[4]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 6: What is a work environment you did not work well in at all, and would not like to return to?</p>
      <Form.Group controlId="Answer 6">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[5]}
        onChange={updateAnswers}/>
    </Form.Group>
      <p>Question 7: What aspect of working are you most looking forward to in the future?</p>
      <Form.Group controlId="Answer 7">
      <Form.Label>Answer Here!    </Form.Label>
      <Form.Control
        value={answers[6]}
        onChange={updateAnswers}/>
    </Form.Group>
    </header>
    </div>
  }

  {/*Footer contains entry for the API key*/}
<footer className='App-footer'>
<Form>
  <Form.Label>API Key:</Form.Label>
  <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
  <br></br>
  <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
</Form>
</footer> 
</div>



  
);  

}

export default App;
