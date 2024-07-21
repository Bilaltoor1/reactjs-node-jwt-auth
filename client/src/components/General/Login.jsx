import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import apiClient from '@/lib/apiClient'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '@/utils/constants'
import { useAppStore } from '@/store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { setUserInfo } = useAppStore()
    const navigate = useNavigate()
    const validateSignup = () => {
        if (!email.length) {
            toast.error('Email is required')
            return false
        }
        else if (!password) {
            toast.error('Password is required')
            return false
        }
        else if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return false
        }
        return true
    }

    const validateLogin = () => {
        if (!email.length) {
            toast.error('Email is required')
            return false
        }
        else if (!password) {
            toast.error('Password is required')
            return false
        }
        return true
    }

    const HandleLogin = async () => {
        if (validateLogin()) {
            const response = await apiClient.post(LOGIN_ROUTE,
                { email, password },
                { withCredentials: true })
            if (response.data.user) {
                setUserInfo(response.data.user);
                console.log(response.data.user)
                navigate('/profile')
            }
        }
    }
    const HandleSignUp = async () => {
        if (validateSignup()) {
            const response = await apiClient.post(SIGNUP_ROUTE,
                { email, password },
                { withCredentials: true })
            if (response.status == 201) {
                setUserInfo(response.data.user)
            }
        }
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-[90%] md:w-[600px]'>
                <h1 className='font-bold text-xl text-center md:text-2xl mb-6 '>👍 Login / Register For Enjoying using our system</h1>
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-1/2" value="login">Login</TabsTrigger>
                        <TabsTrigger className="w-1/2" value="signup">SignUp</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 my-6 focus:outline-none active:outline-none" placeholder="Email" />
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="py-2 my-6 focus:outline-none active:outline-none" placeholder="Password" />
                        <Button onClick={HandleLogin} className='bg-black text-white px-4  py-2 rounded-full w-full mt-4'>Login</Button>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 my-6 focus:outline-none active:outline-none" placeholder="Email" />
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="py-2 my-6 focus:outline-none active:outline-none" placeholder="Password" />
                        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="py-2 my-6 focus:outline-none active:outline-none" placeholder="Confirm Password" />
                        <Button onClick={HandleSignUp} className='bg-black text-white px-4  py-2 rounded-full w-full mt-4'>Register</Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Login