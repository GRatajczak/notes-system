import React from 'react';
import Form from './Form';
import Dashboard from 'views/Dashboard';
import {renderWithProvider} from 'helpers/renderWithProvider';
import { getByTestId, screen, fireEvent } from '@testing-library/dom';


describe('Input with button', () => {
    it('Render component' , () => {
        renderWithProvider(
            <>
            <Form  />
            <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Grzes XYZ'}});
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '33%'}});
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '3.4'}});

        fireEvent.click(screen.getByText('Save'));
        
        screen.getByText("Grzes XYZ");
    });

})
