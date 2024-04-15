import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './context/openModal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModalProvider>
)
