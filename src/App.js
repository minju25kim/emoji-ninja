import "./App.css";
import { useState } from "react";

function App() {
  const [emoji, setEmoji] = useState("");

  function handleEmoji(e) {
    e.preventDefault();
    const userInput = e.target[0].value;
    setEmoji(userInput);
    e.target[0].value = "";
  }

  const slice = [...emoji].filter((x) => x.length > 1);
  // console.log(slice.map((x) => typeof x));

  return (
    <div className="App">
      <form onSubmit={handleEmoji}>
        <input
          name="emoji"
          className="typeEmoji"
          placeholder="type emoji... 👩‍💻"
        ></input>
        <button type="submit" className="typeEmoji">
          Enter
        </button>
      </form>
      <div className="emoji">
        <div>
          original emoji: <span>{emoji ? emoji : "👨‍👩‍👧 example"}</span>
        </div>
        <div>
          sliced emojis: <span>{emoji ? slice : "👨👩👧 example"}</span>
        </div>
      </div>
      <footer>
        Created by{" "}
        <a
          className="sourceCode"
          href="https://github.com/minju25kim/emoji-ninja"
        >
          Minju Kim
        </a>
        .<br />
        Looking for designer...
      </footer>
    </div>
  );
}

export default App;
