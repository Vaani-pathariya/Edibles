import React from 'react'
import '../cssFiles/FrontLandingPage.css'
export default function FrontLandingPage() {
  return (
    <div className='flp'>
      <div className="left-flp">
        <h1 className="head-flp">
        <div>The Number <span>#One</span></div>  <div>Choice Your</div> <div>Hunger Solution</div>
        </h1>

        <div className="description-flp">
            The number one restaurant you are looking for to quench your hunger or just want to taste delicious things.
        </div>

        <div className="btns-flp">
            <div >
                <div className="orderBtn">Order &nbsp;
                <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="pauseBtn">
            <i class="fa-regular fa-circle-play"></i>
            </div>
            <div className="orderTxt">
                How to order
            </div>
        </div>

        <div className="desc-photo-intro-flp">
        <div className="intro-flp">
            <h1 className="name-intro-flp">
                Arnold Pramono
            </h1>
            <div className="position-intro-flp">
                Chef
            </div>
            
                <div className="desc-intro">
                    This restaufrant passed my quality test. There's no doubt about the tate. 100% recommended.
                </div>
                </div>
                <div className="pic-intro">
                    <img className="pic-intro" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            
        </div>
      </div>
      <div className="right-flp">
       <img src="./landingPP.jpg" alt="img" />
      </div>
    </div>
  )
}
