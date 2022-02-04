import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import Title from 'components/atoms/Title/Title';
import SubtitleUser from 'components/atoms/SubtitleUser/SubtitleUser';
import { StyledListElement, StyledButtonWrapper } from './UserListItem.styles';
import { UsersContext } from 'providers/UserProvider';


const UserListItem = ({ userData: {average, name, attendance = '0%'}}) => {
    const { deleteUser } = useContext(UsersContext);
    
    return (
        <StyledListElement>
            <Average number={Number(average)} marginRight={'24px'}/>
            <div>
                <Title>{name}</Title>
                <SubtitleUser text={`attendance: ${attendance}%`}/>
            </div>
            <StyledButtonWrapper>
                <DeleteButton onClick={() => deleteUser(name)}>
                    X
                </DeleteButton>
            </StyledButtonWrapper>
        </StyledListElement>
    )
}


UserListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    })
}

export default UserListItem

