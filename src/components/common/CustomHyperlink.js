import colors from "../styles/colors";

function CustomHyperlink({title, link, textAlign}){
    const styles = {
        hyperlink: {
            color: colors.warmTaupe,
            fontSize: "0.9em",
            textDecoration: "none",
            cursor: "pointer",
        }
    }
    return(
        <div style={{ textAlign: textAlign, margin: "10px 0" }}>
            <a href={link} style={styles.hyperlink}>{title}</a>
        </div>
    )
}

export default CustomHyperlink;