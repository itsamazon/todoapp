import React, { useState } from "react";
import { LoginAction } from '../../store/actions/loginActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const LoginForm = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const login = (username, password) => {
        console.log("login function fired")
        setIsloading(true);
        let payload = { username: username.toUpperCase(), password: password }
        props.loginAction(payload).then(result => {
            // console.log(props)
            if (result.success) {
                setIsloading(false);
                navigate("/dashboard")
            }
        })
    }
    const handleChange = (e) => {
        return (
            e.target.name === 'username' ? setusername(e.target.value) :
                e.target.name === 'password' ? setPassword(e.target.value) :
                    () => { }
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        username.length && password.length && login(username, password);
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="Username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                onClick={handleClick}
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ${isLoading? 'hover:bg-indigo-400':''} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
               {isLoading?'Loading': 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state',state);
    return {
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps = {
    loginAction: LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);