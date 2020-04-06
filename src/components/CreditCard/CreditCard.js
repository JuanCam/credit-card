import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CreditCard.scss';
import { BRANDS } from '../../config/constants';

const creditCard = props => {

    return (<div className="credit_card">
      <div className={`credit_card__front${props.flip ? ' credit_card--flipped' : ' credit_card--not-flipped'}`}>
        <div className="credit_card__heading">
          <div className="credit_card__chip"></div>
          <div className="credit_card__brand">
            <span className={`credit_card__icon${BRANDS[props.brand] ? ' credit_card__icon--exist' : '' }` }>
              {BRANDS[props.brand] ? <FontAwesomeIcon icon={BRANDS[props.brand]} /> : null}
            </span>
          </div>
        </div>
        <div className="credit_card__number">
          {props.number.map((digit, index) => {
            const { value, delayedValue } = digit;
            const isHash = value === '#';
            const isLastInSet = index % 4 === 3;

            return <div key={index}
                        className={`credit_card__digit${isHash ? ' credit_card__digit--hidden' : ' credit_card__digit--visible'}${isLastInSet ? ' credit_card__digit--last' : ''}`}>
                      <span className={`credit_card__digit_hash${isHash ? ' credit_card__digit_hash--visible' : ' credit_card__digit_hash--hidden'}`}>
                        #
                      </span>
                      <span className={`credit_card__digit_value${isHash ? ' credit_card__digit_value--hidden' : ' credit_card__digit_value--visible'}`}>
                        {delayedValue}
                      </span>
                    </div>;
          })}
        </div>
        <div className="credit_card__footer">
          <div className="credit_card__field">
            <small className="credit_card__label credit_card__label--small">valid thru: </small>
            <span className="credit_card__value">{props.expirationMonth}/{props.expirationYear.length > 2 ? props.expirationYear.slice(2) : props.expirationYear}</span>
          </div>
          <div className="credit_card__field">
            <small className="credit_card__label credit_card__label--small credit_card__label--middle">holder: </small>
            <div className="credit_card__value credit_card__label--middle">
              {[...props.holder].map((holderChar, index) => {
                const elements = [
                  <span className="credit_card__char" key={index}>{holderChar}</span>,
                  <span key={index}>&nbsp;</span>
                ];
                
                return holderChar === ' ' ? elements[1] : elements[0];
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`credit_card__back${!props.flip ? ' credit_card--flipped' : ' credit_card--not-flipped'}`}>
        <div className="credit_card__bar"></div>
        <div className="credit_card__cvv">
          <span className="credit_card__cvv_value">{props.cvv}</span>
        </div>
      </div>
    </div>);
};

const mapStateToProps = (state) => {

  return {
    number: state.creditCardNumber,
    cvv: state.creditCardCVV,
    holder: state.creditCardName,
    expirationYear: state.creditCardExpYear,
    expirationMonth: state.creditCardExpMonth,
    brand: state.creditCardBrand,
    flip: state.creditCardFlipped
  }
};

export default connect(mapStateToProps, {})(creditCard);
