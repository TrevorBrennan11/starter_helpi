import '../App.css';
import {response} from "./DetailedQuestionPage"

export function ResultsPage(): JSX.Element {
    return ( 
    <div className="App-detailed">
    <h2>Here are your results!</h2>
    <p>{response}</p>
    </div>
  );
}