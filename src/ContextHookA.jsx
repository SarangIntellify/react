import React, { useContext } from 'react';
import { FirstName } from "./ContextHook";

// useContext provide alternative method 
// and reduces number of lines of code.
const ContextHookB = () => {

    const fname = useContext(FirstName);
    return <h1>hi this is {fname}</h1>
};

const ContextHookC = () => {
    return (
        <>
            <FirstName.Consumer> {(fname) => {
                return <h1> Hello this is {fname}</h1>
            }}
            </FirstName.Consumer>
        </>
    );
};

const ConextHookA = () => {
    return <ContextHookB />
};

export default ContextHookA;
