const {User} = require("../db/models");

class UserManager {
    addUser = async (user) => {
        await User.create(user);
    };

    getUser = async (id) => {
        return await User.findByPk(id);
    };
}

module.exports = new UserManager();