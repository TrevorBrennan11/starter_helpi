import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { BasicQuestionsPage } from './form-components/BasicQuestionPage';
import { DetailedQuestionsPage } from './form-components/DetailedQuestionPage';
import { HomePage } from './form-components/HomePage';

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
  
  return (
    <div className="App">
      {/*Header will contain navigation bar*/}
      <div className="App-NavBar">
        <Button className='Header-Button' onClick={updateHomePageButton}>Home</Button>
        <Button className='Header-Button' onClick={updateBasicPageButton}>Basic</Button>
        <Button className='Header-Button' onClick={updateDetailedPageButton}>Detailed</Button>
      </div>
        <div className='App-Body'>
        {/*Home Page*/}
        {isHomePage && <HomePage></HomePage>}
        {/*Basic Questions Page*/}
        {isBasicPage && <BasicQuestionsPage ></BasicQuestionsPage>}
        {/*Detailed Questions Page*/}
        {isDetailedPage && <DetailedQuestionsPage></DetailedQuestionsPage>}
        {/*Footer contains entry for the API key*/}
      </div>
      <footer className='App-footer'>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </div>
        </Form>
      </footer> 
    </div>
  );  
}

export default App;
