import React from "react";
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
    error: {
        colors: colors.errorRed,
    },
    warning: {
        colors: colors.warningYellow,
    },
    success: {
        colors: colors.successGreen,
    },
    info: {
        colors: colors.infoBlue,
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
                    <p style={styles.muted}>{text}</p>
                </>
            );
        case "error":
            return(
                <>
                    <p style={styles.error}>{text}</p>
                </>
            );
        case "warning":
            return(
                <>
                    <p style={styles.warning}>{text}</p>
                </>
            );
        case "success":
            return(
                <>
                    <h2 style={styles.success}>{text}</h2>
                </>
            );
        case "info":
            return(
                <>
                    <p style={styles.info}>{text}</p>
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