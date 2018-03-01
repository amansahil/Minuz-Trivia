import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// A scene is used for initating a screen and is only used once through the app and stored below
// This lets react native router flux know what screens are there and it uses magic to switch between them
// Below is convention , you first call the router tag then mention all scenes in a parent scene tag with the key Root
import Play from './components/Play';
import Results from './components/Results';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="play"
          hideNavBar={true}
          component={Play}
          title="Play"
          panHandlers={null}
          Initial
        />

        <Scene
          key="results"
          hideNavBar={true}
          component={Results}
          title="Results"
          panHandlers={null}
        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
