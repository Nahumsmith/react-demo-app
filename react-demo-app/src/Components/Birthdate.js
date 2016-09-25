import React, { Component } from 'react';
import '../Styles/Birthdate.css';


export default class Birthdate extends Component {
  render(){
    return <div className="Birthdate">
              <h1>{this.props.birthdate}</h1>
          </div>
  }
}
