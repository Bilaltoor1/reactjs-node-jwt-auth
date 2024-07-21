import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </>,
)
