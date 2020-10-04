import React, { useEffect, useState } from 'react'

const Other = () => {
    return <h1>Hey this is useEffect one</h1>
}

const UseEffectHook = () => {
    const [val, setVal] = useState(0);
    // this hook will execute after the rendering of useEffectHook component
    // it is called automatically.
    // when any value changes in component then component will get rendered again 
    // and when that happens, useEffect hook will be called.
    useEffect(() => {
        return alert("Data is displayed, thankyou!")
    }, [val]);
    //now writing val in array, it means when val value is changed then only useEffect will be called

    return (
        <>
            <Other />
            <button onClick={
                () => {
                    setVal(val + 1);
                }

            }> Please Click me </button>
        </>
    );

};

export default UseEffectHook;