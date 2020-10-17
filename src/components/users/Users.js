import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo' ,
                avatar_url: 'https://avatars2.githubusercontent.com/u/1?v=4,',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '44743839',
                login: 'snymanje' ,
                avatar_url: 'https://avatars2.githubusercontent.com/u/44743839?v=4,',
                html_url: 'https://github.com/snymanje'
            },
            {
                id: 3,
                login: 'pjhyett' ,
                avatar_url: 'https://avatars2.githubusercontent.com/u/3?v=4,',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }
    render() {
        const { users } = this.state;
        return (
            <div style={userStyle}>
                {
                    users.map(user => (
                        <UserItem user={user} key={user.id}/>
                    ))
                }
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
