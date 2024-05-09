import { useState } from 'react';
import '../App.css';
import { BasicQuestionsPage  } from './BasicQuestionPage';
import { DetailedQuestionsPage } from "./DetailedQuestionPage";
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Color } from 'react-bootstrap/esm/types';
import React from 'react';


export function ResultsPage({Response, Page, responseMode, colorPalate}: {Response: string; Page:string; responseMode: string; colorPalate: Color[]}): JSX.Element {
  const [isDetailedPage,setIsDetailedPage] = useState<boolean>(false);
  const [isBasicPage,setIsBasicPage] = useState<boolean>(false);

  function retakeBasicQuiz() {
    setIsBasicPage(true);
  }

  function retakeDetailedQuiz() {
    setIsDetailedPage(true);
  }

  if (isDetailedPage){
    return(<DetailedQuestionsPage responseMode={responseMode} colorPalate={colorPalate}></DetailedQuestionsPage>);
  } 
  else if (isBasicPage){
    return(<BasicQuestionsPage responseMode={responseMode} colorPalate={colorPalate}></BasicQuestionsPage>)
  }
  else if (Response === '') {
    return ( 
      <div>
      <h2>Loading your results!</h2>
      <Spinner></Spinner>
      </div>
  );
}

  else if (responseMode === "Pirate with a very thick pirate accent, who is also a career counselor"){
    return ( 
      <div>
        <h2>Here are your results!</h2>
        <img src="Pirate.jpeg" alt='pirate image'></img>
        <div className='container' style={{width: "100%", backgroundColor: colorPalate[1]}}>
          <div className='search-wrapper' style={{backgroundColor: colorPalate[2]}}>
            {Response.split('\n').map((recommendation, index) => (
              <div key={index}>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz } style={{color: colorPalate[2], backgroundColor: colorPalate[1], marginTop: '20px'}}>Retake Quiz!</Button>
      </div>
    );
  }
  
  else if (responseMode === "Alien who is very sarcastic and looks down on humans , who is also a career counselor"){
    return ( 
      <div>
        <h2>Here are your results!</h2>
        <img src="Alien.jpg" alt='alien image'></img>
        <div className='container' style={{width: "100%", backgroundColor: colorPalate[1]}}>
          <div className='search-wrapper' style={{backgroundColor: colorPalate[2]}}>
            {Response.split('\n').map((recommendation, index) => (
              <div key={index}>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz } style={{color: colorPalate[2], backgroundColor: colorPalate[1], marginTop: '20px'}}>Retake Quiz!</Button>
      </div>
    );
  }
  
  else if (responseMode === "King from medieval who speaks like shakespeare, who is also a career counselor"){
    return ( 
      <div>
        <h2>Here are your results!</h2>
        <img src="Medieveal.jpg" alt='Medieval image'></img>
        <div className='container' style={{width: "100%", backgroundColor: colorPalate[1]}}>
          <div className='search-wrapper' style={{backgroundColor: colorPalate[2]}}>
            {Response.split('\n').map((recommendation, index) => (
              <div key={index}>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz } style={{color: colorPalate[2], backgroundColor: colorPalate[1], marginTop: '20px'}}>Retake Quiz!</Button>
      </div>
    );
  }
 
  else {
    return ( 
      <div>
        <h2>Here are your results!</h2>
        <img src="defaultAvatar.jpeg" alt='Career Counseler Image'></img>
        <div className='container' style={{width: "100%", backgroundColor: colorPalate[1]}}>
          <div className='search-wrapper' style={{backgroundColor: colorPalate[2]}}>
            {Response.split('\n').map((recommendation, index) => (
              <div key={index}>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz } style={{color: colorPalate[2], backgroundColor: colorPalate[1], marginTop: '20px'}}>Retake Quiz!</Button>
      </div>
    );
  }
}