import React from 'react'
import "../cssFiles/Testimonial.css"
const Testimonial = (props) => {
  return (
    <div className='profiles-test'>
      <div className="testimonial-prof">
       <div> <img src={props.img} alt="image" /></div>
        <div className="content">
            <div className="lines">
            {props.lines}
            </div>
            <div className="name">
                - {props.namee}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
