import axios from "axios";
import { useState } from "react";


function Login(props){

    const [location, setLocation] = useState("")
    const [password, setPassword] = useState("")

    const klik = () => {
        logoutHandler()
        refresh()
    }

    
      const logoutHandler = async (e) => {
   
            axios.defaults.withCredentials = true;

            const res = await axios.get('http://localhost:5000/logout', {
            headers: {
            'Content-Type': 'application/json'
             },
             credentials: 'include', 
             })

            
        };

        const refresh = () => {window.location.reload(true)}

    

    return(
        <div className=" bg-gray-800 text-cyan-300 w-screen h-screen flex justify-center items-center">
           
          
                <div className="py-5">
                    <button className=" neumorp1 w-full h-10" onClick={klik}>LogOut</button>
                </div>

            
        </div>
    )
}

export default Login;