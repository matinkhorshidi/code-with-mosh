(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(22),a=n.n(i),s=n(59),l=n(58),d=n(23),o=n(24),b=n(27),j=n(26),u=n(128),h=n(129),O=n(130),f=n(134),x=n(1),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=0===this.props.counter.value?"warning":"primary";return Object(x.jsx)(u.a,{children:Object(x.jsxs)(h.a,{style:{marginBottom:"12px"},children:[Object(x.jsx)(O.a,{className:"d-grid",style:{textAlign:"center"},children:Object(x.jsx)(f.a,{variant:t,size:"lg",style:{textAlign:"center"},children:0===e.props.counter.value?"zero":e.props.counter.value})}),Object(x.jsx)(O.a,{className:"d-grid",style:{textAlign:"right"},children:Object(x.jsx)(f.a,{onClick:function(){return e.props.onIncrement(e.props.counter)},size:"lg",style:{padding:"5px 30px"},children:"+"})}),Object(x.jsx)(O.a,{className:"d-grid",style:{textAlign:"left"},children:Object(x.jsx)(f.a,{onClick:function(){return e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value,size:"lg",style:{padding:"5px 30px"},children:"-"})}),Object(x.jsx)(O.a,{xs:6,style:{textAlign:"right"},children:Object(x.jsx)(f.a,{onClick:function(){return e.props.onDelete(e.props.counter.id)},variant:"danger",style:{padding:"8px 30px"},children:"DELETE"})})]})})}}]),n}(c.Component),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)(u.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(O.a,{children:[Object(x.jsx)(f.a,{variant:"secondary",onClick:this.props.onReset,style:{marginBottom:"20px",backgroundColor:"grey"},children:"RESET"}),Object(x.jsx)(h.a,{children:this.props.counters.map((function(t){return Object(x.jsx)(p,{counter:t,onDelete:e.props.onDelete,onDecrement:e.props.onDecrement,onIncrement:e.props.onIncrement},t.id)}))})]}),Object(x.jsx)(O.a,{children:"col 2"})]})})}}]),n}(c.Component),m=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e="far fa-heart fa-1";return this.props.liked&&(e="fas fa-heart fa-1x"),Object(x.jsx)("i",{className:e,onClick:this.props.onClick,style:{cursor:"pointer"}})}}]),n}(c.Component),g=n(132);var y=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];function k(){return y}var R=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:k()},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.likeClicked=function(t){console.log(t);var n=Object(l.a)(e.state.movies),c=n.indexOf(t);n[c]=Object(s.a)({},n[c]),n[c].liked=!n[c].liked,e.setState({movies:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{style:{textAlign:"center"},children:[Object(x.jsxs)("div",{className:"ui section hidden divider",children:["Showing ",this.state.movies.length," movies"," "]}),Object(x.jsx)("div",{className:"ui hidden section divider"}),Object(x.jsxs)("table",{className:"ui very basic table",style:{textAlign:"center"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:"Gener"}),Object(x.jsx)("th",{children:"Stock"}),Object(x.jsx)("th",{children:"Rate"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{})]})}),Object(x.jsx)("tbody",{children:this.state.movies.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.title}),Object(x.jsx)("td",{children:t.genre.name}),Object(x.jsx)("td",{children:t.numberInStock}),Object(x.jsx)("td",{children:t.dailyRentalRate}),Object(x.jsx)("td",{children:Object(x.jsx)(m,{liked:t.liked,onClick:function(){return e.likeClicked(t)}})}),Object(x.jsx)("td",{children:Object(x.jsx)(g.a,{negative:!0,onClick:function(){return e.handleDelete(t)},children:"delete"})})]},t._id)}))})]})]})}}]),n}(c.Component),S=n(131),_=n(30),C=n(90),D=function(e){return Object(x.jsx)(S.a,{expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(C.a,{children:["there is ",Object(x.jsx)("h2",{children:e.products})," product basket"]}),Object(x.jsxs)(S.a.Brand,{href:"#",children:[Object(x.jsx)("h1",{children:"React Projects"}),Object(x.jsx)(_.a,{bg:"warning",text:"dark"})]})]})})},I=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:0,value:0},{id:1,value:2},{id:2,value:0},{id:3,value:5}]},e.handleIncrement=function(t){var n=Object(l.a)(e.state.counters),c=n.indexOf(t);n[c]=Object(s.a)({},n[c]),n[c].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(l.a)(e.state.counters),c=n.indexOf(t);n[c]=Object(s.a)({},n[c]),n[c].value--,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(D,{products:this.state.counters.filter((function(e){return e.value>0})).length}),Object(x.jsxs)("div",{className:"ui container",children:[Object(x.jsx)("div",{className:"ui horizontal section divider",children:"Shop card"}),Object(x.jsx)(v,{counters:this.state.counters,onDelete:this.handleDelete,onDecrement:this.handleDecrement,onIncrement:this.handleIncrement,onReset:this.handleReset}),Object(x.jsx)("div",{className:"ui hidden section divider"}),Object(x.jsx)("div",{className:"ui hidden section divider"}),Object(x.jsx)("div",{className:"ui horizontal section divider",children:"Movie Table"}),Object(x.jsx)(R,{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(_.a,{bg:"primary",children:"Primary"})," ",Object(x.jsx)(_.a,{bg:"secondary",children:"Secondary"})," ",Object(x.jsx)(_.a,{bg:"success",children:"Success"})," ",Object(x.jsx)(_.a,{bg:"danger",children:"Danger"})," ",Object(x.jsx)(_.a,{bg:"warning",text:"dark",children:"Warning"})," ",Object(x.jsx)(_.a,{bg:"info",children:"Info"})," ",Object(x.jsx)(_.a,{bg:"light",text:"dark",children:"Light"})," ",Object(x.jsx)(_.a,{bg:"dark",children:"Dark"})]})]})}}]),n}(r.a.Component);n(113),n(114);a.a.render(Object(x.jsx)(I,{}),document.querySelector("#root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.cdcc28b0.chunk.js.map