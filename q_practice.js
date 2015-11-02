/**
 * Created by root on 02/11/15.
 */

var express = require('express');
var q_practice = express.Router();
var Promise = require("es6-promise").Promise;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Q = require('q');
var mysql = require('./mysql');

var url = 'http://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=DEMO_KEY';

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                var data = JSON.parse(req.responseText);
                // Resolve the promise with the response text
                resolve(data.report.food.name.toString());
                //resolve(req.responseText);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(req);
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

get(url)
    .then(function(result){
        return result
    })
    .then(function(result){
        return result
    })
    .then(function(result){
        console.log(result);
    });




//mysql.getConnection(function(err, conn){
//    if(!err){
//        var query = 'select * from food_types where id=1';
//        conn.query(query, function(err, result){
//            if(!err){
//                console.log(result);
//                query = 'select * from food_types where id=2';
//                conn.query(query, function(err, result){
//                    if(!err){
//                        console.log(result);
//                    }
//                    else{
//                        console.log(err);
//                    }
//                });
//            }
//            else{
//                console.log(err);
//            }
//        });
//    }
//    else{
//        console.log(err);
//    }
//});

//q_practice.get('/', function(req, res){
//
//    get(url).then(function(food_name) {
//        res.send(food_name);
//    }, function(error) {
//        res.send('Error' + error);
//    });
//
//});


module.exports = q_practice;






























