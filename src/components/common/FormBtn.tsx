import React from 'react'

interface FormBtnProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

function FormBtn({ children, onClick, disabled }: FormBtnProps) {
    return (
        <button
            type='submit'
            className='form-btn'
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default FormBtn
