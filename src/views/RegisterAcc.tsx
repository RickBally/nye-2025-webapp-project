import React from 'react';
import {useState} from 'react';
import './../css/register.css';
import {useAuth} from '../contexts/AuthContext';
import {Link, useNavigate} from 'react-router-dom';

export function RegisterAcc() {
    const { register } = useAuth();
    const [userName, setUser] = useState("");
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        try {
            await register(userName, email, password, passwordC, firstName, lastName);
            setSuccess('Sikeres regisztráció!');
        } catch (error: any) {
          // Update the error state with the error message
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {success && <div className="successText">{success}</div>}
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
