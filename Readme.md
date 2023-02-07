# Real-time Delivery Service Using MongoDB Change Streams
The project demonstrates the use of MongoDB Change Streams in a real-time location tracking application. The application is a local package delivery service similar to Uber.

## Project Description
The Real-time Delivery Service application allows customers to track their package deliveries in real-time. The application utilizes MongoDB Change Streams to listen for document updates like location and shipment status and uses Socket.io to broadcast them to the connected clients.

## How to Run the Application
- Clone the repository to your local machine.
- Create a .env file in the root of the project.
- Add the MONGODB_CONNECTION_STRING
- You can easily generate the connection from MongoDB Atlas UI (incase of local instance check this [link](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/))
- Run `npm install` in the root folder to install the required dependencies for the server.
- Run `npm run dev` in the root folder to start the server.
- Open a new terminal and navigate to the `/frontend` folder.
- Run `npm install` to install the required dependencies for the frontend.
- Run `npm run dev` to start the React application.
- The server will be running on http://localhost:5050 and the frontend will be running on http://localhost:5173/

## How to Test the Application
- Make sure you have the application running on your local machine as described in the "How to Run the Application" section above.
- For testing purposes, a user and a driver account have been seeded in the database.
- Open the frontend of the application in one browser window and choose to login as a user.
- In another separate browser window, open the frontend and choose to login as a driver.
- In the user window, create a new shipment and choose the pickup and delivery locations.
- The driver should receive a notification of the new shipment and be able to accept it.
- You can then track the shipment in real-time using the location updates provided by MongoDB Change Streams and broadcasted via Socket.io.