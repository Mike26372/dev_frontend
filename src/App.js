import React from "react";
import { useStyletron } from "styletron-react";

function App() {
  const [css] = useStyletron();
  return (
    <div>
      <div className={css({ color: "red" })}>Hello</div>
    </div>
  );
}

export default App;
