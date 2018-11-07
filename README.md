# AngularForms 

[![Build Status](https://travis-ci.org/Floresj4/angular-forms.svg?branch=master)](https://travis-ci.org/Floresj4/angular-forms)

[floresj4.github.io/angular-forms/](https://floresj4.github.io/angular-forms/)

A simulated web application authentication form.  This form sends no out-going requests, but is instead intended to exercise web forms with the Angular5+ framework.  Template driven and Reactive forms used to create a mock account.  The initial sign up button begins the account creation process - an autofill button is provided to quick populate all fields.

## Containerized with Docker

This application has been containerize with Docker.  A Dockerfile is included with the project space to build a Centos linux distribution which can host the compiled angular-forms project.

### Building the production ng distribution

```
ng build --aot --prod --base-href=/angular-forms/
```

Builds the project with the production flag (although no production specific configurations), ahead-of-time compilation, and the base-href configured as /angular-forms/.  The base-href is configured as /angular-forms/ to support github pages hosting - [this repository is hosted here](https://floresj4.github.io/angular-forms/).

