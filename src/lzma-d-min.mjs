var r="function"==typeof setImmediate?setImmediate:setTimeout,n=[4294967295,-4294967296],t=[0,0],f=[1,0];function u(r){var n=[];return n[r-1]=void 0,n}function o(r,n){return e(r[0]+n[0],r[1]+n[1])}function i(r,n){var t,f;return r[0]==n[0]&&r[1]==n[1]?0:(f=0>n[1],(t=0>r[1])&&!f?-1:!t&&f?1:0>function(r,n){return e(r[0]-n[0],r[1]-n[1])}(r,n)[1]?-1:1)}function e(r,n){var t,f;for(n=(n%=0x10000000000000000)-(t=n%4294967296)+(f=4294967296*Math.floor((r%=0x10000000000000000)/4294967296)),r=r-f+t;0>r;)r+=4294967296,n-=4294967296;for(;r>4294967295;)r-=4294967296,n+=4294967296;for(n%=0x10000000000000000;n>0x7fffffff00000000;)n-=0x10000000000000000;for(;-0x8000000000000000>n;)n+=0x10000000000000000;return[r,n]}function c(r){return 0>r?[r+4294967296,-4294967296]:[r,0]}function a(r){return 2147483648>r[0]?~~Math.max(Math.min(r[0],2147483647),-2147483648):~~Math.max(Math.min(r[0]-4294967296,2147483647),-2147483648)}function v(r){return r.count>r.t?255&r.u[r.t++]:-1}function l(r){var n=r.u;return n.length=r.count,n}function s(r,f,o){var i,e,a,l,s="",d=[];for(e=0;5>e;++e){if(-1==(a=v(f)))throw Error("truncated input");d[e]=a<<24>>24}if(!function(r,n){var t,f,o,i,e,c,a;if(5>n.length)return 0;for(o=(a=255&n[0])%9,i=(c=~~(a/9))%5,e=~~(c/5),t=0,f=0;4>f;++f)t+=(255&n[1+f])<<8*f;if(t>99999999||!function(r,n,t,f){if(n>8||t>4||f>4)return 0;!function(r,n,t){var f,o;if(null!=r.o&&r.i==t&&r.v==n)return;for(r.v=n,r.l=(1<<n)-1,r.i=t,r.o=u(o=1<<r.i+r.v),f=0;o>f;++f)r.o[f]=y({})}(r.s,t,n);var o=1<<f;return g(r.h,o),g(r.p,o),r.M=o-1,1}(r,o,i,e))return 0;return function(r,n){if(0>n)return 0;r.g!=n&&(r.g=n,r.m=Math.max(r.g,1),function(r,n){null!=r.S&&r.I==n||(r.S=u(n));r.I=n,r.D=0,r.$=0}(r.k,Math.max(r.m,4096)));return 1}(r,t)}(i=function(r){r.k={},r.L={},r.N=u(192),r.T=u(12),r.j=u(12),r.q=u(12),r.A=u(12),r.B=u(192),r.C=u(4),r.F=u(114),r.G=S({},4),r.h=m({}),r.p=m({}),r.s={};for(var n=0;4>n;++n)r.C[n]=S({},6);return r}({}),d))throw Error("corrupted input");for(e=0;64>e;e+=8){if(-1==(a=v(f)))throw Error("truncated input");1==(a=a.toString(16)).length&&(a="0"+a),s=a+""+s}r.H=/^0+$|^f+$/i.test(s)?n:(l=parseInt(s,16))>4294967295?n:c(l),r.J=function(r,n,f,u){return r.L.K=n,w(r.k),r.k.O=f,function(r){r.k.$=0,r.k.D=0,D(r.N),D(r.B),D(r.T),D(r.j),D(r.q),D(r.A),D(r.F),function(r){var n,t;for(t=1<<r.i+r.v,n=0;t>n;++n)D(r.o[n].P)}(r.s);for(var n=0;4>n;++n)D(r.C[n].R);E(r.h),E(r.p),D(r.G.R),function(r){r.U=0,r.Range=-1;for(var n=0;5>n;++n)r.U=r.U<<8|v(r.K)}(r.L)}(r),r.state=0,r.V=0,r.W=0,r.X=0,r.Y=0,r.Z=u,r._=t,r.rr=0,function(r,n){return r.nr=n,r.tr=null,r.ur=1,r}({},r)}(i,f,o,r.H)}function d(r,n){return r.or=function(r){return r.u=u(32),r.count=0,r}({}),s(r,function(r,n){return r.u=n,r.t=0,r.count=n.length,r}({},n),r.or),r}!function(){var r,n,t,f=[];for(r=0;256>r;++r){for(t=r,n=0;8>n;++n)0!=(1&t)?(t>>>=1,t^=-306674912):t>>>=1;f[r]=t}}();function h(r){var n=r.D-r.$;n&&(!function(r,n,t,f){!function(r,n,t,f,u){for(var o=0;u>o;++o)t[f+o]=r[n+o]}(n,t,r.u,r.count,f),r.count+=f}(r.O,r.S,r.$,n),r.I>r.D||(r.D=0),r.$=r.D)}function p(r,n){var t=r.D-n-1;return 0>t&&(t+=r.I),r.S[t]}function w(r){h(r),r.O=null}function M(r){if(!r.ur)throw Error("bad state");if(r.tr)throw Error("No encoding");return function(r){var u=function(r){var n,t,u,e,l,s;if(s=a(r._)&r.M,I(r.L,r.N,(r.state<<4)+s)){if(I(r.L,r.T,r.state))u=0,I(r.L,r.j,r.state)?(I(r.L,r.q,r.state)?(I(r.L,r.A,r.state)?(t=r.Y,r.Y=r.X):t=r.X,r.X=r.W):t=r.W,r.W=r.V,r.V=t):I(r.L,r.B,(r.state<<4)+s)||(r.state=7>r.state?9:11,u=1),u||(u=x(r.p,r.L,s)+2,r.state=7>r.state?8:11);else if(r.Y=r.X,r.X=r.W,r.W=r.V,u=2+x(r.h,r.L,s),r.state=7>r.state?7:10,4>(l=b(r.C[function(r){return 4>(r-=2)?r:3}(u)],r.L)))r.V=l;else if(r.V=(2|1&l)<<(e=(l>>1)-1),14>l)r.V+=function(r,n,t,f){var u,o,i=1,e=0;for(o=0;f>o;++o)u=I(t,r,n+i),i<<=1,i+=u,e|=u<<o;return e}(r.F,r.V-l-1,r.L,e);else if(r.V+=function(r,n){var t,f,u=0;for(t=n;0!=t;t-=1)r.Range>>>=1,r.U-=r.Range&(f=r.U-r.Range>>>31)-1,u=u<<1|1-f,-16777216&r.Range||(r.U=r.U<<8|v(r.K),r.Range<<=8);return u}(r.L,e-4)<<4,r.V+=function(r,n){var t,f,u=1,o=0;for(f=0;r.ir>f;++f)t=I(n,r.R,u),u<<=1,u+=t,o|=t<<f;return o}(r.G,r.L),0>r.V)return-1==r.V?1:-1;if(i(c(r.V),r._)>=0||r.V>=r.m)return-1;!function(r,n,t){var f=r.D-n-1;for(0>f&&(f+=r.I);0!=t;t-=1)r.I>f||(f=0),r.S[r.D]=r.S[f],r.D+=1,f+=1,r.I>r.D||h(r)}(r.k,r.V,u),r._=o(r._,c(u)),r.rr=p(r.k,0)}else n=function(r,n,t){return r.o[((n&r.l)<<r.i)+((255&t)>>>8-r.i)]}(r.s,a(r._),r.rr),r.rr=7>r.state?function(r,n){var t=1;do{t=t<<1|I(n,r.P,t)}while(256>t);return t<<24>>24}(n,r.L):function(r,n,t){var f,u,o=1;do{if(u=t>>7&1,t<<=1,f=I(n,r.P,(1+u<<8)+o),o=o<<1|f,u!=f){for(;256>o;)o=o<<1|I(n,r.P,o);break}}while(256>o);return o<<24>>24}(n,r.L,p(r.k,r.V)),function(r,n){r.S[r.D]=n,r.D+=1,r.I>r.D||h(r)}(r.k,r.rr),r.state=4>(d=r.state)?0:10>d?d-3:d-6,r._=o(r._,f);var d;return 0}(r.nr);if(-1==u)throw Error("corrupted input");r.er=n,r.cr=r.nr._,(u||i(r.nr.Z,t)>=0&&i(r.nr._,r.nr.Z)>=0)&&(h(r.nr.k),w(r.nr.k),r.nr.L.K=null,r.ur=0)}(r),r.ur}function g(r,n){for(;n>r.ar;r.ar+=1)r.vr[r.ar]=S({},3),r.lr[r.ar]=S({},3)}function x(r,n,t){if(!I(n,r.sr,0))return b(r.vr[t],n);var f=8;return I(n,r.sr,1)?f+=8+b(r.dr,n):f+=b(r.lr[t],n),f}function m(r){return r.sr=u(2),r.vr=u(16),r.lr=u(16),r.dr=S({},8),r.ar=0,r}function E(r){D(r.sr);for(var n=0;r.ar>n;++n)D(r.vr[n].R),D(r.lr[n].R);D(r.dr.R)}function y(r){return r.P=u(768),r}!function(){var r,n,t,f=2,u=[0,1];for(t=2;22>t;++t){var o=t;for(o>>=1,n=1,n<<=o-=1,r=0;n>r;++r,++f)u[f]=t<<24>>24}}();function S(r,n){return r.ir=n,r.R=u(1<<n),r}function b(r,n){var t,f=1;for(t=r.ir;0!=t;t-=1)f=(f<<1)+I(n,r.R,f);return f-(1<<r.ir)}function I(r,n,t){var f,u=n[t];return(-2147483648^(f=(r.Range>>>11)*u))>(-2147483648^r.U)?(r.Range=f,n[t]=u+(2048-u>>>5)<<16>>16,-16777216&r.Range||(r.U=r.U<<8|v(r.K),r.Range<<=8),0):(r.Range-=f,r.U-=f,n[t]=u-(u>>>5)<<16>>16,-16777216&r.Range||(r.U=r.U<<8|v(r.K),r.Range<<=8),1)}function D(r){for(var n=r.length-1;n>=0;--n)r[n]=1024}!function(){var r,n,t,f,u=[];for(n=8;n>=0;--n)for(f=1,r=1,r<<=9-n,t=f<<=9-n-1;r>t;++t)u[t]=(n<<6)+(r-t<<6>>>9-n-1)}();function $(r){for(var n,t,f,u=0,o=0,i=r.length,e=[],c=[];i>u;++u,++o){if(128&(n=255&r[u]))if(192==(224&n)){if(u+1>=i)return r;if(128!=(192&(t=255&r[++u])))return r;c[o]=(31&n)<<6|63&t}else{if(224!=(240&n))return r;if(u+2>=i)return r;if(128!=(192&(t=255&r[++u])))return r;if(128!=(192&(f=255&r[++u])))return r;c[o]=(15&n)<<12|(63&t)<<6|63&f}else{if(!n)return r;c[o]=n}16383==o&&(e.push(String.fromCharCode.apply(String,c)),o=-1)}return o>0&&(c.length=o,e.push(String.fromCharCode.apply(String,c))),e.join("")}function k(r){return r[1]+r[0]}function decompress(n,t,f){var u,o,i,e,c={},a=void 0===t&&void 0===f;if("function"!=typeof t&&(o=t,t=f=0),f=f||function(r){if(void 0!==o)return function(r,n){postMessage({action:3,cbn:n,result:r})}(i?r:-1,o)},t=t||function(r,n){if(void 0!==o)return postMessage({action:2,cbn:o,result:r,error:n})},a){for(c.d=d({},n);M(c.d.J););return $(l(c.d.or))}try{c.d=d({},n),e=k(c.d.H),i=e>-1,f(0)}catch(r){return t(null,r)}r((function n(){try{for(var o,a=0,v=(new Date).getTime();M(c.d.J);)if(++a%1e3==0&&(new Date).getTime()-v>200)return i&&(u=k(c.d.J.nr._)/e,f(u)),r(n,0),0;f(1),o=$(l(c.d.or)),r(t.bind(null,o),0)}catch(r){t(null,r)}}),0)}function LZMA(){}LZMA.decompress=decompress,LZMA.prototype.decompress=decompress,"undefined"!=typeof self&&"importScripts"in self&&addEventListener("message",(function(r){2==r.data.action&&decompress(r.data.data,r.data.cbn)}));export{LZMA,decompress};
//# sourceMappingURL=lzma-d-min.mjs.map
