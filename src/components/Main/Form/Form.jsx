import React, { Component } from "react";
import { userContext } from "../../../context/userContext";
import './Form.css'
class Form extends Component {

  static contextType = userContext;

handleSubmit = (e) => {
  this.props.onSubmitForm(e)
  
  e.target.name.value = ''
  e.target.email.value = ''
  e.target.age.value = ''
  e.target.image.value = ''
}

sendEmail = () => {
  //***CONSUMER***
  const {login} = this.context; // Consume contexto desde JS
  
  login(this.props.data);// enviar email por contexto. Ejecuta la funcion que viene del contexto
  //alert("Email enviado: " + this.props.data);
  
  
}

  render() {
    return <div>
      {this.props.data ? <button  onClick={this.sendEmail}>Login</button> : ""}
      
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="age">Edad:</label>
          <input type="number" id="age" name="age" />
          <label htmlFor="image">URL imágen:</label>
          <input type="url" id="image" name="image" />
          <input type="submit" value="Añadir" />
        </form> 
        

    </div>;
  }
}

export default Form;
