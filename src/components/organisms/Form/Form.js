import React, { useReducer, useContext } from 'react';
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

const reducer = (state, action) => {
    switch (action.type){
        case 'INPUT CHANGE': 
        return {
            ...state, 
            [action.field]: action.value
        }
        case 'CLEAR VALUES':
            return initialFormState;
        default:
            return state;
    }
}

const From = () => {
    
        const [formValues, dispach] = useReducer(reducer, initialFormState);
        const { handleAddUser } = useContext(UsersContext);
    
        const handleInputChange = (e) => {
            dispach({
                type: 'INPUT CHANGE',
                field: e.target.name,
                value: e.target.value
            })
        };
    
        const handleSubmitUser = (e) => {
            e.preventDefault();
            dispach({
                type: 'INPUT CHANGE',
                field: e.target.name,
                value: e.target.value
            })
            handleAddUser(formValues);
            dispach({type: 'CLEAR VALUES'});
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