import React, { Component } from 'react'

 class Form extends Component {
  constructor(){
    super();
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  state={
    name:"",
    phone:""
  };
  onChange(e){
    this.setState({
       [e.target.name]:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.addContact({...this.state});
    this.setState({
      name:"",
      phone:""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
            <input type="text" onChange={this.onChange} value={this.state.name} name='name' id='name' placeholder='bir isim giriniz' />
            <input type="text" onChange={this.onChange}  value={this.state.phone} name='phone' id='phone' placeholder='telefon numaranızı giriniz ' />
            <button>Ekle</button>
        </form>
      </div>
    )
  }
}
export default Form;
