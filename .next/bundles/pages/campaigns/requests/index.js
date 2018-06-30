
          window.__NEXT_REGISTER_PAGE('/campaigns/requests', function() {
            var comp = module.exports=webpackJsonp([6],{876:function(e,t,l){e.exports=l(877)},877:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(46),a=r(n),u=l(90),o=r(u),s=l(49),d=r(s),c=l(27),f=r(c),p=l(18),i=r(p),m=l(19),v=r(m),h=l(28),E=r(h),C=l(29),b=r(C),_=l(0),q=r(_),y=l(92),T=r(y),k=l(55),w=l(82),x=l(58),A=(r(x),l(124)),R=r(A),g=l(879),H=r(g),z=function(e){function t(){return(0,i.default)(this,t),(0,E.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,v.default)(t,[{key:"renderRows",value:function(){var e=this;return this.props.requests.map(function(t,l){return q.default.createElement(H.default,{id:l,key:l,request:t,address:e.props.address,approversCount:e.props.approversCount})})}},{key:"render",value:function(){return q.default.createElement(T.default,null,q.default.createElement(w.Link,{route:"/campaigns/"+this.props.address+"/requests/new"},q.default.createElement("a",null,q.default.createElement(k.Button,{primary:!0,floated:"right",content:"Add Request"}))),q.default.createElement("h2",null,"Requests"),q.default.createElement(k.Table,null,q.default.createElement(k.Table.Header,null,q.default.createElement(k.Table.Row,null,q.default.createElement(k.Table.HeaderCell,null,"ID"),q.default.createElement(k.Table.HeaderCell,null,"Description"),q.default.createElement(k.Table.HeaderCell,null,"Amount"),q.default.createElement(k.Table.HeaderCell,null,"Recipient"),q.default.createElement(k.Table.HeaderCell,null,"Approval Count"),q.default.createElement(k.Table.HeaderCell,null,"Approve"),q.default.createElement(k.Table.HeaderCell,null,"Finalize"))),q.default.createElement(k.Table.Body,null,this.renderRows())),q.default.createElement("p",null,"Found ",this.props.requestCount," requests. "))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(a.default.mark(function e(t){var l,r,n,u,s;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.query.address,r=(0,R.default)(l),e.next=4,r.methods.getRequestCount().call();case 4:return n=e.sent,e.next=7,r.methods.approversCount().call();case 7:return u=e.sent,e.next=10,o.default.all(Array(parseInt(n)).fill().map(function(e,t){return r.methods.requests(t).call()}));case 10:return s=e.sent,e.abrupt("return",{address:l,requests:s,requestCount:n,approversCount:u});case 12:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_.Component);t.default=z},879:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(46),a=r(n),u=l(49),o=r(u),s=l(27),d=r(s),c=l(18),f=r(c),p=l(19),i=r(p),m=l(28),v=r(m),h=l(29),E=r(h),C=l(0),b=r(C),_=l(55),q=l(58),y=r(q),T=l(124),k=r(T),w=function(e){function t(){var e,l,r,n,u=this;(0,f.default)(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return l=r=(0,v.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(c))),r.onApprove=(0,o.default)(a.default.mark(function e(){var t,l;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,k.default)(r.props.address),e.next=3,y.default.eth.getAccounts();case 3:return l=e.sent,e.next=6,t.methods.approveRequest(r.props.id).send({from:l[0]});case 6:case"end":return e.stop()}},e,u)})),r.onFinalize=(0,o.default)(a.default.mark(function e(){var t,l;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,k.default)(r.props.address),e.next=3,y.default.eth.getAccounts();case 3:return l=e.sent,e.next=6,t.methods.finalizeRequest(r.props.id).send({from:l[0]});case 6:case"end":return e.stop()}},e,u)})),n=l,(0,v.default)(r,n)}return(0,E.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=_.Table.Row,t=_.Table.Cell,l=this.props,r=l.id,n=l.request,a=l.approversCount,u=n.approvalCount>a/2;return b.default.createElement(e,{disabled:n.complete,positive:u&&!n.complete},b.default.createElement(t,null,r),b.default.createElement(t,null,n.description),b.default.createElement(t,null,y.default.utils.fromWei(n.value,"ether")),b.default.createElement(t,null,n.recipient),b.default.createElement(t,null,n.approvalCount,"/",a),b.default.createElement(t,null,n.complete?null:b.default.createElement(_.Button,{color:"green",basic:!0,onClick:this.onApprove},"Approve")),b.default.createElement(t,null,n.complete?null:b.default.createElement(_.Button,{color:"teal",basic:!0,onClick:this.onFinalize},"Finalize")))}}]),t}(C.Component);t.default=w}},[876]);
            return { page: comp.default }
          })
        