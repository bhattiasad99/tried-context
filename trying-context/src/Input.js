import React from "react";

const Input = (props) => {
    return (
        <div>
            <label
                htmlFor={props.attr.id}
                style={{
                    margin: "10px",
                    fontSize: "16px"
                }}
            >
                {props.label}
            </label>
            <input {...props.attr} onChange={props.changeFunction} value={props.valueUpdate} />
        </div>
    );
};

export default Input;
