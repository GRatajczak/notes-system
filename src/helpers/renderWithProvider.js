import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import '@testing-library/jest-dom'
import UsersProvider from 'providers/UserProvider';


export const renderWithProvider = (children) => {
    return render(
        <ThemeProvider theme={theme}>
            <UsersProvider>
                {children}
            </UsersProvider>
        </ThemeProvider>
    )
}