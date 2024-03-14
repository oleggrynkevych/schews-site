import './Video.scss';
import ReactPlayer from 'react-player/vimeo';
import GIF from '../../../images/gif-for-video.gif';
import PlayButton from '../../../images/play-button.svg';
import {useRef} from 'react';

function Video( {videoUrl} ) {

    const videoRef = useRef(null);

    return (
        <div className='video-container' ref={videoRef}>
            <ReactPlayer 
                
                className='react-player'
                url={videoUrl} 
                // width='100%' 
                // height='100%'
                light={GIF} 
                controls={true} 
                vimeoconfig={{ iframeParams: { fullscreen: 0} }}
                playIcon={<div className='play-button'><img src={PlayButton} alt={''}/></div>}
                playing
                onClickPreview={() => {videoRef.current.requestFullscreen()}}
            />
        </div>
    )
}

export default Video;