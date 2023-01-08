import { useState } from "react";
import Counter from './Counter'


// MOUNTING
// UNMOUNTING
// UPDATE
// USE EFFECT

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Show/HIde</button>

      {state ? <Counter /> : null}
    </div>
  );
}

export default App;
