import '../App.css';
import {detailedResponse} from "./DetailedQuestionPage"
import { basicResponse } from './BasicQuestionPage';
import React from "react";


export function ResultsPage(): JSX.Element {
    return ( 
    <div className="App-detailed">
    <h2>Here are your results! </h2>
    <p>{detailedResponse}</p>
    <p>{basicResponse}</p>
    </div>
  );
}