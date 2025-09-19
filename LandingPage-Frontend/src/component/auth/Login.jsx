import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    // Validation
    if (!username.trim()) tempErrors.username = 'Username is required';
    if (!password) tempErrors.password = 'Password is required';
    else if (password.length < 6) tempErrors.password = 'Password must be at least 6 characters';

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // Example login logic
      if (username === 'admin' && password === '123456') {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid username or password');
      }
    } else {
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        {errors.username && <div style={styles.error}>{errors.username}</div>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}

        <button type="submit" style={styles.button}>Login</button>
        {message && <div style={message === 'Login successful!' ? styles.success : styles.error}>{message}</div>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f2f5',
  },
  form: {
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  success: {
    color: 'green',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default Login;
