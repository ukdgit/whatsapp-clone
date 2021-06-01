# whatsapp-clone
A MERN stack-based whatsapp clone that allows you to send messages in real time. 
It communicates to an API implemented in Node.js that saves the changes to a database. The Node.js script also receives these changes using change streams, parsing them and publishing them to a Pusher channel so the React application can consume them.

Prerequisites
 -  MongoDB (version 3.6 or superior)
 -  Node.js (6 or superior)

Built With
 - MongoDB: NoSQL database
 -  Node.js: A JavaScript runtime
 -  React: A JavaScript library for building webapps
 -  Pusher: APIs to enable devs building realtime features
 
 Getting Started
 -  Clone this repository.
 -  Create a Pusher app.
 -  Enter your Pusher app information in server/server.js and in client/src/App.js.
 -  In a separate terminal window, run mongo, the MongoDB client.
 -  In a separate terminal window, cd into the server directory and execute npm install to download the dependencies and then, npm start to start the server.
 -  In a separate terminal window, cd into the client directory and execute npm install to download the dependencies and then, npm start to start the app.
 -  A browser window will open, you can open another one to see how the task are replicated in realtime.
