import React, { useState, useContext } from 'react';
import {  FlexWrapper } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import {Button} from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { UsersContext } from 'providers/UserProvider';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px  #ddd;
    h3 {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;


const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const From = () => {
    
        const [formValues, setFormValues] = useState(initialFormState);
        const { handleAddUser } = useContext(UsersContext);
    
        const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
        };
    
        const handleSubmitUser = (e) => {
            e.preventDefault();
            handleAddUser(formValues);
            setFormValues(initialFormState);
        };
    
        return(
            <UsersContext.Consumer>
                {(ctx) => (
                    <FlexWrapper>
                        {console.log(ctx)}
                        <InputWrapper as="form" onSubmit={handleSubmitUser}>
                            <h3>Add new student</h3>
    
                            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
                            <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
                            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
                            <Button >Save </Button>
                        </InputWrapper>
                    </FlexWrapper>
                    )}
                </UsersContext.Consumer>
        )
};

From.propTypes = {};

export default From;