import PlayOscillatorButton from "./PlayOscillatorButton";
import StopOscillatorButton from "./StopOscillatorButton";

import "./Oscillator.css";

interface IOscillatorProps {
  oscillatorKey: string;
}

const Oscillator = (props: IOscillatorProps) => {
  const { oscillatorKey } = props;

  return (
    <div className="oscillator-controls">
      <PlayOscillatorButton oscillatorKey={oscillatorKey} />
      <StopOscillatorButton oscillatorKey={oscillatorKey} />
    </div>
  );
};

export default Oscillator;
