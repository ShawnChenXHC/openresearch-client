const express = require('express');
const cors = require('cors');

const MakeUsers = require('./MakeUsers');
const MakeProjects = require('./MakeProjects');

const app = express();

app.use(cors());

MakeUsers(app);

MakeProjects(app);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
