import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const TextArea = fieldProps => {

    const fieldId = (fieldProps.field.fieldId !== undefined)? fieldProps.field.fieldId : '';
    const fieldType = (fieldProps.field.type !== undefined)? fieldProps.field.type : '';

    const formFieldName = fieldType + "_" + fieldId;

    return (
        <>
            <FormControl
                fullWidth={fieldProps.style.fullWidth !== undefined ? fieldProps.style.fullWidth : false} 
                margin={fieldProps.style.margin !== undefined ? fieldProps.style.margin : "none"}>
                <TextField 
                    id={formFieldName}
                    name={formFieldName}
                    multiline rows={4}
                    label={fieldProps.field.label !== undefined ? fieldProps.field.label : ""}
                    variant={fieldProps.style.variant !== undefined ? fieldProps.style.variant : "standard"}
                    onChange={fieldProps.handleOnChange}
                    defaultValue={fieldProps.values[formFieldName] || ''}
                    error={fieldProps.errors[formFieldName] !== undefined ? true : false}
                    helperText={fieldProps.errors[formFieldName] !== undefined ? fieldProps.errors[formFieldName] : ''}
                />
            </FormControl>
        </>
    );
};

export default TextArea;