(this.webpackJsonpbucket_place=this.webpackJsonpbucket_place||[]).push([[0],{11:function(e,t,a){e.exports={character:"CharacterCard_character__Y5UAR",wrapper:"CharacterCard_wrapper__2IIj0",characterImg:"CharacterCard_characterImg__1pZSK",characterInfo:"CharacterCard_characterInfo__U7NyI",name:"CharacterCard_name__YHVab",id:"CharacterCard_id__edsWf",bookmarkButton:"CharacterCard_bookmarkButton__1dNoH",bookmarkImg:"CharacterCard_bookmarkImg__3rGeY",link:"CharacterCard_link__1x7uQ",alive:"CharacterCard_alive__2gto1",dead:"CharacterCard_dead__2KxEm"}},18:function(e,t,a){e.exports={wrapper:"CharacterDetail_wrapper__N3Qhm",image:"CharacterDetail_image__2wdiq",imageBack:"CharacterDetail_imageBack__3fNUM",name:"CharacterDetail_name__1Q5HK",episode:"CharacterDetail_episode__k6TO1",alive:"CharacterDetail_alive__2bfLq",dead:"CharacterDetail_dead__2s3l5"}},22:function(e,t,a){e.exports={wrapper:"CharacterList_wrapper__jjzlB",characters:"CharacterList_characters__2pVI_",noBookmark:"CharacterList_noBookmark__lpcSS",noBookmarkImg:"CharacterList_noBookmarkImg__21lYN"}},23:function(e,t,a){e.exports={wrapper:"Searching_wrapper__olwy7",section:"Searching_section__1RPhA",labelWrapper:"Searching_labelWrapper__3gPuw",noResultImg:"Searching_noResultImg__2DLU1"}},31:function(e,t,a){e.exports={header:"Header_header__3mObx",back:"Header_back__19ZfB"}},50:function(e,t,a){},78:function(e,t,a){e.exports={header:"FilteringToggle_header__3FYJB",checkboxImage:"FilteringToggle_checkboxImage__377ba",checkboxLabel:"FilteringToggle_checkboxLabel__2K-Ir"}},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c,n,r,i,s,o,l,d,j=a(0),b=a(24),u=a.n(b),h=(a(50),a(12)),O=a(20),p=a(5),m=a(21),f=a(14),g=a.n(f),x=a(26),_=a.n(x),v=a(22),k=a.n(v),C=a(4),I=a.p+"static/media/icon_bookmark_default.a584738a.svg",N=a.p+"static/media/icon_bookmark_selected.9e4da1bd.svg",y=a(11),w=a.n(y),S=a(1),D=function(e){var t=e.character,a=e.checked,c=e.onClickHandle,n=e.moveToDetail;return Object(S.jsxs)("section",{className:w.a.character,children:[Object(S.jsxs)("div",{className:w.a.wrapper,children:[Object(S.jsx)("div",{className:w.a.id,children:t.id}),Object(S.jsx)("img",{className:w.a.characterImg,src:t.image,onClick:n,alt:"\uc0ac\uc9c4"}),Object(S.jsx)("button",{className:w.a.bookmarkButton,onClick:c,children:a?Object(S.jsx)("img",{alt:"\uc544\uc774\ucf58:\ubd81\ub9c8\ud06c \uc120\ud0dd\ub428",lassName:w.a.bookmarkImg,src:N}):Object(S.jsx)("img",{alt:"\uc544\uc774\ucf58:\ubd81\ub9c8\ud06c \ud574\uc81c\ub428",className:w.a.bookmarkImg,src:I})})]}),Object(S.jsxs)("div",{className:w.a.characterInfo,children:[Object(S.jsx)("div",{children:"Alive"===t.status?Object(S.jsx)("div",{title:"alive",className:w.a.alive}):Object(S.jsx)("div",{title:"dead",className:w.a.dead})}),Object(S.jsx)("div",{className:w.a.name,onClick:n,children:t.name}),Object(S.jsx)("div",{children:t.species}),Object(S.jsx)("div",{children:t.gender}),Object(S.jsx)("button",{className:w.a.link,onClick:n,children:"DETAIL"})]})]})},L=function(e){var t=e.character,a=Object(p.b)(),c="RickAndMortyDex",n=Object(j.useState)(!1),r=Object(O.a)(n,2),i=r[0],s=r[1],o=Object(C.g)(),l=t.id;Object(j.useEffect)((function(){localStorage.getItem("".concat(c).concat(l))?s(!0):s(!1)}),[]);return Object(S.jsx)(D,{character:t,checked:i,onClickHandle:function(){a(function(e){return function(){var t=Object(m.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"BOOKMARK_TOGGLE",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l)),localStorage.getItem("".concat(c).concat(l))?localStorage.removeItem("".concat(c).concat(l)):localStorage.setItem("".concat(c).concat(l),JSON.stringify(t)),s(!i)},moveToDetail:function(){o.push({pathname:"/character/".concat(t.name),state:{character:t}})}})},F=a.p+"static/media/icon_checked.e3211c04.svg",E=a.p+"static/media/icon_unchecked.322222e2.svg",A=(a(78),a(13)),T={900:"#2D2D2D",800:"#3D3D3D",700:"#555555",600:"#6F6F6F",500:"#7F7F7F",400:"#A5A5A5",300:"#CFCFCF",200:"#DFDFDF",100:"#EDEDED",50:"#F8F8F8"},B="#fff",R=function(){var e=Object(j.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(C.g)(),r=function(){c(""),n.push({pathname:"searching/".concat(a),state:{words:a}})};return Object(S.jsxs)(G,{children:[Object(S.jsx)(K,{type:"search",onKeyUp:function(){13===window.event.keyCode&&r()},placeholder:"\uce90\ub9ad\ud130\ub97c \uac80\uc0c9\ud574\ubcf4\uc138\uc694!",value:a,onChange:function(e){c(e.target.value)}}),Object(S.jsx)(U,{type:"submit",onClick:r,children:"\uac80\uc0c9"})]})},G=A.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  border-radius: 6px;\n"]))),K=A.a.input(n||(n=Object(h.a)(["\n  height: auto;\n  border: 1px solid gray;\n  width: 250px;\n  border-radius: 6px;\n  margin-right: 5px;\n"]))),U=A.a.button(r||(r=Object(h.a)(["\n  font-weight: 700;\n  color: ",";\n  padding: 10px 30px;\n  background-color: ",";\n  border-radius: 6px;\n  border: none;\n  outline: none;\n  :hover {\n    background-color: ",";\n  }\n  :active {\n    background-color: ",";\n  }\n"])),B,T[300],T[600],T[400]),M=function(e){var t=e.handleClick,a=e.checked?F:E;return Object(S.jsxs)(H,{children:[Object(S.jsxs)(W,{children:[Object(S.jsx)(J,{src:a,onClick:t,alt:"\ubc84\ud2bc : \uccb4\ud06c\ubc15\uc2a4"}),Object(S.jsx)(Y,{children:"\uc990\uaca8\ucc3e\uae30"})]}),Object(S.jsx)(R,{})]})},H=A.a.div(i||(i=Object(h.a)(["\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  border-bottom: 1px solid #ededed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 65px;\n"]))),J=A.a.img(s||(s=Object(h.a)(["\n  all: unset;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n"]))),W=A.a.div(o||(o=Object(h.a)(["\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1rem;\n"]))),Y=A.a.span(l||(l=Object(h.a)(["\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n"]))),P=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.itemList.filter}));return Object(S.jsx)(M,{handleClick:function(){return e(function(){var e=Object(m.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"FILTER_TOGGLE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},checked:t})},z=a.p+"static/media/greetings.6ddd7d90.png",Q=a(25),q=function(){var e=Object(p.b)(),t=Object(j.useState)(),a=Object(O.a)(t,2),c=a[0],n=a[1],r=Object(p.c)((function(e){return e.itemList.data})),i=Object(p.c)((function(e){return e.itemList.loading})),s=(Object(p.c)((function(e){return e.itemList.error})),Object(p.c)((function(e){return e.itemList.filter}))),o=Object(j.useRef)(),l=[1,2,3,4,5,6,7,8,9,10,11,12],d=Object(j.useRef)(null);Object(j.useEffect)((function(){Q.b.from(d.current,{opacity:0,duration:1,delay:.4,x:-30})}),[s]),Object(j.useEffect)((function(){0===r.length?n(l):0!==r.length&&(l=l.map((function(e){return e+r.length})))}),[]),Object(j.useEffect)((function(){var t;e((t=c,function(){var e=Object(m.a)(g.a.mark((function e(a){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"LOADING"}),e.next=4,_.a.get("https://rickandmortyapi.com/api/character/".concat(t));case 4:c=e.sent,a({type:"ITEM_LIST_SUCCESS",payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({type:"LOADING_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[c]);var b=function(){var e=[];for(var t in localStorage)"RickAndMortyDex"===t.substring(0,15)&&e.push(localStorage[t]);for(var a=[],c=0,n=e;c<n.length;c++){var r=n[c];a.push(JSON.parse(r))}return a},u=Object(j.useCallback)((function(e){i||s||(o.current&&o.current.disconnect(),o.current=new IntersectionObserver((function(e){e[0].isIntersecting&&(l=l.map((function(e){return e+r.length})),n(l))})),e&&o.current.observe(e))}),[i]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(P,{}),Object(S.jsxs)("div",{className:k.a.wrapper,children:[0===r.length?Object(S.jsx)("div",{children:"Sorry, there's no Data"}):Object(S.jsx)(S.Fragment,{}),s?Object(S.jsxs)("section",{className:k.a.characters,children:[0===b().length?Object(S.jsxs)("div",{ref:d,className:k.a.noBookmark,children:[Object(S.jsx)("img",{className:k.a.noBookmarkImg,src:z}),Object(S.jsx)("p",{children:"NO BOOKMARK"})]}):Object(S.jsx)(S.Fragment,{}),b().map((function(e){return Object(S.jsx)(L,{id:e.id,character:e})}))]}):Object(S.jsx)("section",{className:k.a.characters,children:r.map((function(e,t){return r.length===t+1?Object(S.jsxs)("div",{ref:u,children:[Object(S.jsx)(L,{id:e.id,character:e})," "]}):Object(S.jsx)(L,{id:t+1,character:e})}))}),i?Object(S.jsx)("div",{children:"...loading"}):Object(S.jsx)(S.Fragment,{})]})]})},V=a(18),Z=a.n(V),X=function(e){var t=e.characterInfo;return Object(S.jsxs)("div",{className:Z.a.wrapper,children:[Object(S.jsx)("div",{className:Z.a.imageBack,children:Object(S.jsx)("img",{src:t.image,className:Z.a.image})}),Object(S.jsxs)("div",{className:Z.a.name,children:[t.name,"Alive"===t.status?Object(S.jsx)("div",{title:"alive",className:Z.a.alive}):Object(S.jsx)("div",{title:"dead",className:Z.a.dead})]}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{children:t.species}),Object(S.jsxs)("div",{children:["First seen in ",t.origin.name]}),Object(S.jsxs)("div",{children:["Last known location is ",t.location.name,"\ud83d\udc7d"]})]})},$=a(31),ee=a.n($),te=function(){var e=Object(C.g)();return Object(S.jsx)("div",{className:ee.a.header,children:Object(S.jsx)("button",{className:ee.a.back,onClick:function(){e.goBack()},children:"BACK"})})},ae=function(){var e=Object(C.h)().state.character;return Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(te,{}),Object(S.jsx)(X,{characterInfo:e})]})},ce=(a(80),a(23)),ne=a.n(ce),re=a.p+"static/media/noResultImage.e3790b11.png",ie=function(){var e=Object(p.b)(),t=Object(C.h)(),a=Object(p.c)((function(e){return e.itemList.searchData})),c=Object(j.useRef)(null);return Object(j.useEffect)((function(){Q.a.from(c.current,{opacity:0,duration:1,delay:.4,x:-30})}),[]),Object(j.useEffect)((function(){var a;e((a=t.state.words,function(){var e=Object(m.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"LOADING"}),e.next=4,_()({method:"GET",url:"https://rickandmortyapi.com/api/character",params:{name:a},cancelToken:new _.a.CancelToken((function(e){return e}))});case 4:c=e.sent,t({type:"SEARCH_SUCCESS",payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"LOADING_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(te,{}),Object(S.jsx)("div",{className:ne.a.wrapper,children:Object(S.jsxs)("section",{className:ne.a.section,children:[0===a.length?Object(S.jsxs)("div",{ref:c,className:ne.a.labelWrapper,children:[Object(S.jsx)("img",{className:ne.a.noResultImg,src:re}),Object(S.jsx)("p",{className:ne.a.noResult,children:"NO RESULT"})]}):Object(S.jsx)(S.Fragment,{}),a.map((function(e){return Object(S.jsx)(L,{character:e})}))]})})]})};var se=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(oe,{children:Object(S.jsxs)(C.d,{children:[Object(S.jsx)(C.b,{path:"/",component:q}),Object(S.jsx)(C.b,{path:"/character/:name",component:ae}),Object(S.jsx)(C.b,{path:"/searching/:name",component:ie}),Object(S.jsx)(C.a,{to:"/"})]})})})},oe=A.a.div(d||(d=Object(h.a)(["\n  max-width: 1024px;\n"]))),le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},de=a(16),je=a(43),be=a(44),ue=a(3),he={loading:!1,data:[],searchData:[],error:!1,filter:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0,error:!1});case"ITEM_LIST_SUCCESS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,data:e.data.concat(t.payload.map((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{checked:!1})}))),error:!1});case"SEARCH_SUCCESS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,error:!1,filter:!1,searchData:t.payload.results});case"LOADING_FAIL":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,searchData:[],error:!0});case"BOOKMARK_TOGGLE":return Object(ue.a)(Object(ue.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload?Object(ue.a)(Object(ue.a)({},e),{},{checked:!e.checked}):e}))});case"FILTER_TOGGLE":return Object(ue.a)(Object(ue.a)({},e),{},{filter:!e.filter});case"BOOKMARK_TRUE":return Object(ue.a)(Object(ue.a)({},e),{},{data:e.data.map((function(e){return String(e.id)===String(t.payload)?Object(ue.a)(Object(ue.a)({},e),{},{checked:!0}):e}))});default:return e}},pe=Object(de.combineReducers)({itemList:Oe}),me=Object(de.createStore)(pe,Object(je.composeWithDevTools)(Object(de.applyMiddleware)(be.a))),fe=a(15);u.a.render(Object(S.jsx)(fe.a,{children:Object(S.jsx)(p.a,{store:me,children:Object(S.jsx)(se,{})})}),document.getElementById("root")),le()}},[[81,1,2]]]);
//# sourceMappingURL=main.5c0158d6.chunk.js.map