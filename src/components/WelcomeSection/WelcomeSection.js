import './WelcomeSection.scss';
import WelcomeDog from '../../images/img-dog-1.png';
import BrownShoe from '../../images/brown-shoe.png';
import OrangeShoe from '../../images/orange-shoe.png';
import YellowShoe from '../../images/yellow-shoe.png';
import GreenShoe from '../../images/green-shoe.png';
import EndlessLoop from './EndlessLoop/EndlessLoop';

function WelcomeSection() {
    return(
        <section className='welcome-section'>
            <div className='pink-half'>
                <div className='pink-half-container'>
                    <h3>100% Natural</h3>
                    <h1>Dental chewy <br></br> shoes for dogs</h1>
                    <div className='pink-half-box'>
                        <img src={WelcomeDog} alt={'Welcome Dog'}/>
                    </div>
                </div>
            </div>

            <div className='yellow-half'>
                <div className='yellow-half-container'>
                    <div className='shoe-container brown'>
                        <img src={BrownShoe} alt={'Brown Shoe'}/>
                    </div>

                    <div className='shoe-container orange'>
                        <img src={OrangeShoe} alt={'Orange Shoe'}/>
                    </div>

                    <div className='shoe-container yellow'>
                        <img src={YellowShoe} alt={'Yellow Shoe'}/>
                    </div>

                    <div className='shoe-container green'>
                        <img src={GreenShoe} alt={'Green Shoe'}/>
                    </div>
                </div>
            </div>

            <div className='endless-loop'>
                <div className='loop-container'>
                    <EndlessLoop/>
                    <EndlessLoop/>
                </div>
                <div className='loop-container'>
                    <EndlessLoop/>
                    <EndlessLoop/>
                </div>
            </div>
           
        </section>
    )
};

export default WelcomeSection;