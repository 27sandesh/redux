const { configureStore } = require("@reduxjs/toolkit");

const ConuterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
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
store.dispatch({ type: "increment" });
