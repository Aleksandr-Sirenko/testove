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

1. Clone the project repository to your local machine using the following command:
	
		git clone https://github.com/Aleksandr-Sirenko/testove.git

1. Navigate to the project directory:

		cd testove

1. Install the PHP dependencies using the following command:

		composer install

1. Install the NPM dependencies using the following command:

		npm install

1. Copy the .env.example file to .env:

		cp .env.example .env

1. Generate a new application key using the following command:

		php artisan key:generate

1. Configure your environment in the .env file. Set the database name, username, and password, as well as the Google Client ID and Google Client Secret

		DB_DATABASE=your_database_name

		DB_USERNAME=your_database_username

		DB_PASSWORD=your_database_password

		GOOGLE_CLIENT_ID=your_google_client_id

		GOOGLE_CLIENT_SECRET=your_google_client_secret

1. Create a new database for your project.

1. Run the database migrations using the following command:

		php artisan migrate

1. Build the frontend assets using the following command:

		npm run build

1. Start the Laravel development server using the following command:

		php artisan serve
	
1. Open your web browser and enter the following URL:

		http://localhost:8000

You should see the home page of the project.
