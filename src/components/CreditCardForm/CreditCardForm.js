import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  flipCreditCard,
  updateCreditCardNumber,
  updateCreditCardDelayedNumber,
  updateCreditCardBrand,
  updateCreditCardHolder,
  updateCreditCardCVV,
  updateCreditCardMonth,
  updateCreditCardYear
} from '../../store/actions/creditCard';
import { getMonthsList, getYearsListFromPlus } from '../../utils/date.utils';
import { chain } from '../../utils/chainable.utils';
import './CreditCardForm.scss';
import { CREDIT_CARD_NUMBER_LENGTH, CREDIT_CARD_NUMBER_ANIMATION_LEN } from '../../config/constants';

class CreditCardForm extends Component {

  onChangeNumber = (number) => {
    this.props.onChangeCreditCardNumber(number, this.props.creditCardNumber.filter(({ value }) => value !== '#'));
    this.props.onChangeCreditCardBrand(number);
  }

  onChangeMonth = ({target}) => {
    this.props.onChangeCreditCardMonth(target.value);
  }


  onChangeYear = ({ target }) => {
    this.props.onChangeCreditCardYear(target.value);
  }

  render() {
    return <form className="credit_card_form">
      <div className="credit_card_form__row">
        <input className="credit_card_form__input" type="number" placeholder="Enter Credit Card Number" onKeyUp={event => {
          const { target } = event;

          if (target.value.length >= CREDIT_CARD_NUMBER_LENGTH) {
            target.value = target.value.slice(0, CREDIT_CARD_NUMBER_LENGTH);
          }
        }} onChange={({ target }) => {this.onChangeNumber(target.value)}} />
        <input className="credit_card_form__input" type="text" placeholder="Enter Credit Card Holder Name" onChange={({ target }) => this.props.onChangeCreditCardHolder(target.value)} />
      </div>
      <div className="credit_card_form__row">
        <div className="credit_card_form__group">
          <select  className="credit_card_form__select" defaultValue="" onChange={this.onChangeMonth}>
            <option disabled value="">Month</option>
            {getMonthsList().map((month, index) => {
              return <option key={index} value={month}>{month}</option>
            })}
          </select>
          <select  className="credit_card_form__select" defaultValue="" onChange={this.onChangeYear}>
            <option disabled value="">Year</option>
            {getYearsListFromPlus().map((year, index) => {
              return <option key={index} value={year}>{year}</option>
            })}
          </select>
        </div>
        <input type="number" className="credit_card_form__input" placeholder="Enter Credit Card CVV" onFocus={this.props.onFlipBackCreditCard} onBlur={this.props.onFlipFrontCreditCard} onChange={({ target }) => this.props.onChangeCreditCardCVV(target.value)}/>
      </div>
    </form>
  }
};

const mapStateToProps = (state) => {
  return {
    creditCardNumber: state.creditCardNumber,
    creditCardCVV: state.creditCardCVV,
    creditCardName: state.creditCardName,
    creditCardExpDate: state.creditCardExpDate,
    creditCardBrand: state.creditCardBrand,
  }
};

const mapDispatchToProps = dispatch => {
  
  return {
    onChangeCreditCardNumber: (number, cleanedCreditCardNumber) => {
      
      if (cleanedCreditCardNumber.length < `${number}`.length) {
        chain()
          .step(() => dispatch(updateCreditCardNumber(number)))
          .step(() => dispatch(updateCreditCardDelayedNumber(number)))
          .stop();
      } else {
        chain()
          .step(() => dispatch(updateCreditCardNumber(number)))
          .end(CREDIT_CARD_NUMBER_ANIMATION_LEN, () => dispatch(updateCreditCardDelayedNumber(number)));
      }
    },
    onChangeCreditCardBrand: number => dispatch(updateCreditCardBrand(number)),
    onChangeCreditCardHolder: holderName => dispatch(updateCreditCardHolder(holderName)),
    onChangeCreditCardMonth: month => dispatch(updateCreditCardMonth(month)),
    onChangeCreditCardYear: year => dispatch(updateCreditCardYear(year)),
    onChangeCreditCardCVV: cvv => dispatch(updateCreditCardCVV(cvv)),
    onFlipBackCreditCard: () => dispatch(flipCreditCard(true)),
    onFlipFrontCreditCard: () => dispatch(flipCreditCard(false))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardForm);
