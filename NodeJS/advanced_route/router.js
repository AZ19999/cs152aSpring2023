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

/**
 * old stuff from index, here for archival reasons
 * 
 * const routeResponseMap = {
    "/":"./views/ad.html",
    "/forms.html":"./views/forms.html",
    "/test.html":"./views/test.html"

};
 * 
 * 
 * let url = request.url;
    if(url.indexOf(".html" !== -1)) {
      response.writeHead(200, {"content-type": "text/html"});
      customReadFile(`./views${url}`, response);
    }

    else if(url.indexOf(".css" !== -1)) {
      response.writeHead(200, {"content-type": "text/css"});
      customReadFile(`./public/css${url}`, response);

    }

    else if(url.indexOf(".png" !== -1)) {
      response.writeHead(200, {"content-type": "image/png"})
      customReadFile(`./public/images${url}`, response);
    }

    else if(url.indexOf(".jpg" !== -1)) {
      response.writeHead(200, {"content-type": "image/jpg"})
      customReadFile(`./public/images${url}`, response);
    }

    else {
      response.writeHead(404, {"content-type": "text/html"});
      response.end("Not found");
    }

  }
 * 
 * 
 */