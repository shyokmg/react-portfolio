import { useState } from "react";


function ContactPage(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();


    // Perform form validation
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all the required fields");
      return;
    }

    props.onSubmit({
      name,
      email,
      message
    });
    setName('');
    setEmail('');
    setMessage('');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !value) {
      setErrorMessage("Name is required");
    } else if (name === "email" && !value) {
      setErrorMessage("Email is required");
    } else if (name === "message" && !value) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  };
return (
    <div className="d-flex justify-content-center">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input
          type="text"
          placeholder="Add to your name"
          value={name}
          name="name"
          className="form-control"
          onBlur={handleValidation}
          onChange={handleChange}
        ></input>
        <label className="form-label">Email address:</label>
        <input
          type="text"
          placeholder="Add to your email"
          value={email}
          name="email"
          className="form-control"
          onBlur={handleValidation}
          onChange={handleChange}
        ></input>
        <label className="form-label">Message:</label>
        <textarea
          type="text"
          placeholder="Add to your message"
          value={message}
          name="message"
          className="form-control"
          onBlur={handleValidation}
          onChange={handleChange}
        ></textarea>
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <button className="contact-button">Submit</button>
      </form>
    </div>
  ) 
}


export default ContactPage;