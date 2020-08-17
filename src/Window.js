import React from 'react';
import './window.css';


class Window extends React.Component{
    
    cookie =(e) =>{
        if (this.props.sunColor === "yellow"){
            e.target.style.backgroundImage = "url('./tahini-chocolate-chip-skillet-cookie-3.jpg')"
        }else if(e.target.style.backgroundImage === "./tahini-chocolate-chip-skillet-cookie-3.jpg"){
        e.target.style.backgroundImage = " "
    }}
    render(){
    return(
        <div onMouseEnter= {this.cookie} onMouseLeave = {this.cookie} className ="pane">
        </div>
    )
}}
export default Window;