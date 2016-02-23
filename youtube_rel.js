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

document.querySelectorAll(".autoplay-bar .content-link")[0].setAttribute("rel", "next");
