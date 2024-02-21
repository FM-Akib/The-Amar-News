import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Newsprovider from './components/Newsprovider.jsx'
import Authprovider from './Authentication/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <Newsprovider>
   <RouterProvider router={router} />
   </Newsprovider>
   </Authprovider>
  </React.StrictMode>,
)
