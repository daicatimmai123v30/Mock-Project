import {PRODUCTS,CATEGORIES} from '../Enum/Constants'
const initState={
    filters:{
        search:'',
        selectType:[],
        sort: 'price'
    },
    categories:CATEGORIES,
    productsList:PRODUCTS
}

const rootReducer =(state=initState,action) => {

    switch(action.type){
        case 'products/search':
            return {
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }
            case 'products/sort':
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        sort: action.payload
                    }
                }
            case 'categories/search':
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        selectType: action.payload
                    }
                }
        default: return state;
    }
}

export default rootReducer;