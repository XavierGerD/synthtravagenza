import * as R from "ramda";
import { ISynthravagenzaReducerState, IOscillators } from "./store";

const oscillatorsPath = () => ["oscillators"];

export const getOscillators = (state: ISynthravagenzaReducerState) =>
  R.path<IOscillators>(oscillatorsPath(), state);
