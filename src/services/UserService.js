import Api from './common/ApiController';
import router from './common/ApiEndPoints';

export default {
    doLogin: async (u_email, u_pass) => {
        let params = {
            u_email,
            u_pass,
        }
        return Api.post(router.login, params)
    },
    signUp: async (u_fname, u_email, u_contact, u_dob) => {
        let params = {
            u_fname,
            u_email,
            u_contact,
            u_dob
        };
        return Api.post(router.signUp, params);
    },
    updateProfile: async (u_fname, u_contact) => {
        let params = {
            u_fname,
            u_contact,
        };
        return Api.post(router.updateProfile, params);
    },

    getProfile: async () => {
        return Api.get(router.getProfile);
    },
}