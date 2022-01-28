/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, _Text} from 'react-native';
import Header from './src/header';
import PropsChild from './src/propsChild';

class App extends Component {
  state = {
    sampleText: 'Hello World!',
    sampleBoolean: false,
    sampleNum: 1,
  };

  inputText = () => {
    return this.state.sampleBoolean ? (
      <Text>sampleBoolean is true</Text>
    ) : (
      <Text>sampleBoolean is false</Text>
    );
  };

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text changed!',
        sampleBoolean: true,
      });
    } else {
      this.setState({
        sampleText: 'Hello world!',
        sampleBoolean: false,
      });
    }
  };

  onAdd = () => {
    console.log('Hello debugger!');
    debugger;
    this.setState(prevState => {
      // sampleNum: sampleNum + 1
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <PropsChild
          cText={this.state.sampleText}
          cState={this.changeState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anthoerSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default App;
