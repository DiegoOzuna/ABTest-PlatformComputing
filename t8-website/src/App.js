import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Website">
      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 1
          </p>
        </header>
      </div>
      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 2
          </p>
        </header>
      </div>
      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 3
          </p>
        </header>
      </div>
      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 4
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
