import React, { useState } from "react";

const styles = {
    container: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "20px",
    },
    input: {
        fontSize: "1em",
        padding: "12px 10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
        transition: "border-color 0.3s ease",
    },
    inputFocus: {
        borderColor: "#b39165",
        boxShadow: "0px 0px 5px rgba(179, 145, 101, 0.5)",
    },
    label: {
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        padding: "0 5px",
        fontSize: "1em",
        color: "#b39165",
        transition: "all 0.3s ease-in-out",
        pointerEvents: "none",
    },
    labelFloating: {
        top: "0px",
        fontSize: "0.8em",
        color: "#b39165",
    },
};

function CustomInput({
    title,
    value,
    type = "text",
    onChange = () => {},
    placeholder = "",
    width = "100%",
}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={{ ...styles.container, width }}>
            <label
                htmlFor={title}
                style={{
                    ...styles.label,
                    ...(isFocused || value ? styles.labelFloating : {}),
                }}
            >
                {title}
            </label>
            <input
                id={title}
                type={type}
                style={{ ...styles.input, ...(isFocused ? styles.inputFocus : {}) }}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}

export default CustomInput;
