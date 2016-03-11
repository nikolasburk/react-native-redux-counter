'use strict';

// react components
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

// redux
import { createStore } from 'redux'
import { connect } from 'react-redux';

// actions
import { increment, decrement, increase, decrease } from '../actions/counter.actions';

class Counter extends Component {

  constructor(props) {
    super(props);
    console.log('Counter - initialized with props: ', props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.increase.bind(this, +this.props.inputValue)}>
          <Text style={styles.buttons}>+</Text>
        </TouchableHighlight>
        <Text style={styles.main}>{this.props.displayCount}</Text>
        <TouchableHighlight onPress={this.props.decrease.bind(this, +this.props.inputValue)}>
          <Text style={styles.buttons}>-</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapReduxStoreToProps = (reduxStore) => {
  return {
    displayCount: reduxStore.counterValue
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Counter - mapDispatchToProps: ', this.props);
  return {
    increment: () => {
      console.log('Counter - dispatch increment');
      dispatch( increment() );
    },
    decrement: () => {
      console.log('Counter - dispatch decrement');
      dispatch( decrement() );
    },
    increase: (inputValue) => {
      console.log('Counter - dispatch increase: ' + inputValue);
      dispatch( increase(inputValue) );
    },
    decrease: (inputValue) => {
      console.log('Counter - dispatch decrease: ' + inputValue);
      dispatch( decrease(inputValue) );
    }
  }
}

export default connect(
  mapReduxStoreToProps,
  mapDispatchToProps
)(Counter);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    fontSize: 20,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  main: {
    fontSize: 50,
    backgroundColor: 'green'
  },
});
