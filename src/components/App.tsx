import React from "react";
import AddOscillatorButton from "./AddOscillatorButton";
import Oscillators from "./Oscillators";

const App = () => {
  return (
    <div className="App">
      <Oscillators />
      <AddOscillatorButton />
    </div>
  );
};

export default App;
