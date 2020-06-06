import React, { Component } from 'react';
import './_Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      messageContent: ''
    }
  };

  handleSubmit = (e) => {
    if (this.state.name.length < 5) {
      e.preventDefault();
      alert("Your name is too short");
    } else if (this.state.email.length < 10) {
      alert("Your Email Is Not Correct");
      e.preventDefault();
    } else if (this.state.subject.length < 5) {
      alert('Your Subject Is Too Short');
      e.preventDefault();
    } else if (this.state.messageContent.length < 10) {
      alert('Your Message Is Too Short');
      e.preventDefault();
    } else {
      alert("email has been sent, thank you to contacting us");
      this.setState({
        name: '',
        email: '',
        subject: '',
        messageContent: ''
      })
    };
  };

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  };

  render() {
    return (
      <div className="contact__container">
        <aside>
          <iframe title="map" width="100%" height="100%" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=smith%20street%20london+(Tytu%C5%82)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </aside >
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint asperiores, rerum aperiam voluptatem animi similique temporibus quaerat tempore nihil. Reiciendis, minus in necessitatibus rem earum impedit labore deserunt ratione officia!</span>
            <p>First and last name</p>
            <span>
              <input type="text" name="name" onChange={this.handleChange} />
            </span>
            <p>Address email</p>
            <span>
              <input type="email" name="email" onChange={this.handleChange} />
            </span>
            <p>Subject</p>
            <span>
              <input type="text" name="subject" onChange={this.handleChange} />
            </span>
            <p>Message</p>
            <span>
              <textarea name="messageContent" onChange={this.handleChange}></textarea>
            </span>
            <hr />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div >
    );
  }
};

export default Contact;