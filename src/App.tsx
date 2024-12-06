import { Provider } from 'react-redux';

import { registerRootComponent } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@/redux/store';
import { Router } from '@/routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(App);
