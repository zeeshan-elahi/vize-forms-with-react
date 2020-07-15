
const getAge = (dob) => {

  let today = new Date();
  let dobDateObj = new Date(dob);
  let age = today.getFullYear() - dobDateObj.getFullYear();
  let m = today.getMonth() - dobDateObj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dobDateObj.getDate())) 
  {
      age--;
  }

  return age;
};

const validateForm = (values, fields) => {
    let errors = {};

    // Loop through fields to get validation rules and messages for fields to validate
    Object.keys(fields).forEach( (key) => {
      
      const field = fields[key];

      if (field.validation !== undefined) {

        const formFieldName = field.type + "_" + field.fieldId;

        let invalidRule = "";

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

        const emailRegex = /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        const numberRegex = /[0-9]/;

        Object.keys(field.validation.rules).forEach( (rule) => {
          
          switch (rule) {

            case "required":

              invalidRule = (values[formFieldName] === undefined || values[formFieldName].toString().length === 0)? rule : "";

              if (field.type === "checkbox") {
                invalidRule = (values[formFieldName] === undefined || values[formFieldName] === false)? rule : "";
              } else if (field.type === "checkboxGroup") {

                let isAnyChecked = false;

                if (values[formFieldName] !== undefined) {
                  isAnyChecked = Object.keys(values[formFieldName]).some( checkbox => (values[formFieldName][checkbox] === true) );
                }
                
                invalidRule = (!isAnyChecked)? rule : "";
              }
              break;
            
            case "maxLength":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName].toString().length > parseInt(field.validation.rules[rule]))? rule : "";
              break;

            case "minAge":
              invalidRule = (values[formFieldName] === undefined || getAge(values[formFieldName]) < parseInt(field.validation.rules[rule]))? rule : "";
              break;

            case "email":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && emailRegex.test(values[formFieldName]) === false)? rule : "";
              break;

            case "strongPassword":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && passwordRegex.test(values[formFieldName]) === false)? rule : "";
              break;

            case "url":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && urlRegex.test(values[formFieldName]) === false)? rule : "";
              break;

            case "phone":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && phoneRegex.test(values[formFieldName]) === false)? rule : "";
              break;

            case "number":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && numberRegex.test(values[formFieldName]) === false)? rule : "";
              break;

            case "min":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && parseInt(values[formFieldName]) < parseInt(field.validation.rules[rule]))? rule : "";
              break;

            case "max":
              invalidRule = (values[formFieldName] !== undefined && values[formFieldName] !== "" && parseInt(values[formFieldName]) > parseInt(field.validation.rules[rule]))? rule : "";
              break;

            default:
              console.log("Given validation rule [" + rule + "] has not been implemented. ");
              break;  
          }

          if (invalidRule.length > 0 && (errors[formFieldName] === undefined || errors[formFieldName].length === 0)) {
            errors[formFieldName] = field.validation.messages[rule];
          }

        });

      }

    });

    return errors;
};

export default validateForm;