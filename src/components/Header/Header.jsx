import React, { Component } from "react";
import { userContext } from "../../context/userContext";

class Header extends Component {

  


  render() {
    return <div className="header-container">


      <userContext.Consumer>
        {({ logout, email }) => email ?
          <span>Hola, {email} <button onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>
    </div>;
  }
}

export default Header;
