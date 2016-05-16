# OpenVPN_Data_Transfer
This is a node data transfer app for CMPE_284 OpenVPN project

##Prerequisites:
Nodejs installed and running on host machine

## Steps to set up Server App:
Go To ServerApp Root Direcrory and perform following commands:
```bash
$ npm install
```

## Steps to run server forever:
```bash
$ [sudo] npm install forever -g
```
Go to ServerApp directory and run:
```bash
$ forever start server.js
```
This will start the server app forever on server instance.

To stop the app:
```bash
$ forever stopall
```

[For more information visit forever](https://www.npmjs.com/package/forever)

## Steps to set up Client App:
Go To ClientApp  Direcrory and perform following commands:
```bash
$ npm install
$ npm start
```
Client application will be up and running on localhost:8000.
You need to change the server IP/DNS name in ClientApp/sever.js

