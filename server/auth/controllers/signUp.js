const { isUserExists, createUser } = require('../services/userSevices');
const validateSignUpData = require('../middlewares/validation');


async function signUp(req, res) {
    try {
        const { email, user_name, password } = req.body;

        // Проверка, существует ли пользователь
        if (await isUserExists(email)) {
            return res.redirect('/signup?error=3');
        }

        // Создание пользователя
        await createUser({ email, user_name, password });

        res.redirect('/signin');
    } catch (err) {
        console.error('Ошибка при регистрации пользователя:', err);
        res.status(500).send('Внутренняя ошибка сервера');
    }
}

module.exports = {
    signUp,
    validateSignUpData,
};
