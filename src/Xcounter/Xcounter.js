import React, {  useState } from 'react';
// import React from "react";
// import './xcounter.css';

function Xcounter() {
    const [count, setCount] = useState(0);


    const increament = () => {
        setCount(prevCount => prevCount + 1); 
    };

    const decreamnet =() => {
        setCount(prevCount => prevCount - 1); 
    };


    return(
        <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
            <h1> Counter App</h1>
            <p>Count: {count}</p>
            <div>
                <button onClick={increament}>Increament</button>
                <button onClick={decreamnet}>Decreamnet</button>
            </div>
        </div>
    )

}




export default Xcounter;