const expensesFilterDefaultState = {
  userName: "",
  gender: "",
  creditType: "",
  paymentMethodType: "",
};

export default (state = expensesFilterDefaultState, action) => {
  switch (action.type) {
    case "FILTER_USERNAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "FILTER_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
     case "FILTER_CREDIT_CARD_TYPE":
      return {
        ...state,
        creditType: action.creditType,
      };
    case "FILTER_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethodType: action.paymentMethodType,
      };
    default:
      return state;
  }
};
