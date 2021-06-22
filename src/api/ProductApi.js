import axiosClient from './AxiosClient';
import querystring from 'querystring'
const ProductApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getToken: (user) => {
        const url = '/auth/local';
        return axiosClient.post(url, user);
    },
    // getLimitProduct: (options) => {
    //     const url = `/product?${querystring.stringify(options)}`
    //     return axiosClient.get(url)
    // },
    // getTotalProduct: () => {
    //     return axiosClient.get('/products/count');
    // }
}
export default ProductApi;