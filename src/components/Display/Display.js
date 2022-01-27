import React from 'react'
import './style.css'

const Display = ({numbers,operator,result}) => 
        <div className="display">
            <p className="digits"> {numbers.num1} {operator} {numbers.num2} </p>
            <p className="result"> {result} </p>
        </div>

export default Display