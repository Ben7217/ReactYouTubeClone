import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // first object in argument array has property of video. grab video and declare new variable called video
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className='media-body'>
                    <div className="media-heading">
                         {videoTitle}
                       </div>
                    <div>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default VideoListItem;