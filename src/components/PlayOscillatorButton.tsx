import * as React from "react";
import { useDispatch } from "react-redux";
import { playOscillator } from "../reducer/actions";

interface IPlayOscillatorButtonProps {
  oscillatorKey: string;
}

const PlayOscillatorButton = (props: IPlayOscillatorButtonProps) => {
  const { oscillatorKey } = props;
  const dispatch = useDispatch();

  const onClick = () => dispatch(playOscillator(oscillatorKey));

  return <button onClick={onClick}>Play!</button>;
};

export default PlayOscillatorButton;
