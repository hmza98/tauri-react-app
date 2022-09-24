import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api';


function App() {
  const handleBECalls = async () => {
    const result = await invoke('greet', { name: 'Hamza'});
    console.log(result);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React+ tauri
        </a>
        <button onClick={() => handleBECalls()}>
          Click to call BE
        </button>
      </header>
    </div>
  );
}

export default App;
