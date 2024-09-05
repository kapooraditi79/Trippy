import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
// npm axios is to fetch requests
function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading..");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAi-b02dRRcWB9qNDqunF62MImHJfcCjw4",
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <>
      <div className="App w-full">
        <h1 className="bg-blue-950 text-white font-serif italic p-4 rounded shadow-md">
          Ask Trippy
        </h1>
        <textarea
          className="border rounded text-white bg-cyan-950 w-full p-4 focus:outline-none focus:ring focus:ring-blue-500 shadow-sm"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Hey! So the new place/event/monument you want to explore is?"
        ></textarea>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded shadow-md"
          onClick={generateAnswer}
        >
          Generate Answer
        </button>
        <pre className="text-white bg-slate-700 text-lg font-mono">
          {answer}
        </pre>
      </div>
    </>
  );
}

export default App;
