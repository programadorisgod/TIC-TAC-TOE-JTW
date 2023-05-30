// import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
// dotenv.config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtTkKeLtRgz3b0qApSflOtzP1iWym2_dY',
  authDomain: 'tic-tac-toe-1172f.firebaseapp.com',
  projectId: 'tic-tac-toe-1172f',
  storageBucket: 'tic-tac-toe-1172f.appspot.com',
  messagingSenderId: '708477166871',
  appId: '1:708477166871:web:9d43182985716fd367c352'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
console.log(app)
const auth = getAuth(app)
export { auth }
