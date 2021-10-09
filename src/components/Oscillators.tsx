import { useSelector } from "react-redux";

import { getOscillators } from "../reducer/selectors";
import { IOscillator, ISynthravagenzaReducerState } from "../reducer/store";
import Oscillator from "./Oscillator";

import "./Oscillators.css";

const Oscillators = () => {
  const oscillators = useSelector((state: ISynthravagenzaReducerState) =>
    getOscillators(state)
  );

  if (!oscillators) {
    return null;
  }

  return (
    <div className="oscillators-container">
      {Object.values(oscillators).map((oscillator: IOscillator) => (
        <Oscillator oscillatorKey={oscillator.oscillatorKey} />
      ))}
    </div>
  );
};

export default Oscillators;
