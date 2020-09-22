import Api from './common/ApiController';
import router from './common/ApiEndPoints';

export default {
    chooseDesign: async (d_id, appointment_date, appointment_time, u_desc, clinic_Email) => {
        let params = {
            d_id,
            appointment_date,
            appointment_time,
            u_desc,
            clinic_Email
        }
        return Api.post(router.chooseDesign, params)
    },
}