import React from 'react'
import './Video.css'

const Video = () => {
    return (
        <section id="landing-content">
            <div id='video-wrapper'>
                <iframe data-ux="Embed" id="embed-iframe-3"
                    src="https://player.vimeo.com/video/936550396?h=81def1efc2&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0"
                    allow="autoplay; fullscreen" loading='eager'
                    data-aid="HEADER_VIDEO_EMBED"></iframe>

                <img src='https://i.vimeocdn.com/video/1836729442-a426958946c3e655811222c59af3816dafea98129e201e815bdda10a20972736-d' alt='bg img' />
            </div>

            <div id='content'>
                <h1>FINANCIAL CRIME ANALYST</h1>
                <p>The Financial Crime Operations department is at the forefront of Institutions efforts to keep customers money safe</p>
                <a href='#ContactUs'>
                    <button>get in touch</button>
                </a>
            </div>
        </section>
    )
}

export default Video