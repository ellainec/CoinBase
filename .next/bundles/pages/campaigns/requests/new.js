
          window.__NEXT_REGISTER_PAGE('/campaigns/requests/new', function() {
            var comp = module.exports=webpackJsonp([9],{880:function(e,t,r){e.exports=r(881)},881:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(46),u=a(n),s=r(49),o=a(s),l=r(27),i=a(l),c=r(18),d=a(c),f=r(19),p=a(f),m=r(28),h=a(m),g=r(29),v=a(g),E=r(0),b=a(E),y=r(55),S=r(92),k=a(S),M=r(124),_=a(M),x=r(58),C=a(x),q=r(82),w=function(e){function t(){var e,r,a,n,s=this;(0,d.default)(this,t);for(var l=arguments.length,c=Array(l),f=0;f<l;f++)c[f]=arguments[f];return r=a=(0,h.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(c))),a.state={description:"",amount:"",recipient:"",errorMessage:"",loading:!1},a.onSubmit=function(){var e=(0,o.default)(u.default.mark(function e(t){var r,n,o,l,i,c;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=(0,_.default)(a.props.address),n=a.state,o=n.description,l=n.amount,i=n.recipient,e.prev=3,a.setState({loading:!0,errorMessage:""}),e.next=7,C.default.eth.getAccounts();case 7:return c=e.sent,e.next=10,r.methods.createRequest(o,C.default.utils.toWei(l,"ether"),i).send({from:c[0]});case 10:q.Router.pushRoute("/campaigns/"+a.props.address+"/requests"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),a.setState({errorMessage:e.t0.message});case 16:a.setState({loading:!1});case 17:case"end":return e.stop()}},e,s,[[3,13]])}));return function(t){return e.apply(this,arguments)}}(),n=r,(0,h.default)(a,n)}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this;return b.default.createElement(k.default,null,b.default.createElement(q.Link,{route:"/campaigns/"+this.props.address+"/requests"},b.default.createElement("a",null,"Back")),b.default.createElement("h3",null," Create a Request"),b.default.createElement(y.Form,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},b.default.createElement(y.Form.Input,{label:"Description",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}}),b.default.createElement(y.Form.Input,{label:"Amount in Ether",value:this.state.amount,onChange:function(t){return e.setState({amount:t.target.value})}}),b.default.createElement(y.Form.Input,{label:"Recipient",value:this.state.recipient,onChange:function(t){return e.setState({recipient:t.target.value})}}),b.default.createElement(y.Button,{primary:!0,content:"Create",loading:this.state.loading}),b.default.createElement(y.Message,{error:!0,header:"Oops!",content:this.state.errorMessage})))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.address,e.abrupt("return",{address:r});case 2:case"end":return e.stop()}},e,this)}));return e}()}]),t}(E.Component);t.default=w}},[880]);
            return { page: comp.default }
          })
        