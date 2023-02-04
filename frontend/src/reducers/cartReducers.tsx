import{CART_ADD_ITEM,CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADRESSE,CART_SAVE_PAYMENT} from '../constants/cartConstants'


interface  CartState {
    cartItems: any[]
    shippingAddress: {};
    images: any[]
    paymentMethod?:{}
    }


    const initialState: CartState = {
        cartItems: [],
        shippingAddress: {},
        images: [],
        paymentMethod:{}
        };

export const cartReducer = (state = initialState, action:{type:string,payload:any}) =>{
    switch(action.type) {
        case CART_ADD_ITEM:

        const item = action.payload

    
        const existItem = state.cartItems.find(x=> x.product === item.product)
        if(existItem){
            return{
            ...state,
            cartItems: state.cartItems.map((x)=>
             x.product === existItem.product ? item : x
                ),
            }
        } else {
            return{
                ...state,
                cartItems: [...state.cartItems,item]
            }
        }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x)=> x.product !== action.payload),
            }
        case CART_SAVE_SHIPPING_ADRESSE:
            return {
                ...state,
                shippingAddress: action.payload,
            }
        case CART_SAVE_PAYMENT:
            return {
                ...state,
                paymentMethod: action.payload,
            }
        default : return state
    
    }
}