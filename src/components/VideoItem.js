import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
    render() {

        const {video} = this.props;

        return (
            <div className='video-item item' onClick = {() => this.props.onVideoSelect(video)}>
                <img className = 'ui image' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
                <div className='content'>
                    <div className='header'>Video Title: {video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;