import React, { Component } from 'react';
import WPAPI from './wpClient';
import FrontpageItem from './FrontpageItem';
import Layout from './layout';
import '../css/bootstrap.min.css';
import '../App.css';
import '../css/responsive.css';
import '../css/custom.css';

class Posts extends Component {
  
  constructor () {
    super();
    this.state = {
      books: []
    }
 
  }

  componentDidMount (){

    const bookUrl = WPAPI.books;

    fetch(bookUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        books: response
      })
    })
  }
 
  render() {

    
    return (
          <Layout>
            <div id="about" class="section wb">
              <div class="container">
                <FrontpageItem posts={this.state.books} />
                </div>
            </div>
          </Layout>
          
    );
  }
}

export default Posts;
