import { combineReducers } from "redux";
import OrderStatusReducer from "./orderStatus.reducer";
import DishesReducer from "./dishes.reducer";

const rootReducer = combineReducers({
  orderStatus: OrderStatusReducer,
  dishesReducer: DishesReducer
});

export default rootReducer;
