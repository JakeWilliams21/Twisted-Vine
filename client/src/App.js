import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Location from './components/Location';
import History from './components/History';
import WineBar from './components/WineBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Location/>
      <History/>
      <WineBar/>
    </div>
  );
}

export default App;
