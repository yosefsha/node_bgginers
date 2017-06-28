
var querystring = require ("querystring");
var fs = require("fs")

function start(response, postData){
console.log("request handler start was called");

var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" enctype="multipart/form-data" method="post" >'+
'<input type="file" name="upload" />'+
'<input type="Submit" value="Upload file"/>'+
'</form>'+
'</body>'+
'</html>';
response.writeHead(200, {"Content-Type": "text/html"});
response.write(body)
response.end()

// return content;
}

function upload(response, postData){
console.log("request handler 'upload' was called");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("You've sent: " + 
querystring.parse(postData).text);
response.end();
}

function show(response){
    console.log("request handler show was called")
    response.writeHead(200, {"Content-Type":"image/png"});
    fs.createReadStream("./tmp/test_pic.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

