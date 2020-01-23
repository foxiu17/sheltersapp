const rawValidator = {
  file: value => {
    return undefined;
  },
  mustBeEmail: value =>
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? 'VALIDATION_MESSAGE.MUST_BE_EMAIL'
      : undefined,
  mustBeNumber: value => {
    let r = value
      ? isNaN(value)
        ? 'VALIDATION_MESSAGE.NUMBER'
        : undefined
      : undefined;
    return r;
  },
  mustBePhone: value =>
    !/^[^A-Za-z]+$/.test(value)
      ? 'VALIDATION_MESSAGE.MUST_BE_PHONE'
      : undefined,
  shouldBePassword: value =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(value) || !value
      ? undefined
      : 'VALIDATION_MESSAGE.MUST_BE_PASSWORD',
  mustBePassword: value =>
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?:[a-zA-Z0-9!@#$%^&*_]{5,})$/.test(value)
      ? 'VALIDATION_MESSAGE.MUST_BE_PASSWORD'
      : undefined,
  mustBeRepeatedPassword: (password, repeatPassword) =>
    password !== repeatPassword
      ? 'VALIDATION_MESSAGE.CONFIRM_PASSWORD'
      : undefined,
  cannotDeActivate: value =>
    !value ? 'VALIDATION_MESSAGE.CONFIRM_PASSWORD' : undefined,
  required: value => {
    switch (typeof value) {
      case 'string': {
        return value.length && value != '<p><br></p>'
          ? undefined
          : 'VALIDATION_MESSAGE.REQUIRED';
      }
      default: {
        return value ? undefined : 'VALIDATION_MESSAGE.REQUIRED';
      }
    }
  },
  mustBeDate: value =>
    !/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(value)
      ? 'validation_message.must_be_date'
      : undefined,
  mustHaveAOneQuestion: value => {
    const errorMessage = 'validation_message.must_have_one_question';
    if (!Array.isArray(value)) {
      return errorMessage;
    } else {
      let question = value.find(item => item.category == false);
      if (question) {
        return undefined;
      }

      question = value.find(item => item.questions && item.questions.length);
      if (question) {
        return undefined;
      }
      return errorMessage;
    }
  },
  mustBeFilledWhenActive: function(parent, child) {
    if (parent) {
      return !child ? 'VALIDATION_MESSAGE.REQUIRED' : false;
    }

    return false;
  },
  mustBeFilledSourceWhenActive: function(data) {
    if (!data || typeof data !== 'object') {
      return 'VALIDATION_MESSAGE.REQUIRED';
    }

    const { dynamic_value, active, value } = data;

    if (dynamic_value && active) {
      return !(value && value.length)
        ? 'VALIDATION_MESSAGE.REQUIRED'
        : undefined;
    }

    return undefined;
  },
  pl_float: value => {
    if (!value) return false;
    const result = /^[+-]?\d+(\,\d+)?$/.test(value)
      ? false
      : 'validation_message.must_be_float';
    return result;
  },
  attachment: function(value) {
    if (value && value.size && value.size < 4 * 1024 * 1024) {
      return false;
    } else {
      return 'validation_message.5MB_file_require';
    }
  }
};

export default rawValidator;