const http = require("http"); //http is globally installed
const port = 3000;
const statusCodes = require("http-status-codes");

const server = http.createServer().listen(port); //put function in here or use a server.on thing like below


server.on("request",(request, response) => {
    let body = [];
    request.on("data", (bodyData) => { //anytime user sends data, request will see data and send it to the body array
        body.push(bodyData); //can use curl --data method to send things through console
    });
    request.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`The body of request constains ${ body}`);
    });
    console.log("URL: " + request.url);
    console.log("Method: " + request.method); //gives us information about incoming user/request
    console.log("Headers: " + request.headers);
   // console.log("An incoming request recieved!");
    response.writeHead(statusCodes.OK, {"content-type":"text/html"});
    let responseMessage = "<style>body {background-color: blue;} h1 {color: red; font-family: sans-serif; }</style> <h1>Welcome to my page!</h1>";
    response.write(responseMessage);
    response.end();
    //console.log(`A response with content ${responseMessage} was sent`); //used a tilde to keep the funny string

} )

//better the use response to handle incoming data from request

console.log("The server is started");