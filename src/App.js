
import './App.css';
import { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from "./context/userContext";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      login: this.login,
      logout: this.logout,
    }
  }

  login = (email) => { 
    this.setState({...this.state, email: email});
  }

  logout = () => { 
    this.setState({...this.state, email: ''});
  }

  
  render (){
    
    return <>

    
    <BrowserRouter>
      <userContext.Provider value={this.state}>
      <Header />
      <Main/>
      </userContext.Provider>
    </BrowserRouter>
      
      <Footer />
    
    
    
    
    
    </>
  }
}

export default App;
