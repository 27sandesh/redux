const { configureStore } = require("@reduxjs/toolkit");

const ConuterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 2,
    };
  }
  return state;
};

const store = configureStore({
  reducer: ConuterReducer,
});

const ConuterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(ConuterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
