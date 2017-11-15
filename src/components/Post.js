import React from 'react';
import Article from './Article';
import article from '../articles';


function Post() {
    return (
        <div>
            <h1>Post</h1>
            <Article article={article[0]}/>
        </div>
    )
}

export default Post