import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'


import News from './news/News'
import Register from './news/Register'
import Utama from "./news/Utama";

class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
}

  render(){
  return (
    <div className=" overflow-x-hidden bg-gray-800 w-screen flex justify-center items-center">
        {/* <Page1/> */}
        <BrowserRouter>  {/*can only one child*/}
          <Routes>
            <Route exact path="/" element={<News />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Utama />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}}

export default connect(null, actions)(App);