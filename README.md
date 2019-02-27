#### Start MongoDB
```
sudo service mongodb start
```
#### Import Master CSV to Mongo.
```
mongoimport -d test -c crimes --type csv --file master.csv --headerline
```
#### Install node_modules
```
npm i 
```
#### Start Nodejs server, must be in backend directory.
```
node Server.js
```
