import Api from './common/ApiController';
import router from './common/ApiEndPoints';

export default {
    treatment: async (u_treatment, u_tdesc, u_tdesc2, images) => {
        let params = {
            u_treatment,
            u_tdesc,
            u_tdesc2,
            images
        }
        return Api.post(router.treatments, params)
    },
}