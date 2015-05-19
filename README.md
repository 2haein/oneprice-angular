# AngularJS-Gulp Starter
This is a starter project for AngularJS with Gulp.

## Introduction

This app uses Gulp as the build system that automates tasks such as code minification, copying JS files and static images etc.

This web app was developed using a test-driven development (TDD) approach. The repository includes both unit-tests and E2E tests. For unit testing, I used Karma, Mocha, Chai and Sinon etc. For end-to-end (E2E) tests, I used Protractor, Mocha, Chai and Sinon etc.


Installtion
-----------

```sh
$ git clone <repo URL>
$ cd [dir name]
$ npm install
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

Deploy the contents in the "dist" directory to the production server.


