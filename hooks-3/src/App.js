import './App.css';
// import GrandParent from './components/GrandParent';
import React, { useReducer } from 'react'
import GrandParent1 from './components/GrandParent1';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <UserContext.Provider value="Nabendu">
        <ChannelContext.Provider value="TWD">
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CountContext.Provider value={{ count, dispatch }}>
          <GrandParent1 />
      </CountContext.Provider>
    </div>
  );
}

export default App;
