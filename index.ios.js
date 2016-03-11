/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

// react
import React, {
 AppRegistry,
 Component,
 View, Text,
 TextInput,
 StyleSheet
} from 'react-native';

// redux
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

// custom
import counterReducer from './app/reducers/counter.reducers'
import ControlHeader from './app/components/counter.control'
import Counter from './app/components/counter.main'


// initialize redux store
const store = createStore(counterReducer)

// root component
class CounterApp extends Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: '10' };
    console.log('CounterApp - did set initial state: ', this.state);
  }

  inputValueUpdate(text) {
    console.log('CounterApp - inputValueUpdate: ', text);
    this.setState({ inputValue: text });
  }

  render() {
    console.log('CounterApp - render input box with state: ', this.state);
    return (
      <Provider store={store}>
        <View style={styles.rootContainer}>
          <ControlHeader inputValue={this.state.inputValue} inputValueUpdate={this.inputValueUpdate.bind(this)} />
          <Counter inputValue={this.state.inputValue} />
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 25,
    flexDirection: 'column'
  }
});


AppRegistry.registerComponent('Counter', () => CounterApp);
