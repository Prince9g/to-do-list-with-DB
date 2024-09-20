const express = require('express');
const server = express();
const Create = require('./controller/createTask');
const cors = require('cors');
server.use(cors());
server.use(express.static('public'));
server.use(express.json());

// Route to serve index.html
server.get('/api', Create.getAllTasks);

server.post('/', Create.addTask);

server.delete('/', Create.deleteTask);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});