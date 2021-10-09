import * as React from "react";
import { useDispatch } from "react-redux";
import { stopOscillator } from "../reducer/actions";

interface IStopOscillatorButtonProps {
  oscillatorKey: string;
}

const StopOscillatorButton = (props: IStopOscillatorButtonProps) => {
  const { oscillatorKey } = props;
  const dispatch = useDispatch();

  const onClick = () => dispatch(stopOscillator(oscillatorKey));

  return <button onClick={onClick}>Stop!!</button>;
};

export default StopOscillatorButton;
