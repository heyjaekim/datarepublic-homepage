import Homepage from './homepage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={'/'} >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;