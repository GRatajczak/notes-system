import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'components/atoms/Label/Label'
import { Input } from 'components/atoms/Input/Input'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    ${Label}{
        margin: 0 0 10px;
    }
`;

const FormField = ({value, label,name, id, type = '', onChange}) => {
    return (
        <Wrapper> 
            <Label htmlFor={id}>{label}</Label>
            <Input data-testid={label} value={value} name={name} id={id} type={type} onChange={onChange} /> 
        </Wrapper>
    )
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default FormField
