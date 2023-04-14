const mysql = require("mysql");
const config = {
    host:"localhost",
    user:"root",
    password:"123456",
    database:"web",
    port:330
};
const conn = mysql.createConnection(config);
conn.connect();
function query(sql){
    return new Promise(function(resolve, reject){
        conn.query(sql, function(er, rows, fields){
            if(err) return reject(err);
            resolve(rows);
        });
    });
}
module.exports={
    query,
}