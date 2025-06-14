import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 mx-auto my-36 right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
        />
        <button className="my-2 p-2 bg-red-600 w-full rounded-md">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 " onClick={toggleSignInForm}>
          {isSignIn ? (
            <>
              New to Netflix?
              <span className="cursor-pointer hover:text-red-500">
                {' '}
                Sign Up now
              </span>
            </>
          ) : (
            <>
              {' '}
              Already registered?{' '}
              <span className="cursor-pointer hover:text-red-500">
                Sign In Now.
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login
