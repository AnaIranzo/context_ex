import React, { Component } from "react";
import './Card.css'



class Card extends Component {
  

  render() {
    return <div className="card-container">
      <p>{this.props.data.userName}</p>
      <p>{this.props.data.email}</p>
      <p>{this.props.data.age}</p>
      <img src={this.props.data.image} alt="" />
    </div>;
  }
}

export default Card;
