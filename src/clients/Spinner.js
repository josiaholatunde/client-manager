import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
    return (
        <div>
           <img
             src={spinner}
             style={{width:'20rem', margin: 'auto', display: 'block'}} 
             alt="Loading..."
            />
        </div>
    )
}

export default Spinner;
