const User = require('../models/User');

const store = async (request, response) => {
    
    const { name, email } = request.body;

    try {
        await User.create({ name, email });
        return response.sendStatus(200);
    } catch (error) {
        console.log("ERROR: "+error);
    }
};

const list = async (request, response) => {
    
    try {
        const users = await User.findAll();
        return response.status(200).send(users);
    } catch (error) {
        console.log("ERROR: "+error);
    }
};


module.exports = {
    store,
    list
}