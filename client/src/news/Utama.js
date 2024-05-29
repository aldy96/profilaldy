import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';
import axios from 'axios';
import * as actions from '../actions'

class Utama extends Component {

    renderContent(){

        
        // console.log(this.props.auth);
        switch (this.props.auth) { //this is from action.payload
            case null :
                return <div className=' w-screen h-screen flex justify-center items-center'>OFFLINE</div>
            case false :
                return <Login status={this.props.auth}/>
            default :
                return <Logout/>
                        //we using array 
        }
    }
    render() {
   
        return(
           <div className=' w-screen h-screen flex justify-center items-center'>
                       {this.renderContent()}
           </div>
                
        )
    }
}

function mapStateToProps ({auth}){
    return { auth }
}

export default connect(mapStateToProps, actions)(Utama);