import { createStore } from "./redux.legacy-esm.min.js";
import {
  counterIncrement,
  counterDecrement,
  counterSetZero,
} from "../Redux/actionTypes.js";
import {
  decrementAction,
  incrementAction,
  setZeroAction,
} from "../Redux/actionCreators.js";

const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");
const number = document.getElementById("num");

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterIncrement: {
      return state + 1;
    }
    case counterDecrement: {
      return state - 1;
    }
    case counterSetZero: {
      return state - state;
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrementAction());
  number.innerHTML = store.getState();
});

resetBtn.addEventListener("click", () => {
  store.dispatch(setZeroAction());
  number.innerHTML = store.getState();
});

incrementBtn.addEventListener("click", () => {
  store.dispatch(incrementAction());
  number.innerHTML = store.getState();
});
