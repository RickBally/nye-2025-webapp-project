import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { RegisterAcc } from './views/Registration';
import { Profile } from './views/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<RegisterAcc/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
