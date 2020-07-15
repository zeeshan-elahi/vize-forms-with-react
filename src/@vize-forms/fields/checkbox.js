import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const Checkbox = fieldProps => {

    const fieldId = (fieldProps.field.fieldId !== undefined)? fieldProps.field.fieldId : '';
    const fieldType = (fieldProps.field.type !== undefined)? fieldProps.field.type : '';

    const formFieldName = fieldType + "_" + fieldId;

    return (
        <>
            <FormControl
                fullWidth={fieldProps.style.fullWidth !== undefined ? fieldProps.style.fullWidth : false} 
                margin={fieldProps.style.margin !== undefined ? fieldProps.style.margin : "none"}>
                <FormControlLabel label={fieldProps.field.label !== undefined ? fieldProps.field.label : ""}
                    control={
                        <Switch 
                            id={formFieldName}
                            name={formFieldName}
                            color="primary"
                            value={fieldProps.values[formFieldName] || false}
                            onChange={fieldProps.handleOnChange}
                            checked={fieldProps.values[formFieldName] || false}
                        />
                    }
                />
                {(fieldProps.errors[formFieldName] !== undefined)? <FormHelperText error>{fieldProps.errors[formFieldName]}</FormHelperText>  : ''}
            </FormControl>
        </>
    );
};

export default Checkbox;