// const User = require('./User');
// const bcrypt = require('bcrypt');

// async function signUp(req, res) {
//     try {
//         const { email, user_name, password, re_passwrd } = req.body;


//         if (!email || !user_name || !password || !re_passwrd) {
//             return res.redirect('/signup?error=1');
//         }


//         if (password !== re_passwrd) {
//             return res.redirect('/signup?error=2');
//         }

//         const userExists = await User.exists({ email });
//         if (userExists) {
//             return res.redirect('/signup?error=3');
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);


//         await new User({
//             email,
//             user_name,
//             password: hashedPassword,
//         }).save();

//         res.redirect('/signin');
//     } catch (err) {
//         console.error('Ошибка при регистрации пользователя:', err);
//         res.status(500).send('Внутренняя ошибка сервера');
//     }
// }

// module.exports = {
//     signUp,
// };
