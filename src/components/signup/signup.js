import React from "react";
import SignupWrap from "./signupWrap";
import SignupForm from "./signupForm";

export default class Signup extends React.Component {
    state = {
        check:true
    }

    check = () => (
        this.setState(()=>(
            {check:false}
        ))
    )

    render()
    {return(
        <div className='signup'>
            {this.state.check? <SignupWrap check ={this.check} />:<SignupForm />}
        </div>
    )}
}
