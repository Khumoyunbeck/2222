import React from 'react';
import ReactCodeInput from "react-code-input"


const CodeInput = (props) => {
    const style = {
        className: "reactCodeInput",
        inputStyle: {
            fontFamily: "Poppins",
            margin: "10px",
            width: "60px",
            minHeight: "60px",
            borderRadius: "3px",
            fontSize: "20px",
            backgroundColor: "",
            textAlign: "center",
            color: "lightskyblue",
            border: "2px solid lightskyblue",
        },
    }
    return (
        <div>
            <ReactCodeInput
                inputMode="numeric"
                name="smsCode"
                fields={6}
                {...style}
            />
        </div>
    );
};

export default CodeInput;
