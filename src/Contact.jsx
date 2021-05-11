import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ contactRef }) => {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_pbdqarv',
        'template_4b1fhtd',
        e.target,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          setIsSent(true);
        },
        (error) => {
          setError('something went wrong, please try again later');
        }
      );
    e.target.reset();
  }

  return (
    <div className='contact' ref={contactRef}>
      <div className='contactForm'>
        <h2>Lets Talk!</h2>
        <h3>
          Don't be a stranger, <br /> Drop a line!
        </h3>
        <form onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' />
          <input type='text' name='email' placeholder='Your Email' />
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='Drop a line'
          />
          <button type='submit'>Send Message</button>
          {isSent && (
            <p className='sent'>Thank you for your message, Talk 2 U soon! </p>
          )}
          {error && <p className='error'>{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
