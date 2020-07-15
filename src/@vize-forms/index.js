import React from 'react';

import FormHooks from './utils/form-hooks';
import validateForm from './utils/validate-form';
import JSONPretty from 'react-json-pretty';

import FormTitle from './fields/form-title';
import Fields from './fields/fields';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

//import { data } from './data/sample-vize-form';
import { data } from './data/sample-contactus-form';

const VIZEForm = props => {

    const formSubmitCallback = () => {
        //console.log(values);
        
        setDialogOpen(true);
    };

    const {
        values, 
        errors, 
        handleOnChange, 
        handleOnDateChange, 
        handleOnSubmit,
        handleReset } = FormHooks(formSubmitCallback, validateForm, data.fields);

    const [isDialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogClose = () => {
       window.location.reload(false);
    };

    return (
        <React.Fragment>
            <form 
                id={data.id !== undefined ? data.id : ''} 
                name={data.id !== undefined ? data.id : ''} 
                action={data.endPoint !== undefined ? data.endPoint : '#'}
                onSubmit={handleOnSubmit} onReset={event => handleReset(event)}>
                
                <FormTitle name={data.name} />

                {data.fields.map(
                    field => <Fields 
                                key={field.fieldId} 
                                value={{
                                    field: field, 
                                    handleOnChange: handleOnChange, 
                                    handleOnDateChange: handleOnDateChange, 
                                    values: values, 
                                    errors: errors
                                }} 
                            />
                )}
                
                <FormControl margin="normal">
                    <Button type="submit" variant="contained" color="primary">
                    {data.submitButtonText !== undefined? data.submitButtonText : "Submit"}
                    </Button>
                </FormControl>

                { (data.showResetButton !== undefined && data.showResetButton === true) ?
                    <FormControl margin="normal" style={{marginLeft: '10px'}}>
                        <Button type="reset" variant="contained" color="default">
                        {data.resetButtonText !== undefined? data.resetButtonText : "Reset"}
                        </Button>
                    </FormControl>
                : ''}

            </form>

            <Dialog
                open={isDialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Thank you for submitting your information"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Thank you for submitting your information.<br />
                    Your response has been recorded.<br />
                    <br />
                    <JSONPretty data={values} />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button type="button" onClick={handleDialogClose} color="primary">
                    Okay
                </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment> 
    );
};

export default VIZEForm;