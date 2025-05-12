import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Emoji from "./components/Emoji";

function App() {
  const [count, setCount] = useState(0);

  // In a real application, this data would be getting fetched from the server
  const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
    },
  ];

  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          {/* Create an Emoji component for each emoji object in the emojipedia array*/}
          {emojipedia.map((item, i) => (
            <Emoji
              key={i}
              emoji={item.emoji}
              name={item.name}
              meaning={item.meaning}
            />
          ))}
        </dl>
      </div>
    </>
  );
}

export default App;
