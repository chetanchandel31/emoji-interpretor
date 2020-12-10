import React from 'react';
import UserProfile from '../components/UserProfile';
import Form from '../components/form'

function HomePage () {

    const users = [
        {
            name: "ussop",
            age: 69,
            email: "hoho@hoho.com"
        },
        {
            name: "zorojuro",
            age: 2000,
            email: "wano@wano.com"
        },
        {
            name: "brook",
            age: 9999,
            email: "yohohohoho"
        }
]

    const numbers = [1,2,3,3,4,4,4,45,5,69]
    const authorzied = true;

    if (authorzied) {
    return (
        <div>
            <h1>Home Page</h1>
            {
                users.map((user, index) => (
                    <UserProfile user={user} key={index}/>
                ))
            }
            <ul>
                {numbers.map((n,i) => <li style= {{color: "red"}} key={i}>{n}</li>)}
            </ul>

            {/* handling events and handling states */}

            <Form/>
        </div>
    )
    } else {
        return <h1>gg</h1>
    }
}

export default HomePage;