import{w as t,t as n,S as e,i as o,s,e as a,c as r,a as l,d as c,b as i,f as u,l as h,n as f,g as p,h as m,j as d,k as v,m as g,o as w,p as I,q as y,r as $,u as k,v as b,x as E,y as x,z as L,A as S,B as A,C as D,D as j,E as P,F as C,G as H,H as O,I as z,J as _,K as M,L as T,M as V}from"./vendor.f8b52bf3.js";const q={clear:{description:"clears the terminal",action:()=>ct.set([])},help:{description:"shows a list of available commands",action:()=>it("help")},whoami:{description:"shows information about the site",action:()=>it("whoami")},history:{description:"shows a list of commands you have used",action:()=>it("history")},time:{description:"show the current time",action:()=>it("time")}},B=t([]);async function G(t){""===t&&it("input"),t&&(B.update((n=>[...n,t])),await async function(t){if(!t)return;if(!Object.keys(q).includes(t))return void it("noCommand",{error:`command '${t}' not found`});q[t].action?q[t].action():console.error("command not implemented?");await n()}(t),await it("input"))}function N(t){let n,e,o;return{c(){n=a("div"),this.h()},l(t){n=r(t,"DIV",{class:!0,contenteditable:!0,autofocus:!0}),l(n).forEach(c),this.h()},h(){i(n,"class","input svelte-1jtujm"),i(n,"contenteditable",t[1]),i(n,"autofocus","")},m(s,a){u(s,n,a),t[5](n),n.focus(),e||(o=h(n,"keydown",t[2]),e=!0)},p(t,[e]){2&e&&i(n,"contenteditable",t[1])},i:f,o:f,d(s){s&&c(n),t[5](null),e=!1,o()}}}function U(t,e,o){let s;p(t,B,(t=>o(7,s=t)));var a=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(s,a){function r(t){try{c(o.next(t))}catch(n){a(n)}}function l(t){try{c(o.throw(t))}catch(n){a(n)}}function c(t){var n;t.done?s(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,l)}c((o=o.apply(t,n||[])).next())}))};let r,{componentInstance:l}=e,{disabled:c=!1}=e,i=String(!c);function u(t){const n=function(t){const n=s.length;void 0===r&&(r=n);"up"===t?r--:r++,r<0&&(r=0);r>n&&(r=n-1);return s[r]}(t);o(0,l.textContent=n,l)}return t.$$set=t=>{"componentInstance"in t&&o(0,l=t.componentInstance),"disabled"in t&&o(3,c=t.disabled)},t.$$.update=()=>{8&t.$$.dirty&&o(1,i=String(!c))},[l,i,t=>a(void 0,void 0,void 0,(function*(){"Enter"===t.key?(t.preventDefault(),yield G(l.textContent),yield n(),o(3,c=!0)):"ArrowUp"===t.key?u("up"):"ArrowDown"===t.key&&u("down")})),c,function(){l.focus()},function(t){m[t?"unshift":"push"]((()=>{l=t,o(0,l)}))}]}function W(t){let n,e;return{c(){n=a("div"),e=d(t[0])},l(o){n=r(o,"DIV",{});var s=l(n);e=v(s,t[0]),s.forEach(c)},m(t,o){u(t,n,o),g(n,e)},p(t,[n]){1&n&&w(e,t[0])},i:f,o:f,d(t){t&&c(n)}}}function F(t,n,e){let{error:o}=n;return t.$$set=t=>{"error"in t&&e(0,o=t.error)},[o]}function J(t,n,e){const o=t.slice();return o[3]=n[e],o}function K(t){let n,e,o,s,f=t[3]+"";function p(){return t[1](t[3])}return{c(){n=a("li"),e=d(f),this.h()},l(t){n=r(t,"LI",{class:!0});var o=l(n);e=v(o,f),o.forEach(c),this.h()},h(){i(n,"class","svelte-y2ssl4")},m(t,a){u(t,n,a),g(n,e),o||(s=h(n,"click",p),o=!0)},p(n,e){t=n},d(t){t&&c(n),o=!1,s()}}}function Q(t){let n,e,o,s,h,p,m=Object.keys(q),w=[];for(let a=0;a<m.length;a+=1)w[a]=K(J(t,m,a));return{c(){n=a("p"),e=d("Available commands :"),o=I();for(let t=0;t<w.length;t+=1)w[t].c();s=I(),h=a("p"),p=d("----------------------------"),this.h()},l(t){n=r(t,"P",{class:!0});var a=l(n);e=v(a,"Available commands :"),a.forEach(c),o=y(t);for(let n=0;n<w.length;n+=1)w[n].l(t);s=y(t),h=r(t,"P",{class:!0});var i=l(h);p=v(i,"----------------------------"),i.forEach(c),this.h()},h(){i(n,"class","heading svelte-y2ssl4"),i(h,"class","eof")},m(t,a){u(t,n,a),g(n,e),u(t,o,a);for(let n=0;n<w.length;n+=1)w[n].m(t,a);u(t,s,a),u(t,h,a),g(h,p)},p(t,[n]){if(1&n){let e;for(m=Object.keys(q),e=0;e<m.length;e+=1){const o=J(t,m,e);w[e]?w[e].p(o,n):(w[e]=K(o),w[e].c(),w[e].m(s.parentNode,s))}for(;e<w.length;e+=1)w[e].d(1);w.length=m.length}},i:f,o:f,d(t){t&&c(n),t&&c(o),$(w,t),t&&c(s),t&&c(h)}}}function R(t,n,e){let o;function s(t){const n=o[o.length-1];n&&n.props&&n.props.componentInstance&&(k(ct,o[o.length-1].props.componentInstance.textContent=t,o),G(t))}p(t,ct,(t=>e(2,o=t)));return[s,t=>s(t)]}function X(t,n,e){const o=t.slice();return o[1]=n[e],o}function Y(t){let n,e,o,s,h,f=t[1].name+"";return{c(){n=a("a"),e=a("li"),o=d(f),s=I(),this.h()},l(t){n=r(t,"A",{href:!0,target:!0});var a=l(n);e=r(a,"LI",{class:!0});var i=l(e);o=v(i,f),i.forEach(c),s=y(a),a.forEach(c),this.h()},h(){i(e,"class","svelte-1n0nkhz"),i(n,"href",h=t[1].url),i(n,"target","_blank")},m(t,a){u(t,n,a),g(n,e),g(e,o),g(n,s)},p(t,e){1&e&&f!==(f=t[1].name+"")&&w(o,f),1&e&&h!==(h=t[1].url)&&i(n,"href",h)},d(t){t&&c(n)}}}function Z(t){let n,e,o,s,h,p,m,w,k,b,E,x,L,S,A=t[0],D=[];for(let a=0;a<A.length;a+=1)D[a]=Y(X(t,A,a));return{c(){n=d("------------------\r\n"),e=a("h1"),o=d("WHO AM I"),s=d("\r\n------------------\r\n\r\n"),h=a("p"),p=d("Hello there, welcome to my site! I am Salman, a full stack developer from India 🇮🇳. I have 4+ years experience in web development. I am passionate about web development and love to learn new things!"),m=I(),w=a("p"),k=d("I am currently working as a full stack developer at a startup."),b=I(),E=a("p"),x=d("Social links:"),L=I(),S=a("ul");for(let t=0;t<D.length;t+=1)D[t].c();this.h()},l(t){n=v(t,"------------------\r\n"),e=r(t,"H1",{class:!0});var a=l(e);o=v(a,"WHO AM I"),a.forEach(c),s=v(t,"\r\n------------------\r\n\r\n"),h=r(t,"P",{});var i=l(h);p=v(i,"Hello there, welcome to my site! I am Salman, a full stack developer from India 🇮🇳. I have 4+ years experience in web development. I am passionate about web development and love to learn new things!"),i.forEach(c),m=y(t),w=r(t,"P",{});var u=l(w);k=v(u,"I am currently working as a full stack developer at a startup."),u.forEach(c),b=y(t),E=r(t,"P",{class:!0});var f=l(E);x=v(f,"Social links:"),f.forEach(c),L=y(t),S=r(t,"UL",{class:!0});var d=l(S);for(let n=0;n<D.length;n+=1)D[n].l(d);d.forEach(c),this.h()},h(){i(e,"class","svelte-1n0nkhz"),i(E,"class","header-label svelte-1n0nkhz"),i(S,"class","svelte-1n0nkhz")},m(t,a){u(t,n,a),u(t,e,a),g(e,o),u(t,s,a),u(t,h,a),g(h,p),u(t,m,a),u(t,w,a),g(w,k),u(t,b,a),u(t,E,a),g(E,x),u(t,L,a),u(t,S,a);for(let n=0;n<D.length;n+=1)D[n].m(S,null)},p(t,[n]){if(1&n){let e;for(A=t[0],e=0;e<A.length;e+=1){const o=X(t,A,e);D[e]?D[e].p(o,n):(D[e]=Y(o),D[e].c(),D[e].m(S,null))}for(;e<D.length;e+=1)D[e].d(1);D.length=A.length}},i:f,o:f,d(t){t&&c(n),t&&c(e),t&&c(s),t&&c(h),t&&c(m),t&&c(w),t&&c(b),t&&c(E),t&&c(L),t&&c(S),$(D,t)}}}function tt(t,n,e){let{links:o=[{name:"Github",url:"https://github.com/salman2301"},{name:"Twitter",url:"https://twitter.com/salman2301"},{name:"LinkedIn",url:"https://www.linkedin.com/in/asalman2301/"}]}=n;return t.$$set=t=>{"links"in t&&e(0,o=t.links)},[o]}function nt(t,n,e){const o=t.slice();return o[2]=n[e],o}function et(t){let n,e,o,s=t[2]+"";return{c(){n=a("li"),e=d(s),o=I()},l(t){n=r(t,"LI",{});var a=l(n);e=v(a,s),o=y(a),a.forEach(c)},m(t,s){u(t,n,s),g(n,e),g(n,o)},p:f,d(t){t&&c(n)}}}function ot(t){let n,e,o,s,h=t[0](),p=[];for(let a=0;a<h.length;a+=1)p[a]=et(nt(t,h,a));return{c(){n=a("p"),e=d("List of commands:"),o=I(),s=a("ol");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){n=r(t,"P",{});var a=l(n);e=v(a,"List of commands:"),a.forEach(c),o=y(t),s=r(t,"OL",{class:!0});var i=l(s);for(let n=0;n<p.length;n+=1)p[n].l(i);i.forEach(c),this.h()},h(){i(s,"class","svelte-1l8u3p7")},m(t,a){u(t,n,a),g(n,e),u(t,o,a),u(t,s,a);for(let n=0;n<p.length;n+=1)p[n].m(s,null)},p(t,[n]){if(1&n){let e;for(h=t[0](),e=0;e<h.length;e+=1){const o=nt(t,h,e);p[e]?p[e].p(o,n):(p[e]=et(o),p[e].c(),p[e].m(s,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=h.length}},i:f,o:f,d(t){t&&c(n),t&&c(o),t&&c(s),$(p,t)}}}function st(t,n,e){let o;return p(t,B,(t=>e(1,o=t))),[function(){return o.slice(-10)}]}function at(t){let n;return{c(){n=d(t[0])},l(e){n=v(e,t[0])},m(t,e){u(t,n,e)},p(t,[e]){1&e&&w(n,t[0])},i:f,o:f,d(t){t&&c(n)}}}function rt(t,n,e){let o,{time:s=(new Date).toLocaleTimeString()}=n;return b((()=>{o=setInterval((()=>{e(0,s=(new Date).toLocaleTimeString())}),200)})),E((()=>{clearInterval(o)})),t.$$set=t=>{"time"in t&&e(0,s=t.time)},[s]}const lt={input:class extends e{constructor(t){super(),o(this,t,U,N,s,{componentInstance:0,disabled:3,focus:4})}get focus(){return this.$$.ctx[4]}},noCommand:class extends e{constructor(t){super(),o(this,t,F,W,s,{error:0})}},help:class extends e{constructor(t){super(),o(this,t,R,Q,s,{})}},whoami:class extends e{constructor(t){super(),o(this,t,tt,Z,s,{links:0})}},history:class extends e{constructor(t){super(),o(this,t,st,ot,s,{})}},time:class extends e{constructor(t){super(),o(this,t,rt,at,s,{time:0})}}},ct=t([]);async function it(t,e={}){let o=x(ct);o.push({key:t,component:lt[t],props:e}),ct.set(o),await n()}function ut(t,n,e){const o=t.slice();return o[3]=n[e],o[4]=n,o[5]=e,o}function ht(t){let n,e,o,s;const a=[t[3].props];function r(n){t[2](n,t[3])}var l=t[3].component;function i(t){let n={};for(let e=0;e<a.length;e+=1)n=M(n,a[e]);return void 0!==t[3].props.componentInstance&&(n.componentInstance=t[3].props.componentInstance),{props:n}}return l&&(n=new l(i(t)),m.push((()=>C(n,"componentInstance",r)))),{c(){n&&H(n.$$.fragment),o=L()},l(t){n&&T(n.$$.fragment,t),o=L()},m(t,e){n&&z(n,t,e),u(t,o,e),s=!0},p(s,c){t=s;const u=1&c?S(a,[A(t[3].props)]):{};if(!e&&1&c&&(e=!0,u.componentInstance=t[3].props.componentInstance,D((()=>e=!1))),l!==(l=t[3].component)){if(n){V();const t=n;j(t.$$.fragment,1,0,(()=>{_(t,1)})),P()}l?(n=new l(i(t)),m.push((()=>C(n,"componentInstance",r))),H(n.$$.fragment),O(n.$$.fragment,1),z(n,o.parentNode,o)):n=null}else l&&n.$set(u)},i(t){s||(n&&O(n.$$.fragment,t),s=!0)},o(t){n&&j(n.$$.fragment,t),s=!1},d(t){t&&c(o),n&&_(n,t)}}}function ft(t){let n,e,o,s,f=t[0],p=[];for(let a=0;a<f.length;a+=1)p[a]=ht(ut(t,f,a));const m=t=>j(p[t],1,1,(()=>{p[t]=null}));return{c(){n=a("div");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){n=r(t,"DIV",{class:!0});var e=l(n);for(let n=0;n<p.length;n+=1)p[n].l(e);e.forEach(c),this.h()},h(){i(n,"class","container svelte-spey4w")},m(a,r){u(a,n,r);for(let t=0;t<p.length;t+=1)p[t].m(n,null);e=!0,o||(s=h(n,"click",t[1]),o=!0)},p(t,[e]){if(1&e){let o;for(f=t[0],o=0;o<f.length;o+=1){const s=ut(t,f,o);p[o]?(p[o].p(s,e),O(p[o],1)):(p[o]=ht(s),p[o].c(),O(p[o],1),p[o].m(n,null))}for(V(),o=f.length;o<p.length;o+=1)m(o);P()}},i(t){if(!e){for(let t=0;t<f.length;t+=1)O(p[t]);e=!0}},o(t){p=p.filter(Boolean);for(let n=0;n<p.length;n+=1)j(p[n]);e=!1},d(t){t&&c(n),$(p,t),o=!1,s()}}}function pt(t,n,e){let o;return p(t,ct,(t=>e(0,o=t))),b((()=>{it("input")})),[o,function(){var t,n;const e=o[o.length-1];"input"===e.key&&(null===(n=null===(t=e.props.componentInstance)||void 0===t?void 0:t.focus)||void 0===n||n.call(t))},function(n,e){t.$$.not_equal(e.props.componentInstance,n)&&(e.props.componentInstance=n,ct.set(o))}]}new class extends e{constructor(t){super(),o(this,t,pt,ft,s,{})}}({target:document.body});
