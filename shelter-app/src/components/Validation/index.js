import React from 'react';
// import Messages from './messages.json';
import rawValidator from './RawValidations';
import { injectIntl, FormattedMessage } from 'react-intl';
const required = value => (value ? undefined : 'Required');

const mustBeEmail = value =>
  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? 'admin_login.email'
    : undefined;

const translateValidator = function(validator, intl) {
  return (...value) => {
    const valResult = rawValidator[validator](...value);
    if (valResult) {
      return <FormattedMessage id={valResult} />;
    } else {
      return undefined;
    }
  };
};

const createValidator = function(array) {
  return array.reduce((obj, item) => {
    obj[item] = translateValidator(item);
    return obj;
  }, {});
};

const array = Object.keys(rawValidator);

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export default injectIntl(createValidator(array));