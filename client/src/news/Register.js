import React, { useState } from "react";
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [terdaftar, setTerdaftar] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Attempting to register with:', { username, email, password }); // Logging data to be sent
        try {
            const response = await axios.post('http://localhost:5000/register', { username, email, password });
            console.log('Server response:', response.data); // Log response from server
            setUsername("");
            setPassword("");
            setEmail("");
            alert('Registration successful');
            setTerdaftar(true);
            resetTerdaftar();
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message); // Improved error handling
        }
    };

    const resetTerdaftar = () => { 
        setTimeout(() => {
            setTerdaftar(false);
        }, 1000);
    };
    
    return (
        <div className="bg-gray-800 text-cyan-300 h-screen w-screen grid grid-flow-rows">
            <form onSubmit={handleRegister} className="h-screen items-center flex flex-col justify-center w-full">
                <h2>User Registration</h2>
                <div className="flex flex-col pb-5 w-80">
                    <label className="pb-2" htmlFor="username">Name:</label>
                    <input className="neumorpInput p-2 flex justify-center outline-none" type="text" id='username' onChange={e => setUsername(e.target.value)} value={username} required />
                </div>
                <div className="flex flex-col pb-5 w-80">
                    <label className="pb-2" htmlFor="email">Email:</label>
                    <input className="neumorpInput p-2 flex justify-center outline-none" type="email" id='email' onChange={e => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="flex flex-col pb-5 w-80">
                    <label className="pb-2" htmlFor="password">Password:</label>
                    <input className="neumorpInput p-2 flex justify-center outline-none" type="password" id='password' onChange={e => setPassword(e.target.value)} value={password} required />
                </div>
                <div className="py-5 w-80">
                    <button className="neumorp1 w-full h-10" type="submit">SUBMIT</button>
                </div>
                <div className="py-5 w-80">
                    <button className="neumorp1 w-full h-10"><a href="/login">Login</a></button>
                </div>
                {terdaftar && <span>Terdaftar</span>}
            </form>
        </div>
    );
}

export default Register;
