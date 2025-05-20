import React from 'react';
import './../css/profile.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Profile() {
    const { user, logout } = useAuth();
    
    return (
        <div>
            <div className='navBar'>
                <Link id='navigateButton' to="/"><div id='navigateText'>Főoldal</div></Link>
                <input id='navigateButton' type='button' onClick={logout} value={'Kijelentkezés'}></input>
            </div>
            <div className='page'>
            <div className='container'>
                <div> Felhasználónév: {user?.userName}</div>
                <div> Email cím: {user?.email}</div>
                <div> Név: {user?.lastName} {user?.firstName}</div>
            </div>
            </div>
        </div>
    );
}
