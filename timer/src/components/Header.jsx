import React from 'react';

const header_style = {
  color: "#FFFFF7",
  fontSize: "40px",
  whiteSpace: "nowrap",
  textAlign: "center",
  margin: "2%",
}

const Header = () => {
  return(
    <div>
      <h1 style={header_style}>
        Your Tomato Timer
      </h1>
      {/*<img src={"./Header-tomato.png"} alt={"header-cool-tomato"} />*/}  {/** Not Working */}
    </div>
  )
}

export default Header;