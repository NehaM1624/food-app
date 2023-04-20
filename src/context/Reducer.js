export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_ITEM: "SET_ITEM",
  SET_EDIT: "SET_EDIT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_ITEM:
      return {
        ...state,
        setItem: action.setItem,
      };
    case actionType.SET_EDIT:
      return {
        ...state,
        isEdit: action.isEdit,
      };
    default:
      return state;
  }
};
//export default reducer;
