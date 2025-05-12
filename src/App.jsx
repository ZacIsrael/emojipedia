import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // In a real application, this data would be getting fetched from the server
  const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
  ];

  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                💪
              </span>
              <span>Tense Biceps</span>
            </dt>
            <dd>
              “You can do that!” or “I feel strong!” Arm with tense biceps. Also
              used in connection with doing sports, e.g. at the gym.
            </dd>
          </div>
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                🙏
              </span>
              <span>Person With Folded Hands</span>
            </dt>
            <dd>
              Two hands pressed together. Is currently very introverted, saying
              a prayer, or hoping for enlightenment. Is also used as a “high
              five” or to say thank you.
            </dd>
          </div>
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                🤣
              </span>
              <span>Rolling On The Floor, Laughing</span>
            </dt>
            <dd>
              This is funny! A smiley face, rolling on the floor, laughing. The
              face is laughing boundlessly. The emoji version of “rofl“. Stands
              for „rolling on the floor, laughing“.
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export default App;
