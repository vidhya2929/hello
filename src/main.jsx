import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'    // .jsx is not needed   also if there is more than one element then use {} brace
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
