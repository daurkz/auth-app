function validateSignUpData(req, res, next) {
    const { email, user_name, password, re_passwrd } = req.body;

    // Проверка на пустые поля
    if (!email || !user_name || !password || !re_passwrd) {
        return res.redirect('/signup?error=1');
    }

    // Проверка совпадения паролей
    if (password !== re_passwrd) {
        return res.redirect('/signup?error=2');
    }

    next(); // Если ошибок нет, передаем управление следующему middleware
}

module.exports = validateSignUpData;
