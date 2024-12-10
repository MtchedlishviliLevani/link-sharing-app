import React from 'react'

interface FormBtnProps {
    children: React.ReactNode;
}
function FormBtn({ children }: FormBtnProps) {
    return (
        <button type='submit' className='form-btn'>{children}</button>
    )
}

export default FormBtn
