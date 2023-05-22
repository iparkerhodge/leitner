import React, { ChangeEvent, useState } from 'react'
import Form from '../shared/form'
import { login } from './api'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, showError] = useState(false)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handleRememberChange = (e: ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const data = {
                user: {
                    email: email,
                    password: password
                }
            }
            const res = await login(data)
            window.location.href = res.data.redirect
        }
        catch (e) {
            showError(true)
        }
    }

    return (
        <Form className='bg-[#F8AC48] w-full h-fit p-4' onSubmit={handleSubmit}>
            {error &&
                <div className='text-red-600'>{'\u26A0'} Unable to verify your credentials. Please try again.</div>
            }
            <div className='flex flex-col gap-4'>
                <label className='flex flex-col'>
                    Email:
                    <input type='text' value={email} onChange={handleEmailChange} required />
                </label>
                <label className='flex flex-col'>
                    Password:
                    <input type='password' value={password} onChange={handlePasswordChange} required />
                </label>
                <label className='flex items-center gap-2'>
                    <input type='checkbox' checked={remember} onChange={handleRememberChange} />
                    Remember Me?
                </label>
                <input type="submit" value="Submit" className='cursor-pointer' />
            </div>
        </Form>
    )
}

export default LoginForm