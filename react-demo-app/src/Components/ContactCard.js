import React, { Component } from 'react';
import '../Styles/ContactCard.css';

export default class ContactCard extends Component {
    render() {
      return <div className="ContactCard" >
                <h1>{this.props.contactName}</h1>
                <h3>{this.props.mobileNumber}</h3>
                <h3>{this.props.workNumber}</h3>
                <h3>{this.props.email}</h3>
              </div>
    }
};
