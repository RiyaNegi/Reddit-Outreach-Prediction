import './App.css';
import NavSlide from './components/NavSlide'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"

function App(props) {
  return (
    <div className="App">
      <div>
        <NavSlide />
        <Home />
      </div>
    </div>
  );
}

export default App;
