import './CountDownBlock.scss';
import DogPhoto from '../../images/story-photo.png';
import Timer from './Timer/Timer';

function CountDownBlock( {countdownTimeMs} ) {
    return (
        <div className='countdown-block' id='story'>
            <div className='countdown-block-container'>
                <div className='countdown-story-box'>
                    <div className='countdown-story'>
                        <img src={DogPhoto} alt={'Photo With Dog'}/>
                        <div className='countdown-story-text'>
                            <h3>The story</h3>
                            <span>
                                Once I adopted my beloved bulldog puppy, Elsa. <br/><br/>
                                To say she’s a chewer is an understatement!  And guess what was her favourite toy? My shoes! <br/><br/>
                                Therefore I created a range of boredom-busting edible shoes that Elsa could enjoy chewing that would also clean her teeth. <br/><br/>
                                Just like the dental chews I gave her at dinner-time to stop her staring at my plate!
                            </span>
                        </div>
                    </div>

                    <div className='countdown-story-for-bg-first'></div>

                    <div className='countdown-story-for-bg-second'></div>
                </div>

                <div className='countdown-timer-box'>
                    <h4>EVERYDAY <br/> IS A SCHEWSDAY!</h4>
                    <Timer countdownTimeMs={countdownTimeMs} />
                </div>
            </div>
        </div>
    )
}

export default CountDownBlock;