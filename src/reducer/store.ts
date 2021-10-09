import { createStore } from "redux";
import * as R from "ramda";
import * as uuid from "uuid";
import * as Tone from "tone";

import * as AllSynthravagenzaActions from "./actions";

export interface IOscillator {
  oscillatorKey: string;
  oscillator: Tone.Oscillator;
}

export interface IOscillators {
  [oscillatorKey: string]: IOscillator;
}

export interface ISynthravagenzaReducerState {
  oscillators: IOscillators;
}

const oscillatorsPath = ["oscillators"];

const oscillatorPath = (oscillatorKey: string) =>
  oscillatorsPath.concat(oscillatorKey);

const addOscillator = () => (state: ISynthravagenzaReducerState) => {
  const oscillatorKey = uuid.v4();

  const oscillator = {
    oscillator: new Tone.Oscillator(),
    oscillatorKey,
  };

  return R.assocPath(oscillatorPath(oscillatorKey), oscillator, state);
};

const playOscillator =
  (oscillatorKey: string) => (state: ISynthravagenzaReducerState) => {
    const oscillator = state.oscillators[oscillatorKey].oscillator;
    oscillator.toDestination().start();
    new Tone.Signal({
      value: "C4",
      units: "frequency",
    }).connect(oscillator.frequency);

    return state;
  };

const stopOscillator =
  (oscillatorKey: string) => (state: ISynthravagenzaReducerState) => {
    const oscillator = state.oscillators[oscillatorKey].oscillator;
    oscillator.toDestination().stop();

    return state;
  };

const createInitialState = (): ISynthravagenzaReducerState => ({
  oscillators: {},
});

const SynthravagenzaReducer = (
  state = createInitialState(),
  action: AllSynthravagenzaActions.AllSynthravagenzaActions
): ISynthravagenzaReducerState => {
  switch (action.type) {
    case AllSynthravagenzaActions.ADD_OSCILLATOR:
      return addOscillator()(state);
    case AllSynthravagenzaActions.PLAY_OSCILLATOR:
      return playOscillator(action.payload.oscillatorKey)(state);
    case AllSynthravagenzaActions.STOP_OSCILLATOR:
      return stopOscillator(action.payload.oscillatorKey)(state);
    default:
      return state;
  }
};

export const appStore = createStore(SynthravagenzaReducer);
