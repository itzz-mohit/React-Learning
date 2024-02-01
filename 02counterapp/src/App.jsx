import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // let [count, setCount] = useState(0);

  const addValue = () => {
    //count = count + 1;
    //if (count < 10) setCount(count + 1);

    setCount(count < 10 ? count + 1 : count);
  };

  const removeValue = () => {
    //count = count - 1;
    //if (count > 0) setCount(count - 1);

    setCount(count > 0 ? count - 1 : count);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value {count}</h3>
      <button onClick={addValue}>Add</button>
      <br></br>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
