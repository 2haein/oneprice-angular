# AngularJS-Gulp Starter

## Introduction

This is a application skeleton for a typical AngularJS web app. In addition to the Angular code, it also contains unit tests and end-to-end (E2E) tests. Gulp is used as the build system that automates tasks such as code minification, copying JS files and static images etc.

For unit testing, Karma, Mocha, Chai and Sinon etc are used. For end-to-end (E2E) tests, Protractor, Mocha, Chai and Sinon etc are used.


Installtion
-----------

```sh
$ git clone git@github.com:labsterx/angularjs-gulp-starter.git
$ cd angularjs-gulp-starter
$ npm install
$ bower install
```

Run the web app
---------------

```sh
$ gulp serve
```

You can then access the web app at http://localhost:3000/.

By default, it will launch a brower sync server on the source file (in the ".tmp" diretory). To launch a server on the optimized application (in the "dist" directory), run the following command instead:

```sh
$ gulp serve:dist
```

Run unit tests
--------------

```sh
$ gulp test
```

Run E2E tests
--------------

```sh
$ gulp test-e2e
```

Deployment
--------------

```sh
$ gulp build
```

Deploy the contents in the "dist" directory to the production server.


