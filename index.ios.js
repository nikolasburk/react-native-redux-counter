/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

// react
import React, {
 AppRegistry,
 Component
} from 'react-native';

// redux
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux';

// custom
import Counter from './app/components/CounterComponent'


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
    default:
      return state;
  }
}

// initialize redux store
const store = createStore(counterReducer)
store.dispatch({ type: 'INCREMENT' })

class CounterApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('Counter', () => CounterApp);
