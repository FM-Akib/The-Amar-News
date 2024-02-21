import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Newsprovider from './components/Newsprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Newsprovider>
   <RouterProvider router={router} />
   </Newsprovider>
  </React.StrictMode>,
)
