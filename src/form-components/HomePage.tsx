// import { Form } from "react-bootstrap";
import '../App.css';

export function HomePage(): JSX.Element {
    return(
        <div >
            <h1>Career Starter</h1>
            <div className="container" style={{width: "40%"}}>
                <div className='search-wrapper'>
                    Our basic questions quiz provides you with short, easy to answer prompts that can help
                    gauge a general career path for you!
                </div>
                <div className='search-wrapper'>
                    Our detailed questions quiz provides you with longer, and more in-depth prompts, that will be more 
                    effective in gauging a specific career path that suits you!
                </div>
            </div>
        </div>
    );
}