import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'

//home
import Home from './pages/Home/Home'

// import News from './news/News'
// import Register from './news/Register'
// import Utama from "./news/Utama";

class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
}

  render(){
  return (
    <div className=" overflow-x-hidden bg-gray-800   w-screen flex justify-center items-center">
        {/* <Page1/> */}
        <BrowserRouter>  {/*can only one child*/}
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<Home/>} />
            <Route exact path="/blog" element={<Home/>} />
            <Route exact path="/portfolio" element={< Home/>} />
            <Route exact path="/contact" element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}}

export default connect(null, actions)(App);