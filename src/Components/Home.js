import React,{useContext}from 'react'
import '../style.css'
import recommendimg from './images/rectangle_10.png'
import diseaseimg from './images/rectangle_11.png'
import workimg from './images/rectangle_6.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import hindi from "../Hindi.json"
import english from "../english.json"
import notescontext from "../Components/context/notes/notecontext"
const Home = () => {
  const context=useContext(notescontext)
  const {lang}=context;
 
  const getText = (key) => {
    return lang === "hindi" ? hindi[key] : english[key];
  };


  return (
    <>
    <div style={{position:"sticky",top:"0"}}>
    <Navbar/>
    </div>
    
      <div className="imagebox" style={{zIndex:"-1"}}>
        <div className="image">
          <h2 className="text-light ">{getText("head1")}</h2>
          <h2 className="text-light ">{getText("head2")}</h2>
          <button type="button" className="btn btn-success">{getText("readmore")}</button>
        </div>
      </div>
      <div className="text m-5">
        <center><h1>{getText("featurestext")}</h1></center>
       
      </div>
      <div className="container text-center" id="features">
        <div className="row ">
          <div className="col" >
            <Link to="/recommend"><img className="cardimg" src={recommendimg} alt="" /></Link>
            <h3 className="my-3">{getText("feature1")}</h3>
          </div>
          <div className="col">
            <img className="cardimg" src={diseaseimg} alt=""/>
            <h3 className="my-4">{getText("feature2")}</h3>
          </div>
          <div className="col">
            <img className="cardimg" src={workimg} alt="" />
            <h3 className="my-3">{getText("feature3")}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
