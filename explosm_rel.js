// ==UserScript==
// @name         Explosm rel links
// @version      0.1
// @description  Add rel attributes to next and previous elements, thus allowing vimium shortcuts
// @author       You
// @match        http://explosm.net/comics/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(".previous-comic").attr("rel", "prev");
$(".next-comic").attr("rel", "next");
