import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';
import { store } from './src/store/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      </Provider>
  );
};

export default App;
 


