/*!
  Autosize 3.0.8
  license: MIT
  http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var o={exports:{}};t(o.exports,o),e.autosize=o.exports}}(this,function(e,t){"use strict";function o(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),u="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i()}function o(t){var o=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=o,v=t,l&&(e.style.overflowY=t),n()}function n(){var t=window.pageYOffset,o=document.body.scrollTop,n=e.style.height;e.style.height="auto";var i=e.scrollHeight+u;return 0===e.scrollHeight?void(e.style.height=n):(e.style.height=i+"px",document.documentElement.scrollTop=t,void(document.body.scrollTop=o))}function i(){var t=e.style.height;n();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==v&&o("visible"):"hidden"!==v&&o("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var r=void 0===arguments[1]?{}:arguments[1],d=r.setOverflowX,s=void 0===d?!0:d,a=r.setOverflowY,l=void 0===a?!0:a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!e.hasAttribute("data-autosize-on")){var u=null,v="hidden",f=function(t){window.removeEventListener("resize",i),e.removeEventListener("input",i),e.removeEventListener("keyup",i),e.removeAttribute("data-autosize-on"),e.removeEventListener("autosize:destroy",f),Object.keys(t).forEach(function(o){e.style[o]=t[o]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",f),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i),window.addEventListener("resize",i),e.addEventListener("input",i),e.addEventListener("autosize:update",i),e.setAttribute("data-autosize-on",!0),l&&(e.style.overflowY="hidden"),s&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function n(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(r=function(e){return e},r.destroy=function(e){return e},r.update=function(e){return e}):(r=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return o(e,t)}),e},r.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],n),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=r});
