import '../App.css';
import {detailedResponse} from "./DetailedQuestionPage"
import { basicResponse } from './BasicQuestionPage';
import React from "react";


export function ResultsPage(): JSX.Element {
    return ( 
    <div className="App-detailed">
    <h2>Here are your results! </h2>
    <div>
            <h3>Based on your responses, here are three career choices that might be a great fit for you:</h3>
            {detailedResponse.split('\n').map((recommendation, index) => (
                <div key={index}>
                    <p>{recommendation}</p>
                </div>
            ))}
        </div>
    <div>
            <h3>Based on your responses, here are three career choices that might be a great fit for you:</h3>
            {basicResponse.split('\n').map((recommendation, index) => (
                <div key={index}>
                    <p>{recommendation}</p>
                </div>
            ))}
        </div>
    </div>
  );
}