import React from 'react';

function UserProfile(props) {
    console.log(props)
    console.log(props.user)
    console.log(props.user.age)
    return(
        <div>
            <h2>Name: {props.user.name}</h2>
            <h3>Age: {props.user.age}</h3>
            <p>Email: {props.user.email}</p>
        </div>
    )
}

export default UserProfile;