import React from 'react'
import '../style.css'
import recommendimg from './images/rectangle_10.png'
import diseaseimg from './images/rectangle_11.png'
import workimg from './images/rectangle_6.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
    <div style={{position:"sticky",top:"0"}}>
    <Navbar/>
    </div>
    
      <div className="imagebox" style={{zIndex:"-1"}}>
        <div className="image">
          <h2 className="text-light ">Advising for crop cultivation and disease detection</h2>
          <h2 className="text-light ">Using machine learning</h2>
          <button type="button" className="btn btn-success">Read More</button>
        </div>
      </div>
      <div className="text m-5">
        <center><h1> Features We provide</h1></center>
       
      </div>
      <div className="container text-center" id="features">
        <div className="row ">
          <div className="col" >
            <Link to="/recommend"><img className="cardimg" src={recommendimg} alt="" /></Link>
            <h3 className="my-3">Crop Recommendation</h3>
          </div>
          <div className="col">
            <img className="cardimg" src={diseaseimg} alt=""/>
            <h3 className="my-4">Disease Detection</h3>
          </div>
          <div className="col">
            <img className="cardimg" src={workimg} alt="" />
            <h3 className="my-3">How it Work?</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
