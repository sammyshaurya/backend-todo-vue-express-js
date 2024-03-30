import express from 'express';
import User from '../models/user.model.js'

const loginRoute = express.Router();


loginRoute.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });

        if (user) {
            res.send('User logged in successfully');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Internal server error');
    }
});

export default loginRoute