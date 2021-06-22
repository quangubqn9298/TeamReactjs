const initialState = {
    Cart: [],
    total: 0,
    sl: 0,
    visible: false,
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'EDIT_TOCART': {
            const newState = { ...state };
            var Cart = [...newState.Cart];
            const index = Cart.findIndex((item) => {
                return item.id == action.payload.product.id
            })
            if (index >= 0) {

                action.payload.sl = Cart[index].sl + action.payload.sl
                Cart.splice(index, 1);
                if (action.payload.sl > 0) {
                    Cart.splice(index, 0, { ...action.payload.product, sl: action.payload.sl });
                }

            } else {
                if (action.payload.sl > 0) {
                    Cart.push({ ...action.payload.product, sl: action.payload.sl });
                }
            }

            const total = Cart.reduce((sum, product) => {
                return (sum + product.sl * product.price)
            }, 0)
            const sl = Cart.reduce((SL, item) => {
                return SL + item.sl
            }, 0)
            return { ...state, Cart: Cart, total: total, sl: sl };
        }
        case 'showDrawer': {
            const stateChangeVisible = { ...state }
            stateChangeVisible.visible = true;
            return stateChangeVisible;
        }
        case 'closeDrawer': {
            const stateChangeVisible = { ...state }
            stateChangeVisible.visible = false;
            return stateChangeVisible;
        }
        default: {
            return state;
        }


    }
};
export default cartReducer;