(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{48:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),s=n(8),o=n(9),l=n(11),d=n(10),u=n(96),b=n(91),j=n(97),h=n(17),p=n(1),f=function(e){return Object(p.jsx)(u.a,{expand:"lg",bg:"dark",variant:"dark",sticky:"top",className:"root-navbar",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(u.a.Brand,{as:h.b,to:"/",children:Object(p.jsx)("h2",{children:"React Projects"})}),Object(p.jsxs)(j.a,{variant:"pills",defaultActiveKey:"1",children:[Object(p.jsx)(j.a.Item,{children:Object(p.jsx)(j.a.Link,{eventKey:"1",as:h.b,to:"/",children:Object(p.jsx)("h5",{children:"Movies"})})}),Object(p.jsx)(j.a.Item,{children:Object(p.jsx)(j.a.Link,{eventKey:"2",as:h.b,to:"/Customers",children:Object(p.jsx)("h5",{children:"Customers"})})}),Object(p.jsx)(j.a.Item,{children:Object(p.jsx)(j.a.Link,{eventKey:"3",as:h.b,to:"/Rentals",children:Object(p.jsx)("h5",{children:"Rentals"})})})]})]})})})},O=n(26),v=n(27),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e="far fa-heart fa-1";return this.props.liked&&(e="fas fa-heart fa-1x"),Object(p.jsx)("i",{className:e,onClick:this.props.onClick,style:{cursor:"pointer"}})}}]),n}(r.Component),x=n(95),g=n(40);function y(e,t,n){var r=(t-1)*n;return g(e).slice(r).take(n).value()}var k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).renderSortIcon=function(t){return t.path!==e.props.sortColumn.path?null:"asc"===e.props.sortColumn.order?Object(p.jsx)("i",{className:"fa fa-sort-asc"}):Object(p.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:this.props.columns.map((function(t){return Object(p.jsxs)("th",{onClick:function(){return e.props.handleSort(t.path)},style:{cursor:"pointer"},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(r.Component),C=n(40),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).renderCell=function(t,n){return n.content?n.content(t)&&n.content(t,e.props.data.length):C.get(t,n.path)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.columns;return Object(p.jsx)("tbody",{children:n.map((function(t,n){return Object(p.jsx)("tr",{children:r.map((function(n,r){return Object(p.jsx)("td",{children:e.renderCell(t,n)},r)}))},n)}))})}}]),n}(r.Component),R=function(e){var t=e.columns,n=e.sortColumn,r=e.handleSort,c=e.data;return Object(p.jsxs)("table",{className:"ui very basic table",children:[Object(p.jsx)(k,{columns:t,sortColumn:n,handleSort:r}),Object(p.jsx)(S,{data:c,columns:t})]})},I=n(40),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).columns=[{path:"title",label:"Title",content:function(e){return Object(p.jsx)(h.b,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(p.jsx)(m,{liked:t.liked,onClick:function(){return e.props.likeMovieClicked(t)}})}},{key:"delete",content:function(t,n){return Object(p.jsx)(x.a,{negative:!0,onClick:function(){return e.props.handleDeleteMovie(t,n)},children:"delete"})}}],e.getPageData=function(){var t=e.props.selectedGenre&&e.props.selectedGenre._id?e.props.movies.filter((function(t){return t.genre._id===e.props.selectedGenre._id})):e.props.movies,n=y(I.orderBy(t,[e.props.sortColumn.path],[e.props.sortColumn.order]),e.props.CurrentPage,e.props.PageSize);return{totalCount:t.length,data:n}},e}return Object(o.a)(n,[{key:"render",value:function(){if(0===this.props.movies.length)return Object(p.jsx)("div",{children:"'no movie to show'"});var e=this.getPageData(),t=e.totalCount,n=e.data;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"ui section hidden divider",children:["Showing ",t," movies"]}),Object(p.jsx)("div",{className:"ui hidden section divider"}),Object(p.jsx)(R,{data:n,columns:this.columns,sortColumn:this.props.sortColumn,handleSort:this.props.handleSort})]})}}]),n}(r.Component),A=n(98),D=(n(48),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){for(var e=this,t=this.props.active,n=[],r=function(r){n.push(Object(p.jsx)(A.a.Item,{active:r===t,activeLabel:"",onClick:function(){return e.props.pagClicked(r)},children:r},r))},c=1;c<=this.props.size;c++)r(c);return Object(p.jsx)(A.a,{style:{justifyContent:"center"},size:"lg",children:1===n.length?null:n})}}]),n}(r.Component)),P=n(99),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(P.a,{style:{marginTop:"20px"},defaultActiveKey:"#link0",children:this.props.items.map((function(t,n){return Object(p.jsx)(P.a.Item,{href:"#link"+n,action:!0,active:e.props.selectedGenre===t,onClick:function(){return e.props.onItemSelect(t)},children:t[e.props.textProperty]},n)}))})}}]),n}(r.Component);G.defaultProps={textProperty:"name",valuePropery:"_id"};var M=G,N=n(13),T=function(e){var t=Object(N.g)().id,n=e.movies.filter((function(e){return e._id===t}))[0];return Object(p.jsxs)("div",{style:{textAlign:"center",margin:"20px"},children:[Object(p.jsx)("h1",{children:"MovieDetails "}),Object(p.jsxs)("h2",{children:["MovieID : ",t," "]}),Object(p.jsxs)("h2",{children:["MovieName : ",n.title]}),Object(p.jsxs)("h2",{children:["MovieGenre : ",n.genre.name]})]})},w=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var z=[{_id:"2b21ca3eeb7f6fbccd471821",title:"The Interstellar",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:9,dailyRentalRate:5},{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var E=n(92),K=n(93),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],geners:[],CurrentPage:1,PageSize:4,sortColumn:{path:"title",order:"asc"}},e.handleSort=function(t){var n=Object(v.a)({},e.state.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.setState({sortColumn:n})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,CurrentPage:1})},e.handlePagClicked=function(t){e.setState({CurrentPage:t})},e.handleDeleteMovie=function(t,n){var r=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:r}),1===n&&e.setState({CurrentPage:e.state.CurrentPage-1})},e.likeMovieClicked=function(t){var n=Object(O.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(v.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=[{name:"AllGenres"}].concat(Object(O.a)(w.filter((function(e){return e}))));this.setState({movies:z,geners:e})}},{key:"render",value:function(){var e=this.state.movies.length,t=Math.ceil(e/this.state.PageSize);return Object(p.jsxs)(E.a,{children:[Object(p.jsx)("div",{className:"ui horizontal section divider",children:"Movie Table"}),Object(p.jsx)(K.a,{sm:2,children:Object(p.jsx)(M,{items:this.state.geners,selectedGenre:this.state.selectedGenre,onItemSelect:this.handleGenreSelect,onAllItemSelect:this.handleAllGenreSelect})}),Object(p.jsxs)(K.a,{sm:10,children:[Object(p.jsx)(_,{movies:this.state.movies,likeMovieClicked:this.likeMovieClicked,handleDeleteMovie:this.handleDeleteMovie,CurrentPage:this.state.CurrentPage,PageSize:this.state.PageSize,selectedGenre:this.state.selectedGenre,updateItemCount:this.updateItemCount,handleSort:this.handleSort,sortColumn:this.state.sortColumn}),Object(p.jsx)("br",{})]}),Object(p.jsx)(D,{size:t,active:this.state.CurrentPage,pagClicked:this.handlePagClicked}),Object(p.jsx)(N.d,{children:Object(p.jsx)(N.b,{path:"/movies/:id",exact:!0,children:Object(p.jsx)(T,{movies:this.state.movies})})})]})}}]),n}(r.Component),B=n(94),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=0===this.props.counter.value?"warning":"primary";return Object(p.jsx)(b.a,{children:Object(p.jsxs)(E.a,{style:{marginBottom:"12px"},children:[Object(p.jsx)(K.a,{className:"d-grid",style:{textAlign:"center"},children:Object(p.jsx)(B.a,{variant:t,size:"lg",style:{textAlign:"center"},children:0===e.props.counter.value?"zero":e.props.counter.value})}),Object(p.jsx)(K.a,{className:"d-grid",style:{textAlign:"right"},children:Object(p.jsx)(B.a,{onClick:function(){return e.props.onIncrement(e.props.counter)},size:"lg",style:{padding:"5px 30px"},children:"+"})}),Object(p.jsx)(K.a,{className:"d-grid",style:{textAlign:"left"},children:Object(p.jsx)(B.a,{onClick:function(){return e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value,size:"lg",style:{padding:"5px 30px"},children:"-"})}),Object(p.jsx)(K.a,{xs:6,style:{textAlign:"right"},children:Object(p.jsx)(B.a,{onClick:function(){return e.props.onDelete(e.props.counter.id)},variant:"danger",style:{padding:"8px 30px"},children:"DELETE"})})]})})}}]),n}(r.Component),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(b.a,{children:Object(p.jsx)(E.a,{children:Object(p.jsxs)(K.a,{children:[Object(p.jsx)(B.a,{variant:"secondary",onClick:this.props.onReset,style:{marginBottom:"20px",backgroundColor:"grey"},children:"RESET"}),Object(p.jsx)(E.a,{children:this.props.counters.map((function(t){return Object(p.jsx)(F,{counter:t,onDelete:e.props.onDelete,onDecrement:e.props.onDecrement,onIncrement:e.props.onIncrement},t.id)}))})]})})})}}]),n}(r.Component),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={counters:[{id:0,value:0},{id:1,value:2},{id:2,value:0},{id:3,value:5}]},e.handleIncrement=function(t){var n=Object(O.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(v.a)({},n[r]),n[r].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(O.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(v.a)({},n[r]),n[r].value--,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(E.a,{children:[Object(p.jsxs)(K.a,{children:[Object(p.jsx)("div",{className:"ui hidden  section divider"}),Object(p.jsx)("div",{className:"ui horizontal section divider",children:"Shop card"}),Object(p.jsx)(J,{counters:this.state.counters,onDelete:this.handleDelete,onDecrement:this.handleDecrement,onIncrement:this.handleIncrement,onReset:this.handleReset})]}),Object(p.jsx)(K.a,{})]})}}]),n}(r.Component),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Rentals"})})}}]),n}(r.Component),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(b.a,{children:Object(p.jsxs)(N.d,{children:[Object(p.jsx)(N.b,{path:"/Customers",children:Object(p.jsx)(q,{})}),Object(p.jsx)(N.b,{path:"/Rentals",children:Object(p.jsx)(H,{})}),Object(p.jsx)(N.b,{path:"/Not-Found",children:Object(p.jsx)("h1",{children:"NotFound"})}),Object(p.jsx)(N.b,{path:"/Movies",children:Object(p.jsx)(L,{})}),Object(p.jsx)(N.a,{from:"/",to:"/Movies",exact:!0}),Object(p.jsx)(N.a,{to:"/Not-Found"})]})})]})}}]),n}(c.a.Component);n(76);i.a.render(Object(p.jsx)(h.a,{children:Object(p.jsx)(W,{})}),document.querySelector("#root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.4024596a.chunk.js.map