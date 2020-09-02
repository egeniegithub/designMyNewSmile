import UserService from '../../services/UserService';
import TreatmentService from '../../services/TreatmentService';

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
        console.log('1 1 1  1 1 1 1 1 11  1 1 1 ');
        let data = await TreatmentService.treatment(treatment, question1, question2, imagesArray);
        console.log('R R R R R  R R R : ', data);
        if (data.status >= 200 && data.status <= 299) {
            return dispatch({
                type: 'TREATMENT',
                data: data.data.data,
            });
        } else {
            return {
                error: true,
                'message': data.message
            };
        }
    },
};