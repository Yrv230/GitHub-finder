import axios from 'axios';

export const GET_USER = '@@user/GET_USER';

export const getUser = (user) => ({
    type: GET_USER,
    payload: user
})

export const loadUser = (user) => async (dispatch) => {
    let res = await axios.get(`https://api.github.com/users/${user}`);
    let { data } = res;
    dispatch(getUser(data));
}