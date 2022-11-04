# AmpAng2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Alternately, update package.json and run npm start

## Angular specific
- installed @angular/cdk angular-bootstrap-md
- installed bootstrap jquery
- updated angular.json with styles, scripts
- listens on all NICs (for testing only)

## Amplify Specific
- Install @aws-amplify/cli
- Clone and change to this project directory
- Install Amplify and Amplify Angular modules
```
npm install --save aws-amplify @aws-amplify/ui-angular
```
- Initialize Amplify Project
```
amplify init
```
- Choose new environment when prompted
- Push project to Amplify console
```
amplify push
```
- Verify Amplify project status
```
amplify status
```
- Verify project locally
  - Update package.json to listen on all network interfaces
```
npm start
```
- Amplify app hosting
```
amplify add hosting
```
- Publish Amplify project
```
amplify publish
```
- Verify generated Angular Web URL on Amplify Console

