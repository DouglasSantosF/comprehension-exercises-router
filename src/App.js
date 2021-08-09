import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/about' component={About} />
        <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage="Good Morning"/>} />
        <Route exact path='/' component={Home}/>
      </BrowserRouter>  
    );
  }
}

export default App;
