/* eslint-disable no-unused-vars */
import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {

    // const [name,handleNewChange] = useInputState('nobody')

    const emailState = useInputState('nobody@gmail.com');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('form data ' , emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNewChange} type="text" name='name'/> */}
                <br />
                <input {...emailState} type="email" name='email'/>
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;