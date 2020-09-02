const initialState = {
    token: null,
    userObject: null,
};

const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SIGNUP: 'SIGNUP',
    TREATMENT: 'TREATMENT'
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
                userObject: null,
                token: null,
            };
        case types.TREATMENT:
            return {userObject : action.data, }
        default:
            return state;
    }
}

export default UserReducer;