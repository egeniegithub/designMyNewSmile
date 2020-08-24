const initialState = {
    userObject: null,
};

const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                userObject: action.data,
            };
        case types.LOGOUT:
            return { userObject: null };
        default:
            return state;
    }
}

export default UserReducer;