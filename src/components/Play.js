import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Deck from './Deck';// We call the deck component, which is responsible for the cards
import Timer from './Timer';// We are calling the timer component

// This is the question bank , for the order value in the array we genrate a random number to genrate a radnom order for questions, which is futher explained in the deck components
// Add more for a better game
const DATA = [
  { id: 1, text: 'Who is the current Chief Executive Officer of Apple ?', A1: 'Tim Cook', P2: 'Jonathan Ive', P3: 'Steve Jobs', order: Math.floor(Math.random() * 5) + 0 },
  { id: 2, text: 'Who invented the remote control on the data 1898 ?', A1: 'Nikola Tesla', P2: 'Thomas Edison', P3: 'Albert Einstien', order: Math.floor(Math.random() * 5) + 0 },
  { id: 3, text: 'What is the chemical formula for distilled water ?', A1: 'H2O', P2: 'CO2', P3: 'H2O2', order: Math.floor(Math.random() * 5) + 0 },
  { id: 4, text: 'Who is the most suscribed youtuber for the year of 2018?', A1: 'PewDiePie', P2: 'Germán Garmendia', P3: 'NigaHiga', order: Math.floor(Math.random() * 5) + 0 },
  { id: 5, text: 'Who is the current Chief Executive Officer of yahoo ?', A1: 'Marissa Mayer', P2: 'Scott Thompson', P3: 'Jerry Yang', order: Math.floor(Math.random() * 5) + 0 },
  { id: 6, text: 'Which game inspired Shigeru Miyamoto\'s Mario character ?', A1: 'Donkey Kong', P2: 'Zelda', P3: 'Pokemon', order: Math.floor(Math.random() * 5) + 0 },
  { id: 7, text: 'Where would you find the Sea of Tranquility ?', A1: 'The Moon', P2: 'Mars', P3: 'Venus', order: Math.floor(Math.random() * 5) + 0 },
  { id: 9, text: 'What is the painting \'La Gioconda\' more usually known as ?', A1: 'Mona Lisa', P2: 'The Last Supper', P3: 'The Scream', order: Math.floor(Math.random() * 5) + 0 },
  { id: 10, text: 'Name the director of the Lord of the Rings trilogy.', A1: 'Peter Jackson', P2: 'Christopher Nolan', P3: 'Jon Favreau', order: Math.floor(Math.random() * 5) + 0 },

];

export default class Play extends React.Component {

 state = { positive: 0 , negative: 0 }

  swipe = () => {
    this.child.negative5Seconds();
    // Calls a function in timer
  }

  wrongAnswer = () => {
    this.child.negative10Seconds();
    // Calls a function in timer
  }

  correctAnswer = () => {
    this.child.positiveSeconds();
    // Calls a function in timer
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <Timer
        ref={instance => { this.child = instance; }}
        />
        <View style={styles.padding} />
        <Deck
          data={DATA}
          onSwipeLeft={()=> this.swipe()}
          onSwipeRight={() => this.swipe()}
          correctAnswer={()=> this.correctAnswer()}
          wrongAnswer={()=> this.wrongAnswer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    padding: {
      paddingTop: 20,
      paddingBottom: 20
    },
    timerText: {
      fontSize: 40,
      textAlign: 'center'
    }
});
