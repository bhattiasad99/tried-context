import React from "react";
import Input from "./Input";

const AddItemsForm = (props) => {
    const [currInputData, setCurrInputData] = React.useState({
        id: 0,
        name: "",
        descr: "",
        price: ""
    });
    const changeValueHandler = (event, entry) => {
        let currInputCopy = { ...currInputData };
        currInputCopy[entry] = event.target.value;
        setCurrInputData(currInputCopy)
    };
    const submitFormHandler = (event) => {
        event.preventDefault()
        let currInputSubmitCopy = { ...currInputData }
        props.onSubmitUserData(currInputSubmitCopy)
        currInputData.id++
    }

    return (
        <form onSubmit={submitFormHandler}>
            {props.inputData.map((inputEl) => {
                return (
                    <Input
                        {...inputEl}
                        changeFunction={(e) => changeValueHandler(e, inputEl.key)}
                        valueUpdate={currInputData[inputEl.key]}
                    />
                );
            })}
            <button>Add</button>
        </form>
    );
};

export default AddItemsForm;
