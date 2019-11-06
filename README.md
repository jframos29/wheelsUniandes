# wheelsUniandes
Let's make Wheels Uniandes great again!

[Website link](http://wheelsuniandes.herokuapp.com/)

This is a website for letting uniandes carpooling be more comfortable!

## Running

### Server

```
yarn install
yarn start
```


### Client
```
cd front
yarn install
yarn start
```

Then the server will be running in http://localhost:3001 and the client in http://localhost:3000. 

### Mongo

*You will need to have Mongo running with replicaset enabled* 

```
mongod --replSet rs

mongo
rs.initiate()
```
