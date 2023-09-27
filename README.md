# Ip Addresses
## Running the project
You can run the project either locally or in a Docker container.
### Local run
To run the project locally:
1. Set up a PostgreSQL database using Docker:
`docker run --name postgres-ips-local -e POSTGRES_PASSWORD="password" -p 5000:5432 -d postgres`
2. Install the required dependencies:
`npm install`
3. Start the project:
`npm start`

The project is now running at `localhost:3000`.

You can excute the tests by running `npm test`.
### Run as Docker container
To run the project in Docker simply execute: `docker-compose up`.
The project is now running at `localhost:3000`.

## API Endpoints

The following endpoints are available:

- **Lookup IP Address Information:**\
  `GET /ip/{ipAddress}`\
  Retrieves information for a specific IP address via the [ipwhois.io](https://ipwhois.io/) API and stores it in the database. Cached results are returned if available.

- **Remove Cached Result by IP:**\
  `DELETE /ip/{ipAddress}`\
  Removes cached information for a specific IP address from the database.

## Automatic Cache Cleanup

The project includes an automatic cache cleanup process that runs every 20 seconds to delete cached IP address information older than 60 seconds. This ensures that the cache remains up-to-date.

## Remarks
The project was created in a short time so there are areas that can be improved.
Some examples for those future enhancements are:
- Introducing better error handling
- Adding more tests to improve the test coverage of the project
- Extracting constants
- etc.
