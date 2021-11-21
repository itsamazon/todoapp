import React from "react";

const SignupForm = () => {
    return(
        <div className="signup_form">
            <div className='signup_form_content'>
                <h1>Sign up</h1>
                <form>
                    <input type='text' name='name' placeholder='Name'></input>
                    <input type='text' name='username' placeholder='Username'></input>
                    <input type='password' name='password' placeholder='Password'></input>
                    <button>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;