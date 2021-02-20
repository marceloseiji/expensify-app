import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = ({ reset = 0 } = {}) => ({
  type: "RESET",
  reset,
});

const setCount = ({ set = 101 } = {}) => ({
  type: "SET",
  set,
});

const countReduder = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.set,
      };
    case "RESET":
      return {
        count: action.reset,
      };
    default:
      return state;
  }
};

const store = createStore(countReduder);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount({ reset: 0 }));
store.dispatch(setCount({ set: 101 }));
