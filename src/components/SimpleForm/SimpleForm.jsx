/* eslint-disable no-unused-vars */
import React from 'react';

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log('submit hoise');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name'/>
                <br />
                <input type="email" name='email'/>
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;