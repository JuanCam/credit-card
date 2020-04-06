import actionTypes from '../actions/actionTypes';

const mappedCreditCardNumber = [{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
},{
  value: '#',
  delayedValue: '#'
}, {
  value: '#',
  delayedValue: '#'
} ,{
  value: '#',
  delayedValue: '#'
} ,{
  value: '#',
  delayedValue: '#'
} ,{
  value: '#',
  delayedValue: '#'
}, {
  value: '#',
  delayedValue: '#'
}, {
  value: '#',
  delayedValue: '#'
}, {
  value: '#',
  delayedValue: '#'
}, {
  value: '#',
  delayedValue: '#'
}];
const initialState = {
  creditCardNumber: mappedCreditCardNumber.slice(),
  creditCardCVV: '',
  creditCardName: '',
  creditCardExpMonth: 'MM',
  creditCardExpYear: 'YY',
  creditCardBrand: '',
  creditCardFlipped: false,
  preflightedField: '',
  preflightedState: null
};


const changeCreditCardNumber = (state, actions, delayed = false) => {
  const numberStr = `${actions.creditCardNumber}`;
  const currentCreditCardNumber = state.creditCardNumber;
  const creditCardNumber = mappedCreditCardNumber.map((digit, index) => {
    return delayed 
      ? {
        value: currentCreditCardNumber[index].value,
        delayedValue: numberStr[index] || digit.value
      }
      : {
        value: numberStr[index] || digit.value,
        delayedValue: currentCreditCardNumber[index].delayedValue
      };
  });

  return {
    ...state,
    creditCardNumber
  };
};

const changeCreditCardBrand = (state, actions) => {
  const { creditCardBrand } = actions;

  return {
    ...state,
    creditCardBrand
  };
};

const changeCreditCardName = (state, actions) => {
  const { creditCardName } = actions;

  return {
    ...state,
    creditCardName
  };
};

const changeCreditCardCVV = (state, actions) => {
  const { creditCardCVV } = actions;

  return {
    ...state,
    creditCardCVV
  };
};

const changeCreditCardExpMonth = (state, actions) => {
  const { creditCardExpMonth } = actions;

  return {
    ...state,
    creditCardExpMonth
  };
};

const changeCreditCardExpYear = (state, actions) => {
  const { creditCardExpYear } = actions;
  
  return {
    ...state,
    creditCardExpYear
  };
};

const flipCreditCard = (state, actions) => {
  const { creditCardFlipped } = actions;

  return {
    ...state,
    creditCardFlipped
  };
};

const creditCard = (state = initialState, actions) => {
  let newState = {};

  switch (actions.type) {
    case actionTypes.CHANGE_CREDIT_CARD_NUMBER:
      newState = changeCreditCardNumber(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_DELAYED_NUMBER:
      newState = changeCreditCardNumber(state, actions, true);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_BRAND:
      newState = changeCreditCardBrand(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_CVV:
      newState = changeCreditCardCVV(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_EXP_MONTH:
      newState = changeCreditCardExpMonth(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_EXP_YEAR:
      newState = changeCreditCardExpYear(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_NAME:
      newState = changeCreditCardName(state, actions);
      break;
    case actionTypes.CHANGE_CREDIT_CARD_FLIP:
      newState = flipCreditCard(state, actions);
      break;
    default:
      newState = { ...state };
      break;
  }
  
  return newState;
};

export default creditCard;
