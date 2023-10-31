const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'
const SORT_PRODUCTS_BY_CATEGORY = "SORT_PRODUCTS_BY_CATEGORY"
const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY"
const GET_DISCONT_PRODUCTS_BY_CATEGORY = 'GET_DISCONT_PRODUCTS_BY_CATEGORY';

export const loadProductByCategory = payload => ({ type: LOAD_PRODUCT_BY_CATEGORY, payload })
export const sortProductsByCategoryAction = payload => ({ type: SORT_PRODUCTS_BY_CATEGORY, payload })
export const filterProductsByCategoryAction = payload => ({ type: FILTER_PRODUCTS_BY_CATEGORY, payload })
export const getDiscontProductsByCategoryAction = payload => ({ type: GET_DISCONT_PRODUCTS_BY_CATEGORY, payload });

const initialState = { category: {}, data: [] }

export const productsByCatReducer = (state = initialState, action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        const { data, category } = action.payload;
        const data_show_product = data.map(el => ({ ...el, show_product: true,show_sale:true }));
        return { ...state, category, data: data_show_product }
    } 
    else if (action.type === SORT_PRODUCTS_BY_CATEGORY) {
        let sortedProducts = [...state.data]
        if (action.payload === 'title') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
        } else if (action.payload === 'priceAsc') {
            sortedProducts.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'priceDesc') {
            sortedProducts.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'default') {
            sortedProducts.sort((a, b) => a.id - b.id)
        }
        return { ...state, data: sortedProducts };
    }
    else if(action.type === FILTER_PRODUCTS_BY_CATEGORY){
        const {minValue, maxValue} = action.payload
        const filterData = state.data.map(el => {
            let actualPrice = el.discont_price || el.price;
            if (actualPrice >= minValue && actualPrice <= maxValue) {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        });
        return {...state, data: filterData }
    }
    else if (action.type === GET_DISCONT_PRODUCTS_BY_CATEGORY) {
        const discontData = action.payload

            ? [...state.data].map(el => {
                if (!el.discont_price) {
                    el.show_sale = false
                }
                return el
            })
            : state.data.map(el => {
                el.show_sale = true
                return el
            });

        return { ...state, data: discontData }
         }
          else {
        return state
    }
}