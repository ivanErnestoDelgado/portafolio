import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppController } from './Controllers/appController.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppController/>
  </StrictMode>,
)
