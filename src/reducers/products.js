const initialState = {
    list: [],
    activeId: null,
    token: "",
    _limit: 5,
    _currentPage: 1,
    _total: 0,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT': {
            const newState2 = { ...state };
            newState2.list = action.payload;
            newState2._total = action.payload.length
            return newState2;
        }
        case 'SET_TOKEN': {
            const newState3 = { ...state };
            newState3.token = action.payload;
            return newState3;
        }
        case 'CHANGE_PAGE': {
            const newStateChangePage = { ...state };
            newStateChangePage._currentPage = action.payload.page;
            newStateChangePage._limit = action.payload.pageSize;
            //console.log("State change page: ", state)
            return newStateChangePage;
        }
        default: return state;
    }
}
export default productReducer;