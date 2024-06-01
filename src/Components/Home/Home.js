import React from 'react'
import Video from './Sub-Components/Video/Video'
import Features from './Sub-Components/Features/Features'
import Message from '../Message/Message'
import AboutUs from './Sub-Components/AboutUs/AboutUs'
import OnlineResume from './Sub-Components/OnlineResume.java/OnlineResume'
import Profile from './Sub-Components/Profile/Profile'
import ContactUs from './Sub-Components/ContactUs/ContactUs'
import Social from './Sub-Components/Social/Social'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Video />
            <div id='space1' style={{ width: "100%", height: "72rem" }}></div>
            <Features />
            <div id='space2' style={{ width: "100%", height: "24rem" }}></div>
            <AboutUs />
            <OnlineResume />
            <Profile />
            <ContactUs />
            <Social />
            <Footer />
            <Message />
        </div>
    )
}

export default Home