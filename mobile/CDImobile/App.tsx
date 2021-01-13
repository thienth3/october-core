import { Provider } from 'react-redux';
import { store } from './src/config/redux';
import AppContainer from "./src/navigation/AppNavigation";
import React from 'react';
export default function App() {
  return (
      <Provider store={store}>
          <AppContainer/>
      </Provider>
  );
}