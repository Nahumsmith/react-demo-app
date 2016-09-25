import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './Components/ContactCard';
import Person from './Components/Person';
import Birthdate from './Components/Birthdate';

class App extends Component {
  render() {
    return (
      <div>
        <ContactCard
          contactName="Nahum Smith"
          mobileNumber="888-555-8765"
          workNumber="888-555-0000"
          email="nahumsmith@gmail.com" />
      </div>
    );
  }
}


export default App;
