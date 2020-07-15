# VIZE Forms

VIZE Forms is a multipurpose React component that generate dynamic forms using Material-UI components for React.

This repository is a demonstration or a small part of actual VIZE Forms module that I recently implemented for one of my clients. Full project details are available [here](https://www.zeeshanelahi.com/2020/07/vize-forms-a-react-component-with-spring-boot-apis-manager/) on my [website](https://www.zeeshanelahi.com/).

Here is how you can run and revie this application.

## Sample Forms

Twp sample .json files are available in [./src/@vize-forms/data](https://github.com/zeeshan-elahi/vize-forms-with-react/blob/master/src/@vize-forms/data) directory.

1. [sample-contactus-form.js](https://github.com/zeeshan-elahi/vize-forms-with-react/blob/master/src/@vize-forms/data/sample-contactus-form.js) is a simple form for showing a contact us form in your application.
2. [sample-vize-form.js](https://github.com/zeeshan-elahi/vize-forms-with-react/blob/master/src/@vize-forms/data/sample-vize-form.js) is to demonstrate all available form fields, configurations, options/items, validation rules and messages.

## How to use

Just copy or fork '@vize-forms' component directory available in './src/' to your project or application directory wherever your like.

Import 'VIZEForms' component to your application, page or component.

And `<VIZEForms />` to use it in your code.

I have removed code related to passing of props, asyncronous load of form structure/configuration JSON and submission of form from this.

Please customize and extend as per your needs.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.