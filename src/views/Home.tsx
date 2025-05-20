import React from 'react';
import './../css/home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Home() {
    const { user, logout } = useAuth();
    
    return (
        <div>
            <div className='navBar'>
                {user ? (
                    <>
                        <Link id='navigateButton' to="/account"><div id='navigateText'>Fiókom</div></Link>
                        <input id='navigateButton' type='button' onClick={logout} value={'Kijelentkezés'}></input>
                    </>
                ) : (
                    <>
                        <Link id='navigateButton' to="/login"><div id='navigateText'>Bejelentkezés</div></Link>
                        <Link id='navigateButton' to="/register"><div id='navigateText'>Regisztráicó</div></Link>
                    </>
                )}
            </div>
            <div className='page'>
                <div className='homeBody'>
                    {user ? (
                        <div>Üdvözlünk újra, {user.userName}!</div>
                    ) : (
                        <div>Üdvözlünk! Kérlek, jelentkezz be!</div>
                    )}
                </div>
            </div>
        </div>
    );
}
