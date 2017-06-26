var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log("Request for " + pathname + " received");

		request.setEncoding("utf-8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '"+
			postDataChunk + "'.");
		});
		
		request.addListener("end", function(){
			route(pathname, handle, response, postData);	
		})

		// response.writeHead(200, {"Content-Type": "text/plain"});	
		// response.write(content);
		// response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log("server started");
}

exports.start = start;
