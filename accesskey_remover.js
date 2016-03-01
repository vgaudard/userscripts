// ==UserScript==
// @name         Remove access keys
// @version      0.1
// @author       vgaudard
// @match        https://*/*
// @match        http://*/*
// @description  Removes accesskey attributes to prevent vimium from focusing an input accidentally
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';



var acceskeyEl = document.querySelectorAll("[accesskey]");

for (var i = 0; i < accesskeyEl.length; i++) {
    accesskeyEl[i].removeAttribute("accesskey");
}
