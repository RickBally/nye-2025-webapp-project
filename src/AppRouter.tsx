import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { RegisterAcc } from './views/RegisterAcc';
import { Profile } from './views/Profile';
import { useAuth } from './contexts/AuthContext';

function AppRouter() {
    const { user } = useAuth();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<RegisterAcc/>}/>
                <Route
                    path="/account"
                    element={user ? <Profile /> : <Navigate to="/login" />}/>

                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AppRouter
