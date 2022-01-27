import React from "react"
import buttons from './constants';
import './style.css'

function Buttons({calculate}){
    return(
        <div className = 'buttons'>
        {
            buttons.map((b,idx)=>
                <button key={`b-${idx}`} value = {b} 
                onClick = {(e) => calculate(e.target.value)}
                className = {`${(b==='/' || b==='+' || b==='-'||b==='*'||b==='=')?'operator':''}`} 
                >{b}</button>
            )
        }
        </div>
    )
}

export default Buttons