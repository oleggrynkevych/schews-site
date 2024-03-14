import './Timer.scss';
import TwoDots from '../../../images/two-dots.svg';
import {useState, useEffect} from 'react';
import { getRemainingTime } from './Utils/TimerUtils';

const defaultRemainingTime = {
    seconds: '..',
    minutes: '..',
    hours: '..',
    days: '..'
}

function Timer( {countdownTimeMs} ) {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime(countdownTimeMs);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdownTimeMs]);

    function updateTime(countdown) {
        setRemainingTime(getRemainingTime(countdown));
    }

    return (
        <div className='timer'>
            <div className='days-container'>
                <span className='time-numbers'>{remainingTime.days < 0 ? '0' : remainingTime.days}</span>
                <span className='time-text' style={{ marginRight: remainingTime.days < 10 ? '0px' : '20px' }}>{remainingTime.days === 1 ? 'day' : 'days'}</span>
            </div>

            <div className='time-container'>
                <div className='hours'>
                    <span className='time-numbers'>{remainingTime.hours < 0 ? '00' : remainingTime.hours}</span>
                    <span className='time-text'>{remainingTime.hours === '01' ? 'hour' : 'hours'}</span>
                </div>
                <img src={TwoDots} alt={'Two Dots'}/>
                <div className='minutes'>
                    <span className='time-numbers'>{remainingTime.minutes < 0 ? '00' : remainingTime.minutes}</span>
                    <span className='time-text'>{remainingTime.minutes === '01' ? 'minute' : 'minutes'}</span>
                </div>
                <img src={TwoDots} alt={'Two Dots'}/>
                <div className='seconds'>
                    <span className='time-numbers'>{remainingTime.seconds < 0 ? '00' : remainingTime.seconds}</span>
                    <span className='time-text'>{remainingTime.seconds === '01' ? 'second' : 'seconds'}</span>
                </div>
            </div>
        </div>
    )
};

export default Timer;