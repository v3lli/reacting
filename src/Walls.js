import React from 'react';
import './walls.css';
// import 'tachyons';
function Walls (props){
    return(
        <div className = "d-flex flex-column foundation">
        {props.children}
        </div>
    );
}
export default Walls;