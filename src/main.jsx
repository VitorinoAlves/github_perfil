import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

/*import {PI as numeroPi,GTM_BRASIL} from './test.js';
import xpto from './nomes.js';*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
