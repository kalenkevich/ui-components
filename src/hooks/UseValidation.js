import { useCallback, useEffect, useState } from 'react';

export const LoginStateSchema = {
  userName: {
    value: '',
    error: null,
  },
  password: {
    value: '',
    error: null,
  },
};

export const LoginValidationSchema = {
  userName: {
    required: true,
    validator: null,
  },
  password: {
    required: true,
    validator: null,
  },
};

export const applyValidator = (propertySchema, value, state) => {
  const propertyValidator = propertySchema.validator;

  if (propertySchema.required && !value) {
    return 'VALIDATION_ERROR_REQUIRED_FIELD';
  }

  if (propertyValidator !== null && value) {
    const typeOfValidator = typeof propertyValidator;

    if (typeOfValidator === 'object' && !propertyValidator.regEx.test(value)) {
      return propertyValidator.error;
    }

    if (typeOfValidator === 'function') {
      return propertyValidator(value, state);
    }
  }

  return null;
};

export default (stateSchema, validationSchema = {}) => {
  const [state, setState] = useState(stateSchema);
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const validateState = useCallback(() => Object.keys(validationSchema).every((key) => {
    const isInputFieldRequired = validationSchema[key].required;
    const stateValue = state[key].value;
    const stateError = state[key].error;
    const isRequiredAndEmpty = isInputFieldRequired && !stateValue;

    return !(isRequiredAndEmpty || stateError);
  }), [state, validationSchema]);

  const onChange = useCallback((name, value) => {
    const error = applyValidator(validationSchema[name], value, state);

    setIsTouched(true);
    setState(prevState => ({
      ...prevState,
      [name]: {
        value,
        error,
      },
    }));
  }, [state, validationSchema]);

  useEffect(() => {
    if (isTouched) {
      setIsValid(validateState());
    }
  }, [state, isTouched]);

  return [
    { ...state, isValid, isTouched },
    onChange,
  ];
};
