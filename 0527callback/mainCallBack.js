

//非阻塞的IO读取

var fs = require("fs");

fs.readFile("input.txt", function(error, data){

	if(error){
		return console.error(err);
	}

	console.log(data.toString());
});

console.log("程序执行结束!");