const Datastore = require('react-native-storage-mongo-db');

const db = new Datastore({filename: 'asyncStorageKey', autoload: true});
db.loadDatabase(err => {
  console.log(err);
});

module.exports = db;
