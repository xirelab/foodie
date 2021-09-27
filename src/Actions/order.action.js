export const SUBMIT_YOUR_ORDER = "SUBMIT_YOUR_ORDER";

export const submitOrder = (dish, type, count) => {
  return {
    type: SUBMIT_YOUR_ORDER,
    payload: {
      dish: dish,
      type,
      count
    }
  };
};
