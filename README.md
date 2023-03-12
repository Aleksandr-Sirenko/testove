## System Requirements

Before starting the installation process, make sure that your system meets the following requirements:

- PHP >= 8.1 with the following extensions enabled:

	- Curl

	- Fileinfo

	- OpenSSL

	- PDO_MySQL

- Composer

- Node.js >= 18.x

- NPM

## Installation

Clone the project repository to your local machine using the following command:
	
	git clone https://github.com/Aleksandr-Sirenko/testove.git

Navigate to the project directory:

	cd testove

Install the PHP dependencies using the following command:

	composer install

Install the NPM dependencies using the following command:

	npm install

Copy the .env.example file to .env:

	cp .env.example .env

Generate a new application key using the following command:

	php artisan key:generate

Configure your environment in the .env file. Set the database name, username, and password, as well as the Google Client ID and Google Client Secret

	DB_DATABASE=your_database_name

	DB_USERNAME=your_database_username

	DB_PASSWORD=your_database_password

	GOOGLE_CLIENT_ID=your_google_client_id

	GOOGLE_CLIENT_SECRET=your_google_client_secret

Create a new database for your project.

Run the database migrations using the following command:

	php artisan migrate

Build the frontend assets using the following command:

	npm run build

Start the Laravel development server using the following command:

	php artisan serve
	
Open your web browser and enter the following URL:

	http://localhost:8000

You should see the home page of the project.