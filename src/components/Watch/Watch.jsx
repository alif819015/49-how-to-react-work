import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    // const increaseSteps = () => setSteps(steps + 1);
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }
useEffect( () => {
    console.log(steps);
},[steps])

    return (
        <div style={{border: '2px solid blue', margin: '10px', padding: '10px'}}>
            <h2>This is my smart watch</h2>
            <h3>Steps: {steps}</h3>
            <button style={{backgroundColor: 'violet'}} onClick={increaseSteps}>De Dor....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;