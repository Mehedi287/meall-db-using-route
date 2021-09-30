
import './App.css';
import Header from './Components/Header/Header';
import Resturent from './Components/Resturente/Resturent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealDetail from './Components/MealDetails/MealDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Resturent></Resturent>
          </Route>
          <Route path="/resturent">
            <Resturent></Resturent>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/details/:id">
            <MealDetail></MealDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
