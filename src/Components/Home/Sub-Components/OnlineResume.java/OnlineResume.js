import React from 'react'
import './OnlineResume.css'

const OnlineResume = () => {
    return (
        <section id='online-resume'>
            <div id='container'>
                <h1>online resume</h1>
                <div id='sub-container'>
                    <div id='column'>
                        <figure>
                            <img loading='lazy' src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/images.png/:/cr=t:9.38%25,l:0%25,w:100%25,h:81.25%25/rs=w:365,h:182.5,cg:true' alt='404! Cannot Load Image' />
                            <figcaption>Coinbase</figcaption>
                        </figure>
                        <article>
                            I have worked with Coinbase, where I used to protect the organisation from the fraudsters who used to create fake IDs and used Coinbase for illegal purposes.
                        </article>
                    </div>
                    <div id='column'>
                        <figure>
                            <img loading='lazy' src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/idcUoNGANi.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:25' alt='404! Cannot Load Image' />
                            <figcaption>Revolut</figcaption>
                        </figure>
                        <article>
                            I'm currently working at Revolut, detecting, investigating and preventing fraudulent financial activities to maintain regulatory compliance and minimize risks.
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnlineResume