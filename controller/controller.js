var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');

var Comment = require('../models/Comments.js');
var Article = require('../models/Articles.js');

router.get('/', function(req, res) {

    //scrapy-poo
    res.redirect('/scrape');
});