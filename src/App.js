import { Component } from 'react';
import './App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor(){
    super();
    this.addContact=this.addContact.bind(this);
  }
  state={
    contacts:[{
      name:"Nefise Hazır",
      phone:"0537 470 20 20"
    },
    {
        name:"Duygu Akdoğan",
        phone:"0557 450 50 50"
    }
  ]
  }
  addContact(contact){
    const {contacts}=this.state;
    contacts.push(contact);
    this.setState({
      contacts:contacts
    })
      
    
  }
  render(){
    return (
    <div className='App'>
       <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
    </div>
  );
  }
  
}

export default App;
