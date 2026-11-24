import React, { useState } from 'react';

function LoginForm({ registeredUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Default credentials
  const defaultCredentials = {
    email: 'admin@example.com',
    password: 'password123',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials against default credentials or registered user
    const isValid =
      (email === defaultCredentials.email && password === defaultCredentials.password) ||
      (registeredUser && email === registeredUser.email && password === registeredUser.password);

    if (isValid) {
      setMessage('Login Successful');
      setIsSuccess(true);
    } else {
      setMessage('Invalid Email or Password');
      setIsSuccess(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Login Form</h2>

      <p className="credential-hint">
        (Default: <strong>admin@example.com</strong> / <strong>password123</strong>)
      </p>

      <form onSubmit={handleLogin} className="form">
        <div className="form-group">
          <label htmlFor="login-email">Email:</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-login">
          Login
        </button>
      </form>

      {/* Login status message */}
      {message && (
        <div className={`message-box ${isSuccess ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
