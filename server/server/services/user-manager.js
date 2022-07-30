const {User} = require("../db/models");

class UserManager {
    addUser = async (user) => {
        await User.create(user);
    };

    getUser = async (id) => {
        return await User.findByPk(id);
    };

    _getByEmailUser = async (email) => {
        return await User.findOne({where: {email: email}});
    };
}

module.exports = new UserManager();