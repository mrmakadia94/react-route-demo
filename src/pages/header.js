import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logoImage from '../images/logo.jpg';
import '../App.css';
import '../css/responsive.css';
import '../css/custom.css';

class Header extends Component {
  render() {
    return (
    <header class="header header_style_01">
        <nav class="megamenu navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand"><img src={logoImage} alt="logo"/></Link>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                      <li><Link to="/" className="active">Home</Link></li>
                      <li><Link to="/posts">Posts</Link></li>
                      <li><Link to='/topics'>Topics</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
  }
}

export default Header;
