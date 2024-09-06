import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faGitlab } from '@fortawesome/free-brands-svg-icons';

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
        <div className="flex items-center space-x-4 mb-4">
          <img src="logo.jpg" alt="CyberSentinel" className="logo w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">CyberSentinel</h1>
        </div>
        <h2>14-Day FREE Trial</h2>
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="checkbox-group display: inline">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="mr-2"
            />
            <p>
              I agree to the <a href="/terms" className="text-blue-500">Terms of Service</a>, <a href="/acceptable-use" className="text-blue-500">Acceptable Use Policy</a> and the <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a>.
            </p>
          </div>
          <button type="submit" className="submit-button w-full bg-orange-500 text-white p-2 rounded mt-4">Create an Account</button>
        </form>

        <div className="alternative-login mt-6">
          <p>Or continue with</p>
          <div className="login-options flex justify-center space-x-4 mt-4">
            <button className="google flex items-center justify-center px-5 py-2 rounded text-white" style={{ backgroundColor: 'red' }}>
              <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Google
            </button>
            <button className="apple flex items-center justify-center px-5 py-2 rounded text-white" style={{ backgroundColor: 'black' }}>
              <FontAwesomeIcon icon={faApple} className="mr-2" /> Apple
            </button>
            <button className="gitlab flex items-center justify-center px-5 py-2 rounded text-white" style={{ backgroundColor: 'orange' }}>
              <FontAwesomeIcon icon={faGitlab} className="mr-2" /> GitLab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;

