(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[3],{1666:function(e,t,r){"use strict";(function(t){var n=r(88),a=n(r(249)),i=n(r(250)),s=r(2124),u=s.Z_SYNC_FLUSH,c=s.Inflate;function o(e){return f.apply(this,arguments)}function f(){return(f=(0,i.default)(a.default.mark((function e(r){var n,i,s,o,f,l,h;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,i=0,s=0,o=[];case 4:if(l=r.slice(i),f=new c,n=f.strm,f.push(l,u),!f.err){e.next=11;break}throw new Error(f.msg);case 11:i+=n.next_in,o[s]=t.from(f.result),s+=1;case 14:if(n.avail_in){e.next=4;break}case 15:return h=t.concat(o),e.abrupt("return",h);case 19:if(e.prev=19,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=23;break}throw new Error("problem decompressing block: incorrect gzip header check");case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function l(){return(l=(0,i.default)(a.default.mark((function e(r){var n,i,s,o,f,l,h,p,d,v;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,i=0,s=0,o=[],f=[],l=[];case 6:if(h=r.slice(i),p=new c,n=p.strm,p.push(h,u),!p.err){e.next=12;break}throw new Error(p.msg);case 12:d=t.from(p.result),o.push(d),f.push(i),l.push(s),i+=n.next_in,s+=d.length;case 18:if(n.avail_in){e.next=6;break}case 19:return v=t.concat(o),e.abrupt("return",{buffer:v,cpositions:f,dpositions:l});case 23:if(e.prev=23,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=27;break}throw new Error("problem decompressing block: incorrect gzip header check");case 27:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}function h(){return(h=(0,i.default)(a.default.mark((function e(r,n){var i,s,o,f,l,h,p,d,v,k,b,w;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,s=n.minv.blockPosition,o=n.minv.dataPosition,f=[],l=[],h=[];case 6:if(p=r.slice(s-n.minv.blockPosition),d=new c,i=d.strm,d.push(p,u),!d.err){e.next=12;break}throw new Error(d.msg);case 12:if(v=t.from(d.result),f.push(v),k=v.length,l.push(s),h.push(o),1===f.length&&n.minv.dataPosition&&(f[0]=f[0].slice(n.minv.dataPosition),k=f[0].length),b=s,s+=i.next_in,o+=k,!(b>=n.maxv.blockPosition)){e.next=26;break}return f[f.length-1]=f[f.length-1].slice(0,n.maxv.blockPosition===n.minv.blockPosition?n.maxv.dataPosition-n.minv.dataPosition+1:n.maxv.dataPosition+1),l.push(s),h.push(o),e.abrupt("break",27);case 26:if(i.avail_in){e.next=6;break}case 27:return w=t.concat(f),e.abrupt("return",{buffer:w,cpositions:l,dpositions:h});case 31:if(e.prev=31,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=35;break}throw new Error("problem decompressing block: incorrect gzip header check");case 35:throw e.t0;case 36:case"end":return e.stop()}}),e,null,[[0,31]])})))).apply(this,arguments)}e.exports={unzip:o,unzipChunk:function(e){return l.apply(this,arguments)},unzipChunkSlice:function(e,t){return h.apply(this,arguments)},pakoUnzip:o,nodeUnzip:function(){throw new Error("nodeUnzip not implemented.")}}}).call(this,r(117).Buffer)},1667:function(e,t,r){"use strict";var n=r(88),a=n(r(249)),i=n(r(250)),s=n(r(136)),u=n(r(157)),c=r(392),o=function(){function e(t){(0,s.default)(this,e),this.fdPromise=c.open(t,"r"),this.path=t}return(0,u.default)(e,[{key:"read",value:function(){var e=(0,i.default)(a.default.mark((function e(t,r,n,i){var s,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fdPromise;case 2:return s=e.sent,e.next=5,c.read(s,t,r,n,i);case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=(0,i.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fdPromise;case 2:return t=e.sent,e.abrupt("return",c.fstat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();e.exports=o},2248:function(e,t,r){"use strict";(function(t){var n=r(88),a=n(r(738)),i=n(r(249)),s=n(r(250)),u=n(r(136)),c=n(r(157)),o=r(1666).unzip,f=r(1667),l=r(2249),h=function(){function e(t){var r=t.filehandle,n=t.path,a=t.gziFilehandle,i=t.gziPath;if((0,u.default)(this,e),r)this.filehandle=r;else{if(!n)throw new TypeError("either filehandle or path must be defined");this.filehandle=new f(n)}if(!a&&!i&&!n)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new l({filehandle:a,path:a||i||!n?"".concat(n,".gzi"):i})}return(0,c.default)(e,[{key:"stat",value:function(){var e=(0,s.default)(i.default.mark((function e(){var t;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.stat();case 2:return t=e.sent,e.t0=Object,e.t1=t,e.next=7,this.getUncompressedFileSize();case 7:return e.t2=e.sent,e.t3=void 0,e.t4=void 0,e.t5={size:e.t2,blocks:e.t3,blksize:e.t4},e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t5));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUncompressedFileSize",value:function(){var e=(0,s.default)(i.default.mark((function e(){var r,n,s,u,c,o,f,l;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gzi.getLastBlock();case 2:return r=e.sent,n=(0,a.default)(r,2),s=n[1],e.next=7,this.filehandle.stat();case 7:return u=e.sent,c=u.size,o=t.allocUnsafe(4),e.next=12,this.filehandle.read(o,0,4,c-28-4);case 12:if(f=e.sent,4===f.bytesRead){e.next=16;break}throw new Error("read error");case 16:return l=o.readUInt32LE(0),e.abrupt("return",s+l);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_readAndUncompressBlock",value:function(){var e=(0,s.default)(i.default.mark((function e(t,r,n){var s,u,c,f,l,h,p;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,a.default)(r,1),u=s[0],c=(0,a.default)(n,1),f=c[0],l=f){e.next=7;break}return e.next=6,this.filehandle.stat();case 6:l=e.sent.size;case 7:return h=l-u,e.next=10,this.filehandle.read(t,0,h,u);case 10:return e.next=12,o(t.slice(0,h));case 12:return p=e.sent,e.abrupt("return",p);case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=(0,s.default)(i.default.mark((function e(r,n,s,u){var c,o,f,l,h,p,d,v,k,b;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gzi.getRelevantBlocksForRead(s,u);case 2:c=e.sent,o=t.allocUnsafe(65536),f=n,l=0,h=0;case 7:if(!(h<c.length-1)){e.next=18;break}return e.next=10,this._readAndUncompressBlock(o,c[h],c[h+1]);case 10:p=e.sent,d=(0,a.default)(c[h],2),v=d[1],k=v>=u?0:u-v,b=Math.min(u+s,v+p.length)-v,k>=0&&k<p.length&&(p.copy(r,f,k,b),f+=b-k,l+=b-k);case 15:h+=1,e.next=7;break;case 18:return e.abrupt("return",{bytesRead:l,buffer:r});case 19:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()}]),e}();e.exports=h}).call(this,r(117).Buffer)},2249:function(e,t,r){"use strict";(function(t){var n=r(88),a=n(r(249)),i=n(r(250)),s=n(r(136)),u=n(r(157)),c=r(289),o=r(1667),f=function(){function e(t){var r=t.filehandle,n=t.path;if((0,s.default)(this,e),r)this.filehandle=r;else{if(!n)throw new TypeError("either filehandle or path must be defined");this.filehandle=new o(n)}}return(0,u.default)(e,[{key:"_readLongWithOverflow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=c.fromBytesLE(e.slice(t,t+8),r);if(n.greaterThan(Number.MAX_SAFE_INTEGER)||n.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return n.toNumber()}},{key:"_getIndex",value:function(){return this.index||(this.index=this._readIndex()),this.index}},{key:"_readIndex",value:function(){var e=(0,i.default)(a.default.mark((function e(){var r,n,i,s,u,c,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.allocUnsafe(8),e.next=3,this.filehandle.read(r,0,8,0);case 3:if(n=this._readLongWithOverflow(r,0,!0)){e.next=6;break}return e.abrupt("return",[[0,0]]);case 6:if((i=new Array(n+1))[0]=[0,0],!((s=16*n)>Number.MAX_SAFE_INTEGER)){e.next=11;break}throw new TypeError("integer overflow");case 11:return r=t.allocUnsafe(s),e.next=14,this.filehandle.read(r,0,s,8);case 14:for(u=0;u<n;u+=1)c=this._readLongWithOverflow(r,16*u),o=this._readLongWithOverflow(r,16*u+8),i[u+1]=[c,o];return e.abrupt("return",i);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLastBlock",value:function(){var e=(0,i.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndex();case 2:if((t=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",t[t.length-1]);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRelevantBlocksForRead",value:function(){var e=(0,i.default)(a.default.mark((function e(t,r){var n,i,s,u,c,o,f,l,h;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r+t,0!==t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,this._getIndex();case 5:for(i=e.sent,s=[],u=function(e,t){var n=e[1],a=t?t[1]:1/0;return n<=r&&a>r?0:n<r?-1:1},c=0,o=i.length-1,f=Math.floor(i.length/2),l=u(i[f],i[f+1]);0!==l;)l>0?o=f-1:l<0&&(c=f+1),f=Math.ceil((o-c)/2)+c,l=u(i[f],i[f+1]);s.push(i[f]),h=f+1;case 15:if(!(h<i.length)){e.next=22;break}if(s.push(i[h]),!(i[h][1]>=n)){e.next=19;break}return e.abrupt("break",22);case 19:h+=1,e.next=15;break;case 22:return s[s.length-1][1]<n&&s.push([]),e.abrupt("return",s);case 24:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}();e.exports=f}).call(this,r(117).Buffer)},227:function(e,t,r){"use strict";var n=r(2248),a=r(1666),i=a.unzip,s=a.unzipChunk,u=a.unzipChunkSlice;e.exports={BgzfFilehandle:n,unzip:i,unzipChunk:s,unzipChunkSlice:u}}}]);
//# sourceMappingURL=3.3f1ba2cd.chunk.js.map