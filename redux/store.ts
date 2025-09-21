import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definimos el tipo del estado de auth
interface AuthState {
  isLoggedIn: boolean;
}

// Estado inicial
const initialState: AuthState = {
  isLoggedIn: false,
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// actions
export const { login, logout } = authSlice.actions;

// Configuración del store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;