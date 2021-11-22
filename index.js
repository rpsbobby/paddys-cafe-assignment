const   http = require('http'), // this module provides HTTP server funcions
        path = require('path'), // provides path to file and directory 
        express = require('express'), 
        fs = require('fs'), // allowes to work with file system
        xmlParse = require('xslt-processor').xmlParse,
        xsltProcess = require('xslt-processor').xsltProcess,
        xml2js = require('xml2js');
