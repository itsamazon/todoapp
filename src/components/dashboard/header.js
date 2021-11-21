import React from "react";

const Header = (props) =>{ 
    return(
        <nav className='bg-gray-200'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex text-gray-700 items-baseline space-x-4">
                        Hi {props.name} !
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        onClick = {props.signOut}
                        className="p-1 rounded-full text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                      Sign Out
                      </button>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Header