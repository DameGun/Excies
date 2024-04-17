import store from "./src/redux/store";
import Routes from "./src/routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
       <Routes />
    </Provider>
  )
}

export default App;