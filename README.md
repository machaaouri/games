<img src="https://user-images.githubusercontent.com/24994800/66278608-0015ef80-e8ab-11e9-8f7c-bf4b9af5c14e.PNG" width="23%"></img> <img src="https://user-images.githubusercontent.com/24994800/66278610-03a97680-e8ab-11e9-9a19-b09068926425.PNG" width="23%"></img> <img src="https://user-images.githubusercontent.com/24994800/66278611-05733a00-e8ab-11e9-99b9-f77155950ba3.PNG" width="23%"></img> 
# games
TypeScript  Node  Nest  Docker mongodb

# Serving games using node, Nest.js, React (hooks) and MongoDB, all dployed in docker

## Getting Started
This app is divided into two separate sections.the Backend ( Built with Nest.js) and the frontend
( Built with React ).

### Clone the repository

```bash
https://github.com/machaaouri/games.git
```
## Browse to games directory (From docker terminal) and run
```bash
docker-compose up
```

## Backend api
```bash
http://192.168.99.100:3000/

Get all games:
GET http://192.168.99.100:3000/games
Get game by id:
GET http://192.168.99.100:3000/games/:id
Add a new game
POST http://192.168.99.100:3000/games
Updat a game
PUT http://192.168.99.100:3000/games/:id
Delete a game
DELETE http://192.168.99.100:3000/games/:id

Get publisher by game id
GET http://192.168.99.100:3000/games/:id/publisher

Trigger process (remove the games having a release date older than 18
months and apply a discount of 20% to all games having a release date between 12 and 18 months)
GET http://192.168.99.100:3000/process
```

## UI
```bash
http://192.168.99.100:8080/
```
