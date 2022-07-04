import { createSlice } from '@reduxjs/toolkit/';

const initialState = {
	cartItems: [],
	status: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].quantity += 1;
			} else {
				const tempProduct = { ...action.payload, quantity: 1 };
				state.cartItems.push(tempProduct);
			}
		},
		changeCartStatus(state, action) {
			state.status = action.payload;
		},
		decreaseQuantity(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (state.cartItems[itemIndex].quantity > 1) {
				state.cartItems[itemIndex].quantity -= 1;
			}
		},
		removeCartItem(state) {
			state.cartItems.length = 0;
		},
	},
});

export const { addToCart, changeCartStatus, decreaseQuantity, removeCartItem } =
	cartSlice.actions;

export default cartSlice.reducer;
