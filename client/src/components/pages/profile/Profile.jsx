import React from 'react'

function Profile({ user }) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
            <h2>{user.userName}</h2>
            <h3>{user.email}</h3>
        </div>
    )
}

export default Profile