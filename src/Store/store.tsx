import { configureStore } from "@reduxjs/toolkit";
import { reducerPostre } from "../Reducers/postres";


export const store = configureStore({reducer:reducerPostre});

