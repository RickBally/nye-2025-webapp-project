import React from 'react';
import './../css/register.css';
import {Link} from 'react-router-dom';

export function RegisterAcc() {
    return (
        <div className="page">
            <div className="container">
                <div className='gridItems'>
                    <div id="login">Registzráció</div>
                    <div>
                        <input id='textInput' type='text' required placeholder='Felhasználónév'></input>
                    </div>
                    <div>
                        <input id='textInput' type='password' required placeholder='Jelszó'></input>
                    </div>
                    <div>
                        <input id='textInput' type='password' required placeholder='Jelszó megint'></input>
                    </div>
                    <div>
                        <input id='textInput' type='text' required placeholder='Vezetéknév'></input>
                    </div>
                    <div>
                        <input id='textInput' type='text' required placeholder='Keresztnév'></input>
                    </div>
                    <div>
                        <input id='buttonInput' type='button' value={'Regisztráció'}></input>
                    </div>
                    
                    <div>
                        <label>Már van fiókod? </label>
                        <Link to="/login">Bejelentkezés</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
