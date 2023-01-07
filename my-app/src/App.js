import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greetings name="JavaScript">Language of the Web</Greetings>
      <Greetings name="Golang" />
      <Greetings name="Swift" />
      <hr />
      <Welcome name="React">JavaScript Library for web-apps</Welcome> 
      <Welcome name="React Native" /> 
      <Welcome name="Angular" /> 
    </div>
  );
}

export default App;
