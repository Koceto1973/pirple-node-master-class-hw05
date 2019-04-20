// API Tests with Mongo DB via native driver ( mongo-native ) as a storage

// Dependencies
var assert = require('assert');

var testers = require('./testers');

// Holder for Tests
var api = {};

api['ping'] = testers.ping;

api['notFound'] = testers.notFound;

// users CRUD
// user post, token post, user get, user put, user delete, token delete
api['MySQLxdevapi: users testing'] = testers.usersCRUD;

// tokens CRUD
// user post, token post, token get, token put, user delete, token delete
api['MySQLxdevapi: tokens testing'] = testers.tokensCRUD;

// orders CRUD, menu get, order payment
// user post, token post, menu get, order post, order get, order put, order payment, order delete, user delete, token delete
api['MySQLxdevapi: orders testing'] = testers.ordersCRUD;

// Export the tests to the runner
module.exports = api;
