import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import * as rtl from '@testing-library/react'
import App from './App'
import { fireEvent } from '@testing-library/react';

it ('renders the Contact Form', () => {
    rtl.render(<App />)
    const inputFirstNameText = rtl.screen.queryByText(/first name/i)
    expect(inputFirstNameText).toBeInTheDocument()
    const inputLastNameText = rtl.screen.queryByText(/last name/i)
    expect(inputLastNameText).toBeInTheDocument()
    const inputEmailText = rtl.screen.queryByText(/email/i)
    expect(inputEmailText).toBeInTheDocument()
    const button = rtl.screen.queryByText(/submit/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const textArea = document.querySelector('#message')
    expect(textArea).toBeInTheDocument()
})