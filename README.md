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
npm i -> cs440/
```
```
npm i -> cs440/backend 
```
```
npm i -> cs440/frontend
```

#### Start server, main directory.
```
npm start
```
