import React from 'react';
import './../css/profile.css';
import {Link} from 'react-router-dom';

export function Profile() {
    return (
        <div className="App">
        <div>Webshop</div>
        <div>Profil</div>
        <div>
            <div>
                <label>Felhasználó név: </label>
            </div>
            <div>
                <label>Vezetéknév: </label>
            </div>
            <div>
                <label>Keresztnév: </label>
            </div>
            <div>
                <p>Szállítási információ</p>
                <div>
                    <label>Név: </label>
                </div>
                <div>
                    <label>Ország: </label>
                </div>
                <div>
                    <label>Város: </label>
                </div>
                <div>
                    <label>Utca, Házszám: </label>
                </div>
                <div>
                    <label>Irányítószám: </label>
                </div>
                <div>
                    <label>Telefonszám: </label>
                </div>
            </div>
            <div>
                <p>Számlázási cím</p>
                <div>
                    <label>Név: </label>
                </div>
                <div>
                    <label>Adószám: </label>
                </div>
                <div>
                    <label>Ország: </label>
                </div>
                <div>
                    <label>Város: </label>
                </div>
                <div>
                    <label>Utca, Házszám: </label>
                </div>
                <div>
                    <label>Irányítószám: </label>
                </div>
            </div>
            <div>
                <input type='button' value={'Kilépés'}></input>
            </div>
        </div>
    </div>
    );
}
