import React from 'react';
import  Roof from './Roof';
import  Walls from './Walls';
import Sun from './Sun';
import './App.scss';
import {Col } from 'react-bootstrap';
import Window from './Window.js';
import Door from './Door.js';
import Mailbox from './Mailbox.js';
import Sign from './Sign.js';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state ={
    bgColorSun : 'yellow',
    bgColorSky : 'skyblue',
  }
  
  night = () => {
    if(this.state.bgColorSun==='yellow'){
    this.setState({
      bgColorSun:'white',
      bgColorSky:'navy'
    })}
    else{
      this.setState({
        bgColorSun : 'yellow',
        bgColorSky : 'skyblue',
      })}
  }

  
  render(){
  return (
    <div className = " view container-fluid flex-column-reverse d-flex align-content-around flex-wrap py-5" style ={{backgroundColor:this.state.bgColorSky}}>
        <Col className = "mx-auto my-5 align-self-end">
          <Roof/>
          <Walls  className = "d-flex flex-column foundation">
            <Row className ="mx-auto">
                    <Window sunColor = {this.state.bgColorSun}/>
                    <Sign/>
                    <Window sunColor = {this.state.bgColorSun}/>
            </Row>
            <div className = "d-flex doormail flex-row-reverse w-75 align-content-flex-end align-self-end">
                <Mailbox/>
                <Door/>
            </div>
          </Walls>
        </Col>
        <Sun sunColor = {this.state.bgColorSun}  className ="mt-5" backgroundColor = {this.night}></Sun>
      </div>
  )
}}

export default App;
