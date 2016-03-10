const initialState = { counterValue: 0 };

const counterReducer = (state = initialState, action) => {
  console.log('calling root reducer: ', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
      ...state,
      counterValue: state.counterValue + 1
      };
    case 'DECREMENT':
      return {
      ...state,
      counterValue: state.counterValue - 1
      };
    case 'INCREASE':
      return {
      ...state,
      counterValue: state.counterValue + action.increaseCount
      };
    case 'DECREASE':
      return {
      ...state,
      counterValue: state.counterValue - action.decreaseCount
      };
    default:
      return state;
  }
}
