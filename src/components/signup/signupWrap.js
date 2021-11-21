import React from "react";

const SignupWrap = (props) => {
    return(
        <div className='signup_wrap'>
            <div className= 'signup_wrap_content'>
                <h1>Signup</h1>
                <p>An excellent way to keep track of all you need to do for a more productive life!</p>
                <p>Sign up to start!</p>
                <button onClick={props.check}>Signup</button>
            </div>
        </div>
    )
}

export default SignupWrap