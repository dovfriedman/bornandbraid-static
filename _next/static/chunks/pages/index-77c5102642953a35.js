(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8048)}])},8048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(5893),s=n(7294),r=n(9008);var i=function(){return(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://www.schema.org","@type":"Bakery",name:"Born & Braid",url:"https://www.bornandbraid.com/",image:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1642552200/bornandbraid.com/yv5fdwvhe1ge2yqxmwin.jpg",logo:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_600/v1642463318/bornandbraid.com/fstcfbvlq9dllf5jwdy4.png",priceRange:"$",description:"Born & Braid serves up homemade challah baked to order by Ioana Friedman in the heart of South Orange, NJ. Small batch, fresh ingredients, no preservatives.",telephone:"(973) 378-0880",servesCuisine:["Bread"],hasMenu:{"@type":"Menu",hasMenuSection:{"@type":"MenuSection",name:"Challah",image:["https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1643159590/bornandbraid.com/trira3hsd9un2jo9tf52.jpg","https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1643159590/bornandbraid.com/xxrd7ephf8y0nseabqaz.jpg"],hasMenuItem:[{"@type":"MenuItem",name:"Challah Roll",offers:{"@type":"Offer",price:"3.50",priceCurrency:"USD"}},{"@type":"MenuItem",name:"Challah Loaf",offers:{"@type":"Offer",price:"9.00",priceCurrency:"USD"}}]},inLanguage:"English"}})}})};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}function u(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var p=n(3935),h=!1,m=s.createContext(null),f="unmounted",x="exited",v="entering",g="entered",E="exiting",j=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var s,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(s=x,a.appearStatus=v):s=g:s=t.unmountOnExit||t.mountOnEnter?f:x,a.state={status:s},a.nextCallback=null,a}d(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:x}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==v&&n!==g&&(t=v):n!==v&&n!==g||(t=E)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===v?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===x&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,s=this.props.nodeRef?[a]:[p.findDOMNode(this),a],r=s[0],i=s[1],o=this.getTimeouts(),l=a?o.appear:o.enter;!e&&!n||h?this.safeSetState({status:g},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,i),this.safeSetState({status:v},(function(){t.props.onEntering(r,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:g},(function(){t.props.onEntered(r,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:p.findDOMNode(this);t&&!h?(this.props.onExit(a),this.safeSetState({status:E},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:x},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:x},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=s[0],i=s[1];this.props.addEndListener(r,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(m.Provider,{value:null},"function"===typeof n?n(e,a):s.cloneElement(s.Children.only(n),a))},t}(s.Component);function b(){}j.contextType=m,j.propTypes={},j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},j.UNMOUNTED=f,j.EXITED=x,j.ENTERING=v,j.ENTERED=g,j.EXITING=E;var w=j,y=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=u(n.className,a):n.setAttribute("class",u(n.className&&n.className.baseVal||"",a)));var n,a}))},N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1];t.removeClasses(s,"exit"),t.addClass(s,r?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.addClass(s,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.removeClasses(s,r),t.addClass(s,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,s=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:a?s+"-active":n[e+"Active"],doneClassName:a?s+"-done":n[e+"Done"]}},t}d(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&s&&(a+=" "+s),"active"===n&&e&&e.scrollTop,a&&(this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,s=n.active,r=n.done;this.appliedClasses[t]={},a&&y(e,a),s&&y(e,s),r&&y(e,r)},n.render=function(){var e=this.props,t=(e.classNames,l(e,["classNames"]));return s.createElement(w,o({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);N.defaultProps={classNames:""},N.propTypes={};var _=N,C=n(3963),k=n.n(C);var S=function(e){var t=e.isClosed,n=e.setIsClosed,r=(0,s.useRef)(null);return(0,a.jsx)(_,{nodeRef:r,in:!t,timeout:200,unmountOnExit:!0,classNames:{enter:k().modalEnter,enterActive:k().modalEnterActive,enterDone:k().modalEnterDone,exit:k().modalExit,exitActive:k().modalExitActive,exitDone:k().modalExitDone},children:(0,a.jsx)("div",{ref:r,className:k().modalWrapper,children:(0,a.jsxs)("div",{className:k().modal,children:[(0,a.jsx)("div",{className:k().close,onClick:function(){return n(!0)},children:"X"}),(0,a.jsx)("h2",{className:k().title,children:"Everything is sold out for the week of 2/11"}),(0,a.jsxs)("div",{className:k().description,children:[(0,a.jsx)("p",{children:"Need your challah on 2/18? All orders must be placed starting Monday, 2/14, 9 AM EST"}),(0,a.jsx)("p",{className:k().disclaimer,children:"Due to high demand and the small scope of our operation, we sell out fast. Order inquiries received after we sell out will NOT roll over to the following week."})]})]})})})};function O(){var e=(0,s.useState)(!0),t=e[0],n=e[1];return(0,s.useEffect)((function(){var e=!!(null===window||void 0===window?void 0:window.localStorage.getItem("bb-hasBeenClosed"));n(!!e)}),[]),(0,a.jsxs)("div",{className:t?"":"modal-is-open",children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"Born and Braid"}),(0,a.jsx)("meta",{name:"title",content:"Born and Braid"}),(0,a.jsx)("meta",{name:"description",content:"Artisan challah baked in South Orange"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://www.bornandbraid.com/"}),(0,a.jsx)("meta",{property:"og:title",content:"Born and Braid"}),(0,a.jsx)("meta",{property:"og:description",content:"Artisan challah baked in South Orange"}),(0,a.jsx)("meta",{property:"og:image",content:"https://res.cloudinary.com/sequoia/image/upload/c_pad,w_1200,h_630,b_rgb:ffffff/v1642642477/bornandbraid.com/oakeeohtj6manuebohpn.png"}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{property:"twitter:url",content:"https://www.bornandbraid.com/"}),(0,a.jsx)("meta",{property:"twitter:title",content:"Born and Braid"}),(0,a.jsx)("meta",{property:"twitter:description",content:"Artisan challah baked in South Orange"}),(0,a.jsx)("meta",{property:"twitter:image",content:"https://res.cloudinary.com/sequoia/image/upload/c_pad,w_1200,h_675,b_rgb:ffffff/v1642642477/bornandbraid.com/oakeeohtj6manuebohpn.png"}),(0,a.jsx)(i,{})]}),(0,a.jsx)(S,{isClosed:t,setIsClosed:function(e){localStorage.setItem("bb-hasBeenClosed",JSON.stringify(e)),n(e)}}),(0,a.jsxs)("header",{children:[(0,a.jsx)("h1",{children:"Born & Braid"}),(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#about-us",children:"About Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#menu",children:"Menu"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#ingredients",children:"Ingredients"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#reviews",children:"Reviews"})})]})})]}),(0,a.jsx)("section",{className:"tagline-section",children:(0,a.jsx)("h2",{children:"Artisan challah baked in south orange NJ"})}),(0,a.jsx)("section",{id:"about-us",className:"about-us-section",children:(0,a.jsxs)("div",{className:"about-us",children:[(0,a.jsx)("div",{className:"about-us-image",children:(0,a.jsx)("img",{src:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1642602693/bornandbraid.com/rxwgnmmysvwmd5hynnzt.jpg",alt:"bread"})}),(0,a.jsxs)("div",{className:"about-us-copy",children:[(0,a.jsx)("h3",{children:"Small Batch"}),(0,a.jsx)("p",{children:"Born & Braid serves hand-crafted, homemade challah baked to order by Ioana Friedman in the heart of South Orange, NJ. Small batch, fresh ingredients, no preservatives."}),(0,a.jsx)("p",{children:"We serve a core group of member families, beyond which we offer a limited amount of challah for purchase every week. Text (973) 378-0880 to order on Mondays starting at 9 AM EST. The word is spreading faster than our ovens can produce, so order early because we sell out fast. We will confirm your order and provide Venmo details. Due to high demand, order inquiries received after we sell out will NOT roll over into the following week."})]})]})}),(0,a.jsxs)("section",{className:"menu-section",children:[(0,a.jsx)("h3",{id:"menu",children:"Get your challah"}),(0,a.jsx)("p",{children:"Born & Braid challah is delivered fresh and made with wheat flour, water, wildflower honey, sunflower oil, fresh eggs, yeast, and salt. Choose from four different flavors: Plain, Sesame, Poppy, Everything."}),(0,a.jsx)("p",{children:"Cinnamon Buns, our signature challah filled and topped with butter, cinnamon, and sugar."}),(0,a.jsxs)("div",{className:"menu-items",children:[(0,a.jsxs)("div",{className:"menu-item",children:[(0,a.jsx)("img",{src:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1643159590/bornandbraid.com/m5r9lkaadyuashp89rsl.jpg",alt:"loaf"}),(0,a.jsx)("div",{className:"menu-item-name",children:"Challah loaf"}),(0,a.jsx)("div",{className:"menu-item-price",children:"$9"})]}),(0,a.jsxs)("div",{className:"menu-item",children:[(0,a.jsx)("img",{src:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1643220361/bornandbraid.com/ejtgrahn5zofcmm2k7j5.jpg",alt:"roll"}),(0,a.jsx)("div",{className:"menu-item-name",children:"Challah roll"}),(0,a.jsx)("div",{className:"menu-item-price",children:"$3.50"})]}),(0,a.jsxs)("div",{className:"menu-item",children:[(0,a.jsx)("img",{src:"https://res.cloudinary.com/sequoia/image/upload/c_scale,w_500/v1643220361/bornandbraid.com/yihfx6txrjijvivfn83g.jpg",alt:"cinnamon buns"}),(0,a.jsx)("div",{className:"menu-item-name",children:"Cinnamon Buns"}),(0,a.jsx)("div",{className:"menu-item-price",children:"$4"})]})]})]}),(0,a.jsxs)("section",{className:"ingredients-section",children:[(0,a.jsx)("h3",{id:"ingredients",children:"Ingredient Info"}),(0,a.jsx)("p",{children:"We proudly make our challah exclusively with King Arthur Flour and fresh ingredients, no\n          preservatives. Even though we use kosher ingredients, we are not a certified kosher brand. All of\n          our challah loaves and rolls are parve (dairy-free) unless, of course, you're ordering one of our\n          delicious cinnamon buns, which contain butter. Our challah is not vegan, it has eggs. We do not\n          offer vegan, whole wheat, or gluten-free options at this time."})]}),(0,a.jsxs)("section",{className:"reviews-section",children:[(0,a.jsx)("h3",{id:"reviews",children:"Word around town"}),(0,a.jsxs)("div",{className:"reviews",children:[(0,a.jsxs)("figure",{className:"review",children:[(0,a.jsx)("span",{className:"quote-mark",children:"\u201c"}),(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:"Your baking is amazing. Both my roommate and I enjoyed your challah."})}),(0,a.jsx)("figcaption",{children:"\u2014Maria B."}),(0,a.jsx)("span",{className:"quote-mark",children:"\u201d"})]}),(0,a.jsxs)("figure",{className:"review",children:[(0,a.jsx)("span",{className:"quote-mark",children:"\u201c"}),(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:"Perfectly golden and delectable with just the right amount of sweet."})}),(0,a.jsx)("figcaption",{children:"\u2014Eileen B."}),(0,a.jsx)("span",{className:"quote-mark",children:"\u201d"})]}),(0,a.jsxs)("figure",{className:"review",children:[(0,a.jsx)("span",{className:"quote-mark",children:"\u201c"}),(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:"Challah was out of this world. So good! Next level delicious. I could have eaten the whole loaf alone, but decided to share with the family."})}),(0,a.jsx)("figcaption",{children:"\u2014Cristina G."}),(0,a.jsx)("span",{className:"quote-mark",children:"\u201d"})]})]})]}),(0,a.jsxs)("footer",{children:[(0,a.jsx)("div",{className:"footer-logo",children:(0,a.jsx)("img",{src:"https://res.cloudinary.com/sequoia/image/upload/f_auto,c_limit,w_100,q_auto/v1642463318/bornandbraid.com/fstcfbvlq9dllf5jwdy4.png",alt:"logo"})}),(0,a.jsx)("p",{children:"Text (973) 378-0880"}),(0,a.jsx)("p",{children:"hello@bornandbraid.com"}),(0,a.jsx)("p",{className:"copyright",children:"\xa9 2022 Born & Braid. All rights reserved."})]})]})}},3963:function(e){e.exports={modalWrapper:"Modal_modalWrapper__dD3Eb",modalEnter:"Modal_modalEnter__X6fH6",modalEnterActive:"Modal_modalEnterActive__B5OBc",modalEnterDone:"Modal_modalEnterDone__ORL1o",modalExit:"Modal_modalExit__kIwEa",modalExitActive:"Modal_modalExitActive__a9kxx",modalExitDone:"Modal_modalExitDone__cZvi7",modal:"Modal_modal__e89cA",close:"Modal_close__LyGGa",title:"Modal_title__Ncyv2",description:"Modal_description__67dPb",disclaimer:"Modal_disclaimer__9M1Xl",fadeOut:"Modal_fadeOut__dMuTW"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);