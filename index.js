const   http = require('http'), // this module provides HTTP server funcions
        path = require('path'), // provides path to file and directory 
        express = require('express'), 
        fs = require('fs'), // allowes to work with file system
        xmlParse = require('xslt-processor').xmlParse,
        xsltProcess = require('xslt-processor').xsltProcess,
        xml2js = require('xml2js');


const router = express(),
    server = http.createServer(router);

    router.get("/", function(req, res) {

        res.writeHead(200, {'Content-Type' : text/html})
    })

    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0.", function() {
            const addr = server.address();
            console.log("Server listening at: ", addr.address , ": " , addr.port)
    })