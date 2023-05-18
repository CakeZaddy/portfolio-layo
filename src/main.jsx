import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

document.documentElement.classList.add(localStorage.theme)

function setTheme(theme) {
  localStorage.theme = theme
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
}

window.toggleTheme = () => {
  setTheme(localStorage.theme === 'dark' ? 'light' : 'dark')
}
