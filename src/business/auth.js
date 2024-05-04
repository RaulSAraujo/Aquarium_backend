const userRepository = require('../repository/user')

const register = async (payload, logger) => {
    const user = await userRepository.findByUsername(payload.username, logger);

    if (user) return { message: "Username ja registrado", code: 409, result: undefined };

    const result = await userRepository.create(payload, logger);

    return { message: undefined, code: 201, result };
};

const login = async (username, logger) => {
    const user = await userRepository.findByUsername(username, logger);

    if (!user) return { message: "Usuario não cadastrado.", code: 404, result: undefined };

    return { message: undefined, code: 200, result: user };
}

module.exports = {
    register,
    login
};