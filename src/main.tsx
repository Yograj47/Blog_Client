import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthModalProvider } from './context/AuthModal.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthProvider } from './context/UserAuth.tsx'

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
