import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story 
                image="https://cdn.pixabay.com/photo/2020/09/13/16/16/terraces-5568679__340.jpg"
                profileSrc="https://lh3.googleusercontent.com/a-/AOh14GhmNFtpUGnwbHrEroPXl4kAFjcP-A0OgqsSjp30=s88-c-k-c0x00ffffff-no-rj-mo"
                title="Chan Myae"
                className="storyReel__story"
            />

            <Story 
                image="https://cdn.pixabay.com/photo/2020/08/22/21/58/boat-5509457__340.jpg"
                profileSrc="https://yt3.ggpht.com/a/AATXAJyfMtwXjjLPLn5XOd-Yn-C7waTW_ALukt1O8PAgbg=s48-c-k-c0xffffffff-no-rj-mo"
                title="Fake Bot"
                className="storyReel__story"
            />

            <Story 
                image="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242__340.jpg"
                profileSrc="https://yt3.ggpht.com/a/AATXAJxEOnb4dlTvdY5WVhQa9uivAjeDFlvVfPLHDgMd=s48-c-k-c0xffffffff-no-rj-mo"
                title="Titanium"
                className="storyReel__story"
            />

            <Story 
                image="https://cdn.pixabay.com/photo/2020/02/28/21/15/space-4888643__340.jpg"
                profileSrc="https://yt3.ggpht.com/a/AATXAJzXvgh-mpY2gC4JL057IVtXFrqi-FybLewOpp4w6g=s48-c-k-c0xffffffff-no-rj-mo"
                title="Billionare"
                className="storyReel__story"
            />

            <Story 
                image="https://cdn.pixabay.com/photo/2020/08/25/00/48/mountains-5515324__340.jpg"
                profileSrc="https://cdn.pixabay.com/photo/2020/09/14/18/39/girls-5571759__340.jpg"
                title="Traveller"
                className="storyReel__story"
            />
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}

        </div>
    )
}

export default StoryReel
