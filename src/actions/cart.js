export const editToCart = (product, sl) => {
    return {
        type: 'EDIT_TOCART',
        payload: { product, sl },
    }
}

export const showDrawer = () => {
    return {
        type: 'showDrawer',
    }
}
export const closeDrawer = () => {
    return {
        type: 'closeDrawer',
    }
}