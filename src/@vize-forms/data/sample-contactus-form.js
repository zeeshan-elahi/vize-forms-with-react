export const data = {
    id: "0000-0000-0000-00001",
    name: "Contact Us",
    description: "This is just a demonstration of VIZE Form module using static JSON data",
    endPoint: "http://www.example.com/form-post",
    submitButtonText: "Send",
    showResetButton: true,
    resetButtonText: "Reset",
    fields: [
        {
            fieldId: 1,
            label: "Your Name *",
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
            fieldId: 2,
            label: "Your Email *",
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
            fieldId: 10,
            label: "Website",
            type: "textInput",
            validation: {
                rules: {
                    url: true
                },
                messages: {
                    url: "URL is not valid."
                }
            }
        },
        {
            fieldId: 4,
            label: "Subject",
            type: "textInput",
            validation: {
                rules: {
                    maxLength: 100
                },
                messages: {
                    maxLength: "The length of must be '100' characters or fewer."
                }
            }
        },
        {
            fieldId: 5,
            label: "Message *",
            type: "textarea",
            validation: {
                rules: {
                    required: true,
                    maxLength: 800
                },
                messages: {
                    required: "Message is required.",
                    maxLength: "The length of 'Message' must be '800' characters or fewer."
                }
            }
        }
    ]
};