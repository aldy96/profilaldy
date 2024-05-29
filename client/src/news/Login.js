import axios from "axios";
import { useState } from "react";


function Login(props){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const loginhandler = async function (e) {
        e.preventDefault();
      
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            username,
            password,
          }),
        });
        refresh()
      };

      const refresh = () => {window.location.reload(true)}

    
      const getuser = async (e) => {
        e.preventDefault();
       
        axios.defaults.withCredentials = true;

            const response = await axios.get('http://localhost:5000/current_user', {
            headers: {
            'Content-Type': 'application/json'
             }
            });

        console.log(response.data);
        };

    

    return(
        <div className=" bg-gray-800 text-cyan-300 w-screen h-screen flex justify-center items-center">
           
            <form onSubmit={loginhandler} >
                <div className=" flex flex-col pb-5">
                    <label className=" pb-2" htmlFor="username">username : </label>
                    <input className="neumorpInput p-2 flex justify-center outline-none"  type="text" id='username' onChange={e=>setUsername(e.target.value)} value={username} required />
                </div>
                <div className=" flex flex-col pb-5">
                    <label className=" pb-2" htmlFor="password">Password : </label>
                    <input className="neumorpInput p-2 flex justify-center outline-none" type="password" id='password' onChange={e=>setPassword(e.target.value)} value={password} required />
                </div>
                <div className="py-5">
                    <button className=" neumorp1 w-full h-10" type="submit">SUBMIT</button>
                </div>
                
                <div className="py-5">
                    <button className=" neumorp1 w-full h-10"><a href="/register">register</a></button>
                </div>

                <div className="py-5">
                    <button className=" neumorp1 w-full h-10" onClick={getuser}>status</button>
                </div>

            </form>
        </div>
    )
}

export default Login;