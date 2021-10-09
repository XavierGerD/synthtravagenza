export interface AnyAction {
  type: string;
  payload: any;
}

const createAction = (type: string, params?: any): AnyAction => ({
  type,
  payload: { ...params },
});

export const ADD_OSCILLATOR = "ADD_ACTION";
export const PLAY_OSCILLATOR = "PLAY_OSCILLATOR";
export const STOP_OSCILLATOR = "STOP_OSCILLATOR";

type AddOscillator = ReturnType<typeof addOscillator>;
export const addOscillator = () => createAction(ADD_OSCILLATOR);

type PlayOscillator = ReturnType<typeof playOscillator>;
export const playOscillator = (oscillatorKey: string) =>
  createAction(PLAY_OSCILLATOR, { oscillatorKey });

type StopOscillator = ReturnType<typeof stopOscillator>;
export const stopOscillator = (oscillatorKey: string) =>
  createAction(STOP_OSCILLATOR, { oscillatorKey });

export type AllSynthravagenzaActions =
  | PlayOscillator
  | AddOscillator
  | StopOscillator;
