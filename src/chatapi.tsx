export async function generateResponse(answers: string[]) {
    const OpenAI = require('openai');

    const openai = new OpenAI({api: JSON.parse(localStorage.getItem("MYKEY") || ""), dangerouslyAllowBrowser:true});
    // const [key, setKey] = useState<string>(keyData); //for api key input

    let keyData = "";
    const saveKeyData = "MYKEY";
    const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
    if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
    }

    // function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    //     setKey(event.target.value);
    //   }
 
    // const openai = new OpenAI({apiKey: localStorage.getItem("MYKEY"),dangerouslyAllowBrowser: true});
    console.log(localStorage.getItem("MYKEY"))
    const answerString = answers.map((answers, index) => `${answers[index]}`).join('\n');

    const completion = await openai.chat.completions.create({
        response_format: { "type": "json_object" },
        model: "gpt-3.5-turbo",
        messages: [     
            {"role": "system", "content": "You are a career-starter assistant, skilled in recommending three jobs starting with the most compatible."},
            {"role": "user", "content": `Give me a list of jobs if I like to ${answerString}` }
        ],
    });
    const result = completion.choices[0]
    
    const { content } = result.message;
    console.log(content);
}