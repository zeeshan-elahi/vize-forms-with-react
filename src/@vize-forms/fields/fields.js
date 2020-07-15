import React from 'react';

// Import of available field components
import TextInput from './text-input';
import TextArea from './textarea';
import Select from './select';
import DateInput from './date-input';
import DOBInput from './dob-input';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import RadioGroup from './radio-group';

const FieldsMap = {
    textInput: TextInput,
    textarea: TextArea,
    select: Select,
    dateInput: DateInput,
    checkbox: Checkbox,
    checkboxGroup: CheckboxGroup,
    radioGroup: RadioGroup,
    dob: DOBInput,
};
  
const Fields = (props) => {

    const propTypes = {
        style: {
            fullWidth: true,
            margin: "normal",
            variant: "outlined"
        },
        field: props.value.field,
        handleOnChange: props.value.handleOnChange,
        handleOnDateChange: props.value.handleOnDateChange,
        values: props.value.values,
        errors: props.value.errors
    }

    // component does exist
    if (typeof FieldsMap[props.value.field.type] !== "undefined") {
        return React.createElement(FieldsMap[props.value.field.type], propTypes);
    }

    // component does not exist
    return React.createElement(
        () => <></>,
        propTypes
    );
};

export default Fields;