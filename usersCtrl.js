var userData = require('./userData');


module.exports = {
    getUsers: function (req, res) {
        if (req.query.favorites) {
            var favorite = userData.filter(item => item.favorites.includes(req.query.favorites));
            res.status(200).json(favorite);
        } else if (req.query.email) {
            var userEmail = userData.filter(item => item.email === req.query.email);
            res.status(200).json(userEmail);
        } else if (req.query.last_name) {
            var userLastName = userData.filter(item => item.last_name === req.query.last_name);
            res.status(200).json(userLastName);
        } else if (req.query.age) {
            var userAge = userData.filter(item => item.age < parseInt(req.query.age));
            res.status(200).json(userAge);
        } else {
            res.status(200).json(userData);
        }
    },
    
    getID: function (req, res) {
        var filteredID = userData.map(item => {
            if (item.id === req.params.id) {
                res.status(200).json(filteredID);
            } else {
                res.status(404).json(null);
            }
        })
    },

    getAdmins: function (req, res) {
        var userAdmins = userData.filter(item => item.type === 'admin');
        res.status(200).json(userAdmins);
    },

    getNonAdmins: function (req, res) {
        var notAdmins = userData.filter(item => item.type !== 'admin');
        res.status(200).json(notAdmins);
    },

    getType: function (req, res) {
        var filteredType = userData.filter(item => item.type === req.params.type)
        res.status(200).json(filteredType);
    },

    updateUser: function (req, res) {
        var updated = userData.find((e) => e.id == req.params.id);
        Object.assign(updated, req.body);
        res.status(200).json(userData);
    },

    postUser: function (req, res) {
        var newUser = req.body;
        newUser.id++
        userData.push(newUser)
        res.status(200).json(userData);
    },

    deleteUser: function (req, res) {
        data = userData.filter(item => item.id === req.params.id);
        res.status(200).json(data)
    }

}