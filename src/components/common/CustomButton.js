import React, {useState} from "react";
import colors from "../styles/colors";

const styles = {
    buttonContainer: {
        width: '100%'
    },
    primary: {
        fontSize: "1.0em",
        backgroundColor: colors.beige,
        color: colors.white ,
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "100%",
    }, 
    secondary: {
        backgroundColor: colors.oliveGreen,
        color: colors.softBeige,
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "100%",
    },
    tertiary: {
        backgroundColor: colors.honeyYellow,
        color: colors.softBeige,
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "100%",
    },
    other: {
        backgroundColor: colors.warmGray,
        color: colors.softBeige,
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "100%",
    },
    primaryHover: {
        fontSize: "1.0em",
        backgroundColor: colors.warmTaupe,
        color: colors.white ,
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "100%",
    }
}

function CustomButton({
    title,
    onClick = () =>{},
    buttonType = "primary"
}){
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };
    const buttonStyle = hover ? styles.primaryHover : styles.primary;

    switch(buttonType){
        case "primary":
            return(
                <div style={styles.buttonContainer}>
                    <button style={buttonStyle} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}</button>
                </div>
            );
        case "secondary":
            return(
                <div style={styles.buttonContainer}>
                    <button style={styles.secondary} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}</button>
                </div>
            );
        case "tertiary":
            return(
                <div style={styles.buttonContainer}>
                    <button style={styles.tertiary} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}</button>
                </div>
            );
        default:
            return(
                <div style={styles.buttonContainer}>
                    <button style={styles.other} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}</button>
                </div>
            );
    }
    
}

export default CustomButton;