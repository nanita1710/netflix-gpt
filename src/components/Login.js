import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_URL, USR_AVATAR } from '../utils/constants'

const Login = () => {
  const dispatch = useDispatch()
  const [isSignIn, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return

    //SignIn/ SignUp logic
    if (!isSignIn) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USR_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName || 'Guest User',
                  photoURL: photoURL,
                })
              )
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
              // ...
            })
          console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' - ' + errorMessage)

          // ..
        })
    } else {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' - ' + errorMessage)
        })
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="p-12 bg-black absolute w-full md:w-3/12 mx-auto my-36 right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-black bg-opacity-40 border border-gray-600 rounded-sm"
        />
        <p className="text-red-500 text-lg p-2">{errorMessage}</p>
        <button
          className="my-2 p-2 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
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
