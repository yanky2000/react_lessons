import React from 'react';
import Article from './Article';
import article from '../articles';


function Post() {
    return (
        <div>
            <h1>Post</h1>
            <Article 
                text={article[0]} 
                foo="BAR" 
                flag/>
        </div>
    )
}

export default Post