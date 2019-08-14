import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../App.css';
import '../css/responsive.css';
import '../css/custom.css';

class Footer extends Component {
  render() {
    return (
        
        <div class="copyrights">
          <div class="container">
              <div class="footer-distributed">
                  <div class="footer-left">                   
                      <p class="footer-company-name">© Untitled. All rights reserved.</p>
                  </div> 
              </div>
          </div>
        </div>
        
    );
  }
}

export default Footer;
