import React from 'react';
import Layout from './layout.js';
import PostDetails from './postDetails';



class Topics extends React.Component {

  constructor () {
    super();
    this.state = {
      user: []
    }
 
  }

  componentDidMount (){

    const title  = this.props.match.params.title;
    const bookUrl = 'https://react-wordpress.000webhostapp.com/wp-json/wp/v2/posts/?slug=' + title;
    
    fetch(bookUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        user: response
      })
    })
  }

  render() {

    return(
        <Layout>
          <div id="test-box" class="section wb">
            <div class="container">
                <div class="section-title text-center">
                    <PostDetails posts={this.state.user} />
                </div>
            </div>
          </div>
        </Layout>
  );
  }
  
}
export default Topics;
// export default ({match: {params:{title}}}) => {
 

//   // renderPost(){

//   //   const bookUrl = 'http://juha.blog/wp-json/wp/v2/posts/?slug=' + {title};
  
//   //   fetch(bookUrl)
//   //   .then(response => response.json())
//   //   .then(response => {
//   //     this.setState({
//   //       books: response
//   //     })
//   //   })
//   // }

//   if(!title){
//       return <Redirect to={{pathname: "/404" } } />;
//   }
  

//   return(
//     <Layout>
//       <div id="test-box" class="section wb">
//             <div class="container">
//                 <div class="section-title text-center">
//                     <h3>{title}</h3>
//                     <p class="lead"></p>
//                     {/* {this.renderPost()} */}
//                 </div>
//             </div>
//         </div>
//     </Layout>
//   );
// }; 