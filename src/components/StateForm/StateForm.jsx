/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// use individual field state 
const StateForm = () => {

    const [email,setEmail] = useState(null);
    const [name,setName] = useState(null);
    const [password,setPassword] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);

    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                type="text" name='name'/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name='email'/>
                <br />
                <input onChange={handlePasswordChange} type="password" name='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;