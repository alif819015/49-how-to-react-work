import React from 'react';
import Knob from '../knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '10px', padding: '10px'}}>
            <h3>This is Dail Components</h3>
            <p>Your Steps Count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;