import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Routes
import Routes from './Routes';

// Vendor dependencies
import "./Vendor";
// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss'


class App extends Component {
  render() {
    const basename = process.env.NODE_ENV === 'development' ? '/' : (process.env.PUBLIC_URL || '/');

    return (
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    );

  }
}

export default App;
