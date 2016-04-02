// ==UserScript==
// @name         Clear Youtube
// @version      0.1
// @description  Remove useless "Watch later" buttons, as well as a few other items
// @author       vgaudard
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function clearYoutube() {
    var classesToDelete = ["addto-watch-later-button", "yt-uix-menu", "notifications-container"];
    var idsToDelete = ["trending-guide-item", "VLWL-guide-item", "create_channel-guide-item", "gh-navitem-trending"];

    var item;

    for (var i = 0; i < classesToDelete.length; i++) {
        while (item = document.getElementsByClassName(classesToDelete[i])[0]) {
            item.remove();
            
        }
    }

    for (var i = 0; i < idsToDelete.length; i++) {
        var el = document.getElementById(idsToDelete[i]);
        if (el)
            el.remove();
    }


    var elems = document.querySelectorAll("#guide-container > div > ul > li");
    var index = 0;
    for(var i=0; i < elems.length; i++ ) {
        if (elems[i].innerHTML.indexOf("Library") != -1)
            elems[i].remove();
    }
}

clearYoutube();

// Watch for page change
var target = document.querySelector('body');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(clearYoutube);    
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);
