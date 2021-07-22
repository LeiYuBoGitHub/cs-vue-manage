import axios from '../axios'


/**
 * 吹风机表格
 * @param params
 * @returns {Promise<AxiosResponse<T>>}
 */
 export function loadingBlowTable(params) {
    return axios.post('device/blow', params);
}

// =====================首页======end=========================