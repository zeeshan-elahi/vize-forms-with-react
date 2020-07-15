import React from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';

const DOBInput = fieldProps => {

    const fieldId = (fieldProps.field.fieldId !== undefined)? fieldProps.field.fieldId : '';
    const fieldType = (fieldProps.field.type !== undefined)? fieldProps.field.type : '';

    const formFieldName = fieldType + "_" + fieldId;

    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {

        setSelectedDate(date);

        fieldProps.handleOnDateChange(formFieldName, moment(date).format(fieldProps.field.format));
    };
    
    return (
        <>
            <FormControl
                fullWidth={fieldProps.style.fullWidth !== undefined ? fieldProps.style.fullWidth : false} 
                margin={fieldProps.style.margin !== undefined ? fieldProps.style.margin : "none"}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        id={formFieldName}
                        name={formFieldName}
                        label={fieldProps.field.label !== undefined ? fieldProps.field.label : ""}
                        inputVariant={fieldProps.style.variant !== undefined ? fieldProps.style.variant : "standard"}
                        variant="inline"
                        format={fieldProps.field.format}
                        value={fieldProps.values[formFieldName] !== undefined && fieldProps.values[formFieldName] !== '' ? selectedDate : null}
                        inputValue={fieldProps.values[formFieldName] || ''}
                        onChange={(date, value) => handleDateChange(date, value)}   
                        error={fieldProps.errors[formFieldName] !== undefined ? true : false}
                        helperText={fieldProps.errors[formFieldName] !== undefined ? fieldProps.errors[formFieldName] : ''}
                        autoOk={true}
                        disableFuture={true}
                        openTo="year"
                        disableToolbar
                    />
                </MuiPickersUtilsProvider>
            </FormControl>
        </>
    );
};

export default DOBInput;