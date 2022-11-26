import React from 'react';
import User from './User';

const UserList = ({ users }) => {
    return (
        <div style={{
            margin: ' 0px auto',
            display: 'flex',
            flexDirection: "column",
            alignItems: "center"
        }}>
            {users?.map((user) => { return <User key={user.login.uuid} user={{ ...user }} /*user={user}*/ /> })}
        </div>
    )
}

export default UserList
