import React, { ChangeEvent, useState } from 'react'
import Form from '../shared/form'
import { signup } from './api'


const Error: React.FC<{ type: number }> = (props) => {
    const error = props.type
    switch (error) {
        case 0: return <div />
        case 1: return <div className='text-red-600'>{'\u26A0'} Passwords do not match. Please try again.</div>
        case 2: return <div className='text-red-600'>{'\u26A0'} Something went wrong. Please try again</div>
    }
}

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState(0)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handlePasswordConfirmationChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            if (password !== passwordConfirmation) {
                setError(1)
                return
            }

            const data = {
                user: {
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation
                }
            }

            const res = await signup(data)
            window.location.href = res.data.redirect
        }
        catch (e) {
            setError(2)
        }
    }

    return (
        <Form className='bg-[#F8AC48] w-full h-fit p-4' onSubmit={handleSubmit}>
            <Error type={error} />
            <div className='flex flex-col gap-4'>
                <label className='flex flex-col'>
                    Email:
                    <input type='text' value={email} onChange={handleEmailChange} required />
                </label>
                <label className='flex flex-col'>
                    Password:
                    <input type='password' value={password} onChange={handlePasswordChange} />
                </label>
                <label className='flex flex-col'>
                    Confirm Password:
                    <input type='password' value={passwordConfirmation} onChange={handlePasswordConfirmationChange} />
                </label>
                <input type="submit" value="Sign Up" className='cursor-pointer' />
            </div>
        </Form>
    )
}

export default SignupForm