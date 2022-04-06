import './App.css';
import TripsComponent from './components/TripsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Bethany's place!
        </p>
        <TripsComponent />
        <div className="target">{`I LOVE Cameron <3`}</div>
      </header>
    </div>
  );
}

export default App;