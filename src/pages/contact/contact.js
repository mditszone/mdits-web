// import React, { Component } from 'react';
// import './style.css';

// class Contact extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>Contact</h1>
//       </div>
//     );
//   }
// }

// export default Contact;
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../pages/contact/contact.css';



class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:null,
      contact:null,
      email: null,
      // webaddress: null,
      message: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }
// TODO update handle change
  handleChange = (event) => {
    
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'fullName': 
      errors.fullName = 
        value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
      case 'contact': 
    case 'email': 
      // errors.email = 
      //   validEmailRegex.test(value)
      //     ? ''
      //     : 'Email is not valid!';
      // break;
    case 'password': 
      errors.password = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
  })
}

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Contact Us</h2>
          <form onSubmit={this.handleSubmit} noValidate >  { /*Adding "novalidate" this doesn't disable form validation. It only prevents the browser from interfering when an invalid form is submitted so that we can “interfere” ourselves.*/}
          <div className='name'>
              { /*<label htmlFor="email">Email</label>*/ }
              <input type='name' name='name' ofnChange={this.handleChange} noValidate autofocus placeholder="Enter name" title="Your Name"/>
            </div>
            <div className='contact'>
              { /*<label htmlFor="email">Email</label>*/ }
              <input type='contact' name='contact' ofnChange={this.handleChange} noValidate autofocus placeholder="Enter contact" title="Your Contact"/>
            </div>
            <div className='email'>
              { /*<label htmlFor="email">Email</label>*/ }
              <input type='email' name='email' ofnChange={this.handleChange} noValidate autofocus placeholder="Enter your email" title="Your Email"/>
            </div>
            
            <textarea className="textarea" name="textcontent" placeholder="Message" />
            <div className='info'>
              {/*<small>Password must be eight characters in length.</small> */}
            </div>
            <div className='submit'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
// render(<App />, document.getElementById('root'));
