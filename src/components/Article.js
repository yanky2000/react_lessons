import React from 'react';


function Article(props) {
    const {article}=props
    const p = <p> creation date: {(new Date()).toDateString()}</p>
    return (
        <div>
            <h2 style={{color:'red'}}>this is Article!</h2>
            <p>{article.title}</p>
            <p>{article.body}</p>
            {p}
        </div>
    )
}

export default Article