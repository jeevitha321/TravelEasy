# TravelEasy

TravelEasy is a web application that helps users manage their travel itineraries. This project includes both a frontend built with React and a backend built with Spring Boot.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker desktop](https://www.docker.com/products/docker-desktop/)

## Getting Started

### Building the Docker Images

To build the Docker images for the frontend and backend services, run the following command:

```sh
docker-compose build
```


To start the application with the logs using Docker Compose, run the following command:
```
docker-compose up -d && docker-compose logs -f
```

Frontend: The frontend service will be accessible at http://localhost:3000.
Backend: The backend service will be accessible at http://localhost:8080.
