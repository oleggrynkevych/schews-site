import './Form.scss';
import { useRef, useState } from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';

function Form() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {handleSubmit, register, formState: {errors}} = useForm();

    const sendEmail = (e) => {
        emailjs.sendForm('service_4z9bkgm', 'template_y4gdby7', form.current, 'Bre4mNFxUF0ygljp-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    const onSubmit = (data, e) => {
        e.preventDefault();
        sendEmail();
        e.target.reset();
    }

    const nameErrorClasses = classnames('name-error-paragraph', {
        'error': errors.name
    });

    const emailErrorClasses = classnames('email-error-paragraph', {
        'error': errors.email
    });

    return (
        <>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <span className='label'>Name</span>
                <input 
                    className={classnames({ 'error': errors.name })}
                    {...register('name', 
                        {required: 'Error. Fill this field correctly', 
                            pattern:{
                                value: /^[a-zA-Zа-яА-ЯЁё ,.'-]{3,}$/,
                                message: 'Error. Fill this field correctly',
                            }
                        }
                    )}
                    type="text"
                    placeholder='Elsa'                             
                    onBlur={(e) => {
                        setName(e.target.value);
                    }}
                />
                <p className={nameErrorClasses}>Error. Fill this field correctly</p>

                <span className='label'>E-mail</span>
                <input
                    className={classnames({ 'error': errors.email })}
                    {...register('email', 
                        {required: 'Error. Fill this field correctly', 
                            pattern:{
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Error. Fill this field correctly',
                            }
                        }
                    )}
                    type="text"
                    placeholder='elsa31@mail.com'                             
                    onBlur={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <p className={emailErrorClasses}>Error. Fill this field correctly</p>

                <button>
                    <span>Subscribe</span>
                </button>
            </form>
        </>
    )
};

export default Form;