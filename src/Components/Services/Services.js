import React from 'react'
import './Services.css'
import Footer from '../Footer/Footer'
import Message from '../Message/Message'

const Services = () => {
    return (
        <>
            <section id='services'>
                <div id='container'>
                    <h1 id='heading'>services</h1>
                    <div id='box-wrapper'>
                        <div id='box'>
                            <figure>
                                <img src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-pixabay-257904.jpg/:/cr=t:0%25,l:5.66%25,w:88.68%25,h:100%25/rs=w:365,h:274,cg:true' alt='404! Video Editing.' />
                                <figcaption>
                                    Video Editing
                                </figcaption>
                            </figure>
                            <article>
                                Transform your raw footage into captivating stories with our professional video editing service. From sleek transitions to polished effects, we bring your vision to life.
                            </article>
                        </div>
                        <div id='box'>
                            <figure>
                                <img src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-negativespace-34600.jpg/:/cr=t:0%25,l:5.66%25,w:88.68%25,h:100%25/rs=w:365,h:274,cg:true' alt='404! Web Development' />

                                <figcaption>
                                    Web Development
                                </figcaption>
                            </figure>
                            <article>
                                Elevate your online presence with our expert web development service. We craft responsive, user-friendly websites tailored to your unique needs.
                            </article>
                        </div>
                        <div id='box'>
                            <figure>
                                <img src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-tahmetler-19047355.jpg/:/cr=t:24.95%25,l:0%25,w:100%25,h:50.11%25/rs=w:365,h:274,cg:true' alt='404! Graphic Design' />
                                <figcaption>Graphic Design</figcaption>
                            </figure>
                            <article>Capture your brand's essence with our bespoke logo design service. Our team creates memorable and impactful logos that resonate with your audience.</article>
                        </div>
                        <div id='box'>
                            <figure>
                                <img src='https://img1.wsimg.com/isteam/ip/4d26c589-d64e-42b7-93f6-c0441d150ae6/pexels-sevenstormphotography-443383.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:365,h:274,cg:true' alt='404! Financial Services' />
                                <figcaption>Financial Services</figcaption>
                            </figure>
                            <article>Safeguard your business against financial crime with our comprehensive anti-money laundering service. We offer robust compliance solutions tailored to mitigate risks and ensure regulatory adherence.</article>
                        </div>
                    </div>
                </div>
            </section>
            <Footer id='footer' />
            <Message />
        </>
    )
}

export default Services