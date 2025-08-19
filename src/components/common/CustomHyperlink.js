import colors from "../styles/colors";

function CustomHyperlink({title, link}){
    const styles = {
        hyperlink: {
            color: colors.warmTaupe,
            fontSize: "0.9em",
            // textDecoration: "none",
        }
    }
    return(
        <>
            <a href={link} style={styles.hyperlink}>{title}</a>
        </>
    )
}

export default CustomHyperlink;