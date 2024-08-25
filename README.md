# Real-Time Data Visualization Web Application

This project is a real-time data visualization dashboard built with React and AWS Amplify, designed to monitor and display temperature, humidity, and air pressure data from multiple IoT sensors. The web application retrieves data from an AWS DynamoDB database and presents it in an interactive and user-friendly interface, allowing users to filter and analyze sensor data across different locations. This project demonstrates the integration of front-end development with cloud services for live data monitoring.

# Getting Started
This project was bootstrapped with Create React App.

# Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v12 or higher)
npm (v6 or higher)
AWS CLI (configured with your credentials)
AWS Amplify CLI

# Installation
1.Clone the repository
2.Install dependencies
3.Configure AWS Amplify

Follow the prompts to set up your Amplify environment. 
Ensure that all environment variables such as REACT_APP_AWS_REGION, REACT_APP_AWS_ACCESS_KEY_ID, and REACT_APP_AWS_SECRET_ACCESS_KEY are properly configured in the Amplify environment.

# Available Scripts
In the project directory, you can run:

## npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

## npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified, and the filenames include hashes.
Your app is ready to be deployed!

## npm run eject
Note: This is a one-way operation. Once you eject, you can't go back!
Ejecting allows you to have full control over the build configuration.

# AWS Amplify Deployment
To deploy the application using AWS Amplify, follow these steps:

### Deploy your application:
amplify publish

This command will build and deploy your application to the Amplify Console.

### Setting Environment Variables:

Make sure to set the following environment variables in the Amplify Console to ensure your application can connect to AWS services:

REACT_APP_AWS_REGION
REACT_APP_AWS_ACCESS_KEY_ID
REACT_APP_AWS_SECRET_ACCESS_KEY

### Monitor and Update:

Amplify will automatically handle updates every time you push changes to your connected Git repository.
