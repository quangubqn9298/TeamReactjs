import React from 'react';
import { connect } from "react-redux";
import { editToCart, closeDrawer, showDrawer } from '../../actions/cart';
import Header from '../Header';
const states = (state) => {
    return {
        Products: state.product,
        Cart: state.Cart
    }
}
const actions = (dispatch) => {
    return {
        editCart: (product, sl) => dispatch(editToCart(product, sl)),
        showDrawers: () => dispatch(showDrawer()),
        closeDrawers: () => dispatch(closeDrawer()),
    }
}
function HeaderLayout(props) {
    const { Cart, showDrawers, closeDrawers, editCart } = props;

    return (
        <div>
            <Header Cart={Cart} showDrawers={showDrawers} closeDrawers={closeDrawers} editCart={editCart} ></Header>
        </div>
    );
}

export default connect(states, actions)(HeaderLayout);