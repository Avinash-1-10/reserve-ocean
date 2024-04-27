import { CLEAR_USER, SET_USER } from "../actionTypes";

const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

const clearUser = () => ({
    type: CLEAR_USER,
})

export { setUser, clearUser };
