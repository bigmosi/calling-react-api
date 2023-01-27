import UuidStore from "./UuidStore";

const CartReducer = async (state = { cart: [] }, action) => {
    let cart = state.cart;

    let response;

    switch (action.type) {
        case "add": 
              await fetch(
                "http://localhost:3333/cart",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    },
                    body: JSON.stringify({
                        id: action.payload.id
                    })
                }
              );
              response = await fetch(
                "http://localhost:3333/cart",
                {
                    method: "GET",
                    headers: {
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                }
              )

              cart = await response.json();

              return {
                ...state,
                cart: cart
              }
        case "update":
            if (cart.find(item => item.id === action.payload.id)) {
                let newCart = cart.filter(item => {
                    if (item.id === action.payload.id) {
                        item.quantity = action.payload.quantity;
                    }
                    return item.quantity > 0 ? item : null;
                });
                return {
                    ...state,
                    cart: newCart
                };
            } else {
                return {
                    ...state,
                    cart: cart
                };
            }
        case "delete":
            if (cart.find(item => item.id === action.payload.id)) {
                let newCart = cart.filter(item => item.id !== action.payload.id);
                return {
                    ...state,
                    cart: newCart
                };
            } else {
                return {
                    ...state,
                    cart: cart
                };
            }
        case "clear":
            return {
                ...state,
                cart: []
            };
        default:
            return {
                ...state,
                cart: cart
            };
    }
};

export default CartReducer;
