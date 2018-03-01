import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';
import { Asset } from 'expo';

// This code is pretty simple to understand
class Timer extends Component {

  mixins: [TimerMixin];

  state = { time: 30, playerTime: 0 };

  componentDidMount() {
   this.inte =  setInterval(() => this.timeCap() , 1000);
  }

  timeCap() {
    this.setState({
      time: this.state.time - 1,
      playerTime: this.state.playerTime + 1
    })
    if(this.state.time < 1) {
      this.callRedirect();
    }
  }


  negative5Seconds() {
    this.setState({
      time: this.state.time - 5
    })
  }

  negative10Seconds() {
    this.setState({
      time: this.state.time - 10,
    })
  }

  positiveSeconds() {
    this.setState({
      time: this.state.time + 5
    })
  }

  callRedirect() {
    const snapShot = this.state.playerTime
    clearInterval(this.inte);
    const{ timerDone } = this.props;
    //Passing the highscore to next page and calling the next page with Actions.results
    Actions.results({ snapShot });
  }

  render() {
    if(this.state.time <= 0) {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1}}>
          <Text style={styles.timerText}>0</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1}}>
        <Text style={styles.timerText}>{this.state.time}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    timerText: {
      fontSize: 40,
      textAlign: 'center',
    },
    playerLifeText: {
      fontSize: 40,
      textAlign: 'center'
    }
});
export default Timer;
