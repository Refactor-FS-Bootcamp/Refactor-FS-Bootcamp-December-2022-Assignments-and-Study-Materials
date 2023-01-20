import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
      </Provider>
    </div>
  );
}

export default App;
