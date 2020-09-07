import UserService from '../../services/UserService';
import TreatmentService from '../../services/TreatmentService';
import { store } from '../../redux/store';

export const actions = {
    setLogin: (userName, password) => async dispatch => {
        let data = await UserService.doLogin(userName, password);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'LOGIN',
                data: data.data,
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },
    setSignUp: (name, email, phoneNo, dob) => async dispatch => {
        let data = await UserService.signUp(name, email, phoneNo, dob);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'SIGNUP',
                data: data.data.data,
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },
    setLogOut: () => {
        return {
            type: 'LOGOUT',
        };
    },
    setTreatment: (treatment, question1, question2, imagesArray) => async dispatch => {
        let data = await TreatmentService.treatment(treatment, question1, question2, imagesArray);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'TREATMENT',
                data: data.data.data,
                token: store.getState().user.token
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },
    updateProfile: (name, phoneNo) => async dispatch => {
        let data = await UserService.updateProfile(name, phoneNo);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'UPDATEPROFILE',
                data: data.data.data,
                token: store.getState().user.token
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },

    getProfile: () => async dispatch => {
        let data = await UserService.getProfile();
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'UPDATEPROFILE',
                data: data.data.data,
                token: store.getState().user.token
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },

    deactivateAccount: () => async dispatch => {
        let data = await UserService.deactivateAccount();
        return dispatch({
            type: 'LOGOUT',
        });
    },


};