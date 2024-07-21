import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

const Root = () => {
  return (
    <div>
       <Outlet/>
       <Toaster/>
    </div>
  )
}

export default Root