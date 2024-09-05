import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faGitlab } from '@fortawesome/free-brands-svg-icons';

//import './GetStarted.css'; // Import the CSS for styling

function GetStarted() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      // Handle form submission
      console.log('Form submitted', { email, password });
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div className="get-started bg-[url('/bg.jpg')] bg-fixed bg-cover relative bg-center bg-opacity-25 w-full">
      <div className="form-container">
        <img src="logo.jpg" alt="CyberSentinel" className="logo" />
        <h1>14-Day FREE Trial</h1>
        <p>You're just 5 minutes away from a faster website.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <label>
              I agree to the <a href="/terms">Terms of Service</a>, <a href="/acceptable-use">Acceptable Use Policy</a> and the <a href="/privacy-policy">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="submit-button">Create an Account</button>
        </form>

        <div className="alternative-login">
          <p>Or continue with</p>
          <div className="login-options">
            <button className="google"><FontAwesomeIcon icon={faGoogle} /> Google</button>
            <button className="gitlab"> <FontAwesomeIcon icon={faApple} /> Apple</button>
            <button className="other"><FontAwesomeIcon icon={faGitlab} /> GitLab</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
