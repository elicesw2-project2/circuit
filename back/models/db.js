import mysql from 'mysql';
import dbConfig from '../config/db.config.js';

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
	host: dbConfig.HOST,
	port: dbConfig.PORT,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB,
});

// MySQL connection 실행
connection.connect((error) => {
	if (error) throw error;
	console.log('MySQL Connected!!!', 'db.js');
});

// users 테이블 조회
// connection.query('select * from users', (error, results) => {
// 	if (error) throw error;
// 	console.log(results);
// });

// comment 테이블 조회
// connection.query('select * from comment',function(error,results,fields){
//     if(error) throw error;
//     console.log(results);
// })

// Post 테이블 조회
// connection.query('select * from post', function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// });

export default connection;
