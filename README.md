# Example Web Application

Fully containerized web application with Docker and Laravel.

## Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Composer](https://getcomposer.org/download/)
- [NPM](https://nodejs.org/en/)

## Development Environment Setup

### Clone Repository
$ `cd <projects-parent-directory>`
$ `git clone https://github.com/Clay3D/example-app.git`

### Create Environment file
$ `cp .env.example .env`

### Install Composer Dependencies
$ `composer install`

### Set Application Key
$ `php artisan key:generate`

### Bring Up Environment
$ `./vendor/bin/sail up`

### Set Directory Permissions
$ `chmod -R 777 storage bootstrap/cache`

### Clear Application Cache
$ `php artisan optimize:clear`

### Run Migrations
$ `php artisan migrate`

### Run Seeds
$ `php artisan db:seed`

### Install NPM Dependencies
$ `npm install`

### Compile NPM Project
$ `npm run dev`

### Watch For Frontend Changes
$ `npm run watch`

### Take Down Environment
$ `./vendor/bin/sail down`

### Useful Information

#### Host Database Volume // TODO: Need to update these for project
To ensure that data persists even while the environment is down, we create a volume on the host machine at
`/var/lib/mysql`. The application's database runs on port 3307 inside of the container and maps to port 3306 on the
host machine. The database will not be accessible while the environment is down (obviously), but the data persists thanks
to our volume. Note: You probably want to exec into the database container (`docker exec -it chart7-db bash`) and
create a MySQL user instead of using `root`. Be sure to update the `.env` file with this new user.

### How It Works
A personal access token is assigned to a user at login.
This personal access token is used as a bearer token to authorize
requests to the API. In addition to personal access tokens, we are using
Laravel's built-in cookie based session authentication services.
This provides the benefits of CSRF protection, session authentication, as well
as protects against leakage of the authentication credentials via XSS.

Note: The application will only attempt to authenticate using cookies when the incoming request originates from our own SPA frontend.

Client-side and server-side (API) routes are restricted to roles/permissions
and data sent in requests is validated. The entry point to the application is `/`
and is set in `routes/web.php`. To define a new client-side route, you will need
to add the route to our client-side router located in `resources/js/router/Router.tsx`.
To define a new api route, you will need to add the route to our server-side API router
located in `routes/api.php`.

Details will be added as needed. Happy programming!

### Code Style
Code style configuration file for PhpStorm is available for import: etc/build/CodeStyle.xml
[Copying code style settings](https://www.jetbrains.com/help/phpstorm/copying-code-style-settings.html)
