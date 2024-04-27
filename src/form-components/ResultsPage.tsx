import { useState } from 'react';
import '../App.css';
//import {detailedResponse} from "./DetailedQuestionPage"
import { basicResponse } from './BasicQuestionPage';
import { DetailedQuestionsPage } from "./DetailedQuestionPage";
import { Button, Col } from 'react-bootstrap';


export function ResultsPage({detailedResponse}: {
  detailedResponse: string;
}): JSX.Element {
  const [isDetailedPage,setIsDetailedPage] = useState<boolean>(false);
  function retakeQuiz(){
    setIsDetailedPage(true);
  }
  if (isDetailedPage){
    return(
      <DetailedQuestionsPage></DetailedQuestionsPage>
    )
  }
  else{
    return ( 
    <div className="App-detailed">
    <h2>Loading your results! </h2>
    <p>{detailedResponse}</p>
    <p>{basicResponse}</p>
    <Col className = "Header-Button" as={Button} onClick={retakeQuiz}>Retake Quiz!</Col>
    </div>
  );
    }
}