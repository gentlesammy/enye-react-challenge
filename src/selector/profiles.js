export default (profiles, { userName, gender, creditType, paymentMethodType }) => {
  return profiles
    .filter((profile) => {

      const genderMatch = gender!= "" ?  profile.Gender
        .toLowerCase() === gender.toLowerCase() : profile.Gender
        .toLowerCase()
        .includes(gender.toLowerCase()); 

        const creditTypeMatch = profile.CreditCardType
        .toLowerCase()
        .includes(creditType.toLowerCase());
      
      const userNameMatch = profile.UserName
        .toLowerCase()
        .includes(userName.toLowerCase());

      const paymentMethodMatch = profile.PaymentMethod
        .toLowerCase()
        .includes(paymentMethodType.toLowerCase());

        // const paymentMethodMatch = profile.PaymentMethod
        // .toLowerCase()
        // .includes(PaymentMethod.toLowerCase());

      return genderMatch &&  userNameMatch && creditTypeMatch && paymentMethodMatch;
      //&& paymentMethodMatch
    })
};