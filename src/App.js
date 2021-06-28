import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {/* <Route path="/ProductsPage" component={ProductsPage}></Route> */}
      </Switch>
      </Router>
    </>
  );
}

export default App;