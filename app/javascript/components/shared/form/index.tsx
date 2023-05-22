import React, { ReactNode } from 'react'

interface FormProps {
    children: ReactNode
    className?: string
    onSubmit: (params: any) => void
}

const Form: React.FC<FormProps> = ({ children, className, onSubmit }) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form