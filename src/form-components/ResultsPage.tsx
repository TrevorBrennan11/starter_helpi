import { useState } from 'react';
import '../App.css';
import { BasicQuestionsPage  } from './BasicQuestionPage';
import { DetailedQuestionsPage } from "./DetailedQuestionPage";
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export function ResultsPage({Response, Page, responseMode}: {Response: string; Page:string; responseMode: string; }): JSX.Element {
  const [isDetailedPage,setIsDetailedPage] = useState<boolean>(false);
  const [isBasicPage,setIsBasicPage] = useState<boolean>(false);

  function retakeBasicQuiz() {
    setIsBasicPage(true);
  }

  function retakeDetailedQuiz() {
    setIsDetailedPage(true);
  }

  if (isDetailedPage){
    return(<DetailedQuestionsPage responseMode={responseMode}></DetailedQuestionsPage>);
  } else if (isBasicPage){
    return(<BasicQuestionsPage responseMode={responseMode}></BasicQuestionsPage>)
  } else if (Response === '') {
    return ( 
      <div>
      <h2>Loading your results!</h2>
      <Spinner></Spinner>
      </div>
  );
  } else {
    return ( 
      <div>
        <h2>Here are your results! </h2>
        <div>
          <h3>Based on your responses, here are three career choices that might be a great fit for you:</h3>
          {Response.split('\n').map((recommendation, index) => (
            <div key={index}>
              <p>{recommendation}</p>
            </div>
          ))}
        </div>
        <Button className='Header-Button' onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz }>Retake Quiz!</Button>
      </div>
    );
  }
}

