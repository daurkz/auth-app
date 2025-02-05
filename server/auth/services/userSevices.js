const bcrypt = require('bcrypt');
const User = require('../models/User');

async function isUserExists(email) {
    return User.exists({ email });
}

async function createUser({ email, user_name, password }) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        email,
        user_name,
        password: hashedPassword,
    });

    return user.save(); // Сохраняем пользователя и возвращаем результат
}

module.exports = {
    isUserExists,
    createUser,
};
