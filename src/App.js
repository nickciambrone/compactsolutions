import logo from './logo.svg';
import './App.css';
// import Header from './components/header/header.component'
import React from 'react';
// import Home from './components/home/home.component'
// import Services from './components/services/services.component';
// import About from './components/about/about.component';
// import Contact from './components/contact/contact.component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activePage : 'home'
    }
  }
  handleClick = (page)=>{
    this.setState({activePage:page})
  }
  render(){
    console.log(this.state.activePage)
  return (
    <div className="App">
    check
    {/*<Header activePage = {this.state.activePage} handleClick = {this.handleClick}/> */}
     {/*
       this.state.activePage==='home' ?
       <Home /> :
       this.state.activePage==='services' ?
       <Services /> :
       this.state.activePage==='about' ?
       <About /> :
       this.state.activePage==='contact' ?
       <Contact /> :
       <Home />

     */}
    </div>
  );
}
}

export default App;
