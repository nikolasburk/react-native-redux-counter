/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, {
 AppRegistry,
 Component,
 StyleSheet,
 Text,
 View,
 TouchableHighlight,
} from 'react-native';

import { createStore } from 'redux'
import { connect } from 'react-redux';
import Counter from './app/CounterComponent'
import { Provider } from 'react-redux';

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
