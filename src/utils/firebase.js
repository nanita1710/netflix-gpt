// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-MaRiBTpIlVf17lOLtHIZkMSTbaef88w',
  authDomain: 'netflixgpt-92624.firebaseapp.com',
  projectId: 'netflixgpt-92624',
  storageBucket: 'netflixgpt-92624.firebasestorage.app',
  messagingSenderId: '163719452169',
  appId: '1:163719452169:web:d76a307d80c3050f9f0ad8',
  measurementId: 'G-DFSQWQ2BCJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
