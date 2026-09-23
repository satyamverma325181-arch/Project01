import React from 'react'
import { CiBookmark } from "react-icons/ci";
import './Cards.css'

const Cards = () => {
  return (
  <div className='parents'>
      <div className="card">
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt=""  cl/>
          <button> save <CiBookmark /></button>
        </div>
  
        <div className="center">
            <h3>amazon <span>5 days ago</span></h3>
            <h2>senior ui/ux designer</h2>
            <div className='tag'><h4>part time</h4>
            <h4>senior level</h4>
            </div>
        </div>
  
        <div className="bottom">
      <div>
        
          <h3>$120/hours</h3>
          <p>mumbai, pune</p>
        
      </div>
      <button>apply now</button>
        </div>
      </div>
  

  
     
      </div>
  )
}

export default Cards