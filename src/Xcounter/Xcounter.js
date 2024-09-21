import React, {  useState } from 'react';

function Xcounter() {
    const [valueOfCount, setValueOfCount] = useState(0);


    const handleIncrement = () => {
        setValueOfCount(prevCount => prevCount + 1); 
    };

    const handleDecrement =() => {
        setValueOfCount(prevCount => prevCount - 1); 
    };


    return(
        <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
            <h1> Counter App</h1>
            <p>Count: {valueOfCount}</p>
            <div>
                <button onClick={handleIncrement}>Increament</button>
                <button onClick={handleDecrement}>Decreamnet</button>
            </div>
        </div>
    );

}




export default Xcounter;