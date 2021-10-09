import * as React from "react";
import { useDispatch } from "react-redux";
import { addOscillator } from "../reducer/actions";

const AddOscillatorButton = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addOscillator());

  return <button onClick={onClick}>Add oscillator</button>;
};

export default AddOscillatorButton;
