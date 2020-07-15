export const data = {
    id: "0000-0000-0000-00001",
    name: "Sample VIZE Form",
    description: "This is just a demonstration of VIZE Form module using static JSON data",
    endPoint: "http://www.example.com/form-post",
    submitButtonText: "Submit & Continue",
    showResetButton: true,
    resetButtonText: "Reset",
    fields: [
        {
            fieldId: 1,
            label: "Email",
            type: "textInput",
            validation: {
                rules: {
                    required: true,
                    email: true
                },
                messages: {
                    required: "Email is required.",
                    email: "Enter valid email. e.g. email@example.com"
                }
            }
        },
        {
            fieldId: 2,
            label: "Password",
            type: "textInput",
            isPassword: true,
            validation: {
                rules: {
                    required: true,
                    strongPassword: true
                },
                messages: {
                    required: "Password is required.",
                    strongPassword: "Password must be eight {8} characters long and contain at least 1 UPPERCASE letter, 1 lowercase letter, 1 number and 1 special character."
                }
            }
        },
        {
            fieldId: 3,
            label: "Name",
            type: "textInput",
            validation: {
                rules: {
                    required: true,
                    maxLength: 50
                },
                messages: {
                    required: "Name is required.",
                    maxLength: "The length of 'Name' must be '50' characters or fewer."
                }
            }
        },
        {
            fieldId: 4,
            label: "Bio",
            type: "textarea",
            validation: {
                rules: {
                    required: true,
                    maxLength: 800
                },
                messages: {
                    required: "Bio is required.",
                    maxLength: "The length of 'Bio' must be '800' characters or fewer."
                }
            }
        },
        {
            fieldId: 5,
            label: "Date of Birth",
            type: "dob",
            format: 'MM/DD/YYYY',
            validation: {
                rules: {
                    required: true,
                    minAge: 16
                },
                messages: {
                    required: "Date of Birth is required.",
                    minAge: "You must be 16 years old."
                }
            }
        },
        {
            fieldId: 6,
            label: "Gender",
            type: "radioGroup",
            options: {
                0: "Male",
                1: "Female",
                2: "Other"
            },
            validation: {
                rules: {
                    required: true
                },
                messages: {
                    required: "Gender is required."
                }
            }
        },
        {
            fieldId: 7,
            label: "Country or Region",
            type: "select",
            options: {
                0: "United States",
                1: "Pakistan",
                2: "Rest of the world"
            },
            validation: {
                rules: {
                    required: true
                },
                messages: {
                    required: "Country is required."
                }
            }
        },
        {
            fieldId: 8,
            label: "Phone",
            type: "textInput",
            validation: {
                rules: {
                    required: true,
                    phone: true
                },
                messages: {
                    required: "Phone is required.",
                    phone: "Enter valid phone. e.g. xxx-xxx-xxxx"
                }
            }
        },
        {
            fieldId: 9,
            label: "Ethnicity",
            type: "checkboxGroup",
            options: {
                0: "American",
                1: "Asian",
                2: "Black or African",
                3: "Hispanic or Latino",
                4: "Native Hawaiian",
                5: "White",
                6: "Other"
            },
            validation: {
                rules: {
                    required: true
                },
                messages: {
                    required: "Ethnicity is required."
                }
            }
        },
        {
            fieldId: 10,
            label: "Website",
            type: "textInput",
            validation: {
                rules: {
                    required: true,
                    url: true
                },
                messages: {
                    required: "Website is required.",
                    url: "URL is not valid."
                }
            }
        },
        {
            fieldId: 11,
            label: "Number",
            type: "textInput",
            validation: {
                rules: {
                    required: true,
                    number: true,
                    min: 10,
                    max: 99
                },
                messages: {
                    required: "Number is required.",
                    number: "This is not a number",
                    min: "Number must be greater than 9",
                    max: "Number must be less than 100",
                }
            }
        },
        {
            fieldId: 12,
            label: "Date",
            type: "dateInput",
            format: 'MM/DD/YYYY',
            validation: {
                rules: {
                    required: true
                },
                messages: {
                    required: "Date is required."
                }
            }
        },
        {
            fieldId: 13,
            label: "Please confirm if we can save your data for reference in future.",
            type: "checkbox",
            value: "yes",
            validation: {
                rules: {
                    required: true
                },
                messages: {
                    required: "Confirm to continue."
                }
            }
        }
    ]
};