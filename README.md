# Pizzaaaa App

A online food ordering website build with React and PHP laravel


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/)
* [php](http://php.net/)
* [composer](https://getcomposer.org/)

### Installing

#### Front-end part

Rename `example.env` to `.env` 

Install the required packages and run the local server

```sh
npm install
npm start
```

#### Back-end part

Install laravel framework

```sh
composer global require "laravel/installer"
```

Naviage to `/api` folder

Create a database then rename `.env.example` to `.env` add database variables

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

Install the required packages and run the local server

```sh
composer install
```

Generate database tables and relations

```sh
php artisan migrate
```

Run the localhost

```sh
php artisan serve
```

### And coding style tests

Front-end part is following Airbnb styles guide

## Create production builds

### Front-end part

```sh
yarn build
```

### Back-end part

Repeat back-end part installion steps on the server

## Built With

* [create-react-app](https://github.com/facebook/create-react-app)

