import React, { useState } from 'react'

function Pancake() {
    const [quantity, setQuantity] = useState('')
    
    function pancakes()  {
        let string = ""
        for (let index = 0; index < quantity; index++) {
            string += '🍜'
            
        }return string
    }
    return (
        <div>
            <label>Enter the Quantity of pancakes you want made:</label>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value) } />
            <p>{pancakes()}</p>
        </div>
    )
}

export default Pancake
