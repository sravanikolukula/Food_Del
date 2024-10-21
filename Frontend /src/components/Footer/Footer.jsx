import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo-design" src={assets.logo} alt=""  />
                <h3>Dine Now - Order Now</h3>
                <p>A recipe has no soul. You as the cook,must bring soul to the <br/>
                    recipe..Life is uncertain,Eat dessert first...Food is symbolic of love<br/>
                    when words are inadequate.I watch cooking change the cook,just as it<br/>
                    transforms the food.Food brings people together on many different <br/>
                    levels.It's nourishment of the soul and body.It's truley love .The best<br/> 
                    comfort food will always be greens,cornbread,and fried chicken 
                </p>
        
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div></div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>123456789</li>
                    <li>contact@DineNow.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 DineNow.com -All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
