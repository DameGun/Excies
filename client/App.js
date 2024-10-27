import { Provider } from 'react-redux';

import store from './src/redux/store';
import Routes from './src/routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
