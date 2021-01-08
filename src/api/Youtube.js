import axios from 'axios';

const KEY = '';//Add Youtube data API v3 key here for the app to work;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});