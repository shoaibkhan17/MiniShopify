import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent'
import TopMenu from './components/TopMenu';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <TopMenu title={"Setup your own shop!"}/>
      <SignIn></SignIn>
      <UserComponent />
    </div>
  );
}

export default App;
