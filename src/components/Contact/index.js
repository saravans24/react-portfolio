import { useEffect,useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 500)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_abcdefgh', //don't know
                refForm.current,
                'your_token' //don't know
            )
            .then(
                ()=>{
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed to send the message, Please try again')
                }
            )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    {/* <form ref={refForm} onSubmit={sendEmail}> */}
                    <form  >
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required/>
                            </li>
                            <li >
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact; 