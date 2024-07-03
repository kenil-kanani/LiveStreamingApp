import React, { useEffect, useRef } from 'react'
import VideoPlayerProps from '../types/VideoPlayerProps'
import FlvJs from 'flv.js';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let flvPlayer: FlvJs.Player;
        
        if(FlvJs.isSupported()) {
            flvPlayer = FlvJs.createPlayer({
                type: 'flv',
                url: src
            })
            flvPlayer.attachMediaElement(videoRef.current!); // Attach the video element to the player
            flvPlayer.load(); // Load the video
            flvPlayer.play(); // Play the video
        }
    }, [src])

    return (
        <div>
            <video autoPlay ref={videoRef} controls style={{ width: '300px', height: '300px' }} />
        </div>
    )
}

export default VideoPlayer
