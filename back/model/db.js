const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// MySQL connection 실행
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database. ");
})

//users 테이블 조회
connection.query('select * from users',function(error,results,fields){
    if(error) throw error;
    console.log(results);
})


//comment 테이블 조회
// connection.query('select * from comment',function(error,results,fields){
//     if(error) throw error;
//     console.log(results);
// })

//Post 테이블 조회
// connection.query('select * from post',function(error,results,fields){
//     if(error) throw error;
//     console.log(results);
// })

module.exports = connection;