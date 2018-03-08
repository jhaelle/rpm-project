import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import './styles.css';
import Dashbord from './component/dashboard';

class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <Dashbord />
      </div>
    );
  }
}

export default App;
