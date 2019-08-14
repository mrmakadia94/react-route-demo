import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class PostDetails extends Component {
  render () {
    let posts = this.props.posts
    console.log(posts);
    let postLoop = posts.map((post, index)=> {
      return (
        <div class="col-md-12 col-sm-6">
          <div class="about-item">
            <div class="about-icon">
              <span class="icon icon-display"></span>
            </div>
            <div class="about-text">
              <h3> {renderHTML(post.title.rendered)} </h3>
              <p>{renderHTML(post.content.rendered)}</p>
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

export default PostDetails;