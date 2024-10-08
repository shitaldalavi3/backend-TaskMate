# Project Structure : backend-TaskMate

## Create A backend-TaskMate Repo

### Following are the folders in our repo

- controllers
- db
- routes
- schemas

### Following are the files in our repo

- .env
- .gitignore
- package-lock-json
- package.json
- README.md
- server.js

### Very Important step :

- Don't forget to put `.env` file and node_modules in `.gitignore` file.

- Create a git Repo and follow the steps of Github.

### Commands to install all dependencies which we required for backend project

- step 1 : install `npm init -y ` it will create package.json file
- step 2 : install other depenencies which is required for backend development \
  `npm install express cors mongoose dotenv cloudinary multer multer-storage-cloudinary`
- step 3 : install dev depenencies
  `npm i nodemon colors -D`
  Lists the external packages (dependencies) required for your project to run.
  Let’s break down the dependencies:
  - "cloudinary": "^1.41.3":
    Used for working with Cloudinary, a cloud-based image and video management service.
  - "cors": "^2.8.5":
    Enables Cross-Origin Resource Sharing (CORS) for handling requests from different origins.
  - "dotenv": "^16.4.5":
    Loads environment variables from a .env file into your application.
  - "express": "^4.19.2":
    The core framework for building your API.
  - "mongoose": "^8.6.1":
    An ODM (Object Data Modeling) library for MongoDB, allowing you to define schemas and interact with the database.
  - "multer": "^1.4.5-lts.1":
    Middleware for handling file uploads (used for images, etc.).
  - "multer-storage-cloudinary": "^4.0.0":
    Integrates Multer with Cloudinary for storing uploaded files.
  - "nodemon": "^3.1.4":
    Automatically restarts your server during development when files change.
  - "devDependencies":
    Lists development-specific dependencies (not needed in production).
  - "colors": "^1.4.0":
    Adds color to console logs during development (helpful for debugging).

### Create a MongoDB Database Connection

- Mongodb Link https://www.mongodb.com/atlas

### First craete important files

- create `.env ` file
- create `.gitignore ` file
- create `server.js` File
- create `dbinit.js ` file inside `db` folder

### Create a Schemas for

Create schemas reequired for TASKMATE services. \
Inside Schemas Folder

- Customer.js
- Professional.js
- Service.js
- ServiceCategory.js
- Booking, BookingForOther.js
- Favourite.js
- Feedback.js
- FAQ.js
- Payment.js

created controllers and Routes for each schemas

- npm install iso-datestring-validator
- backend validates date in ISO 8601 UTC format , same format stored in MongoDB.
- this makes representaion of the date according to user's browser Locale and timezone easier

## ## Date Validation and Storage in ISO 8601 UTC Format

To implement date validation in ISO 8601 UTC format, follow these steps:

1. Install the required package:

2. Implement backend validation:

- The backend validates dates in ISO 8601 UTC format.
- The same format is stored in MongoDB.

3. Benefits:

- This approach makes representation of the date according to the user's browser locale and timezone easier.
- It ensures consistency across different parts of the application.

By using ISO 8601 UTC format, you maintain a standardized date-time representation in your database while allowing flexible display options on the client-side.

#

## Backend webservice render link

https://backend-taskmate.onrender.com

## Run Backend in Docker Container

### Docker Commands for Beginners

This README provides an overview of essential Docker commands for beginners working with the backend-taskmate project.

### Building the Docker Image

To create a Docker image for the backend-taskmate project, use the following command:

```
docker build -t backend-taskmate .
```

This command builds a Docker image using the Dockerfile in the current directory (.) and tags it with the name "backend-taskmate". \

### Listing Docker Images

To view all Docker images on your system, including the newly created backend-taskmate image, use:

```
docker images
```

This command displays a list of all Docker images, showing details such as repository names, tags, image IDs, creation dates, and sizes.

### Running the Docker Container

To run the backend-taskmate container, use the following command:

```
docker run --env-file ./.env -p 8081:8081 backend-taskmate
```

This command:

- Runs the backend-taskmate container
- Loads environment variables from the .env file in the current directory
- Maps port 8081 on the host to port 8081 in the container

### Viewing Running Containers

To see all currently running Docker containers, use:

```
docker ps
```

This command lists all active containers, displaying information such as container IDs, image names, creation times, status, and port mappings.

### Stopping a Container

To stop a running container, use the docker stop command followed by the container ID:

```
docker stop 191a3b2d4d31
```

Replace 191a3b2d4d31 with the actual container ID of the backend-taskmate container you want to stop.

### Additional Tips

- Always ensure you're in the correct directory containing your Dockerfile and .env file when running these commands.
- The container ID (191a3b2d4d31 in the example) is unique to each container instance. Use docker ps to find the correct ID for your running container.
- If you need to make changes to your application, remember to rebuild the Docker image and run a new container with the updated image. \
  Happy Dockerizing!
