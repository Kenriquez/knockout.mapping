// Knockout Mapping plugin v0.5
// (c) 2010 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

ko.d=function(m,n){for(var g=m.split("."),k=window,j=0;j<g.length-1;j++)k=k[g[j]];k[g[g.length-1]]=n};ko.u=function(m,n,g){m[n]=g};
(function(){function m(a){if(a&&typeof a==="object"&&a.constructor.toString().match(/date/i)!==null)return"date";return typeof a}function n(a){a=a||{};a.e=a.e||{};a.g=a.g||{};a.i=a.i||{};return a}function g(a,c,b,d,e){var i=ko.a.c(c)instanceof Array;d=d||new s;if(d.f(c))return a;e=e||"";if(b.e[e]&&q(c)&&!i){var r=n(),h=b.e[e](c,e);a=g(undefined,h,r)}if(i){ko.o(a)||(a=ko.z([]));var o=function(f){return f};if(b.g[e])o=b.g[e];i=x(b,e);var t=[];y(ko.a.c(a),c,e,o,function(f,l){switch(f){case "added":var p=
ko.a.c(g(undefined,l,b,d,e));a.push(p);break;case "retained":p=j(a,k(l,o),o);g(p,l,b,d);break;case "deleted":p=j(a,k(l,o),o);a.remove(p)}t.push({event:f,item:p})});ko.a.l(i,function(f){ko.a.l(t,function(l){f(l.event,l.item)})})}else if(q(c)){a||(a={});d.save(c,a);u(c,function(f){ko.o(a[f])||(a[f]=d.f(c[f]));a[f]=g(a[f],c[f],b,d,e?e+"."+f:f)})}else if(ko.v(a))a(ko.a.c(c));else{a=ko.w(ko.a.c(c));d.save(c,a)}return a}function k(a,c){var b=a;if(c)b=c(a);return ko.a.c(b)}function j(a,c,b){a=ko.a.r(ko.a.c(a),
function(d){return k(d,b)==c});if(a.length!=1)throw Error("When calling ko.update*, the key '"+c+"' was not found or not unique!");return a[0]}function v(a,c){return ko.a.s(ko.a.c(a),function(b){return c?k(b,c):b})}function y(a,c,b,d,e){b=v(c,d);var i=v(a,d);b=ko.a.t(i,b);i=0;for(var r=b.length;i<r;i++){var h=b[i];switch(h.status){case "added":h=j(ko.a.c(c),h.value,d);e("added",h);break;case "retained":h=j(c,h.value,d);e("retained",h);break;case "deleted":h=j(ko.a.c(a),h.value,d);e("deleted",h)}}}
function u(a,c){if(a instanceof Array)for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function q(a){return m(a)=="object"&&a!==null&&a!==undefined}function x(a,c){var b=a.i[c];if(b){b instanceof Array||(b=[b]);return b}else return[]}function w(a,c){c=c||new s;a=ko.a.c(a);if(!q(a))return a;c.save(a,a);u(a,function(b){var d=ko.a.c(a[b]);switch(m(d)){case "object":case "undefined":var e=c.f(d);a[b]=e!==undefined?e:w(d,c);break;default:a[b]=ko.a.c(d)}});return a}function s(){var a=[],c=[];this.save=
function(b,d){var e=ko.a.m(a,b);if(e>=0)c[e]=d;else{a.push(b);c.push(d)}};this.f=function(b){b=ko.a.m(a,b);return b>=0?c[b]:undefined}}ko.b={};ko.b.h=function(a,c){if(arguments.length==0)throw Error("When calling ko.fromJS, pass the object you want to convert.");c=n(c);var b=g(undefined,a,c);b.__ko_mapping__=c;return b};ko.b.n=function(a,c){var b=ko.a.p(a);return ko.b.h(b,c)};ko.b.k=function(a,c){if(arguments.length<2)throw Error("When calling ko.updateFromJS, pass: the object to update and the object you want to update from.");
var b=a.__ko_mapping__;if(!b)throw Error("The object you are trying to update was not created by a 'fromJS' or 'fromJSON' mapping!");return g(a,c,b)};ko.b.q=function(a,c,b){c=ko.a.p(c);return ko.b.k(a,c,b)};ko.b.j=function(a){if(arguments.length==0)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");return w(a)};ko.b.toJSON=function(a){a=ko.b.j(a);return ko.a.A(a)};ko.d("ko.mapping",ko.b);ko.d("ko.mapping.fromJS",ko.b.h);ko.d("ko.mapping.fromJSON",ko.b.n);ko.d("ko.mapping.updateFromJS",
ko.b.k);ko.d("ko.mapping.updateFromJSON",ko.b.q);ko.d("ko.mapping.toJS",ko.b.j);ko.d("ko.mapping.toJSON",ko.b.toJSON)})();
