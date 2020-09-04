import Api from './common/ApiController';
import router from './common/ApiEndPoints';

export default {
    chooseDesign: async (d_id, appointment_date, appointment_time, u_desc) => {
        let params = {
            d_id,
            appointment_date,
            appointment_time,
            u_desc
        }
        return Api.post(router.chooseDesign, params)
    },
}