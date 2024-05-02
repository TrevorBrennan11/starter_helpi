import { useState } from 'react';
import '../App.css';
import { BasicQuestionsPage  } from './BasicQuestionPage';
import { DetailedQuestionsPage } from "./DetailedQuestionPage";
import { Button, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export function ResultsPage({Response, Page}: {Response: string; Page:string; }): JSX.Element {
  const [isDetailedPage,setIsDetailedPage] = useState<boolean>(false);
  const [isBasicPage,setIsBasicPage] = useState<boolean>(false);

  function retakeBasicQuiz() {
    setIsBasicPage(true);
  }

  function retakeDetailedQuiz() {
    setIsDetailedPage(true);
  }

  if (isDetailedPage){
    return(<DetailedQuestionsPage></DetailedQuestionsPage>);
  } else if (isBasicPage){
    return(<BasicQuestionsPage></BasicQuestionsPage>)
  } else if (Response === '') {
    return ( 
      <div className="App-detailed-loading" >
      <h2>Loading your results!</h2>
      <Spinner></Spinner>
      </div>
  );
  } else {
    return ( 
      <div className="App-detailed">
        <h2>Here are your results! </h2>
        <div>
          <h3>Based on your responses, here are three career choices that might be a great fit for you:</h3>
          {Response.split('\n').map((recommendation, index) => (
            <div key={index}>
              <p>{recommendation}</p>
            </div>
          ))}
        </div>
        <Col className = "Header-Button" as={Button} onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz }>Retake Quiz!</Col>
      </div>
    );
  }
}


// const [quizRetakeStatus,setQuizRetakeStatus] = useState<boolean>(false);
// function retakeQuiz() {
//   setQuizRetakeStatus(true);
// }
// if(quizRetakeStatus){
//  return(
//    <HomePage></HomePage>
//  )
// }

