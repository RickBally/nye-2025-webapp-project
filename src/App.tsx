import React from 'react';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './AppRouter'

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App
