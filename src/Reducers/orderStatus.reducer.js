import { SUBMIT_YOUR_ORDER } from "../Actions/order.action";
import { OrderStatus } from "../constants";

const initialState = {
  status: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_YOUR_ORDER:
      // We don't need to take anything out from the action payload
      // as theres nothing we need from there to update this order
      // status
      return {
        status: OrderStatus.IN_PROGRESS
      };
    default:
      return state;
  }
};
