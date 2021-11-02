import React, {useState, useEffect } from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { users as userData } from 'data/users';
import { StyledWrapper } from './UsersList.styles';

const mocAPI = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            if(userData) {
                resolve([...userData])
            }
        }, 2000);
    })
}

// Example for better understand React Hooks

// class UsersList extends  React.Component {

//     state = {
//         users: [],
//         isLoading: true
//     }
//     componentDidMount(){
//         mocAPI()
//             .then(data => {
//                 this.setState({users:data})
//                 this.setState({isLoading: false})
//             }
//         )
//     }

//     componentDidUpdate(_, prevState){
//         if(prevState.isLoading !== this.state.isLoading){
//             console.log('Stan się zmienił');
//         }
//     }

//     deleteUser = (userName) => {
//         const filteredUsers = this.state.users.filter(user => user.name !== userName);
//         this.setState({users: filteredUsers})
//     }

//     render(){
//         return(
//             <StyledWrapper>
//                 <h2>
//                     {this.state.isLoading ? 'Ładowanie' : ''}
//                 </h2>
//                 <ul>
//                     {
//                         this.state.users.map(
//                             (userData, index) => (
//                                 <UserListItem 
//                                     key={userData.name}
//                                     userData={userData}
//                                     deleteUser={this.deleteUser}
//                                 />
//                             )
//                         )
//                     }
//                 </ul>
//             </StyledWrapper>
//         )
//     }
// };


const UsersList = () => {

        const [users, setUsers ] = useState([]);
        const [formState, setFormState ] = useState({
            name: '',
            atd: '',
            avg: ''
        })
        // works like componentDidMount + componentDidUpdate + componentWillUnMount
        useEffect(
            ()=> {
                mocAPI()
                    .then(data => {
                        setUsers(data)
                    }
                )
                /// componentWillUnMount 
                return () => {
                    console.log('end of live this component');
                }
            }
            , 
            []
        );

        useEffect(
            ()=> {
                console.log('test');
            }
            , 
            [users]
        );

        const deleteUser = (userName) => {
            const filteredUsers = users.filter(user => user.name !== userName);
            setUsers(filteredUsers)
        }

 

        const handleNewUser = (e) => {
            e.preventDefault();

            const newUser = {
                name: formState.name,
                attendance: formState.atd,
                average: formState.avg,
            }

            setUsers([...users,newUser])
        }

        return(
                <StyledWrapper>
                    <ul>
                        {
                            users.map(
                                (userData, index) => (
                                    <UserListItem 
                                        key={userData.name}
                                        userData={userData}
                                        deleteUser={deleteUser}
                                    />
                                )
                            )
                        }
                    </ul>
                </StyledWrapper>
        )
};

UsersList.propTypes = {};

export default UsersList;