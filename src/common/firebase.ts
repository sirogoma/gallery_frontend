// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage, ref } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-69FtqKS14tpaF02hiWFKYYxxI4x7b0g',
  authDomain: 'gallery-sirogoma.firebaseapp.com',
  projectId: 'gallery-sirogoma',
  storageBucket: 'gallery-sirogoma.appspot.com',
  messagingSenderId: '1043662712581',
  appId: '1:1043662712581:web:b78dda5b329f89bf07916c',
  measurementId: 'G-9ZJB4D8T2D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const storage = getStorage()
