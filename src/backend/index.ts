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

app.listen(PORT, () => {
    console.log(`Auth server running at http://localhost:${PORT}`);
});