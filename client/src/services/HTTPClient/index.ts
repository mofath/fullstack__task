import { IObjectKeys } from '../../interfaces';
import axiosClient from './axios';
const { client } = axiosClient();

const HTTPClient = function () {
    const queryString = (params: IObjectKeys = {}) => {
        const qs = Object.keys(params)
            .map((key) => {
                if (Array.isArray(params[key])) {
                    const value = params[key].reduce(
                        (prev: string, current: string, i: number) =>
                            `${prev}${key}=${params[key][i]}&`,
                        ''
                    );
                    return value.substring(0, value.length - 1);
                }
                return key + '=' + params[key];
            })
            .join('&');

        return qs.length > 0 ? '?' + qs : '';
    };

    const get = async (
        endpoint: string,
        params: IObjectKeys = {},
        headers: IObjectKeys = {}
    ) => {
        const requestParam = queryString(params);
        return client.get(`${endpoint}${requestParam}`, headers);
    };

    const post = async (
        endpoint: string,
        params: IObjectKeys = {},
        body: IObjectKeys = {},
        headers: IObjectKeys = {}
    ) => {
        const requestParam = queryString(params);
        return client.post(`${endpoint}${requestParam}`, body, headers);
    };

    const put = async (
        endpoint: string,
        params: IObjectKeys = {},
        body: IObjectKeys = {},
        headers: IObjectKeys = {}
    ) => {
        const requestParam = queryString(params);
        return client.put(`${endpoint}${requestParam}`, body, headers);
    };

    const patch = async (
        endpoint: string,
        params: IObjectKeys = {},
        body: IObjectKeys = {},
        headers: IObjectKeys = {}
    ) => {
        const requestParam = queryString(params);
        return client.post(`${endpoint}${requestParam}`, body, headers);
    };

    const _delete = async (
        endpoint: string,
        params: IObjectKeys = {},
        body: IObjectKeys = {},
        headers: IObjectKeys = {}
    ) => {
        const requestParam = queryString(params);
        return client.delete(`${endpoint}${requestParam}`, headers);
    };

    return Object.freeze({
        get,
        post,
        put,
        patch,
        delete: _delete,
    });
};

export default HTTPClient;
