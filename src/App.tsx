import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [isHomePage, /*setIsHomePage*/] = useState<boolean>(true);
  const [isBasicPage, /*setIsBasicPage*/] = useState<boolean>(false);
  const [isDetailedPage, /*setIsDetailedPage*/] = useState<boolean>(false);
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      {/*Header will contain navigation bar*/}
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col>Basic</Col>
            <Col>Home</Col>
          </Row>
        </Container>
      </header>

      <div className='App-body'>
        {/*Home Page*/}
        {isHomePage && 
          <div>
            <label>Home Page</label>
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
            <label>Detailed Questions Page</label>
          </div>
        }
      </div>

      {/*Footer contains entry for the API key*/}
      <footer>
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
