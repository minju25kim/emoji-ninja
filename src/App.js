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
        <input name="emoji"></input>
        <button type="submit">Enter</button>
      </form>
      <div>
        user input<span>{emoji}</span>
      </div>
      <div>
        sliced emojis<span>{slice}</span>
      </div>
    </div>
  );
}

export default App;
