import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBar/SearchBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
