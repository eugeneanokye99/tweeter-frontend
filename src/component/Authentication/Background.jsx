import React from 'react'
import authBgImg from "../Assets/AuthBgImage.svg";

function Background(){
  return (
    <div>
    <p classname="tweeterHeadd" style={{ position: "absolute",
width: "9vh",
height: "9vh",
left: "4vw",
top: "1.5vh",
fontStyle: "normal",
fontWeight: "400",
fontSize: "2.5rem",
lineHeight: "58px",
fontFamily:"Kaushan Script",
color:"#63DF76",
opacity:"0.79",
zIndex:10}}>Tweeter</p>
<div className='backgroundImage'
style={{
  "position":"absolute",
  "width":"200vw",
  "height":"100vh",
   "background": "norepeat center fixed",
   "backgroundSize": "cover",
   "overflow": "hidden",
}}
 >
   <img src={authBgImg} style={{
    "background": "norepeat center fixed",
   "backgroundSize": "cover",
   }} />
</div>
        {/* <img src={authBgImg} id="authBgImg" style={{
          // position:"absolute",
          //  height:"110vh",
    // maxWidth:"100%",
    // maxHeight:"100vh",
    // height:"auto",
    // marginTop:"-40px",
    // width:"100vw" ,
    // height:"100vh" ,
    backgroundSize: "cover",
    backgroundAttachment:"fixed",
    backgroundPosition:"center center",
    background: " noRepeat center fixed",
    overflow:"hidden",
    zIndex:5
        }} /> */}
    </div>
  )
}

export default Background
