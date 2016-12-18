var mysql = require('mysql');
var tableName = 'users';
var connection = mysql.createConnection({
	host     : 'localhost',
	port     : 3306,
	database : 'lulin',
    multipleStatements : true,
	user     : 'root',
	password : 'root',
});
connection.connect(function(err) {
	if (err) {
		console.log('与mysql数据库建立连接失败！');
	} else {
		console.log('与mysql数据库建立连接成功！');
		insertData();
	}
});

function insertData() {
	connection.query('INSERT INTO users SET ?',
		{id:8,username:'用户名7',firstname:'姓7'},function(err,result) {
		if (err) {
			console.log('插入数据失败！');
		} else {
			console.log('插入数据成功！');
			console.log(result);
			updateData();
		}
	})
}

function updateData() {
	connection.query('update users set firstname=? where username=?',['姓600','用户名6'],function(err,result) {
		if (err) {
			console.log('更新数据失败！');
		} else {
			console.log('更新数据成功！');
			console.log(result);
			deleteData();
		}
	});
}

function deleteData() {
	connection.query('delete from users where username=?',['用户名3'],function(err,result) {
			if (err) {
				console.log('删除数据失败！');
			} else {
				console.log('删除数据成功！');
				console.log(result);
				queryData();
			}
		})
}

function queryData() {
	connection.query('select * from users',function(err,result) {
		if (err) {
			console.log('查询数据失败！');
		} else {
			console.log('查询数据成功！')
			console.log(result);
			connection.end();
		}
	})
}