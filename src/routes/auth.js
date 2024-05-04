const { loginSchema, registerSchema } = require('../schemas/auth');
const { register, login } = require('../controllers/auth');


const router = [
    {
        method: "POST",
        path: "/register",
        options: {
            auth: false,
            handler: register,
            validate: registerSchema
        }
    },
    {
        method: "POST",
        path: "/login",
        options: {
            auth: false,
            handler: login,
            validate: loginSchema
        }
    },
];

module.exports = router;