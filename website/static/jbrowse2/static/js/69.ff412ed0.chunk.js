(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[69],{2411:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),c=t(51),l=t(2472),r=t(2475),i=t(2447),s=t(2476),u=t(2443),m=t(2441),d=t(2478),E=t(2440),b=t(161),p=t.n(b),f=t(86),C=t(82),g=Object(c.a)((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},connectionContainer:{margin:e.spacing(4),width:500}}}));n.default=Object(f.observer)((function(e){var n=e.session,t=e.handleClose,a=e.breakConnection,c=g(),b=n.adminMode,f=n.connections,h=n.sessionConnections;return o.a.createElement(l.a,{open:!0,onClose:t,maxWidth:"lg"},o.a.createElement(r.a,null,"Delete connections",o.a.createElement(i.a,{className:c.closeButton,onClick:function(){return t()}},o.a.createElement(p.a,null))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,"Click the X icon to delete the connection from your config completely"),o.a.createElement("div",{className:c.connectionContainer},f.map((function(e){var n=Object(C.readConfObject)(e,"name");return o.a.createElement("div",{key:"conn-".concat(n)},o.a.createElement(u.a,null,b||(null===h||void 0===h?void 0:h.includes(e))?o.a.createElement(i.a,{onClick:function(){return a(e,!0)}},o.a.createElement(p.a,{color:"error"})):o.a.createElement(m.a,{title:"Unable to delete connection in config file as non-admin user"},o.a.createElement(i.a,null,o.a.createElement(p.a,{color:"disabled"}))),n))})),f.length?null:o.a.createElement(u.a,null,"No connections found"))),o.a.createElement(d.a,null,o.a.createElement(E.a,{onClick:function(){return t()},variant:"contained",color:"primary"},"Close")))}))}}]);
//# sourceMappingURL=69.ff412ed0.chunk.js.map