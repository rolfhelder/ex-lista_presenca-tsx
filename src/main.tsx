import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './pages/Home/Home'

const root = document.getElementById('root')

if(root){
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)}


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
