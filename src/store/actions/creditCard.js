import actionTypes from './actionTypes';
import valid from 'card-validator';

const updateCreditCardDelayedNumber = creditCardNumber => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_DELAYED_NUMBER,
    creditCardNumber
  };
};

const updateCreditCardNumber = creditCardNumber => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_NUMBER,
    creditCardNumber
  };
};

const updateCreditCardBrand = creditCardNumber => {
  const validation = valid.number(`${creditCardNumber}`.slice(0, 4));
  const creditCardBrand = validation.card && validation.card.type;

  return {
    type: actionTypes.CHANGE_CREDIT_CARD_BRAND,
    creditCardBrand
  };
};

const updateCreditCardHolder = creditCardName => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_NAME,
    creditCardName
  };
};

const updateCreditCardCVV = creditCardCVV => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_CVV,
    creditCardCVV
  };
};

const updateCreditCardMonth = creditCardExpMonth => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_EXP_MONTH,
    creditCardExpMonth
  };
};

const updateCreditCardYear = creditCardExpYear => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_EXP_YEAR,
    creditCardExpYear
  };
};

const flipCreditCard = creditCardFlipped => {
  return {
    type: actionTypes.CHANGE_CREDIT_CARD_FLIP,
    creditCardFlipped
  }
};

export { 
  flipCreditCard,
  updateCreditCardNumber,
  updateCreditCardDelayedNumber,
  updateCreditCardBrand,
  updateCreditCardHolder,
  updateCreditCardCVV,
  updateCreditCardMonth,
  updateCreditCardYear
};
