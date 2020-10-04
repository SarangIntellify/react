import React from 'react'
import { createContext } from 'react';
import ContextHookA from './ContextHookA'

// need to pass data to specific component then use createContext hook
// it returns one component.
const FirstName = createContext();

const ContextHook = () => {
    return (
        <FirstName.Provider value={"Sarang"}>
            <ContextHookA />
        </FirstName.Provider>
    );
};

export default ContextHook;
export { FirstName };