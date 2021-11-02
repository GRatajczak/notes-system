import React from 'react';
import {  FlexWrapper } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import {Button} from 'components/atoms/Button/Button';
import styled from 'styled-components';

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

const UsersList = ({name, handleInputChange, atd,  avg, handleNewUser}) => {

        return(
            <FlexWrapper>
                <InputWrapper as="form">
                    <h3>Add new student</h3>

                    <FormField 
                        name={'name'}  
                        id={'name'} 
                        label={'name'} 
                        value={name} 
                        onChange={handleInputChange}
                    />
                    <FormField 
                        name={'atd'}  
                        id={'atd'} 
                        label={'atd'} 
                        value={atd}  
                        onChange={handleInputChange}
                    />
                    <FormField 
                        name={'avg'} 
                        id={'avg'} 
                        label={'avg'} 
                        value={avg}  
                        onChange={handleInputChange}
                    />
                    <Button onClick={handleNewUser}>Save </Button>
                </InputWrapper>
            </FlexWrapper>
        )
};

UsersList.propTypes = {};

export default UsersList;