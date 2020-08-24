import UserService from '../../services/UserService';

export const actions = {
    setLogin: (userName, password) => async dispatch => {
        let data = await UserService.doLogin(userName, password);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'LOGIN',
                data: data.data,
            });
        }
    },
    setLogOut: () => {
        return {
            type: 'LOGOUT',
        };
    },
};