import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

const CheckboxGroup = fieldProps => {

    const fieldId = (fieldProps.field.fieldId !== undefined)? fieldProps.field.fieldId : '';
    const fieldType = (fieldProps.field.type !== undefined)? fieldProps.field.type : '';

    const formFieldName = fieldType + "_" + fieldId;

    const options = (fieldProps.field.options !== undefined)? fieldProps.field.options : {};

    return (
        <>
            <FormControl
                fullWidth={fieldProps.style.fullWidth !== undefined ? fieldProps.style.fullWidth : false} 
                margin={fieldProps.style.margin !== undefined ? fieldProps.style.margin : "none"}>
                <FormLabel component="legend">{fieldProps.field.label !== undefined ? fieldProps.field.label : ""}</FormLabel>
                {Object.keys(options).map( 
                        (option) =>  (
                            <FormControlLabel key={option} label={options[option]}
                                control={
                                    <Checkbox
                                        id={formFieldName + "_" + option}
                                        name={formFieldName}
                                        color="primary"
                                        value={option}
                                        onChange={fieldProps.handleOnChange}
                                        checked={fieldProps.values[formFieldName] !== undefined && fieldProps.values[formFieldName][option] === true ? true : false }
                                    />
                                }
                            />
                        )
                )}
                {(fieldProps.errors[formFieldName] !== undefined)? <FormHelperText error>{fieldProps.errors[formFieldName]}</FormHelperText>  : ''}
            </FormControl>
        </>
    );
};

export default CheckboxGroup;