import React from "react"

export default function Digit(props) {

    function handleClick(){
        if (props.value === props.answer) {
            alert("Congratulations, you won!")
        }else{
            alert("Oops, that is not the right answer!")
        }
    }

    return (
        <div className="digit-face" onClick={handleClick}>
            <h2 className="digit-num">{props.value}</h2>
        </div>
    )
}