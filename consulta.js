const findDocuments = function (db, callback){
    const collection = db.collection('contatos');
    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Foram encontrados os seguintes docs:");
        console.log(docs)
        callback(docs);
    });
};
const MongoClients = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb+srv://dswa5:dswa5@cluster0.7cebs.mongodb.net/ifsp?retryWrites=true&w=majority";
const dbName = 'ifsp';
MongoClients.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    assert.equal(null, err);
    console.log("Aluno: Jonathan Dias dos Santos");
    console.log("Servidor Conectado!");

    const db = client.db(dbName);

    findDocuments(db, function(){
        client.close();
    });

});