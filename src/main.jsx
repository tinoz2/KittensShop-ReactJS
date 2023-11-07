import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/navBar.css'
import App from './App'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB5idSKCsvSl23mwVwXNtT_wQt8c1j_YlM",
  authDomain: "reactjsproject-44f1a.firebaseapp.com",
  projectId: "reactjsproject-44f1a",
  storageBucket: "reactjsproject-44f1a.appspot.com",
  messagingSenderId: "136416622794",
  appId: "1:136416622794:web:9425fb147990656ec3dc33"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
