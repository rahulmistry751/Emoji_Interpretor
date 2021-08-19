import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "French fries",
  "🌭": "Hot dog",
  "🍿": "popcorn",
  "🧇": "waffle",
  "🥞": "pancakes",
  "🥯": "bagel",
  "🥖": "baguette bread",
  "🌮": "taco",
  "🍣": "sushi",
  "🍛": "curry rice",
  "🥨": "pretzel"
};
var emojis = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("Meaning will show here");
  function showEmoji(event) {
    const myemoji = event.target.value;
    setEmoji(emojiDictionary[myemoji]);
  }
  function showEmojiMeaning(inputEmoji) {
    setEmoji(emojiDictionary[inputEmoji]);
  }
  function clearMeaning() {
    setEmoji("Meaning will show here");
  }
  return (
    <div className="App">
      <h1>Emojikosh</h1>
      <input
        onChange={showEmoji}
        onClick={clearMeaning}
        placeholder={"put an emoji here to know the meaning"}
      />
      <h2>{emoji}</h2>
      <h3>Recent emojis</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => showEmojiMeaning(emoji)}
            key={emoji}
            style={{
              margin: "2rem 1rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
