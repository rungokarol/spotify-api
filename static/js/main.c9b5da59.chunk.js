(this.webpackJsonpspotify_api=this.webpackJsonpspotify_api||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},35:function(e,t,n){e.exports=n(68)},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),s=(n(40),n(41),n(10)),i=n(27),u=n(11),l=r.a.createContext({token:null,onTokenChange:function(){},isAuthenticated:function(){},logout:function(){}}),p=l,m=function(e){var t=e.component,n=Object(i.a)(e,["component"]),c=Object(a.useContext)(p).isAuthenticated;return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return c()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},f=n(9),h=function(){var e=Object(a.useContext)(p).logout;return r.a.createElement("button",{onClick:function(){return e()}},"Logout")},d=(n(47),function(e){return r.a.createElement("nav",{className:"Navigation"},r.a.createElement("ul",{className:"NavItems"},r.a.createElement("li",{className:"NavItem"},r.a.createElement(f.b,{to:"/"},"Home")),r.a.createElement("li",{className:"NavItem"},r.a.createElement(f.b,{to:"/playlists"},"Playlists")),r.a.createElement("li",{className:"NavItem"},r.a.createElement(f.b,{to:"/favourites"},"Favourites")),r.a.createElement("li",{className:"NavItem"},r.a.createElement(h,null))))}),v=n(30),g=n.n(v),y="".concat("https://accounts.spotify.com").concat("/authorize","?\nclient_id=").concat("c2c889279e7140c683ec1c7cdd8bb977","&\nredirect_uri=").concat("https://rungokarol.github.io/spotify-api","&\nscope=").concat(["user-top-read","user-read-currently-playing","user-read-playback-state","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),b=function(e){var t=Object(a.useContext)(p);return Object(a.useEffect)((function(){if(console.log(window.history.state),null!==window.history.state){var n=window.history.state.state.from.hash;if(n){console.log(n);var a=n.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token;console.log(JSON.stringify(a)),a&&(console.log("update token: ".concat(a)),t.onTokenChange(a),e.history.push("/home"))}else console.log("nullable hash")}else console.log("null history state")}),[t,e.history]),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:y,rel:"noopener noreferrer"},"Connect with Spotify"))},E=n(2),k=n.n(E),w=n(6),x=n(34),j=(n(49),function(e){var t=e.playlist,n=t.name,c=t.img,o=t.tracks,s=Object(a.useState)(!1),i=Object(u.a)(s,2),l=i[0],p=i[1],m=l?r.a.createElement("div",{className:"Playlist--tracks"},o&&o.map((function(e){return r.a.createElement("p",null,e)}))):null;return r.a.createElement("div",{className:"Playlist"},r.a.createElement("h1",null,n),r.a.createElement("img",{src:c.url,alt:"Logo",width:c.width,height:c.height,onClick:function(){p((function(e){return!e}))}}),m)}),O=n(31),N=n(32),I=n(33),C=n.n(I),P="https://api.spotify.com/v1",A=function(e){return{Authorization:"Bearer ".concat(e),"Content-Type":"application/json",Accept:"application/json"}},S=function(){function e(t){Object(O.a)(this,e),this.axiosInstance=C.a.create({baseURL:P,headers:A(t)})}return Object(N.a)(e,[{key:"getUserInfo",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance({url:"/me"});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDevices",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance({url:"/me/player/devices",method:"get"});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeSongInDevice",value:function(e){return this.axiosInstance({url:"/me/player/play?device_id=".concat(e),method:"put",data:JSON.stringify({uris:["spotify:track:6q5FIPaFNs5XLvKLKfSdnT"]})})}},{key:"getMyPlaylists",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,a=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserInfo();case 2:return t=e.sent,e.next=5,this.getPlaylists(t.id);case 5:return n=e.sent,e.next=8,Promise.all(n.items.map(function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getTracks(t.id);case 2:return n=e.sent,e.abrupt("return",{id:t.id,name:t.name,img:t.images[2],tracks:n.items.map((function(e){return e.track.name}))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPlaylists",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance({url:"/users/".concat(t,"/playlists"),method:"get"});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTracks",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance({url:"/playlists/".concat(t,"/tracks"),method:"get"});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=(n(67),function(e){var t=Object(a.useContext)(p).token,n=Object(a.useMemo)((function(){return new S(t)}),[t]),c=Object(a.useState)([]),o=Object(u.a)(c,2),s=o[0],i=o[1],l=function(e){i(Object(x.a)(e))};return Object(a.useEffect)((function(){Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,n.getMyPlaylists();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[n]),r.a.createElement("div",{className:"Playlists"},r.a.createElement("h2",null,"Playlists!"),s.map((function(e){return r.a.createElement(j,{key:e.id,playlist:e})})))}),_=function(e){var t=Object(a.useContext)(p).token,n=new S(t),c=function(){var e=Object(w.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getDevices();case 3:t=e.sent,a=t.data.devices[0].id,console.log(a),n.changeSongInDevice(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{onClick:c}," Change song "))};var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login",component:b}),r.a.createElement(m,{exact:!0,path:"/",component:_}),r.a.createElement(m,{path:"/playlists",component:T}),r.a.createElement(s.b,{render:function(){return r.a.createElement(s.a,{to:"/"})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=r.a.createElement((function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement(l.Provider,{value:{token:c,onTokenChange:function(e){console.log("NOWY TOKEN: ".concat(e)),o(e)},isAuthenticated:function(){return Boolean(c)},logout:function(){console.log("Logging out..."),o(null)}}},console.log(c),e.children)}),null,r.a.createElement(f.a,null,r.a.createElement(L,null)));o.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c9b5da59.chunk.js.map