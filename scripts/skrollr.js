!function(e,t,r){"use strict";var n,o,a={get:function(){return R},init:function(e){return R||new O(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,i=e.Math,s=e.getComputedStyle,c="touchstart",f="touchmove",u="touchcancel",d="touchend",m="skrollr",p="no-"+m,v=m+"-desktop",g=m+"-mobile",h=.004,y=200,b=/^(?:input|textarea|button|select)$/i,T=/^\s+|\s+$/g,k=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,S=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,w=/^(@?[a-z\-]+)\[(\w+)\]$/,x=/-([a-z0-9_])/g,_=function(e,t){return t.toUpperCase()},E=/[\-+]?[\d]*\.?[\d]+/g,A=/\{\?\}/g,F=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,C=/[a-z\-]+-gradient/g,D="",H="",I=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(s){var t=s(o,null);for(var r in t)if(D=r.match(e)||+r==r&&t[r].match(e))break;D?"-"===(D=D[0]).slice(0,1)?(H=D,D={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[D]):H="-"+D.toLowerCase()+"-":D=H=""}},P=function(){var t=e.requestAnimationFrame||e[D.toLowerCase()+"RequestAnimationFrame"],r=ye();return!Ce&&t||(t=function(t){var n=ye()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=ye(),t()},o)}),t},N={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};function O(r){if(n=t.documentElement,o=t.body,I(),R=this,Z=(r=r||{}).constants||{},r.easing)for(var a in r.easing)N[a]=r.easing[a];oe=r.edgeStrategy||"set",j={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},(W=!1!==r.forceHeight)&&(ke=r.scale||1),J=r.mobileDeceleration||h,ee=!1!==r.smoothScrolling,te=r.smoothScrollingDuration||y,re={targetTop:R.getScrollTop()},(Ce=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})())?((X=t.getElementById("skrollr-body"))&&Y(),V(),ve(n,[m,g],[p])):ve(n,[m,v],[p]),R.refresh(),ie(e,"resize orientationchange",function(){var e=n.clientWidth,t=n.clientHeight;t===Ee&&e===_e||(Ee=t,_e=e,Ae=!0)});var l=P();return function e(){z(),le=l(e)}(),R}O.prototype.refresh=function(e){var r,n,o=!1;for(void 0===e?(o=!0,U=[],Fe=0,e=t.getElementsByTagName("*")):void 0===e.length&&(e=[e]),r=0,n=e.length;r<n;r++){var a=e[r],l=a,i=[],s=ee,c=oe,f=!1;if(o&&"___skrollable_id"in a&&delete a.___skrollable_id,a.attributes){for(var u,d,m,p=0,v=a.attributes.length;p<v;p++){var g=a.attributes[p];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var h=g.name.match(k);if(null!==h){var y={props:g.value,element:a,eventType:g.name.replace(x,_)};i.push(y);var b=h[1];b&&(y.constant=b.substr(1));var T=h[2];/p$/.test(T)?(y.isPercentage=!0,y.offset=(0|T.slice(0,-1))/100):y.offset=0|T;var S=h[3],w=h[4]||S;S&&"start"!==S&&"end"!==S?(y.mode="relative",y.anchors=[S,w]):(y.mode="absolute","end"===S?y.isEnd=!0:y.isPercentage||(y.offset=y.offset*ke))}}else f=!0;else c=g.value;else s="off"!==g.value;else if(null===(l=t.querySelector(g.value)))throw'Unable to find anchor target "'+g.value+'"'}if(i.length)!o&&"___skrollable_id"in a?(m=a.___skrollable_id,u=U[m].styleAttr,d=U[m].classAttr):(m=a.___skrollable_id=Fe++,u=a.style.cssText,d=pe(a)),U[m]={element:a,styleAttr:u,classAttr:d,anchorTarget:l,keyFrames:i,smoothScrolling:s,edgeStrategy:c,emitEvents:f,lastFrameIndex:-1},ve(a,["skrollable"],[])}}for(ue(),r=0,n=e.length;r<n;r++){var E=U[e[r].___skrollable_id];void 0!==E&&(q(E),M(E))}return R},O.prototype.relativeToAbsolute=function(e,t,r){var o=n.clientHeight,a=e.getBoundingClientRect(),l=a.top,i=a.bottom-a.top;return"bottom"===t?l-=o:"center"===t&&(l-=o/2),"bottom"===r?l+=i:"center"===r&&(l+=i/2),(l+=R.getScrollTop())+.5|0},O.prototype.animateTo=function(e,t){t=t||{};var r=ye(),n=R.getScrollTop();return(Q={startTop:n,topDiff:e-n,targetTop:e,duration:t.duration||1e3,startTime:r,endTime:r+(t.duration||1e3),easing:N[t.easing||"linear"],done:t.done}).topDiff||(Q.done&&Q.done.call(R,!1),Q=void 0),R},O.prototype.stopAnimateTo=function(){Q&&Q.done&&Q.done.call(R,!0),Q=void 0},O.prototype.isAnimatingTo=function(){return!!Q},O.prototype.isMobile=function(){return Ce},O.prototype.setScrollTop=function(t,r){return ne=!0===r,Ce?De=i.min(i.max(t,0),Te):e.scrollTo(0,t),R},O.prototype.getScrollTop=function(){return Ce?De:e.pageYOffset||n.scrollTop||o.scrollTop||0},O.prototype.getMaxScrollTop=function(){return Te},O.prototype.on=function(e,t){return j[e]=t,R},O.prototype.off=function(e){return delete j[e],R},O.prototype.destroy=function(){(function(){var t=e.cancelAnimationFrame||e[D.toLowerCase()+"CancelAnimationFrame"];return!Ce&&t||(t=function(t){return e.clearTimeout(t)}),t})()(le),ce(),ve(n,[p],[m,v,g]);for(var t=0,r=U.length;t<r;t++)K(U[t].element);n.style.overflow=o.style.overflow="",n.style.height=o.style.height="",X&&a.setStyle(X,"transform","none"),R=void 0,X=void 0,j=void 0,W=void 0,Te=0,ke=1,Z=void 0,J=void 0,Se="down",we=-1,_e=0,Ee=0,Ae=!1,Q=void 0,ee=void 0,te=void 0,re=void 0,ne=void 0,Fe=0,oe=void 0,Ce=!1,De=0,ae=void 0};var V=function(){var r,a,l,s,m,p,v,g,h,y,T;ie(n,[c,f,u,d].join(" "),function(e){var n=e.changedTouches[0];for(s=e.target;3===s.nodeType;)s=s.parentNode;switch(m=n.clientY,p=n.clientX,h=e.timeStamp,b.test(s.tagName)||e.preventDefault(),e.type){case c:r&&r.blur(),R.stopAnimateTo(),r=s,a=v=m,l=p,h;break;case f:b.test(s.tagName)&&t.activeElement!==s&&e.preventDefault(),g=m-v,T=h-y,R.setScrollTop(De-g,!0),v=m,y=h;break;default:case u:case d:var o=a-m,k=l-p;if(k*k+o*o<49){if(!b.test(r.tagName)){r.focus();var S=t.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(S)}return}r=void 0;var w=g/T;w=i.max(i.min(w,3),-3);var x=i.abs(w/J),_=w*x+.5*J*x*x,E=R.getScrollTop()-_,A=0;E>Te?(A=(Te-E)/_,E=Te):E<0&&(A=-E/_,E=0),x*=1-A,R.animateTo(E+.5|0,{easing:"outCubic",duration:x})}}),e.scrollTo(0,0),n.style.overflow=o.style.overflow="hidden"},z=function(){Ae&&(Ae=!1,ue());var e,t,r=R.getScrollTop(),n=ye();if(Q)n>=Q.endTime?(r=Q.targetTop,e=Q.done,Q=void 0):(t=Q.easing((n-Q.startTime)/Q.duration),r=Q.startTop+t*Q.topDiff|0),R.setScrollTop(r,!0);else if(!ne){re.targetTop-r&&(re={startTop:we,topDiff:r-we,targetTop:r,startTime:xe,endTime:xe+te}),n<=re.endTime&&(t=N.sqrt((n-re.startTime)/te),r=re.startTop+t*re.topDiff|0)}if(Ce&&X&&a.setStyle(X,"transform","translate(0, "+-De+"px) "+ae),ne||we!==r){ne=!1;var o={curTop:r,lastTop:we,maxTop:Te,direction:Se=r>we?"down":r<we?"up":Se};!1!==(j.beforerender&&j.beforerender.call(R,o))&&(!function(e,t){for(var r=0,n=U.length;r<n;r++){var o,i,s=U[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,d=u.length,m=u[0],p=u[u.length-1],v=f<m.frame,g=f>p.frame,h=v?m:p,y=s.emitEvents,b=s.lastFrameIndex;if(v||g){if(v&&-1===s.edge||g&&1===s.edge)continue;switch(v?(ve(c,["skrollable-before"],["skrollable-after","skrollable-between"]),y&&b>-1&&(fe(c,m.eventType,Se),s.lastFrameIndex=-1)):(ve(c,["skrollable-after"],["skrollable-before","skrollable-between"]),y&&b<d&&(fe(c,p.eventType,Se),s.lastFrameIndex=d)),s.edge=v?-1:1,s.edgeStrategy){case"reset":K(c);continue;case"ease":f=h.frame;break;default:case"set":var T=h.props;for(o in T)l.call(T,o)&&(i=G(T[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i));continue}}else 0!==s.edge&&(ve(c,["skrollable","skrollable-between"],["skrollable-before","skrollable-after"]),s.edge=0);for(var k=0;k<d-1;k++)if(f>=u[k].frame&&f<=u[k+1].frame){var S=u[k],w=u[k+1];for(o in S.props)if(l.call(S.props,o)){var x=(f-S.frame)/(w.frame-S.frame);x=S.props[o].easing(x),i=B(S.props[o].value,w.props[o].value,x),i=G(i),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i)}y&&b!==k&&(fe(c,"down"===Se?S.eventType:w.eventType,Se),s.lastFrameIndex=k);break}}}(r,R.getScrollTop()),we=r,j.render&&j.render.call(R,o)),e&&e.call(R,!1)}xe=n},q=function(e){for(var t=0,r=e.keyFrames.length;t<r;t++){for(var n,o,a,l,i=e.keyFrames[t],s={};null!==(l=S.exec(i.props));)a=l[1],o=l[2],null!==(n=a.match(w))?(a=n[1],n=n[2]):n="linear",o=o.indexOf("!")?L(o):[o.slice(1)],s[a]={value:o,easing:N[n]};i.props=s}},L=function(e){var t=[];return F.lastIndex=0,e=e.replace(F,function(e){return e.replace(E,function(e){return e/255*100+"%"})}),H&&(C.lastIndex=0,e=e.replace(C,function(e){return H+e})),e=e.replace(E,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},M=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;t<r;t++)$(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)$(e.keyFrames[t],n)},$=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},B=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;n<o;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},G=function(e){var t=1;return A.lastIndex=0,e[0].replace(A,function(){return e[t++]})},K=function(e,t){for(var r,n,o=0,a=(e=[].concat(e)).length;o<a;o++)n=e[o],(r=U[n.___skrollable_id])&&(t?(n.style.cssText=r.dirtyStyleAttr,ve(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=pe(n),n.style.cssText=r.styleAttr,ve(n,r.classAttr)))},Y=function(){ae="translateZ(0)",a.setStyle(X,"transform",ae);var e=s(X),t=e.getPropertyValue("transform"),r=e.getPropertyValue(H+"transform");t&&"none"!==t||r&&"none"!==r||(ae="")};a.setStyle=function(e,t,r){var n=e.style;if("zIndex"===(t=t.replace(x,_).replace("-","")))isNaN(r)?n[t]=r:n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{D&&(n[D+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(e){}};var R,U,X,j,W,Z,J,Q,ee,te,re,ne,oe,ae,le,ie=a.addEvent=function(t,r,n){for(var o,a=function(t){return(t=t||e.event).target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)},l=0,i=(r=r.split(" ")).length;l<i;l++)o=r[l],t.addEventListener?t.addEventListener(o,n,!1):t.attachEvent("on"+o,a),He.push({element:t,name:o,listener:n})},se=a.removeEvent=function(e,t,r){for(var n=0,o=(t=t.split(" ")).length;n<o;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},ce=function(){for(var e,t=0,r=He.length;t<r;t++)e=He[t],se(e.element,e.name,e.listener);He=[]},fe=function(e,t,r){j.keyframe&&j.keyframe.call(R,e,t,r)},ue=function(){var e=R.getScrollTop();Te=0,W&&!Ce&&(o.style.height=""),function(){var e,t,r,o,a,l,s,c,f,u,d,m=n.clientHeight,p=de();for(c=0,f=U.length;c<f;c++)for(t=(e=U[c]).element,r=e.anchorTarget,a=0,l=(o=e.keyFrames).length;a<l;a++)u=(s=o[a]).offset,d=p[s.constant]||0,s.frame=u,s.isPercentage&&(u*=m,s.frame=u),"relative"===s.mode&&(K(t),s.frame=R.relativeToAbsolute(r,s.anchors[0],s.anchors[1])-u,K(t,!0)),s.frame+=d,W&&!s.isEnd&&s.frame>Te&&(Te=s.frame);for(Te=i.max(Te,me()),c=0,f=U.length;c<f;c++){for(a=0,l=(o=(e=U[c]).keyFrames).length;a<l;a++)d=p[(s=o[a]).constant]||0,s.isEnd&&(s.frame=Te-s.offset+d);e.keyFrames.sort(be)}}(),W&&!Ce&&(o.style.height=Te+n.clientHeight+"px"),Ce?R.setScrollTop(i.min(R.getScrollTop(),Te)):R.setScrollTop(e,!0),ne=!0},de=function(){var e,t,r=n.clientHeight,o={};for(e in Z)"function"==typeof(t=Z[e])?t=t.call(R):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),o[e]=t;return o},me=function(){var e=X&&X.offsetHeight||0;return i.max(e,o.scrollHeight,o.offsetHeight,n.scrollHeight,n.offsetHeight,n.clientHeight)-n.clientHeight},pe=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},ve=function(t,r,n){var o="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[o],o="baseVal"),void 0!==n){for(var a=t[o],l=0,i=n.length;l<i;l++)a=he(a).replace(he(n[l])," ");a=ge(a);for(var s=0,c=r.length;s<c;s++)-1===he(a).indexOf(he(r[s]))&&(a+=" "+r[s]);t[o]=ge(a)}else t[o]=r},ge=function(e){return e.replace(T,"")},he=function(e){return" "+e+" "},ye=Date.now||function(){return+new Date},be=function(e,t){return e.frame-t.frame},Te=0,ke=1,Se="down",we=-1,xe=ye(),_e=0,Ee=0,Ae=!1,Fe=0,Ce=!1,De=0,He=[];"function"==typeof define&&define.amd?define("skrollr",function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:e.skrollr=a}(window,document);