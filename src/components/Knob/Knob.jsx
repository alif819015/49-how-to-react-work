import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border: '2px solid red', margin: '10px', padding: '10px'}}>
            <h3>This is Knob Components</h3>
            <p>Your Steps Counts: {props.steps}</p>
        </div>
    );
};

export default Knob;