
import ProductApi from "../api/ProductApi";
import productApi from '../api/ProductApi';
export const addProducts = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    }
}
export const deleteProduct = (product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product,
    }
}
export const setTodo = (product) => {
    return {
        type: 'SET_PRODUCT',
        payload: product,
    }
}
export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token,
    }
}
export const setCount = (product) => {
    return {
        type: 'COUNT_PRODUCT',
        payload: product,
    }
}
export const changePage = (page, pageSize) => {
    return {
        type: 'CHANGE_PAGE',
        payload: { page, pageSize },
    }
}
// export const getLimit = (options) => async (dispatch) => {
//     try {
//         const response = await productApi.getLimitProduct(options);
//         return dispatch(setTodo(response));
//     } catch (error) {
//         console.log("fail ", error);
//     }
// }
export const fetchTodo = () => async (dispatch) => {
    try {
        const responseShow = await productApi.getAll();
        return dispatch(setTodo(responseShow));
    } catch (error) {
        console.log("fail ", error)
    }
}

export const fetchToken = () => async (dispatch) => {
    try {
        const response = await productApi.getToken({ "identifier": "phuong5959", "password": "Phuong1998" });
        localStorage.setItem("token", response.jwt);
        return dispatch(setToken(response.jwt));

    } catch (error) {
        console.log("fail ", error)
    }
}
export const addTodo = () => async (dispatch) => {
    try {
        const responseShow = await productApi.addProduct({ name: "Phuong", Description: "Phuong1", price: "123454", categories: 1 });
        return dispatch(addProducts(responseShow));
    } catch (error) {
        console.log("fail ", error)
    }
}

const delProduct = (id) => {
    return { type: "DELETE_PRODUCT", payload: id }
}

export const deletePr = (id) => async (dispatch) => {
    try {
        const productDeleted = await ProductApi.deleteProduct(id);
        return dispatch(delProduct(id))
    } catch (error) {
        console.log("fail ", error)
    }

}

