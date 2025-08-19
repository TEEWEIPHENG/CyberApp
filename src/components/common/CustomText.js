import React, {useState} from "react";
import colors from "../styles/colors";

const styles = {
    title: {
        color: colors.beige,
        textAlign: "center",
        marginBottom: "25px",
    },
    subTitle: {
        colors: colors.warmTaupe,
    },
    header: {
        colors: colors.honeyYellow,
    },
    muted: {
        colors: colors.mutedBlush,
    },
    normalText: {
        colors: colors.black,
    },
}

function CustomText({
    text,
    type,
}){

    switch(type){
        case "title":
            return(
                <>
                    <h1 style={styles.title}>{text}</h1>
                </>
            );
        case "subtitle":
            return(
                <>
                    <h3 style={styles.subTitle}>{text}</h3>
                </>
            );
        case "header":
            return(
                <>
                    <h2 style={styles.header}>{text}</h2>
                </>
            );
        case "muted":
            return(
                <>
                    <h2 style={styles.muted}>{text}</h2>
                </>
            );
        default:
            return(
                <>
                    <p style={styles.normalText}>{text}</p>
                </>
            );
    }
    
}

export default CustomText;