import { useState, useEffect } from 'react';

const FormHooks = (submitCallback, validateForm, fields) => {

  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const [isSubmitFormState, setIsSubmitFormState] = useState(false);

  useEffect(() => {

    if (Object.keys(errors).length === 0 && isSubmitFormState) {
      submitCallback();
    }

  }, [errors, isSubmitFormState, submitCallback]);

  const handleOnSubmit = (event) => {

    if (event) event.preventDefault();

    setIsSubmitFormState(true);

    setErrors(validateForm(values, fields));

  };

  const handleOnChange = (event) => {
    event.persist();

    let local_values = values;

    let value = event.target.value;

    if (event.target.name.startsWith("checkbox_")) {
      value = event.target.checked;
    }
    
    if (event.target.name.startsWith("checkboxGroup_")) {

      if (local_values[event.target.name] === undefined) {
        local_values[event.target.name] = {};
      }

      local_values[event.target.name][value] = event.target.checked;

    } else {
      local_values[event.target.name] = value;
    }

    setValues(local_values);

    setIsSubmitFormState(false);

    setErrors(validateForm(values, fields));
  };

  // This is to handle date-input field onChange events
  const handleOnDateChange = (name, date) => {

    let local_values = values;
    local_values[name] = date;

    setValues(local_values);

    setIsSubmitFormState(false);

    setErrors(validateForm(values, fields));
    
  };

  const handleReset = (event) => {
    event.target.reset();
    setValues({});
    setErrors({});
    setIsSubmitFormState(false);
  };

  return {
    values,
    errors,
    handleOnChange,
    handleOnDateChange,
    handleOnSubmit,
    handleReset
  }
};

export default FormHooks;