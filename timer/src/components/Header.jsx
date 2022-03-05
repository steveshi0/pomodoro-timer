import React from 'react';

const header_style = {
  color: "whitesmoke",
  fontSize: "5vh",
  whiteSpace: "nowrap",
  textAlign: "center",
  margin: "2%",
}

const Header = () => {
  return(
    <div>
      <h1 style={header_style}>
        tomato clock
      </h1>
      {/*<img src={"./Header-tomato.png"} alt={"header-cool-tomato"} />*/}  {/** Not Working */}
    </div>
  )
}

export default Header;