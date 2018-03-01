import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class Results extends Component{

  state = { currentScore: 0, mute: false }

  Play() {
    Actions.play();
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding}/>
        <Text style={styles.scoreText}>You Lasted</Text>
        <View style={styles.paddingHalf}/>
        <Text style={styles.scoreText}>{this.props.snapShot}</Text>
        <View style={styles.paddingHalf}/>
        <Text style={styles.scoreText}>Seconds</Text>
        <View style={styles.padding}/>
        <Button
          title="PLAY AGAIN"
          large
          textStyle={{ fontWeight: "700" }}
          onPress={() => this.Play()}
          buttonStyle={{
            backgroundColor: "#41D3B7",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    scoreText: {
      fontSize: 40,
      textAlign: 'center'
    },
    padding: {
      paddingTop: 20,
      paddingBottom: 20
    },
    paddingHalf: {
      paddingTop: 10,
      paddingBottom: 10
    },
    footerText: {
      fontSize: 25,
      color: '#D0D3D4'
    }
});

export default Results
