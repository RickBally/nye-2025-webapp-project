import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import * as users from './users';

const app = express();
const PORT = 5000;
const JWT_SECRET = 'super-secret-key'; // 🔐 Use env vars in real apps

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    try {
        const { userName, email, password, passwordC, firstName, lastName } = req.body;
        const user = await users.registerUser(userName, email, password, passwordC, firstName, lastName);
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ user, token });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.findUserByEmail(email);

    if (!user || !(await users.verifyPassword(password, user.passwordHash))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ user: { id: user.id, name: user.userName, email: user.email }, token });
});

app.get('/api/me', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
        const user = users.getUserById(decoded.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ id: user.id, name: user.userName, email: user.email });
    } catch {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(PORT, () => {
    console.log(`Auth server running at http://localhost:${PORT}`);
});