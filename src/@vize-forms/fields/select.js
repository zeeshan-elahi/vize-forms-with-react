import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const Select = fieldProps => {

    const fieldId = (fieldProps.field.fieldId !== undefined)? fieldProps.field.fieldId : '';
    const fieldType = (fieldProps.field.type !== undefined)? fieldProps.field.type : '';

    const formFieldName = fieldType + "_" + fieldId;

    const options = (fieldProps.field.options !== undefined)? fieldProps.field.options : {};

    return (
        <>
            <FormControl
                fullWidth={fieldProps.style.fullWidth !== undefined ? fieldProps.style.fullWidth : false} 
                margin={fieldProps.style.margin !== undefined ? fieldProps.style.margin : "none"}>
                <TextField 
                    id={formFieldName}
                    name={formFieldName}
                    select SelectProps={{native: true,}} 
                    label={fieldProps.field.label !== undefined ? fieldProps.field.label : ""}
                    variant={fieldProps.style.variant !== undefined ? fieldProps.style.variant : "standard"}
                    onChange={fieldProps.handleOnChange}
                    defaultValue={fieldProps.values[formFieldName] || ''}
                    error={fieldProps.errors[formFieldName] !== undefined ? true : false}
                    helperText={fieldProps.errors[formFieldName] !== undefined ? fieldProps.errors[formFieldName] : ''}>
                    <option value=""></option>
                    {Object.keys(options).map( 
                        (option) =>  <option key={option} value={option}>{options[option]}</option> )}
                </TextField>
            </FormControl>
        </>
    );
};

export default Select;