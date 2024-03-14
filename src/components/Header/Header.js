import './Header.scss';
import Logo from '../../images/Group 1.svg';
import OpenIcon from '../../images/open-icon.svg';
import CloseIcon from '../../images/close-icon.svg';
import socialIcons from '../SocialMedia/social-media-data';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useState , useEffect } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const isMobile = useMediaQuery('(max-width: 700px)');

    const handleMenuClick = () => {
        if (isMobile) {
            setOpenMenu(!openMenu);
        } 
    };

    const scrollDirection = useScrollDirection();

    useEffect(() => {
        if (openMenu) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
    }, [openMenu]);

    // Classes

    const headerClasses = classNames('header', {
        hide: scrollDirection === 'down',
    });

    const openIconClasses = classNames('open-icon', {
        open: openMenu
    });

    const closeIconClasses = classNames('close-icon', {
        open: openMenu
    });

    const navigationClasses = classNames('navigation', {
        open: openMenu
    });

    return(
        <header className={headerClasses}>
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={Logo} alt={'Logo'}/>
                </div>

                <nav className={navigationClasses}>
                    <ul>
                        <div className='navigation-line'></div>
                        <li>
                            <Link smooth spy to='story' onClick={handleMenuClick}>
                                <span>Our story</span>
                            </Link>
                            <div></div>
                        </li>
                        <div className='navigation-line'></div>
                        <li>
                            <Link smooth spy to='benefits' onClick={handleMenuClick}>
                                <span>Benefits</span>
                            </Link>
                            <div></div>
                        </li>
                        <div className='navigation-line'></div>
                        <li>
                            <Link smooth spy to='products' onClick={handleMenuClick}>
                                <span>Products</span>
                            </Link>
                            <div></div>
                        </li>
                        <div className='navigation-line'></div>
                        <li>
                            <Link smooth spy to='faq' onClick={handleMenuClick}>
                                <span>FAQ</span>
                            </Link>
                            <div></div>
                        </li>
                        <div className='navigation-line'></div>
                    </ul>

                    <div className='nav-social-media'>
                        {socialIcons.map((icon, index) => (
                            <a href='/' key={index}>
                                <div className='nav-social-icon'>
                                    <img src={icon}/>
                                </div>
                            </a>
                        ))}
                    </div>
                </nav>

                <img className={openIconClasses} onClick={handleMenuClick} src={OpenIcon} alt={'Open Icon'}/>

                <img className={closeIconClasses} onClick={handleMenuClick} src={CloseIcon} alt={'Close Icon'}/>
                
            </div>
        </header>
    )
}

export default Header;