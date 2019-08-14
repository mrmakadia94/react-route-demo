import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';


class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
export default Layout