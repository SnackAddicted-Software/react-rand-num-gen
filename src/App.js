// Import needed files/packages.
import './App.css';

var num;

function HandleClick() {
  num = 0;
  var maxNumber = this.App.maxnumbox;
  num = Math.floor((Math.random() * maxNumber) + 1);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your number is: {num}
        </p>
        <input id="maxnumbox" type="number"></input>
        <button onClick={HandleClick}>Generate Number</button>
      </header>
    </div>
  );
}


export default App;
