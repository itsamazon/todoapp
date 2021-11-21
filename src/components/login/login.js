import React from "react";
import LoginWrap from "./loginWrap";
import LoginForm from "./loginForm";

export default class Login extends React.Component {
    state = {
        check:true,
    }
    checker = () => ( 
        this.setState((prevState) => (
            {check:false}
        ))
    )
    render(){ 
        return(
            <div className='shadow border px-3 py-5 rounded'>
               {this.state.check?<LoginWrap check = {this.checker} /> : <LoginForm />}
            </div>
        )
    }
}
