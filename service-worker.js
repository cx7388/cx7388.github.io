"use strict";var precacheConfig=[["/index.html","7df35d4953ca657bb133c1462d4718d9"],["/static/css/main.b38c6384.css","5855acd49e5e585bd73f55048231944a"],["/static/js/main.46536859.js","3017623e5a826ce497db79fe191de016"],["/static/media/MAMCA.2be0f2bc.png","2be0f2bc59a7d5a87ca1222923d30bce"],["/static/media/cv.3ee99531.png","3ee995319e149610800b25ef43f3edde"],["/static/media/dragon.13c9a8bb.jpg","13c9a8bb0cc6840fe7df7c13591ca906"],["/static/media/facebook.ea1b815e.svg","ea1b815ecbbd285726fd6cd2f487edc4"],["/static/media/flexiblepcb.80163339.jpg","80163339778caef91ff7ef31cb96d0f4"],["/static/media/github.f48de7de.svg","f48de7de5f553ccf36c76b8e5241eeb9"],["/static/media/gmail.845ebcff.svg","845ebcffacb02b95ba704251aa6bc060"],["/static/media/kuleuven.ddb082d3.svg","ddb082d3f8232caf2b6932b7dafbe5ba"],["/static/media/linkedin.c5a152c4.svg","c5a152c40ece5300044be2075288a123"],["/static/media/mamca.97ec6303.jpg","97ec6303361bea8197e66304c0712951"],["/static/media/pathfinding.33ca82f5.jpg","33ca82f52ec3e75e72295ca55989edab"],["/static/media/swjtu.5759d2e2.jpg","5759d2e2e6c803c90f9752e96406bd85"],["/static/media/thesis.ef42e15c.png","ef42e15cac3c568baf670885bd0b9e96"],["/static/media/twitter.129f45aa.svg","129f45aac2523161228cd151bb18a412"],["/static/media/up-button.9cd50a7c.svg","9cd50a7c74d5f07169e003fdee98f8e3"],["/static/media/vub.314240bb.svg","314240bbf1096bc22d4b0864f286fdd4"],["/static/media/webapp.e13e5a4c.png","e13e5a4ccbc85350fe73b8491ef4c50e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});