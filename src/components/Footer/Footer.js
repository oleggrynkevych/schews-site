import './Footer.scss';
import FooterDog from '../../images/footer-dog.png';
import FooterLogo from '../../images/footer-logo.svg';
import footerNavData from './footer-nav-data';
import footerIconsData from './footer-icons-data';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer-dog-image' src={FooterDog} alt={'Footer Dog'}/>

            <div className='footer-container'>
                <div className='footer-nav-block'>

                    <div className='footer-nav'>
                        <ul>
                            {
                                footerNavData.map((nav, index) => (
                                    <li key={index}>
                                        <Link smooth spy to={nav.section}>
                                            <span>{nav.text}</span>
                                        </Link>
                                        <div></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='footer-icons'>
                        {
                            footerIconsData.map((icon, index) => (
                                <img src={icon} key={index} alt={'Footer Icon'}/>
                            ))
                        }
                    </div>
                </div>

                <div className='footer-bottom-block'>
                    <img src={FooterLogo} alt={'Footer Logo'}/>

                    <div className='footer-bottom'>
                        <span>Terms & conditions</span>
                        <span>Privacy Policy</span>
                        <span>© Schews 2023, All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;