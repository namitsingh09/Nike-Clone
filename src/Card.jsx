import React from 'react'
import "./Card.css"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Card() {
  
  return (
    <div className='card1'>
      <h1 id='op'>The Latest and Greatest <button id='biu'>Shop</button></h1> 
    <div className='kll'>
    <Carousel>
                <div>
                    <img id='pop' src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg" />
                    <p id="pop1" className="legend">Jordan Shoes </p>
                </div>
                <div>
                    <img id='pop' src="https://images.bewakoof.com/t1080/men-s-black-friends-logo-t-shirt-234662-1659608720-1.jpg" />
                    <p id="pop1" className="legend">T-shirts</p>
                </div>
                <div>
                    <img  id='pop' src="//lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa0%2F4c%2Fa04c7cfa6b089e0fd731652222de943f235cbe2e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" />
                    <p id="pop1" className="legend">Women Wear</p>
                </div>
            </Carousel>

   
    
</div>




    </div>
    
    
    
  )
}
