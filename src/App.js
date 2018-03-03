//Nice to see you here
import React from 'react';
import { View } from 'react-native';
import Router from './Router'; //This manages the scenes, switch to the file to learn more
import Play from './components/Play';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <Router>// This tag is used on top of your initial screen , what it basically does is switch the tag bettween it for navigation
          <Play />// Intital screen , kind of
        </Router>
      </View>
  );
};

export default App;
