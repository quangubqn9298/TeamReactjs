import { React, useEffect, Suspense } from 'react';
import { connect } from "react-redux";
import { fetchTodo, addTodo, deletePr, changePage } from '../../actions/product';
import { editToCart } from '../../actions/cart';
import ProductList from '../../page/ProductList';
import Banner from '../Body/Banner';



const states = (state) => {
    return {
        Products: state.product,
        Cart: state.Cart
    }
}
const actions = (dispatch) => {
    return {
        fetchTodo: () => dispatch(fetchTodo()),
        deletePr: (id) => dispatch(deletePr(id)),
        addTodo: () => dispatch(addTodo()),
        editCart: (product, sl) => dispatch(editToCart(product, sl)),
        changePageAction: (page, pageSize) => dispatch(changePage(page, pageSize))
    }
}

function BodyLayout(props) {
    const { Products, fetchTodo, changePageAction, editCart, Cart } = props
    useEffect(() => {
        fetchTodo();
    }, [])
    return (
        <div>
            <Banner></Banner>
            <ProductList productList={Products.list} Products={Products} changePageAction={changePageAction} editCart={editCart}></ProductList>
        </div>
    );
}

export default connect(states, actions)(BodyLayout);