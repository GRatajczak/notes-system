import React from 'react'
import FormField from './FormField'
import {renderWithProvider} from 'helpers/renderWithProvider';

describe('Input with button', () => {
    it('Render component' , () => {
        renderWithProvider(<FormField label="label" name="name" id="id" />);
    });

})