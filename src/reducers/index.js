import productReducer from './products';
import userProduct from './user';
import cart from './cart';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    product: productReducer,
    user: userProduct,
    Cart: cart,
})
export default rootReducer;