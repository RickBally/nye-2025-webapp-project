import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

interface User {
    id: number;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
}

const USERS_FILE = path.join(__dirname, 'reg_users.json');

let users: User[] = loadUsersFromFile();
let nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

// 🔄 Load users from users.json
function loadUsersFromFile(): User[] {
    if (!fs.existsSync(USERS_FILE)) return [];

    try {
        const data = fs.readFileSync(USERS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Failed to load users.json:', err);
        return [];
    }
}

// 💾 Save users to users.json
function saveUsersToFile() {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export const registerUser = async (
    userName: string,
    email: string,
    password: string,
    passwordC: string,
    firstName: string,
    lastName: string
) => {
    if (password !== passwordC) throw new Error('A jelszavak nem egyeznek meg!');

    const existingMail = users.find(u => u.email === email);
    if (existingMail) throw new Error('Email-cím foglalt!');
    const existingUsr = users.find(u => u.userName === userName);
    if (existingUsr) throw new Error('Ilyen nevű felhasználó már létezik!');
    console.log(userName, firstName)
    const passwordHash = await bcrypt.hash(password, 10);
    const user: User = {
        id: nextId++,
        userName,
        email,
        passwordHash,
        firstName,
        lastName,
    };

    users.push(user);
    saveUsersToFile(); // ✅ persist the user list to file

    return { id: user.id, name: user.userName, email: user.email };
};
