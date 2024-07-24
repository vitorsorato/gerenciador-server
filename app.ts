const express = require('express');
const http = require('http');
const cors = require('cors');
const port = process.env.PORT || 4000; 
const projectRoutes = require('./src/routes/projectRoutes');
const activityRoutes = require('./src/routes/activityRoutes');

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));

app.use(express.json());
app.use('/projects', projectRoutes);
app.use('/activities', activityRoutes);

server.listen(port, function(){
  console.log(`Listening to port ${port}`);
});
