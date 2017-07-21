const express = require('express');
const bodyParser = require('body-parser');
// const userData = require('./userData.json');

const usersCtrl = require('./usersCtrl');

var app = express();

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:id', usersCtrl.getID);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:type', usersCtrl.getType);

app.put('/api/users/:id', usersCtrl.updateUser);

app.post('/api/users', usersCtrl.postUser);

app.delete('/api/users/:id', usersCtrl.deleteUser);


app.listen(3000, () => {
    console.log('Listening on port 3000');
})