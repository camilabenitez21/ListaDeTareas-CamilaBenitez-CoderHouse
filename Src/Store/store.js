import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import counterReducer from '../Features/Counter/counterSlice';
import shopReducer from '../Features/Shop/shopSlice';
import cartReducer from '../Features/Cart/CartSlice';
import userReducer from '../Features/User/userSlice';
import { shopApi } from '../Services/shopServices';
import { authApi } from '../Services/authServices';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
        cart: cartReducer,
        user: userReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
