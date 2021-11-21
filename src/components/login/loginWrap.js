import React from "react";

const LoginWrap = (props) => {
    return(
        <div className='space-y-3'>
            <div className= 'login_wrap_content space-y-3'>
                <h1 className="text-lg font-bold">Login</h1>
                <p>Kindly login to view your todo list</p>
                <button className="px-3 py-2 rounded hover:shadow-md shadow text-white bg-blue-600" onClick={props.check}>Login</button>
            </div>
        </div>
    )
}

export default LoginWrap