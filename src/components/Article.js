import React from 'react';

function Article() {
    const p = <p> creation date: {(new Date).toDateString()}</p>
    return (
        <div>
            <h2 style={{color:'red'}}>this is Article</h2>
            {p}
        </div>
    )
}

export default Article