import React from 'react'
import './NoPage.css'
import Footer from '../Footer/Footer'
import Message from '../Message/Message'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
      <section id='no-page'>
        <h1>page not found</h1>
        <p>We can’t seem to find the page you’re looking for.</p>
        <Link to="/">
          <button>go to home page</button>
        </Link>
      </section>
      <div id='space' style={{ width: "100%", height: "6rem" }}></div>
      <Footer />
      <Message />
    </>
  )
}

export default NoPage