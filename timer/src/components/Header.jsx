import React, {useEffect}from 'react';

const header_style = {
  color: "#FFFFF7",
  fontSize: "37.5px",
  whiteSpace: "nowrap",
  textAlign: "center",
  margin: "2%"
}
//const randomSmilingFace = <span id={"random-smiling-face"} style={{fontSize: "1000px"}}>&#129322;</span>

const Header = () => {

  return(
    <div>
      <h1 style={header_style}>
        Pomodoro Timer 🍅⏱️
      </h1>
      {/*<img src={"./Header-tomato.png"} alt={"header-cool-tomato"} />*/}  {/** Not Working */}
    </div>
  )
}

export default Header;