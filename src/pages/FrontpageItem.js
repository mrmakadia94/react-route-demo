import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html';


class FrontpageItem extends Component {
  render () {
    let posts = this.props.posts

    let postLoop = posts.map((post, index)=> {
      
      return (
        <div class="col-md-3 col-sm-6">
          <div class="about-item">
            <div class="about-icon">
              <span class="icon icon-display"></span>
            </div>
            <div class="about-text">
              <h3> <a href={'post/' + post.slug}>{renderHTML(post.title.rendered)} </a></h3>
              <p>{renderHTML(post.excerpt.rendered)}</p>
              <Link to={'post/' + post.slug} className="btn btn-light btn-radius btn-brd grd1">Learn More</Link>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div class="row text-center">
          {postLoop}
      </div>
    )
  }

}

export default FrontpageItem;