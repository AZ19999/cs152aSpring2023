const router = {
    "GET":{},
    "POST":{}

}

exports.get = (url, action) => {
    router["GET"][url] = action;

}

exports.post = (url, action) => {
    router["POST"][url] = action;

}

exports.handle = (request, response) => {
    if (router[request.method][request.url]) {
        router[request.method][request.url] (request, response);

    }

    else {
        response.writeHead(404, {"content-type": "text/html"});
        response.end("Not found/route does not exist");

    }

}