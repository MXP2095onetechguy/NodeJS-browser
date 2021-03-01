// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
/*
var internetAvailable = require("internet-available");
var getTitleAtUrl = require('get-title-at-url')
var cheerio = require('cheerio');
var rqst = require('request');
const fs = require('fs');
const fileContents = fs.readFileSync('HomePage.json', 'utf8');
*/
const config = {
  timeout: 5000, //timeout connecting to each try (default 5000)
  retries: 3,//number of retries to do before failing (default 5)
  domain: 'apple.com'//the domain to check DNS record of
}
var home = "google.com"
var ById = function (id) {
    return document.getElementById(id);
}
/*
const config = {
  timeout: 5000, //timeout connecting to each server, each try
  retries: 5,//number of retries to do before failing
  domain: 'https://gool.com',//the domain to check DNS record of
}*/
/*
var jsonfile = require('jsonfile');
*/
var favicon = require('favicon-getter').default;
var path = require('path');
var uuid = require('uuid');

var back = ById('back'),
    forward = ById('forward'),
    refresh = ById('refresh'),
    omni = ById('url'),
    dev = ById('console'),
    view = ById('view'),
    home = ById('home'),
    title = ById('TitleDOM'),
    gobtn = ById('Gobtn');
var webtitle = 'blank';

function reloadView () {
    view.reload();
}

function backView () {
    view.goBack();
}
/*
function JSONPARSER (parsedfile) {
  try {
    home = JSON.parse(parsedfile)
  } catch(err) {
    console.error(err)
  }
}
*/
function forwardView () {
    view.goForward();
}

function updateURL (event) {
    if (event.keyCode === 13) {
        gotopage();
    }
}
function URLGO () {
        gotopage();
}
function gotopage () {
        omni.blur();
        let val = omni.value;
        let https = val.slice(0, 8).toLowerCase();
        let http = val.slice(0, 7).toLowerCase();
        if (https === 'https://') {
            view.loadURL(val);
        } else if (http === 'http://') {
            view.loadURL(val);
        } else {
        view.loadURL('http://'+ val);
        }
        check();
        // title.innerHTML = view.document.title;
}
function handleUrl (event) {
    if (event.target.className === 'link') {
        event.preventDefault();
        view.loadURL(event.target.href);
    } else if (event.target.className === 'favicon') {
        event.preventDefault();
        view.loadURL(event.target.parentElement.href);
    }
}

function handleDevtools () {
    if (view.isDevToolsOpened()) {
        view.closeDevTools();
    } else {
        view.openDevTools();
    }
}

function updateNav (event) {
    omni.value = view.src;
}
function gotohome () {
    console.log('home');
    view.loadURL('http://www.google.com');
    check();
}
function cernalert () { window.alert("info.cern.ch"); }
function check() {
/*
  internetAvailable({
      timeout: 4000,
      retries: 10,
  }).then(function(){
      console.log("Internet available");
  }).catch(function(){
      console.log("No internet");
  });
*/
  if(navigator.onLine = false)
  {
    console.log(navigator.onLine);
  }
}
setInterval(function() {
}, 1000);
refresh.addEventListener('click', view.reload);
back.addEventListener('click', backView);
forward.addEventListener('click', forwardView);
omni.addEventListener('keydown', updateURL);
home.addEventListener('click', gotohome);
dev.addEventListener('click', handleDevtools);
view.addEventListener('did-finish-load', updateNav);
gobtn.addEventListener('click', URLGO);
window.addEventListener('offline', check);

// https://github.com/hokein/electron-sample-apps/blob/master/webview/browser/browser.js#L5
// To Do add dev tools open ✔️
// update url ✔️
// add bookmark by pressing button ✔️
// load all bookmarks when list is clicked ✔️



// To Do / Continue 
// Feedback when loading
// Feedback with favorite icon to show that bookmark is not-added/added/already-added
// Tabs !:@
// Option to remove bookmarks.  
