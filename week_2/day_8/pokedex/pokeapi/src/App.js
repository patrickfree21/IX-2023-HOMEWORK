
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeInput from './components/PokeInput';


function App() {
  
  return (
    <div className="container container-fluid bg-danger text-center text-white p-5">
      <h1> Pokemon </h1>
      <PokeInput/>
    </div>
  );
}

export default App;
