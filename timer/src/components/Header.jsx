import React, {useEffect}from 'react';

const header_style = {
  color: "#FFFFF7",
  fontSize: "37.5px",
  whiteSpace: "nowrap",
  textAlign: "center",
  margin: "2%"
}

const Header = () => {
  return(
    <div>
      <h1 style={header_style}>
        Pomodoro Timer 🍅⏱️
      </h1>
    </div>
  )
}

export default Header;