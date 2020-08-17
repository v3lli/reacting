import React from 'react';
import './sun.css';


class Sun extends React.Component{
    
    
      drop = ()=>{
        this.props.backgroundColor()
      }
    
    render(){
    return(
        <div style={{backgroundColor:this.props.sunColor}} className ="daylight" onClick={this.drop}>
        </div>
    )
}
}
export default Sun;