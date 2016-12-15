var mysql = require('mysql');
var connection = mysql.createConnection({
	host    :'localhost',
	port    :3306,
	database:'lulin',
	user    :'root',
	password:'root',
});
connection.connect(function(err) {
	if (err) {
		console.log('与Mysql数据库建立连接失败！');
	} else {
		console.log('与Mysql数据库建立连接成功！');
		connection.end(function(err) {
			if (err) {
				console.log('关闭Mysql数据库操作失败！');
			} else {
				console.log('关闭Mysql数据库操作成功！');
			}
		})
	}

})