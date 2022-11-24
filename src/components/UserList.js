import React from 'react';
import User from './User';

const UserList = ({ users }) => {
    console.log(users)
    return (
        <div>
            {users?.map((user) => { return <User key={user.login.uuid} /*user={{ ...user }}*/ user={user} /> })}
        </div>
    )
}

export default UserList
