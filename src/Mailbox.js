import React from 'react';
import './mailbox.css';


class Mailbox extends React.Component{
    state = {
        alignment:'center',
    }

    drop = ()=>{
        this.setState({alignment:'flex-end'})
      }

    render(){
        return(
            <div onClick={this.drop} className ="mail mr-2" style = {{alignSelf:this.state.alignment}}>
                <div className ='hole mx-auto mt-1'></div>
                <p className='mx-auto container my-1 tc'><span>Mailbox</span></p>
            </div>
        )
    }

    
}
export default Mailbox;