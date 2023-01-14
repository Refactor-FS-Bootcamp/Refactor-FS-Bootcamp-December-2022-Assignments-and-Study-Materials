import './App.css';
import PostForm from './components/PostForm';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      <PostForm />
    </div>
  );
}

export default App;
