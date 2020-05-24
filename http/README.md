# Http

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Comparison Book
In book they are using bootstrap and bootstrap sass so you have to install that

npm install bootstrap/bootstrap sass --save 

for bootstrap you might get error of dependency jar like jquery so install that also

npm install jquery --save

In book they have use saperate Scss file but I have register file directly in angular.json
"styles": [
              "node_modules/bootstrap/scss/bootstrap.scss",
              "src/styles.css"
            ]
            
 if you want to use saperate scss fil then do following steps
 1. Creating Angular application with SCSS style files.
    
    ng new my-first-app --style=scss
 
 2. Converting existing Angular CSS project to SCSS style sheet.
 
     ng config schematics.@schematics/angular:component.styleext scss  
     
     or in angular.jason copy paste this code
     
     "schematics": {
      "@schematics/angular:component": {
      "styleext": "scss"
    }
}
 
 then install bootstrap.


 ## Generating Youtube API Key
 
 1. Go to console.cloud.google.com
 2. Right beside Google Cloud Platform name there is drop down select that and Create new Project.
 3. Click on the Library which is on right side pannel and select Youtube Data API V3 from left side pannel
 4. Select the enable button.
 5. Now you have to create credential by clicking button Create Credential
 6. Now you will get Interface which having some credential like:
      1. Which API are you using?
        select Youtube Data API V3
      2. Where will you be calling this API from?
        select Web Browser (JavaScript) 
      3. What data will you be accessing
        select public data
7.  API key will get generated copy that key and use it in your Code press done button 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
