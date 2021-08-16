import React from 'react';
import './Feed.css';
import AskQuestion from './AskQuestion';
import Posts from './Posts';

function Feed() {
    return (
        <div className="feed">
        <div className="feed__header">
            {/* Header */}
            <h2>Home</h2>
            </div>

            {/* Post Questions */}
            <AskQuestion/>

            {/* Questins */}
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            {/* Questins */}
            {/* Questins */}
            {/* Questins */}
            {/* Questins */}
        
        </div>
    )
}

export default Feed
