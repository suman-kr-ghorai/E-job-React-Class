import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserForm from './Userform.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <UserForm/>
  </StrictMode>,
)
