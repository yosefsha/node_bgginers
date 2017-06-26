function route(pathname, handle, response, postData){
console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response, postData);
	}
	else{
	console.log("no handle for path "+ pathname);
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 not found")
	response.end()
	}
}

exports.route = route;
