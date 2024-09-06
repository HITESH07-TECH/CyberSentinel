import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faGitlab } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Add logic for actual login
  };

  return (
    <div className="login-container bg-[url('/bg.jpg')] bg-fixed bg-cover relative bg-center bg-opacity-25 w-full h-screen flex items-center justify-center">
     <div className="form-container bg-white p-8 rounded shadow-lg flex flex-col items-center justify-center w-96">
      <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
      <p className="text-lg mb-6">Log into CyberSentinel account.</p>
      
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group mb-4">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="input-group mb-4">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="login-button w-full bg-orange-500 text-white p-2 rounded mb-4">Log In</button>

        <div className="or-separator">Or continue with</div>
        <div className="auth-options flex justify-center mt-4">
            <button className="flex items-center justify-center px-2 py-2 rounded bg-red-600 text-white">
             <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Google
             </button>
            <button className="flex items-center justify-center px-2 py-2 rounded bg-black text-white">
             <FontAwesomeIcon icon={faApple} className="mr-2" /> Apple
            </button>
            <button className="flex items-center justify-center px-2 py-2 rounded bg-orange-600 text-white">
             <FontAwesomeIcon icon={faGitlab} className="mr-2" /> GitLab
                </button>
        </div>

        <p className="sign-up">Don't have an account? </p>
        <p><a href="#">Sign Up</a></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
