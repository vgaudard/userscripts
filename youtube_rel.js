// ==UserScript==
// @name         Youtube rel
// @version      0.1
// @author       vgaudard
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// @run-at       document-end
// ==/UserScript==
/* jshint -W097 */
'use strict';

function addYoutubeRel() {
    document.querySelectorAll(".autoplay-bar .content-link")[0].setAttribute("rel", "next");
}

addYoutubeRel();

// Watch for page change
var target = document.querySelector('#content');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(addYoutubeRel);
});
var config = { attributes: false, childList: true, characterData: false };
observer.observe(target, config);
