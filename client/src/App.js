import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Location from './components/Location';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Location/>
      <History/>
    </div>
  );
}

export default App;
