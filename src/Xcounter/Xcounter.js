import React, {  useState } from 'react';
// import React from "react";
// import './xcounter.css';

function Xcounter() {
    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1); 
    };

    const handleDecrement =() => {
        setCount(prevCount => prevCount - 1); 
    };


    return(
        <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
            <h1> Counter App</h1>
            <p>Count: {count}</p>
            <div>
                <button onClick={handleIncrement}>Increament</button>
                <button onClick={handleDecrement}>Decreamnet</button>
            </div>
        </div>
    );

}




export default Xcounter;