import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <section id='features' className='relative'>
            <div id='cards-wrapper' className='center2 flex'>
                <a href="#" id='card' className='relative'>
                    <h1 className='center2'>ANTI-MONEY LAUNDERING</h1>
                    <img loading='lazy' src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-tima-miroshnichenko-6266665.jpg/:/cr=t:36.7%25,l:10.09%25,w:79.82%25,h:26.6%25/rs=w:1534,m' alt='404! Cannot Load Image' />
                </a>
                <a href="#" id='card' className='relative'>
                    <h1 className='center2'>COUNTER-TERRORIST FUNDING</h1>
                    <img loading='lazy' src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-pixabay-264146.jpg/:/cr=t:20.93%25,l:0%25,w:100%25,h:58.14%25/rs=w:1534,m' alt='404! Cannot Load Image' />
                </a>
                <a href="#" id='card' className='relative'>
                    <h1 className='center2'>EDD & KYC</h1>
                    <img loading='lazy' src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-cottonbro-8090147.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1534,m' alt='404! Cannot Load Image' />
                </a>
            </div>
        </section>
    )
}

export default Features