import React from 'react'
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram }  from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <div className='home1' id='home'>
        <div className='home1-inner'>
          <h1>Coding Shark</h1>
          <p>Solution For All Quries</p>
        </div>
      </div>
      <main className='main' data-aos="fade-up-right" id="about">
        <div className='home2' >
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam quia odio delectus consectetur autem vero ducimus dolorem repudiandae? Sequi ut rerum, quisquam quas expedita ea odit. Ex, consectetur obcaecati.
          </p>
          <button className='btn btn-primary rounded-5'>Read More...</button>
        </div>
      </main>
      <div className='home3' id="brands" >
        <div className='home3-inner'>
          <h1>BRAND</h1>
          <div className="brands">
            <div className='brand' style={{animationDuration:"1s",animationDelay:"0.25s"}}>
              <AiFillGoogleCircle className='icon'/>
              <p>Google</p>
            </div>
            <div className='brand' style={{animationDuration:"1s",animationDelay:"0.5s"}}>
              <AiFillInstagram  className='icon'/>
              <p>Instagram</p>
            </div>
            <div className='brand' style={{animationDuration:"1s",animationDelay:"0.75s"}}>
              <AiFillAmazonCircle  className='icon'/>
              <p>Amazon</p>
            </div>
            <div className='brand' style={{animationDuration:"1s",animationDelay:"1s"}}>
              <SiFlipkart  className='icon' />
              <p>Flipkart</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default Home
