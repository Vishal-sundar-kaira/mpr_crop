import React,{ useState,useContext, useEffect }  from 'react'
import Navbar from './Navbar'
import cropgif from './images/cropgif.gif'
import spinnergif from './images/spinner.gif'
import notescontext from "../Components/context/notes/notecontext"
import rice from './images/rice.jpg'
import maize from './images/maize.jpg'
import chickpea from './images/chickpea.jpg'
import kidneybeans from './images/kidneybeans.jpg'
import pigeonpeas from './images/pigeonpeas.jpg'
import mothbeans from './images/mothbeans.jpg'
import mungbean from './images/mungbean.jpg'
import blackgram from './images/blackgrams.jpg'
import lentil from './images/lentils.jpg'
import pomegranate from './images/pomegranate.jpg'
import banana from './images/banana.jpg'
import mango from './images/mango.jpg'
import grapes from './images/grapes.jpg'
import watermelon from './images/watermelon.jpg'
import muskmelon from './images/muskmelon.jpg'
import apple from './images/apple.jpg'
import orange from './images/orange.jpg'
import papaya from './images/papaya.jpg'
import coconut from './images/coconut.jpg'
import cotton from './images/cotton.jpg'
import jute from './images/jute.jpg'
import cofee from './images/coffee.jpg'




// # rice,maize,chickpea,kidneybeans,pigeonpeas,mothbeans,mungbean,blackgram,lentil,pomegranate,banana,mango,grapes,watermelon,muskmelon,apple,orange,papaya,coconut,cotton,jute,cofee
const Recommend = () => {
  const[val,setval]=useState({n:"",p:"",k:"",t:"",h:"",ph:"",rain:""})
  const [disable,setdisable]=useState(true)
  const[spinner,setspinner]=useState([false,"value", false ])
  const context=useContext(notescontext)
  const {res,storeval}=context;             

  const onchange = async (e) => {
    setval({...val,[e.target.name]:e.target.value});
    // setval({ n: "", p: "", k: "", t: "", h: "", ph: "", rain: "" });
    const values = Object.values(val);
    if (values.includes("")) {                                
      setdisable(true);
    } else {
      setdisable(false);
    }
  };
  // if(res[0]===true&&res[2]===true)
  // {
  //   console.log(res[0],res[2])
  //   setspinner([res[0],res[1],res[2]])
  // }

  useEffect(() => {
    if (res[0] === true && res[2] === true) {
      setspinner([res[0], res[1], res[2]]);
    }
  }, [res]);
  const handleclick=(e)=>{
    console.log(spinner[0])
    storeval(val.n,val.p,val.k,val.t,val.h,val.ph,val.rain)
    console.log("done")
    setspinner([false,"value",true])
    
  }
  const clear=()=>{
    setval({ n: "", p: "", k: "", t: "", h: "", ph: "", rain: "" });
    setdisable(true)
    
  }

  return (
    <>
    <div style={{position:"sticky",top:"0"}}>
    <Navbar/>
    </div>
     
    <div className="main mt-5 mx-3">
    <div className="left">
        <h4 className="m-3">Nitrogen</h4>
        <div className="row m-3">
          <input type="text" name='n' required={true}  onChange={onchange} value={val.n} className="form-control" placeholder="Enter content" aria-label="First name"/>
        </div>
        <h4 className="m-3">Phosphorus</h4>
        <div className="row m-3">
          <input type="text" name='p' required onChange={onchange} value={val.p} className="form-control" placeholder="Enter content" aria-label="Last name"/>
        </div>
        <h4 className="m-3">Potassium</h4>
        <div className="row m-3">
            <input type="text" name='k' required onChange={onchange} value={val.k} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">Humidity</h4>
          <div className="row m-3">
            <input type="text" name='h' required onChange={onchange} value={val.h} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">Temperature</h4>
          <div className="row m-3">
            <input type="text" name='t' required onChange={onchange} value={val.t} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">Rainfall</h4>
          <div className="row m-3">
            <input type="text" name='rain' required onChange={onchange} value={val.rain} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">PH</h4>
          <div className="row m-3">
            <input type="number" name='ph' min={1} max={14} onChange={onchange} value={val.ph} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
    </div>
    <div className="right" style={{position:"relative",zIndex:"-1"}}>
        <h1 >Best Crop</h1>
        {console.log(spinner[1])}
        {/* {spinner[1]==="rice" && <img src={rice} alt="rice"></img>}
        {spinner[1] === "maize" && <img src={maize} alt="maize" />}
        {spinner[1] === "chickpea" && <img src={chickpea} alt="chickpea" />}
        {spinner[1] === "kidneybeans" && <img src={kidneybeans} alt="kidneybeans" />}
        {spinner[1] === "pigeonpeas" && <img src={pigeonpeas} alt="pigeonpeas" />}
        {spinner[1] === "mothbeans" && <img src={mothbeans} alt="mothbeans" />}
        {spinner[1] === "mungbean" && <img src={mungbean} alt="mungbean" />}
        {spinner[1] === "blackgram" && <img src={blackgram} alt="blackgram" />}
        {spinner[1] === "lentil" && <img src={lentil} alt="lentil" />}
        {spinner[1] === "pomegranate" && <img src={pomegranate} alt="pomegranate" />}
        {spinner[1] === "banana" && <img src={banana} alt="banana" />}
        {spinner[1] === "mango" && <img src={mango} alt="mango" />}
        {spinner[1] === "grapes" && <img src={grapes} alt="grapes" />}
        {spinner[1] === "watermelon" && <img src={watermelon} alt="watermelon" />}
        {spinner[1] === "muskmelon" && <img src={muskmelon} alt="muskmelon" />}
        {spinner[1] === "apple" && <img src={apple} alt="apple" />}
        {spinner[1] === "orange" && <img src={orange} alt="orange" />}
        {spinner[1] === "papaya" && <img src={papaya} alt="papaya" />}
        {spinner[1] === "coconut" && <img src={coconut} alt="coconut" />}
        {spinner[1] === "cotton" && <img src={cotton} alt="cotton" />}
        {spinner[1] === "jute" && <img src={jute} alt="jute" />}
        {spinner[1] === "cofee" && <img src={cofee} alt="cofee" />}
        {spinner[1] === "value" && <img src={cropgif} alt="crop" />} */}
        <img src={cropgif} alt="crop" />  
        <div className='spinner' style={{width:"10vw",position:"absolute",right:"35%",top:"46%"}}>
        {((spinner[0] === false&& spinner[2]===false)||(spinner[0]===true&&spinner[2]===true)) ? (
      <div className="btn btn-outline-success mx-3 fw-bolder">{spinner[1]}</div>
    ) : (
     <img style={{margin:"0px"}} alt="predicting" src={spinnergif} />
    )}
    </div>
        

    </div>
</div>
    
    <button type="submit" disabled={disable} onClick={handleclick} className="btn btn-success m-3" >Predict</button>
    <button type="button" onClick={clear} className="btn btn-success m-3">Clearall</button>
    </>
  )
}

export default Recommend
