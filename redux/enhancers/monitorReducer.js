const round = number => Math.round(number * 100) / 100;
const monitorReducersEnhancer = createStore => (
  reducer,
  initialState,
  enhancer,
) => {
  const monitoredReducer = (state, action) => {
    // const start = global.performance.now();
    const newState = reducer(state, action);
    // const end = global.performance.now();
    // const diff = round(end - start);
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('reducer process time:', diff);
    // }
    return newState;
  };
  return createStore(monitoredReducer, initialState, enhancer);
};
export default monitorReducersEnhancer;
