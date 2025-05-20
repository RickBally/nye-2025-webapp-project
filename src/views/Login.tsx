import React  from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './../css/login.css';
import {useAuth} from '../contexts/AuthContext';

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>(''); // State to hold error message
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous error messages on each submit

    try {
      await login(email, password); // Perform login
      navigate('/account');
      // Redirect to dashboard or home page after successful login
      // You can use something like history.push('/home') if you're using react-router
    } catch (error) {
      // Update the error state with the error message
      setError('Hibás felhasználónév vagy jelszó.');
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className='errorText'>{error}</div>}
      <div className="page">
        <div className="container">
          <div className='gridItems'>
            <div id="login">Bejelentkezés</div>
            <div>
              <input className='inputField' id='textInput' onChange={(e) => setEmail(e.target.value)} type='text' required placeholder='Felhasználónév'></input>
            </div>
            <div>
              <input className='inputField' id='textInput' onChange={(e) => setPassword(e.target.value)} type='password' required placeholder='Jelszó'></input>
            </div>
            <div>
              <button className='inputField' id='buttonInput' onSubmit={handleSubmit} type="submit">Bejelentkezés</button>
            </div>
            <div>
              <label>Nincs még fiókod? </label>
              <Link to="/register">Regisztráció</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
