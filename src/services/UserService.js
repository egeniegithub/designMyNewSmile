import Api from './common/ApiController';
import router from './common/ApiEndPoints';

export default {
    doLogin: async (login, password) => {
        let params = {
            login,
            password,
            meta_info: '',
        }
        return Api.post(router.login, params)
    }
}