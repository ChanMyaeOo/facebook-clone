import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            {/* Story Section */}
            <StoryReel />
            {/* Message Sender */}
            <MessageSender />

            <Post
                profilePic="https://cdn.pixabay.com/photo/2020/09/14/17/17/beach-5571533__340.jpg"
                message="I am on Cloud9"
                timestamp="this is a time stamp"
                username="chan myae oo"
                image="https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg"
            />

            <Post
                profilePic="https://cdn.pixabay.com/photo/2020/09/14/17/17/beach-5571533__340.jpg"
                message="I am on Cloud9"
                timestamp="this is a time stamp"
                username="chan myae oo"
                image="https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg"
            />
        </div>
    )
}

export default Feed
