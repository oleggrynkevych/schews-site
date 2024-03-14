import './VideoBlock.scss';
import Video from './Video/Video';
import DogImage from '../../images/dog-image.png';
import FirstShoe from '../../images/first-shoe-image.png';
import SecondShoe from '../../images/second-shoe-image.png';
import Vector1 from '../../images/vector-1.svg';
import Vector2 from '../../images/vector-2.svg';
import Vector3 from '../../images/vector-3.svg';
import VectorMobile1 from '../../images/vector-mobile-1.svg';
import VectorMobile2 from '../../images/vector-mobile-2.svg';
import VectorMobile3 from '../../images/vector-mobile-3.svg';
import Dot from '../../images/dot.svg';

function VideoBlock( {videoUrl} ) {
    return (
        <div className='video-block'>
            <div className='video-block-container'>
                <div className='video-block-details'>
                    <div className='details-head'>
                        <h3>DETAILS</h3>
                        <p>Healthy ingredients with natural fibres provide optimal digestion support, teeth polishing benefits, and long-lasting chew satisfaction.</p>
                    </div>

                    <div className='details-description'>
                        <div className='details-description-image-container'>
                            <div className='image-container-box'>
                                <img className='details-description-dog-image' src={DogImage} alt={'Dog Image'} id='details'/>
                                <img className='details-description-first-shoe-image' src={FirstShoe} alt={'First Shoe'}/>
                                <img className='details-description-second-shoe-image' src={SecondShoe} alt={'Second Shoe'}/>
                            </div>
                        </div>

                        <div className='details-description-text-container'>
                            <div className='text-container-box'>
                                <img className='vector-1' src={Vector1} alt={'Line1'}/>
                                <img className='vector-mobile-1' src={VectorMobile1} alt={'Line1'}/>
                                <img className='dot' src={Dot} alt={'Dot'}/>
                                <span className='details-description-text'>Smart shapes & spaces - <br/> allow teeth to grip & chew more easily</span>
                            </div>

                            <div className='text-container-box'>
                                <img className='vector-2' src={Vector2} alt={'Line2'}/>
                                <img className='vector-mobile-2' src={VectorMobile2} alt={'Line2'}/>
                                <img className='dot' src={Dot} alt={'Dot'}/>
                                <span className='details-description-text'>Unique details - ensure proper blood flow through the gums, & also prevents bad breath & the build-up of plaque & tartar</span>
                            </div>
                            
                            <div className='text-container-box'>
                                <img className='vector-3' src={Vector3} alt={'Line3'}/>
                                <img className='vector-mobile-3' src={VectorMobile3} alt={'Line3'}/>
                                <img className='dot' src={Dot} alt={'Dot'}/>
                                <span className='details-description-text'>Grooves - help work the <br/> chew into the smaller spaces between the dog’s teeth</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='video-block-player'>
                    <h4>COMING SOON this YEAR...</h4>
                    <Video videoUrl={videoUrl}/>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;