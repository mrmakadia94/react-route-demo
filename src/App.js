import React, { Component } from 'react';
import './App.css';
import Layout from './pages/layout.js';
import Index from './pages/index.js';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="inner">
          <Layout>
            <Index />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
