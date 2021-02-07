
//search record by username
export const filterRecordByUsername = (userName = "") => ({
  type: "FILTER_USERNAME",
  userName,
});

//filter record by gender
export const filterRecordByGender = (gender = "") => ({
  type: "FILTER_GENDER",
  gender,
});

//filter record by credit card type
export const filterRecordByCredit= (creditCardType = "") => ({
  type: "FILTER_CREDIT_CARD_TYPE",
  creditCardType,
});

//filter record by payment method
export const filterRecordByPaymentMethod = (paymentMethodType = "") => ({
  type: "FILTER_PAYMENT_METHOD",
  paymentMethodType,
});