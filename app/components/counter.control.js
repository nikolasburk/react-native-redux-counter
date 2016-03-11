import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from 'react-native';

class InputBox extends Component {

  handleTextChange(text) {
    this.props.inputValueUpdate(text);
  }

  upArrowPressed() {
    let currentValue = +this.props.inputValue;
    this.props.inputValueUpdate(''+(++currentValue));
  }

  downArrowPressed() {
    let currentValue = +this.props.inputValue;
    this.props.inputValueUpdate(''+(--currentValue));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput keyboardType='number-pad' style={styles.textField} onChangeText={this.handleTextChange.bind(this)} defaultValue={this.props.inputValue} />
        <View style={styles.arrowButtonContainer}>
          <TouchableHighlight onPress={this.upArrowPressed.bind(this)}>
            <Text style={styles.arrowButton}>↑</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.downArrowPressed.bind(this)}>
            <Text style={styles.arrowButton}>↓</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default class ControlHeader extends Component {

  render() {
    return (
      <View>
        <Text style={styles.infoText}>Increase / decrease by:</Text>
        <InputBox inputValue={this.props.inputValue} inputValueUpdate={this.props.inputValueUpdate} style={styles.inputBox} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  infoText: {
    flex: 1,
    fontSize: 20,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
  },
  textField: {
    flex: 1,
    width: 25,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center'
  },
  arrowButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  arrowButton: {
    fontSize: 17
  }
});
