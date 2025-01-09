import React from "react";

function CustomButton({
    title,
    onClick = () =>{},
}){
    return(
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default CustomButton;