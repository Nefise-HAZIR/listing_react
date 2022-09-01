import React, { Component } from 'react';
import './List.css';
import PropTypes from 'prop-types'
class List extends Component {
    constructor(){
        super();
        this.filteredText=this.filteredText.bind(this);
    }
    state={
        filtered:""
    }
    static propTypes={
        contacts:PropTypes.array.isRequired
    };
    filteredText(e){
       this.setState({
        filtered:e.target.value
       })
    }
    render() {
        const filteredText=this.props.contacts.filter(
            contact=>{
               return (contact.name.toLowerCase().indexOf(
                 this.state.filtered.toLowerCase()
               ))!==-1||
              ( contact.phone.indexOf(
                this.state.filtered
              )) !==-1
            }
           
        )
        return (
            <div className='area'>
                <input value={this.state.filtered} onChange={this.filteredText} name='filter' id='filter' type="text" placeholder='search name or phone...' />
                <ul className='list'>
                    {
                       filteredText.map(contact =>
                            <li key={contact.phone}>
                                <span className='name'>{contact.name}</span>
                                <span className='phone'>{contact.phone}</span>
                                <span className='clearfix'></span>
                            </li>
                        )
                    }
                    {/* <li>
                        <span className='name'>Ömer Hazır</span>
                        <span className='phone'>0550 450 50 50</span>
                        <span className='clearfix'></span>
                    </li>
                    <li>
                        <span className='name'>Ahmet Hazır</span>
                        <span className='phone'>0587 480 80 80</span>
                        <span className='clearfix'></span>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default List;
