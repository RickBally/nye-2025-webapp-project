import React from 'react';
import {Link} from 'react-router-dom';
import './../css/login.css';

export function Login() {
  return (
    <div className="page">
    <div className="container">
      <div className='gridItems'>
        <div id="login">Bejelentkezés</div>
        <div>
          <input id='textInput' type='text' required placeholder='Felhasználónév'></input>
        </div>
        <div>
          <input id='textInput' type='password' required placeholder='Jelszó'></input>
        </div>
        <div>
          <input id='buttonInput' type='button' value={'Bejelentkezés'}></input>
        </div>
        <div>
          <label>Nincs fiókod? </label>
          <Link to="/register">Regisztrálj</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
