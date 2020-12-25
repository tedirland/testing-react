import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const KEY = 'AIzaSyDZ1QrZX1jEdeixLx8ApNSFhD4w4EUfEE8'

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)

    }, [defaultSearchTerm]);
    
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        });
        setVideos(response.data.items)
    };

    return [ videos, search ];
    
};
export default useVideos;