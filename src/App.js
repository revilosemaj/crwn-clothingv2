import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const Hatspage = (props) => {
  console.log(props)
  return <h1>Hats page</h1>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
