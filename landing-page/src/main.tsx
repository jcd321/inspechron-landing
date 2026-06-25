import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n'
import App from './App'
import './index.css'

if (document.fonts?.ready) {
  void document.fonts.ready.then(() => document.body.classList.add('fonts-loaded'))
} else {
  document.body.classList.add('fonts-loaded')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
