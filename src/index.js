import React from 'react';
import { render } from 'react-dom';
import { Post } from './components/Post';


// function Article() {
//     const p = <p> creation date: {(new Date()).toDateString()}</p>
//     return (
//         <div>
//             <h1 style={{color:'red'}}>Hello! this is Article</h1>
//             <h2>my naming</h2>
//             {p}
//         </div>
//     )
// }

// function Post() {
//     return (
//         <div>
//             <h1>Post</h1>
//             <Article />
//         </div>
//     )
// }

render(<Post/>, document.getElementById('root'))