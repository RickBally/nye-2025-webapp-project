import React  from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './../css/login.css';
import {useAuth} from '../contexts/AuthContext';

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/account');

    } catch (error) {
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
