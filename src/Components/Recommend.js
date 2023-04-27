import React,{ useState,useContext, useEffect }  from 'react'
import Navbar from './Navbar'
import cropgif from './images/cropgif.gif'
import spinnergif from './images/spinner.gif'
import notescontext from "../Components/context/notes/notecontext"
import hindi from "../Hindi.json"
import english from "../english.json"
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




const Recommend = () => {
  const[val,setval]=useState({n:"",p:"",k:"",t:"",h:"",ph:"",rain:""})
  const [disable,setdisable]=useState(true)
  const[mainval,setmainval]=useState("value")
  const[spinner,setspinner]=useState([false,"value", false ])
  const context=useContext(notescontext)
  const {res,storeval}=context;            
  const {lang}=context;
 
  const getText = (key) => {
    return lang === "hindi" ? hindi[key] : english[key];
  };
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
      setspinner([res[0],res[1],res[2]]);
      setmainval(res[1].trim());
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
        <h4 className="m-3">{getText("nitrogen")}</h4>
        <div className="row m-3">
          <input type="text" name='n' required={true}  onChange={onchange} value={val.n} className="form-control" placeholder="Enter content" aria-label="First name"/>
        </div>
        <h4 className="m-3">{getText("phosphorus")}</h4>
        <div className="row m-3">
          <input type="text" name='p' required onChange={onchange} value={val.p} className="form-control" placeholder="Enter content" aria-label="Last name"/>
        </div>
        <h4 className="m-3">{getText("potassium")}</h4>
        <div className="row m-3">
            <input type="text" name='k' required onChange={onchange} value={val.k} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">{getText("humidity")}</h4>
          <div className="row m-3">
            <input type="text" name='h' required onChange={onchange} value={val.h} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">{getText("temperature")}</h4>
          <div className="row m-3">
            <input type="text" name='t' required onChange={onchange} value={val.t} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">{getText("rainfall")}</h4>
          <div className="row m-3">
            <input type="text" name='rain' required onChange={onchange} value={val.rain} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
          <h4 className="m-3">{getText("ph")}</h4>
          <div className="row m-3">
            <input type="number" name='ph' min={1} max={14} onChange={onchange} value={val.ph} className="form-control" placeholder="Enter content" aria-label="Last name"/>
          </div>
    </div>
    <div className="right" style={{position:"relative",zIndex:"-1"}}>
        <h1 >{getText("bestcrop")}</h1>
        {console.log(mainval)}
        {console.log("yaha sab sahi he")}
        {mainval==="rice" && <img src={rice} alt="rice"></img>}
        {mainval === "maize" && <img src={maize} alt="maize" />}
        {mainval === "chickpea" && <img src={chickpea} alt="chickpea" />}
        {mainval === "kidneybeans" && <img src={kidneybeans} alt="kidneybeans" />}
        {mainval === "pigeonpeas" && <img src={pigeonpeas} alt="pigeonpeas" />}
        {mainval === "mothbeans" && <img src={mothbeans} alt="mothbeans" />}
        {mainval === "mungbean" && <img src={mungbean} alt="mungbean" />}
        {mainval === "blackgram" && <img src={blackgram} alt="blackgram" />}
        {mainval === "lentil" && <img src={lentil} alt="lentil" />}
        {mainval === "pomegranate" && <img src={pomegranate} alt="pomegranate" />}
        {mainval === "banana" && <img src={banana} alt="banana" />}
        {mainval === "mango" && <img src={mango} alt="mango" />}
        {mainval === "grapes" && <img src={grapes} alt="grapes" />}
        {mainval === "watermelon" && <img src={watermelon} alt="watermelon" />}
        {mainval === "muskmelon" && <img src={muskmelon} alt="muskmelon" />}
        {mainval === "apple" && <img src={apple} alt="apple" />}
        {mainval === "orange" && <img src={orange} alt="orange" />}
        {mainval === "papaya" && <img src={papaya} alt="papaya" />}
        {mainval === "coconut" && <img src={coconut} alt="coconut" />}
        {mainval === "cotton" && <img src={cotton} alt="cotton" />}
        {mainval === "jute" && <img src={jute} alt="jute" />}
        {mainval === "cofee" && <img src={cofee} alt="cofee" />}
        {mainval === "value" && <img src={cropgif} alt="crop" />}
        
        <div className='spinner' style={{width:"10vw",position:"absolute",right:"35%",top:"46%"}}>
        {((spinner[0] === false&& spinner[2]===false)||(spinner[0]===true&&spinner[2]===true)) ? (
      <div className="font-weight-bold fs-5"><u>{spinner[1]}</u></div>
    ) : (
     <img style={{margin:"0px"}} alt="predicting" src={spinnergif} />
    )}
    </div>
        

    </div>
</div>
    
    <button type="submit" disabled={disable} onClick={handleclick} className="btn btn-success m-3" >{getText("predict")}</button>
    <button type="button" onClick={clear} className="btn btn-success m-3">{getText("clearall")}</button>
    </>
  )
}

export default Recommend
