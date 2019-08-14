import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Footer from './pages/footer'
import Posts from './pages/posts'
import Topics from './pages/topics';
import PageNotFound from './pages/PageNotFound';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/footer" component={Footer} />
      <Route path="/posts" component={Posts} />
      <Route path='/post/:title' component={Topics} />
      <Route path='/404' component={PageNotFound} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))