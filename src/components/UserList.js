import React, { useState } from 'react';
import User from './User';

const UserList = ({ users }) => {
    const [searchField, setSearchField] = useState("")

    const searchUserData = users.filter(
        (person) => {
            return (
                (person.name.first.toLowerCase().includes(searchField.toLowerCase()))
            )
        }
    )

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchField(event.target.value)
    }

    return (
        <>
            <div style={{
                margin: ' 0px auto',
                display: 'flex',
                flexDirection: "column",
                alignItems: "center"
            }}>
                <input type="text" onChange={handleSearch} placeholder="Search Users" style={{
                    padding: '4px',
                    marginTop: '12px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    color: '#000',
                }} />
                {searchUserData?.map((user) => { return <User key={user.login.uuid} user={{ ...user }} /*user={user}*/ /> })}
            </div>
        </>
    )
}

export default UserList
