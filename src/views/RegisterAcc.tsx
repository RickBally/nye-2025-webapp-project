import React from 'react';
import {useState} from 'react';
import './../css/register.css';
import {useAuth} from '../contexts/AuthContext';
import {Link} from 'react-router-dom';

export function RegisterAcc() {
    const { register } = useAuth();
    const [userName, setUser] = useState("");
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
      const [error, setError] = useState<string>(''); // State to hold error message

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Clear previous error messages on each submit
    
        try {
            await register(userName, email, password, passwordC, firstName, lastName);
          // Redirect to dashboard or home page after successful login
          // You can use something like history.push('/home') if you're using react-router
        } catch (error: any) {
          // Update the error state with the error message
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className='errorText'>{error}</div>}
            <div className="page">
                <div className="container">
                    <div className='gridItems'>
                        <div id="login">Registzráció</div>
                        <div>
                            <input id='textInput' onChange={(e) => setUser(e.target.value)} type='text' required placeholder='Felhasználónév'></input>
                        </div>
                        <div>
                            <input id='textInput' onChange={(e) => setEmail(e.target.value)} type='email' required placeholder='email'></input>
                        </div>
                        <div>
                            <input id='textInput' onChange={(e) => setPassword(e.target.value)} type='password' required placeholder='Jelszó'></input>
                        </div>
                        <div>
                            <input id='textInput' onChange={(e) => setPasswordC(e.target.value)} type='password' required placeholder='Jelszó megint'></input>
                        </div>
                        <div>
                            <input id='textInput' onChange={(e) => setLName(e.target.value)} type='text' required placeholder='Vezetéknév'></input>
                        </div>
                        <div>
                            <input id='textInput' onChange={(e) => setFName(e.target.value)} type='text' required placeholder='Keresztnév'></input>
                        </div>
                        <div>
                            <button className='inputField' id='buttonInput' type="submit">Regisztráció</button>
                        </div>
                        
                        <div>
                            <label>Már van fiókod? </label>
                            <Link to="/login">Bejelentkezés</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
