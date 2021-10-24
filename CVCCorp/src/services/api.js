import axios from 'axios';

const findUser = async (username) => {
    let retorno = [];

    retorno[0] = await axios.get(`https://api.github.com/users/${username}`);
    retorno[1] = await axios.get(`https://api.github.com/users/${username}/repos`);
    return retorno;
}
export {
    findUser
};