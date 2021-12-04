this.webpackChunk([0],{1030:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.default=t.exports,t.exports.__esModule=!0},1184:function(t,e,n){var r=n(940),o=n(989),i=n(1313),a=n(1314);function s(e){var n="function"===typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0,s(e)}t.exports=s,t.exports.default=t.exports,t.exports.__esModule=!0},1313:function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},t.exports.default=t.exports,t.exports.__esModule=!0},1314:function(t,e,n){var r=n(989),o=n(1315);function i(e,n,a){return o()?(t.exports=i=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},t.exports.default=t.exports,t.exports.__esModule=!0),i.apply(null,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},1315:function(t,e){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},1372:function(t,e,n){"use strict";var r=n(25),o=r(n(84)),i=r(n(85)),a=r(n(1659)),s=r(n(968)),u=r(n(969)),c=r(n(940)),f=r(n(1184));function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=n(1373),h=function(t){(0,s.default)(r,t);var e,n=(e=r,function(){var t,n=(0,c.default)(e);if(l()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function r(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{checkIndent:!0};(0,o.default)(this,r),e=n.call(this);var a,s=i.checkIndent;return e._checkIndent=s,a="string"===typeof t?t.trimEnd().split(/(?:[\t ]*\r?\n){2,}/):t||[],e._stanzaAndCommentOrder=[],a.forEach((function(t){e.add(t)})),e}return(0,i.default)(r,[{key:"add",value:function(t){if(""===t)throw new Error("Invalid stanza, was empty");if(t.trim().startsWith("#")){var e=t.trimEnd().split(/\r?\n/).map((function(t){return t.trim()}));if(e.every((function(t){return t.startsWith("#")})))return this._stanzaAndCommentOrder.push(e.join("\n")),this}var n=new d(t,{checkIndent:this._checkIndent});if(this.nameKey){if(n.nameKey!==this.nameKey)throw new Error("The first line in each stanza must have the same key. "+"Saw both ".concat(this.nameKey," and ").concat(n.nameKey))}else this.nameKey=n.nameKey;if(this.has(n.name))throw new Error("Got duplicate stanza name: ".concat(n.name));return this._stanzaAndCommentOrder.push(n.name),(0,a.default)((0,c.default)(r.prototype),"set",this).call(this,n.name,n)}},{key:"update",value:function(t,e){if(!(e instanceof d))throw new Error("Value of ".concat(t," is not an RaStanza"));(0,a.default)((0,c.default)(r.prototype),"set",this).call(this,t,e)}},{key:"delete",value:function(t){return this._stanzaAndCommentOrder.includes(t)&&(this._stanzaAndCommentOrder=this._stanzaAndCommentOrder.filter((function(e){return e!==t}))),(0,a.default)((0,c.default)(r.prototype),"delete",this).call(this,t)}},{key:"clear",value:function(){this._stanzaAndCommentOrder.length=0,this.nameKey=void 0,(0,a.default)((0,c.default)(r.prototype),"clear",this).call(this)}},{key:"toString",value:function(){var t=this;if(0===this.size)return"";var e=[];return this._stanzaAndCommentOrder.forEach((function(n){n.startsWith("#")?e.push("".concat(n,"\n")):e.push(t.get(n).toString())})),e.join("\n")}}]),r}((0,f.default)(Map));t.exports=h},1373:function(t,e,n){"use strict";var r=n(25),o=r(n(246)),i=r(n(404)),a=r(n(84)),s=r(n(85)),u=r(n(1659)),c=r(n(968)),f=r(n(969)),l=r(n(940)),d=r(n(1184));function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n(1920);var p=function(t){(0,c.default)(r,t);var e,n=(e=r,function(){var t,n=(0,l.default)(e);if(h()){var r=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function r(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{checkIndent:!0};(0,a.default)(this,r),e=n.call(this);var i,s=o.checkIndent;return e._checkIndent=s,i="string"===typeof t?t.trimEnd().split(/\r?\n/):t||[],e._keyAndCommentOrder=[],i.forEach((function(t){e.add(t)})),e}return(0,s.default)(r,[{key:"add",value:function(t){if(""===t)throw new Error("Invalid stanza, contained blank lines");if(t.trim().startsWith("#"))return this._keyAndCommentOrder.push(t.trim()),this;if(t.trimEnd().endsWith("\\")){var e=t.trimEnd().slice(0,-1);return this._continuedLine?this._continuedLine+=e.trimStart():this._continuedLine=e,this}var n=t;if(this._continuedLine&&(n=this._continuedLine+n.trimStart(),this._continuedLine=void 0),this.indent||this._checkIndent){var o=n.match(/^([ \t]+)/);if(void 0===this.indent)if(o){var a=(0,i.default)(o,2);this.indent=a[1]}else this.indent="";else if(""===this.indent&&null!==o||this.indent&&this.indent!==o[1])throw new Error("Inconsistent indentation of stanza")}else this.indent="";var s=n.trim(),c=s.indexOf(" ");if(-1===c){if(!this.nameKey)throw new Error("First line in a stanza must have both a key and a value");return this.has(s)?this:(this._keyAndCommentOrder.push(s),(0,u.default)((0,l.default)(r.prototype),"set",this).call(this,s,""))}var f=s.slice(0,c),d=s.slice(c+1);if(this.has(f)&&d!==this.get(f))throw new Error("Got duplicate key with a different value in stanza: "+'"'.concat(f,'" key has both ').concat(this.get(f)," and ").concat(d));return this._keyAndCommentOrder.push(f),this.nameKey||(this.nameKey=f,this.name=s.slice(c+1)),(0,u.default)((0,l.default)(r.prototype),"set",this).call(this,f,d)}},{key:"set",value:function(t,e){if("string"!==typeof e)throw new Error("Value of ".concat(t," must be a string, got ").concat((0,o.default)(e)));return(0,u.default)((0,l.default)(r.prototype),"set",this).call(this,t,e)}},{key:"delete",value:function(t){if(t===this.nameKey)throw new Error("Cannot delete the first line in a stanza (you can still overwrite it with set()).");return this._keyAndCommentOrder.includes(t)&&(this._keyAndCommentOrder=this._keyAndCommentOrder.filter((function(e){return e!==t}))),(0,u.default)((0,l.default)(r.prototype),"delete",this).call(this,t)}},{key:"clear",value:function(){this._keyAndCommentOrder.length=0,this._continuedLine=void 0,this.indent=void 0,this.name=void 0,this.nameKey=void 0,(0,u.default)((0,l.default)(r.prototype),"clear",this).call(this)}},{key:"toString",value:function(){var t=this;if(0===this.size)return"";var e=[];return this._keyAndCommentOrder.forEach((function(n){n.startsWith("#")?e.push("".concat(t.indent).concat(n)):e.push("".concat(t.indent).concat(n," ").concat(t.get(n)).trimEnd())})),"".concat(e.join("\n"),"\n")}}]),r}((0,d.default)(Map));t.exports=p},1659:function(t,e,n){var r=n(1919);function o(e,n,i){return"undefined"!==typeof Reflect&&Reflect.get?(t.exports=o=Reflect.get,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=o=function(t,e,n){var o=r(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}},t.exports.default=t.exports,t.exports.__esModule=!0),o(e,n,i||e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},1919:function(t,e,n){var r=n(940);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t},t.exports.default=t.exports,t.exports.__esModule=!0},1920:function(t,e,n){"use strict";String.prototype.trimStart||(String.prototype.trimLeft?String.prototype.trimStart=String.prototype.trimLeft:String.prototype.trimStart=function(){return this.replace(/^[\s\uFEFF\xA0]+/g,"")}),String.prototype.trimEnd||(String.prototype.trimRight?String.prototype.trimEnd=String.prototype.trimRight:String.prototype.trimEnd=function(){return this.replace(/[\s\uFEFF\xA0]+$/g,"")})},1921:function(t,e,n){"use strict";var r=n(25),o=r(n(404)),i=r(n(84)),a=r(n(85)),s=r(n(968)),u=r(n(969)),c=r(n(940));function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=function(t){(0,s.default)(r,t);var e,n=(e=r,function(){var t,n=(0,c.default)(e);if(f()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function r(t){var e;if((0,i.default)(this,r),"track"!==(e=n.call(this,t,{checkIndent:!1})).nameKey)throw new Error('trackDb has "'.concat(e.nameKey,'" instead of "track" as the first line in each track'));return e.forEach((function(t,n){var r=Array.from(t.keys()),i=[];if(["track","shortLabel"].forEach((function(t){r.includes(t)||i.push(t)})),i.length>0)throw new Error("Track ".concat(n," is missing required key(s): ").concat(i.join(", ")));var a=["superTrack","compositeTrack","container","view"];if(!r.some((function(t){return a.includes(t)}))){if(!r.includes("bigDataUrl"))throw new Error("Track ".concat(n,' is missing required key "bigDataUrl"'));if(!r.includes("type")){var s=e.settings(n);if(!Array.from(s.keys()).includes("type"))throw new Error("Neither track ".concat(n,' nor any of its parent tracks have the required key "type"'))}}var u="",c=n;do{if(c=e.get(c).get("parent")){var f=c.split(" ");c=(0,o.default)(f,1)[0],u+="    "}}while(c);var l=e.get(n);l.indent=u,e.set(n,l)})),e}return(0,a.default)(r,[{key:"settings",value:function(t){var e=this;if(!this.has(t))throw new Error("Track ".concat(t," does not exist"));var n=[t],r=t;do{(r=this.get(r).get("parent"))&&n.push(r)}while(r);var o=new Map;return n.reverse(),n.forEach((function(t){e.get(t).forEach((function(t,e){o.set(e,t)}))})),o}}]),r}(n(1372));t.exports=l},1922:function(t,e,n){"use strict";var r=n(25),o=r(n(84)),i=r(n(968)),a=r(n(969)),s=r(n(940));function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var c=function(t){(0,i.default)(r,t);var e,n=(e=r,function(){var t,n=(0,s.default)(e);if(u()){var r=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,a.default)(this,t)});function r(t){var e;if((0,o.default)(this,r),"hub"!==(e=n.call(this,t)).nameKey)throw new Error('Hub file must begin with a line like "hub <hub_name>"');var i=["hub","shortLabel","longLabel","genomesFile","email","descriptionUrl"],a=[];if(e.forEach((function(t,e){i.includes(e)||a.push(e)})),a.length>0)throw new Error("Hub file has invalid entr".concat(1===a.length?"y":"ies",": ").concat(a.join(", ")));var s=[];if(i.forEach((function(t){"descriptionUrl"===t||e.get(t)||s.push(t)})),s.length>0)throw new Error("Hub file is missing required entr".concat(1===s.length?"y":"ies",": ").concat(s.join(", ")));return e}return r}(n(1373));t.exports=c},1923:function(t,e,n){"use strict";var r=n(25),o=r(n(84)),i=r(n(968)),a=r(n(969)),s=r(n(940));function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var c=function(t){(0,i.default)(r,t);var e,n=(e=r,function(){var t,n=(0,s.default)(e);if(u()){var r=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,a.default)(this,t)});function r(t){var e;if((0,o.default)(this,r),"genome"!==(e=n.call(this,t)).nameKey)throw new Error('Genomes file must begin with a line like "genome <genome_name>"');var i=["genome","trackDb"];return e.forEach((function(t,e){var n=[];if(i.forEach((function(e){t.get(e)||n.push(e)})),n.length>0)throw new Error("Genomes file entry ".concat(e," is missing required entr").concat(1===n.length?"y":"ies",": ").concat(n.join(", ")))})),e}return r}(n(1372));t.exports=c},1953:function(t,e,n){"use strict";var r=n(1372),o=n(1373),i=n(1921),a=n(1922),s=n(1923);t.exports={RaFile:r,RaStanza:o,TrackDbFile:i,HubFile:a,GenomesFile:s}},940:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},968:function(t,e,n){var r=n(989);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},969:function(t,e,n){var r=n(246).default,o=n(1030);t.exports=function(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},989:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.default=t.exports,t.exports.__esModule=!0,n(e,r)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0}});
//# sourceMappingURL=0.d6f72bf7381751b3c8a4.worker.js.map