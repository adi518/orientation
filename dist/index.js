!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MobileOrientation=void 0;var o,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(1),u=(o=r)&&o.__esModule?o:{default:o};e.MobileOrientation=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.detect=function(){e.detectPortrait(),e.detectLandscape()},this.detectPortrait=function(){(e.isPortrait||e.isDesktop)&&(e.state="portrait")},this.detectLandscape=function(){e.isLandscape&&e.isMobile&&(e.state="landscape")},this.destroy=function(){window.removeEventListener("resize",e.debounced)};var o=n.debounceTime,i=void 0===o?0:o;this.state={},this.debounced=(0,u.default)(this.detect,i),window.addEventListener("resize",this.debounced),this.debounced()}return i(t,[{key:"isTruthy",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).some(function(t){return!0===t})}},{key:"isMobile",get:function(){var t=[],e=window.navigator.msMaxTouchPoints||"ontouchstart"in document,n=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),o=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return t.push(e,n,o),this.isTruthy(t)}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isPortrait",get:function(){return!this.isLandscape}},{key:"isLandscape",get:function(){var t=[window.screen.width>window.screen.height];return window.matchMedia&&t.push(window.matchMedia("all and (orientation:landscape)").matches),this.isTruthy(t)}}]),t}()},function(t,e,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="Expected a function",i=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,d="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e,l="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,p=d||l||Function("return this")(),y=Object.prototype.toString,v=Math.max,b=Math.min,h=function(){return p.Date.now()};function m(t){var e=void 0===t?"undefined":n(t);return!!t&&("object"==e||"function"==e)}function w(t){return"symbol"==(void 0===t?"undefined":n(t))||!!(e=t)&&"object"==(void 0===e?"undefined":n(e))&&y.call(t)==r;var e}function g(t){if("number"==typeof t)return t;if(w(t))return i;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=f.test(t);return n||a.test(t)?s(t.slice(2),n?2:8):c.test(t)?i:+t}t.exports=function(t,e,n){var i,r,u,c,f,a,s=0,d=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function y(e){var n=i,o=r;return i=r=void 0,s=e,c=t.apply(o,n)}function w(t){var n=t-a;return void 0===a||n>=e||n<0||l&&t-s>=u}function j(){var t,n,o=h();if(w(o))return x(o);f=setTimeout(j,(n=e-((t=o)-a),l?b(n,u-(t-s)):n))}function x(t){return f=void 0,p&&i?y(t):(i=r=void 0,c)}function P(){var t,n=h(),o=w(n);if(i=arguments,r=this,a=n,o){if(void 0===f)return s=t=a,f=setTimeout(j,e),d?y(t):c;if(l)return f=setTimeout(j,e),y(a)}return void 0===f&&(f=setTimeout(j,e)),c}return e=g(e)||0,m(n)&&(d=!!n.leading,u=(l="maxWait"in n)?v(g(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),P.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=a=r=f=void 0},P.flush=function(){return void 0===f?c:x(h())},P}}).call(e,n(2))},function(t,e,n){"use strict";var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(o=window)}t.exports=o}])});