import React, { useState } from 'react'
import { render } from '@testing-library/react'

const InputWithButton = () => {
    const [input, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    return (
        <>
            <input 
                name="Name" 
                value={input} 
                onChange={handleInputChange}
                id="name" 
                placeholder="Enter the name" 
            />
            <button 
                disabled={!input}
            >
                Submit
            </button>
        </>
    )
}


describe('Input with button', () => {
    
})