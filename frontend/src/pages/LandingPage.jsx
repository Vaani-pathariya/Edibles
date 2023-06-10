import React from "react";
import Navbar from "../components/Nav";
import { Outlet } from "react-router-dom";
import FrontLandingPage from "../components/FrontLandingPage";
import PostCard from "../components/PostCard";
import "../cssFiles/style.css"
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
const LandingPage=()=>{
    return (
        <div>
        <Navbar/>
        <FrontLandingPage/>
        <div className="LandingPageCards">
        <PostCard title="Share your Recipes" imgtit=""/>
        <PostCard title="Get Inspiration" imgtit=""/>
        <PostCard title="Get connected with food Influencers" imgtit=""/>
        </div>

<div className="Testimonials">
<div id="carouselExample" class="carousel carousel-dark slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Testimonial lines="Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
            namee="Vaani Pathariya"
            img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
    <div class="carousel-item">
    <Testimonial lines="Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
            namee="Vaani Pathariya"
            img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
    <div class="carousel-item">
    <Testimonial lines="Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
            namee="Vaani Pathariya"
            img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

        <Footer/>
       </div>
    )
}
export default LandingPage;
//3a405a
//a61c3c