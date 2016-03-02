// ==UserScript==
// @name         Clear Youtube
// @version      0.1
// @description  Remove useless "Watch later" buttons, as well as a few other items
// @author       vgaudard
// @match        https://www.youtube.com/*
// @match        http://www.youtube.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function cleanYoutube() {
    var classesToDelete = ["addto-watch-later-button", "yt-uix-menu", "notifications-container"];
    var idsToDelete = ["trending-guide-item", "VLWL-guide-item", "create_channel-guide-item", "gh-navitem-trending"];

    var item;

    for (var i = 0; i < classesToDelete.length; i++) {
        while (item = document.getElementsByClassName(classesToDelete[i])[0]) {
            item.remove();
        }
    }

    for (var i = 0; i < idsToDelete.length; i++) {
        document.getElementById(idsToDelete[i]).remove();
    }


    document.querySelector("#guide-container > div > ul > li:nth-child(2)").remove();
}



// Watch for page change
var target = document.querySelector('#content');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(cleanYoutube);    
});
var config = { attributes: false, childList: true, characterData: false };
observer.observe(target, config);
