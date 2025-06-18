import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, supportedLanguages } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName || 'Guest User',
            photoURL: photoURL,
          })
        )
        navigate('/browse')
        // User is signed in
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    })
    return () => unsubscribe()
  }, [])

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex space-x-2 items-center justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg cursor-pointer"
            onClick={handleGptSearch}
          >
            {!showGptSearch ? 'GPT Search' : 'Home'}
          </button>
          <img
            className="hidden md:block w-8 h-8"
            src={user?.photoURL}
            alt="profile_logo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
//"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVFNK39QzecSge8JWWNEjBtiSvbSaYesPxKSTFbsxFOurFQAcaBYA8RWh8kxxrbgn_1JpPWuwkqUxpdzeb0t9EcQDdrSiYIQ0-iP.png?r=d47"
export default Header
