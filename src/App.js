import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieDescription from './components/MovieDescription';

function App() {

  return (
    <Router>
      
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie/:id' component={MovieDescription}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;