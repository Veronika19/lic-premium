import Validator from 'validator';
import isEmpty from './isEmpty.js';

export default (data) => {
  let errors = {};

  data.policy_number = !isEmpty(data.policy_number) ? data.policy_number : '';
  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';
  data.date_of_commence = !isEmpty(data.date_of_commence) ? data.date_of_commence : '';
  data.table_term = !isEmpty(data.table_term) ? data.table_term : '';
  data.pay_mode = !isEmpty(data.pay_mode) ? data.pay_mode : '';
  data.premium_amt = !isEmpty(data.premium_amt) ? data.premium_amt : '';

  if (Validator.isEmpty(data.policy_number)) {
    errors.policy_number = 'Please enter the policy number';
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'Please enter the first name';
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Please enter the last name';
  }

  if (Validator.isEmpty(data.date_of_commence)) {
    errors.date_of_commence = 'Please enter the DOC(Date of Commencement)';
  }

  if (Validator.isEmpty(data.table_term)) {
    errors.table_term = 'Please enter the table term';
  }

  if (Validator.isEmpty(data.pay_mode)) {
    errors.pay_mode = 'Please enter the payment mode';
  }

  if (Validator.isEmpty(data.premium_amt)) {
    errors.premium_amt = 'Please enter the premium amount';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
