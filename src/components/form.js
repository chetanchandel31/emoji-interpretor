import React from 'react';

export default function Form () {
    const [value, setValue] = React.useState("");
    const [password, setPassword] = React.useState("");

    console.log(value, setValue);
    return(
        <div>
            <h1>{value}</h1>
            <input type="text"
            placeholder="enter name"
            onChange={(e) => {setValue(e.target.value)}}/>

            <h2>{password}</h2>
            <input type="text" 
            placeholder="enter password"
            onChange = {(e) => setPassword(e.target.value)} />
            <button type="button" onClick={() => alert(value)}>subm</button>
        </div>
    )
}