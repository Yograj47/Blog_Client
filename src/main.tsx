import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthModalProvider } from './Utils/context/AuthModal'
import { UserAuthProvider } from './Utils/context/UserAuth'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthModalProvider>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </AuthModalProvider>
    </BrowserRouter>
  </StrictMode>
)
