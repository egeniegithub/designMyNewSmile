import { store } from '../../redux/store';
class Api {
    static header() {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: store.getState().user.token
                ? 'Bearer ' + store.getState().user.token
                : '',
        };
    }

    static get = async url => {
        return await this.fetchFunction(url, null, 'GET');
    };

    static put = async url => {
        return await this.fetchFunction(url, null, 'PUT');
    };

    static post = async (url, params) => {
        return await this.fetchFunction(url, params, 'POST');
    };

    static fetchFunction = async (url, data, method) => {
        let request = {
            method: method,
            headers: Api.header(),
            body: data ? JSON.stringify(data) : null,
        };
        try {
            const responseBody = await fetch(url, request);
            let jsonResponse = await responseBody.json();
            if (responseBody.status >= 200 && responseBody.status <= 299) {
                return { status: responseBody.status, data: jsonResponse };
            } else if (responseBody.status >= 400 && responseBody.status < 500) {
                let message = '';
                if (String(responseBody) !== '') {
                    message = jsonResponse.message;
                } else {
                    message = 'Request could not be performed.';
                }
                return { status: responseBody.status, message: message };
            }
        } catch (e) {
            return { status: 500, message: String(e) };
        }
    }
}

export default Api;