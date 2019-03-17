const express = require('express');
const cors = require('cors');

const MakeUsers = require('./MakeUsers');

const app = express();

app.use(cors());

MakeUsers(app);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
