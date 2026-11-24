import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  const [registeredUser, setRegisteredUser] = useState(null);

  return (
    <div className="container">
      <h1>Controlled Forms</h1>

      {/* 1. Login Form */}
      <LoginForm registeredUser={registeredUser} />

      {/* 2. Registration Form (below Login) */}
      <RegistrationForm onRegister={(user) => setRegisteredUser(user)} />
    </div>
  );
}

export default App;
