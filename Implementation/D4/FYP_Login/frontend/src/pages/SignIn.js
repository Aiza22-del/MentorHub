import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'; 

function SignInPage() {
    const [state, setState] = useState({
        email: "",
        password: "",
        isAuthenticated: false 
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        const { email, password } = state;
        try {
            const response = await axios.post('http://localhost:8000/app1/login/', {
                email,
                password
            });
            console.log(response.data); 

            setState(prevState => ({
                ...prevState,
                isAuthenticated: true
            }));

        } catch (error) {
            console.error('Error:', error); 
           
        }
    };

    if (state.isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign In</h1>
                {/* Form fields */}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                {/* Submit button */}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInPage;