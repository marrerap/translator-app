import React, { useState } from 'react'

export default function LoginForm() {
    // const [fName, setFname] = useState('');
    const [data, setData] = useState({
        fName: "",
        lName: "",
        DisplayName: ""
    })

    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(data.fName)
        setData({...data, DisplayName: `${data.fName}, ${data.lName}`})

    }
    
    
  

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label for='firstName' >First Name: </label>
                <input value={data.fName} onChange={(e) => setData({...data, fName:e.target.value})} id='firstName' />
                <label for='lastName' >Last Name: </label>
                <input value={data.lName} onChange={(e) => setData({...data, lName:e.target.value})} id='lastName' />
                <button type='submit' >Submit</button>
            </form>
            <div>What it Dew : {data.DisplayName}</div>
        </div>
    )
}
 
