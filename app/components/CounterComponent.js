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
import { increment, decrement } from '../actions/counter.actions';

class Counter extends Component {

  constructor(props) {
    super(props);
    console.log('initialized counter with props: ', props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.increment.bind(this)}>
          <Text style={styles.buttons}>+</Text>
        </TouchableHighlight>
        <Text style={styles.main}>{this.props.displayCount}</Text>
        <TouchableHighlight onPress={this.props.decrement}>
          <Text style={styles.buttons}>-</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      console.log('dispatch increment');
      dispatch( increment() );
    },
    decrement: () => {
      console.log('dispatch decrement');
      dispatch( decrement() );
    }
  }
}

export default connect(
  (reduxStore) => {
    return {
      displayCount: reduxStore.counterValue,
    }
  },
  mapDispatchToProps
)(Counter);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  main: {
    fontSize: 50,
    marginBottom: 5,
  },
});
