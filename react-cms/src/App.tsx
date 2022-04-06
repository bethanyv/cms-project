import './App.css';
import TripsComponent from './components/TripsComponent';

function App() {
  // let loadedTrips: { place: string, startDate: string }[] = [];

  // const renderTrips = () => {
  //   let tripList: string[] = [];
  //   loadedTrips.map(trip => {
  //       return tripList.push(`<div key=${trip.place}>You're going to ${trip.place} on ${trip.startDate}!</div>`)
  //   })
  //   console.log(tripList)
  //   return tripList;
  // };

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