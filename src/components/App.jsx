import React from "react";
import Entry from "./Entry";
import Emoji from "../emojipedia";

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry
          emoji={Emoji[0].emoji}
          name={Emoji[0].name}
          description={Emoji[0].meaning}
        />
        <Entry
          emoji={Emoji[1].emoji}
          name={Emoji[1].name}
          description={Emoji[1].meaning}
        />
        <Entry
          emoji={Emoji[2].emoji}
          name={Emoji[2].name}
          description={Emoji[2].meaning}
        />
      </dl>
    </div>
  );
}

export default App;
