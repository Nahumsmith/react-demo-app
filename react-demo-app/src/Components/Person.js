import React, { Component } from 'react';
import '../Styles/Person.css';

export default class Person extends Component {
  render() {
    return <div>
              <h1>Hello {this.props.firstName} {this.props.lastName}!</h1>
              <Birthdate birthdate={this.props.birthdate} />
            </div>
  }
}
