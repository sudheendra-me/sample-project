import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store'; 
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigator';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
    <RootNavigator />  
    </NavigationContainer>
  </Provider>
);

export default App;
