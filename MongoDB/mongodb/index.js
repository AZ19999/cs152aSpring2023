const mongoClient = require("mongodb").mongoClient;
const dbName = "recipe_db";
const dbURL = "mongodb://localhost:27017"//get connection string from atlas

mongoClient.connect(dbURL, (error, client) => {
    if(error) throw error;
    let db = client.db(dbName);
    db.collection("contacts").find().toArray((er, data) => {
        if(error ) throw error;
        console.log("test");
        
    });
});