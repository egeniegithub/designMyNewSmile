const initialState = {
    token: null,
    userObject: null,
};

const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SIGNUP: 'SIGNUP',
    TREATMENT: 'TREATMENT',
    UPDATEPROFILE: 'UPDATEPROFILE',
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                userObject: action.data.user,
                token: action.data.token
            };
        case types.SIGNUP:
            return {
                userObject: action.data,
            };
        case types.LOGOUT:
            return {
                userObject: action.data,
                token: null,
            };
        case types.UPDATEPROFILE:
            return {
                userObject: action.data,
                token: action.token
            };
        case types.TREATMENT:
            return {
                userObject: action.data,
                token: action.token
            }
        default:
            return state;
    }
}

export default UserReducer;