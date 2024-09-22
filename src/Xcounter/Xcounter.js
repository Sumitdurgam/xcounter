import React, {  useState } from 'react';

function Xcounter() {
    const [valueOfCount, setValueOfCount] = useState(0);


    const handleIncreament = () => {
        setValueOfCount(prevCount => prevCount + 1); 
    };

    const handleDecreament =() => {
        setValueOfCount(prevCount => prevCount - 1); 
    };


    return(
        <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
            <h1> Counter App</h1>
            <p>Count: {valueOfCount}</p>
            <div>
                <button onClick={handleIncreament}>Increament</button>
                <button onClick={handleDecreament}>Decreament</button>
            </div>
        </div>
    );

}




export default Xcounter;