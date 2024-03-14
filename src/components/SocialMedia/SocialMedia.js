import './SocialMedia.scss';
import socialIcons from './social-media-data';

function SocialMedia() {
    return (
        <div className='social-media'>
            <div className='social-media-container'>
                {socialIcons.map((icon, index) => (
                    <a href='/' key={index}>
                        <div className='social-icon'>
                            <img src={icon}/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SocialMedia;