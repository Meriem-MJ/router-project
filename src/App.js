import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Description from './components/Description'

function App(movieData) {

  return (
    <Router>
      <div>
        <Route path='/' exact component={Home}/>
        <Route path={`/:movieTitle`} render={ (props) => <Description data= {movieData} {...props} />}/>
      </div>
    </Router>
  );
}

export default App;