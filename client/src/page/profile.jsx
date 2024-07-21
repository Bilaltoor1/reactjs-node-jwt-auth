import { useAppStore } from '@/store'
import React from 'react'
const profile = () => {
    const {userInfo} = useAppStore()
    console.log(userInfo)
  return (
    <div>
        profile
   <div>
    email : {userInfo?.email}
   </div>
    </div>
  )
}
export default profile