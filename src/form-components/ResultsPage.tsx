import { useState } from 'react';
import '../App.css';
import { BasicQuestionsPage  } from './BasicQuestionPage';
import { DetailedQuestionsPage } from "./DetailedQuestionPage";
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Color } from 'react-bootstrap/esm/types';

export function ResultsPage({Response, Page, responseMode}: {Response: string; Page:string; responseMode: string;}, {colorPalate}: {colorPalate: Color[]}): JSX.Element {
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
        <h2>Here are your results!</h2>
        <div className='container' style={{width: "100%"}}>
          <div className='search-wrapper'>
            {Response.split('\n').map((recommendation, index) => (
              <div key={index}>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
        <Button className='Header-Button' onClick={Page === 'basic' ? retakeBasicQuiz : retakeDetailedQuiz }>Retake Quiz!</Button>
      </div>
    );
  }
}

