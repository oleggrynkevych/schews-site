import './EndlessLoop.scss';
import Bone from '../../../images/Vector.svg';
import StarOne from '../../../images/Star 1.svg';
import StarTwo from '../../../images/Star 2.svg';
import StarThree from '../../../images/Star 3.svg';



function EndlessLoop() {
    return(
        <div className='loop'>
            <span>Delicious</span>
            <img src={Bone} alt={'Toy Icon'}/>

            <span>Vegan</span>
            <img src={StarOne} alt={'Toy Icon'}/>

            <span>Prevents dental disease</span>
            <img src={Bone} alt={'Toy Icon'}/>

            <span>Fun</span>
            <img src={StarTwo} alt={'Toy Icon'}/>

            <span>Gluten-free</span>
            <img src={Bone} alt={'Toy Icon'}/>

            <span>Highly digestible</span>
            <img src={StarThree} alt={'Toy Icon'}/>
        </div>
    )
}

export default EndlessLoop;