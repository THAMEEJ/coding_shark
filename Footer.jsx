import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer>
        <main className="footer-main1">
            <HashLink to="/#home"><h2>Adi Kesava Reddy</h2></HashLink>
            <small>Solution for all queries</small>
        </main>
        <main className="footer-main2">
            <h4>Social Media</h4>
            <a href="http://www.instagram.com/" id="a">Instagram</a>
            <a href="http://www.linkedin.com/" id="a">Linkedin</a>
            <a href="http://www.twitter.com/" id="a">twitter</a>
        </main>
      
    </footer>
  )
}

export default Footer
