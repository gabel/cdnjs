(function(){var c=this;var e=c._;var f=function(g){this._wrapped=g};var d=c._=function(g){return new f(g)};if(typeof exports!=="undefined"){d=exports}d.VERSION="0.4.2";d.each=function(p,n,m){var h=0;try{if(p.forEach){p.forEach(n,m)}else{if(p.length){for(var k=0,g=p.length;k<g;k++){n.call(m,p[k],k,p)}}else{for(var j in p){if(Object.prototype.hasOwnProperty.call(p,j)){n.call(m,p[j],j,p)}}}}}catch(o){if(o!="__break__"){throw o}}return p};d.map=function(k,j,h){if(k&&k.map){return k.map(j,h)}var g=[];d.each(k,function(o,m,n){g.push(j.call(h,o,m,n))});return g};d.reduce=function(k,g,j,h){if(k&&k.reduce){return k.reduce(d.bind(j,h),g)}d.each(k,function(o,m,n){g=j.call(h,g,o,m,n)});return g};d.reduceRight=function(k,g,j,h){if(k&&k.reduceRight){return k.reduceRight(d.bind(j,h),g)}var m=d.clone(d.toArray(k)).reverse();d.each(m,function(o,n){g=j.call(h,g,o,n,k)});return g};d.detect=function(k,j,h){var g;d.each(k,function(o,m,n){if(j.call(h,o,m,n)){g=o;d.breakLoop()}});return g};d.select=function(k,j,h){if(k.filter){return k.filter(j,h)}var g=[];d.each(k,function(o,m,n){j.call(h,o,m,n)&&g.push(o)});return g};d.reject=function(k,j,h){var g=[];d.each(k,function(o,m,n){!j.call(h,o,m,n)&&g.push(o)});return g};d.all=function(k,j,h){j=j||d.identity;if(k.every){return k.every(j,h)}var g=true;d.each(k,function(o,m,n){if(!(g=g&&j.call(h,o,m,n))){d.breakLoop()}});return g};d.any=function(k,j,h){j=j||d.identity;if(k.some){return k.some(j,h)}var g=false;d.each(k,function(o,m,n){if(g=j.call(h,o,m,n)){d.breakLoop()}});return g};d.include=function(j,h){if(d.isArray(j)){return d.indexOf(j,h)!=-1}var g=false;d.each(j,function(k){if(g=k===h){d.breakLoop()}});return g};d.invoke=function(h,j){var g=d.toArray(arguments).slice(2);return d.map(h,function(k){return(j?k[j]:k).apply(k,g)})};d.pluck=function(h,g){return d.map(h,function(j){return j[g]})};d.max=function(k,j,h){if(!j&&d.isArray(k)){return Math.max.apply(Math,k)}var g={computed:-Infinity};d.each(k,function(p,m,o){var n=j?j.call(h,p,m,o):p;n>=g.computed&&(g={value:p,computed:n})});return g.value};d.min=function(k,j,h){if(!j&&d.isArray(k)){return Math.min.apply(Math,k)}var g={computed:Infinity};d.each(k,function(p,m,o){var n=j?j.call(h,p,m,o):p;n<g.computed&&(g={value:p,computed:n})});return g.value};d.sortBy=function(j,h,g){return d.pluck(d.map(j,function(n,k,m){return{value:n,criteria:h.call(g,n,k,m)}}).sort(function(o,n){var m=o.criteria,k=n.criteria;return m<k?-1:m>k?1:0}),"value")};d.sortedIndex=function(n,m,j){j=j||d.identity;var g=0,k=n.length;while(g<k){var h=(g+k)>>1;j(n[h])<j(m)?g=h+1:k=h}return g};d.toArray=function(g){if(!g){return[]}if(d.isArray(g)){return g}return d.map(g,function(h){return h})};d.size=function(g){return d.toArray(g).length};d.first=function(g){return g[0]};d.last=function(g){return g[g.length-1]};d.compact=function(g){return d.select(g,function(h){return !!h})};d.flatten=function(g){return d.reduce(g,[],function(h,j){if(d.isArray(j)){return h.concat(d.flatten(j))}h.push(j);return h})};d.without=function(h){var g=h.slice.call(arguments,0);return d.select(h,function(j){return !d.include(g,j)})};d.uniq=function(h,g){return d.reduce(h,[],function(j,m,k){if(0==k||(g?d.last(j)!=m:!d.include(j,m))){j.push(m)}return j})};d.intersect=function(h){var g=d.toArray(arguments).slice(1);return d.select(d.uniq(h),function(j){return d.all(g,function(k){return d.indexOf(k,j)>=0})})};d.zip=function(){var g=d.toArray(arguments);var k=d.max(d.pluck(g,"length"));var j=new Array(k);for(var h=0;h<k;h++){j[h]=d.pluck(g,String(h))}return j};d.indexOf=function(h,g){if(h.indexOf){return h.indexOf(g)}for(i=0,l=h.length;i<l;i++){if(h[i]===g){return i}}return -1};d.lastIndexOf=function(j,h){if(j.lastIndexOf){return j.lastIndexOf(h)}var g=j.length;while(g--){if(j[g]===h){return g}}return -1};d.bind=function(j,h){h=h||c;var g=d.toArray(arguments).slice(2);return function(){var k=g.concat(d.toArray(arguments));return j.apply(h,k)}};d.bindAll=function(){var g=d.toArray(arguments);var h=g.pop();d.each(g,function(j){h[j]=d.bind(h[j],h)})};d.delay=function(h,j){var g=d.toArray(arguments).slice(2);return setTimeout(function(){return h.apply(h,g)},j)};d.defer=function(g){return d.delay.apply(d,[g,1].concat(d.toArray(arguments).slice(1)))};d.wrap=function(g,h){return function(){var j=[g].concat(d.toArray(arguments));return h.apply(h,j)}};d.compose=function(){var g=d.toArray(arguments);return function(){for(var h=g.length-1;h>=0;h--){arguments=[g[h].apply(this,arguments)]}return arguments[0]}};d.keys=function(g){return d.map(g,function(j,h){return h})};d.values=function(g){return d.map(g,d.identity)};d.extend=function(g,j){for(var h in j){g[h]=j[h]}return g};d.clone=function(g){if(d.isArray(g)){return g.slice(0)}return d.extend({},g)};d.isEqual=function(h,g){if(h===g){return true}var m=typeof(h),o=typeof(g);if(m!=o){return false}if(h==g){return true}if(h.isEqual){return h.isEqual(g)}if(m!=="object"){return false}var j=d.keys(h),n=d.keys(g);if(j.length!=n.length){return false}for(var k in h){if(!d.isEqual(h[k],g[k])){return false}}return true};d.isEmpty=function(g){return(d.isArray(g)?g:d.values(g)).length==0};d.isElement=function(g){return !!(g&&g.nodeType==1)};d.isArray=function(g){return Object.prototype.toString.call(g)=="[object Array]"};d.isFunction=function(g){return Object.prototype.toString.call(g)=="[object Function]"};d.isUndefined=function(g){return typeof g=="undefined"};d.noConflict=function(){c._=e;return this};d.identity=function(g){return g};d.breakLoop=function(){throw"__break__"};var b=0;d.uniqueId=function(g){var h=b++;return g?g+h:h};d.functions=function(){var h=[];for(var g in d){if(Object.prototype.hasOwnProperty.call(d,g)){h.push(g)}}return d.without(h,"VERSION","prototype","noConflict").sort()};d.template=function(j,h){var g=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+j.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return h?g(h):g};d.forEach=d.each;d.foldl=d.inject=d.reduce;d.foldr=d.reduceRight;d.filter=d.select;d.every=d.all;d.some=d.any;d.methods=d.functions;var a=function(h,g){return g?d(h).chain():h};d.each(d.functions(),function(g){f.prototype[g]=function(){Array.prototype.unshift.call(arguments,this._wrapped);return a(d[g].apply(d,arguments),this._chain)}});d.each(["pop","push","reverse","shift","sort","splice","unshift"],function(g){f.prototype[g]=function(){Array.prototype[g].apply(this._wrapped,arguments);return a(this._wrapped,this._chain)}});d.each(["concat","join","slice"],function(g){f.prototype[g]=function(){return a(Array.prototype[g].apply(this._wrapped,arguments),this._chain)}});f.prototype.chain=function(){this._chain=true;return this};f.prototype.value=function(){return this._wrapped}})();