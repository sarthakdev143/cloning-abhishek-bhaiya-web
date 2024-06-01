import React, { useState } from 'react';
import './Message.css';

const Message = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section id='message' className='relative'>
            <form id='message-box' style={{ display: isVisible ? 'block' : 'none' }}>
                <div id='form-content' className='fdc faic'>
                    <i className="ri-close-line" onClick={handleClick}></i>
                    <h1>Abhishek Yadav</h1>
                    <div>
                        <p>Hi! Let us know how we can help and we’ll respond shortly.</p>
                        <svg viewBox="0 0 24 24" fill="#F7F9F9" width="24" height="24" data-ux="Icon">
                            <path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path>
                        </svg>
                    </div>
                    <input id='input-field' type='text' placeholder='Name*' required />
                    <input id='input-field' type='email' placeholder='Email*' required />
                    <textarea id='input-field' placeholder='How can we help?*' required ></textarea>
                    <input id='input-field' type='submit' value='Send' />
                    <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
                </div>
            </form>
            <div id='button-wrapper' className='relative' onClick={handleClick}>

                {isVisible ? (
                    <i className="ri-close-line center2"></i>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" data-ux="Icon" className="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8">
                        <g fill="currentColor">
                            <rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect>
                            <path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path>
                        </g>
                    </svg>
                )}
            </div>
        </section>
    );
};

export default Message;
