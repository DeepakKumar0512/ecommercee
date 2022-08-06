import React from 'react';
import '../style/App.css';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Payment from './Payment'
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route path="/payment"><Payment/></Route>
            <Route path="/"><Home/></Route>  
          </Switch>
      </div>
      </Router>
  );
}
export default App;
