import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class News extends Component {

    render() {
        const statusnya = (e) => { 
            e.preventDefault();
            console.log(this.props.auth)
        }
    return(
        <div className=" bg-gray-800 text-cyan-300 w-screen h-screen flex justify-center items-center flex-col">
           DONE
           <div className="py-5 h-fit w-[100px]">
                <div>
                    <button className=" neumorp1 w-full h-10"><a href="/logout">Logout</a></button>
                </div>
                <div className="py-5">
                    <button className=" neumorp1 w-full h-10"><a href="/login">Login</a></button>
                </div>
                <div className="py-5">
                    <button className=" neumorp1 w-full h-10" onClick={statusnya}>Status</button>
                </div>
            </div>
        </div>
    )
}
}

function mapStateToProps ({auth}){
    return { auth }
}

export default connect(mapStateToProps, actions)(News);