import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Description from './components/Description'

function App() {

  return (
    <Router>
      <div>
        <Route path='/' exact component={Home}/>
        <Route path='/Description/:title' component={Description} />
      </div>
    </Router>
  );
}

export default App;