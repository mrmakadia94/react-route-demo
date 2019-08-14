import React, { Component } from 'react';
import banner from '../images/pic10.jpg';
import '../css/bootstrap.min.css';
import '../App.css';
import '../css/responsive.css';
import '../css/custom.css';

class Index extends Component {
  render() {
    return (
      <div id="about" class="section wb">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="message-box">
                        <h4>About Us</h4>
                        <h2>Welcome to GoodWEB Solutions </h2>
                        <p class="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>

                        <a href="#services" class="btn btn-light btn-radius btn-brd grd1">Learn More</a>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="post-media wow fadeIn">
                        <img src={banner} alt="" class="img-responsive img-rounded"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Index;