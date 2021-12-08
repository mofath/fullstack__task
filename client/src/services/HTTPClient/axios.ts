import axios from 'axios';
import config from '../../config';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const instance = axios.create({
        baseURL: config.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    /**
     * req interceptor
     */
    instance.interceptors.request.use(
        async (req) => {
            return req;
        },
        (err: any) => {
            return Promise.reject(err.message);
        }
    );

    /**
     * res interceptor
     */
    instance.interceptors.response.use(
        (res) => {
            return Promise.resolve(res.data);
        },
        async (err: any) => {
            return Promise.reject(err);
        }
    );

    return Object.freeze({
        client: instance,
    });
};
