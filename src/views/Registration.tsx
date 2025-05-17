import React from 'react';
import './../css/register.css';
import {Link} from 'react-router-dom';

export function RegisterAcc() {
    return (
        <div className="App">
        <div>Webshop</div>
        <div>Regisztráció</div>
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
                <label>Jelszó Megerősítése</label>
                <input type='password' required></input>
            </div>
            <div>
                <label>Vezetéknév</label>
                <input type='text' required></input>
            </div>
            <div>
                <label>Keresztnév</label>
                <input type='text' required></input>
            </div>
            <div>
                <p>Szállítási információ</p>
                <div>
                    <label>Név</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Ország</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Város</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Utca, Házszám</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Irányítószám</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Telefonszám</label>
                    <input type='text' required></input>
                </div>
            </div>
            <div>
                <p>Számlázási cím</p>
                <div>
                    <label>Név</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Adószám</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Ország</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Város</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Utca, Házszám</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>Irányítószám</label>
                    <input type='text' required></input>
                </div>
            </div>
            <div>
                <input type='button' value={'Regisztráció'}></input>
            </div>
            <div>
                <label>Már van fiókod? </label>
                <Link to="/login">Lépj be</Link>

        </div>
        </div>
    </div>
    );
}
