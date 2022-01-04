import Validator from 'validator';
import isEmpty from './isEmpty.js';
import { parseISO, format } from 'date-fns';

export default (data) => {
  let errors = {};

  data.policy_number = !isEmpty(data.policy_number) ? data.policy_number : '';
  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';
  data.date_of_commence = !isEmpty(data.date_of_commence) ? data.date_of_commence : '';
  data.table_term = !isEmpty(data.table_term) ? data.table_term : '';
  data.pay_mode = !isEmpty(data.pay_mode) ? data.pay_mode : '';
  data.premium_amt = !isEmpty(data.premium_amt) ? data.premium_amt : '';
  data.dlp = !isEmpty(data.dlp) ? data.dlp : '';
  data.mobile_number = !isEmpty(data.mobile_number) ? data.mobile_number : '';

  if (Validator.isEmpty(data.policy_number.toString())) {
    errors.policy_number = 'Please enter the policy number';
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'Please enter the first name';
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Please enter the last name';
  }

  // console.log('=========', new Date(Date.parse(data.date_of_commence)).toUTCString());
  // console.log('=========');

  if (Validator.isEmpty(data.date_of_commence)) {
    errors.date_of_commence = 'Please enter the DOC(Date of Commencement)';
  } else if (!Validator.isDate(format(parseISO(data.date_of_commence), 'yyyy/MM/dd'))) {
    errors.date_of_commence = 'Please enter a valid DOC';
  }

  if (Validator.isEmpty(data.table_term)) {
    errors.table_term = 'Please enter the table term';
  } else if (!Validator.isInt(data.table_term)) {
    errors.table_term = 'Please enter a number';
  }

  if (Validator.isEmpty(data.pay_mode)) {
    errors.pay_mode = 'Please enter the payment mode';
  } else if (!Validator.isAlpha(data.pay_mode, 'en-US', { ignore: /[-]/ })) {
    errors.pay_mode = 'Please enter correct pay mode value';
  } else if (!Validator.isIn(data.pay_mode, ['quarterly', 'half-yearly', 'yearly'])) {
    errors.pay_mode = 'Mode can only be quarterly, half yearly or yearly';
  }

  if (Validator.isEmpty(data.premium_amt)) {
    errors.premium_amt = 'Please enter the premium amount';
  }

  if (Validator.isEmpty(data.dlp)) {
    errors.dlp = 'Please enter the date of last premium';
  } else if (!Validator.isDate(format(parseISO(data.dlp), 'yyyy/MM/dd'))) {
    errors.dlp = 'Please enter a valid dlp';
  }

  if (Validator.isEmpty(data.mobile_number)) {
    errors.mobile_number = 'Please enter the mobile number';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
