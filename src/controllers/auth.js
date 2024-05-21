const business = require('../business/auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const register = async (request, h) => {
    const hashedPassword = await bcrypt.hash(request.payload.password, 10);

    request.payload.password = hashedPassword;
    delete request.payload.repeat_password;
    const { message, code, result } = await business.register(request.payload, request.logger)

    let token = jwt.sign({ id: result.id }, process.env.JWT_SECRET, {
        expiresIn: 24 * 60 * 60
    });

    const body = {
        message,
        data: { jwt: token, user: result }
    };

    return h.response(body).code(code);
};

const login = async (request, h) => {
    let { username, password } = request.payload;
    const { message, code, result } = await business.login(username, request.logger)

    const body = {
        message,
        data: result
    };

    let validUser = result && (await bcrypt.compareSync(password, result.password));

    if (validUser) {
        let token = jwt.sign({ id: result.id }, process.env.JWT_SECRET);
        body.data = { ...body.data, token }
    } else {
        body.message = "Usuário inválido."
    }

    return h.response(body).code(code);
}

module.exports = {
    register,
    login
};