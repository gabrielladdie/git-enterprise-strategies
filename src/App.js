import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
	<!--This is the changed line-->
        <p> My name is Gabriell Yap and this is my project </p>
      </header>
    </div>
  );
}

export default App;
