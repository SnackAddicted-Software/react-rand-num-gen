// Import needed files/packages.
import './App.css'
import HandleClick from './HandleClick'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your number is: {null}
        </p>
        <input id="maxnumbox" type="number"></input>
        <button onClick={HandleClick}>Generate Number</button>
      </header>
    </div>
  );
}
