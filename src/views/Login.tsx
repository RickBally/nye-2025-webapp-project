import React from 'react';
import {Link} from 'react-router-dom';
import './../css/login.css';

export function Login() {
  return (
    <div className="Page">
      <div>Bejelentkezés</div>
      <div>
        <div>
          <label>Felhasználó név</label>
          <input type='text' required></input>
        </div>
        <div>
          <label>Jelszó</label>
          <input type='password' required></input>
        </div>
        <div>
          <input type='button' value={'Bejelentkezés'}></input>
        </div>
        <div>
          <label>Nincs fiókod? </label>
          <Link to="/register">Regisztrálj</Link>
        </div>
      </div>
    </div>
  );
}
