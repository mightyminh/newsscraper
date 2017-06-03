var cheerio = require('cheerio');
var request = require('request');
var Article = require('../models/Article');
var website = 'https://www.wired.com/latest-news';

function scrapedWeb(callback) {
    request(website, function(error, response, html)

        {
            if (error) console.log("Error Scraping", error);
            var $ = cheerio.load(html);
            $("ul.col li a").each(function(i, element) {
                var title = $(this).children("div").children("h2").text();
                var link = $(this).attr("href");
                var scrapeArticle = new Article({
                    title: title,
                    link: link
                });
                scrapeArticle.save(function(error) {});
            });

            callback();
        });

}

exports.scrapedWeb = scrapedWeb;