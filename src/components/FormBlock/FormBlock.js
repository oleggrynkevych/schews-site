import './FormBlock.scss';
import './Form/Form';
import Form from './Form/Form';

function FormBlock() {
    return (
        <div className='form-block'>
            <div className='form-block-container'>
                <div className='form-content-box'>
                    <div className='form-background-first'>
                        <div></div>
                    </div>

                    <div className='form-background-second'>
                        <div></div>
                    </div>

                    <div className='form-content'>
                        <h5>Good dogs<br/>chew Schews</h5>
                        <p>Let your dog be the first chewer!</p>

                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormBlock;