import {  combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import Reducers from "./reducers";
const RootReducers = combineReducers({
  Reducers,
});

export const store = configureStore({
  reducer: RootReducers,
  middleware: [thunk]
});