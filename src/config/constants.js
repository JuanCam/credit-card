
import { 
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcAmex,
  faCcDinersClub 
} from '@fortawesome/free-brands-svg-icons';

const CREDIT_CARD_NUMBER_LENGTH = 16;
const CREDIT_CARD_NUMBER_ANIMATION_LEN = 600;
const BRANDS = {
  'visa': faCcVisa,
  'mastercard': faCcMastercard,
  'discover': faCcDiscover,
  'american-express': faCcAmex,
  'diners-club': faCcDinersClub
}

export {
  CREDIT_CARD_NUMBER_LENGTH,
  CREDIT_CARD_NUMBER_ANIMATION_LEN,
  BRANDS
};
