import { SUBMIT_YOUR_ORDER } from "../Actions/order.action";
import { Dishes } from "../constants";

const initialState = {
  burgers: 10,
  sandwiches: 10,
  noodles: 10,
  biriyanies: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_YOUR_ORDER:
      const { dish, count } = action.payload;
      const sel = Dishes.find((x) => x.value === dish);
      if (sel) {
        return {
          ...state,
          burgers:
            sel.label === "Burger" ? state.burgers - count : state.burgers,
          sandwiches:
            sel.label === "Sandwich"
              ? state.sandwiches - count
              : state.sandwiches,
          noodles:
            sel.label === "Noodles" ? state.noodles - count : state.noodles,
          biriyanies:
            sel.label === "Biriyani"
              ? state.biriyanies - count
              : state.biriyanies
        };
      }
      return {
        ...state
      };
    default:
      return state;
  }
};
