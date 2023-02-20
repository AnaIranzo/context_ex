import React, { Component } from "react";

import Form from "./Form/Form";
import Card from "./Card/Card";

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      
          userName: '',
          email: '',
          age: 0,
          image: '',
        
      
    }
  }


  handleForm = (event)=> {
    event.preventDefault();

    //alert('Enviado')
    const userName = event.target.name.value;
    const email= event.target.email.value;
    const age= event.target.age.value;
    const image= event.target.image.value;


    this.setState({...this.state, userName,email,age,image});

  }
  render() {

    return <main>


        <Form  onSubmitForm={this.handleForm} data={this.state.email}/>
        <Card data={this.state}/>
    
    </main>;
  }
}

export default Main;
