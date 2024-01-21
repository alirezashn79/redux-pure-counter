import {
  counterDecrement,
  counterIncrement,
  counterSetZero,
} from "./actionTypes.js";

const incrementAction = () => ({ type: counterIncrement });
const decrementAction = () => ({ type: counterDecrement });
const setZeroAction = () => ({ type: counterSetZero });

export { incrementAction, decrementAction, setZeroAction };
