# THIS PROGRAM IS DESIGNED TO FUNCTION IN A LINUX ENVIRONMENT
## Begin by cloning the respository to your local machine.
### Ensure all of the required downloads below are on your machine. 
#### Install Node.js  version 8.15.0 or greater
#### Install MongoDB
#### Install ReactJS version 16.8.3 or grater


#### Start MongoDB
```
sudo service mongodb start
```
#### Import Master CSV to Mongo.
```
mongoimport -d test -c crimes --type csv --file master.csv --headerline
```
#### Install node_modules these are the dependencies and the program will not work without them.
```
npm i -> cs440/
```
```
npm i -> cs440/backend 
```
```
npm i -> cs440/frontend
```

#### Start server, this must be done from the route directory i.e. cs440/
```
npm start
```
