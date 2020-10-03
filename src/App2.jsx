import React, { useState } from "react";

const App2 = () => {
    const [change, setChanges] = useState(0)
    const onclick = () => {
        // changing the existing value of change variable
        setChanges(change + 1)
        if (change === 10) {
            setChanges(0)
        }
    };
    return (
        <>
            <h1>{change}</h1>
            <button onClick={onclick}>Click me</button>
        </>
    );
}

export default App2;