"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),h=a,v=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(v,l(l({ref:t},p),{},{components:n})):o.createElement(v,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],c={id:"Join_Dev_Network",title:"Dev Network",sidebar_label:"Dev Network"},s=void 0,i={unversionedId:"Join_Dev_Network",id:"Join_Dev_Network",isDocsHomePage:!1,title:"Dev Network",description:"This article will describe how to debug local applications by connecting to the PlatON DevNet(development Network).",source:"@site/../docs/\u63a5\u5165\u5f00\u53d1\u7f51.md",sourceDirName:".",slug:"/Join_Dev_Network",permalink:"/docs/Join_Dev_Network",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u63a5\u5165\u5f00\u53d1\u7f51.md",version:"current",frontMatter:{id:"Join_Dev_Network",title:"Dev Network",sidebar_label:"Dev Network"},sidebar:"docs",previous:{title:"Development guide",permalink:"/docs/PlatON_Overview_DevGuide"},next:{title:"Private Network",permalink:"/docs/Build_Private_Chain"}},p=[{value:"How to access the dev network to debug local applications?",id:"how-to-access-the-dev-network-to-debug-local-applications",children:[{value:"<strong>Step 1: Connect to the DevNet via RPC address</strong>",id:"step-1-connect-to-the-devnet-via-rpc-address",children:[]},{value:"<strong>Step 2: Apply for DevNet Test Token</strong>",id:"step-2-apply-for-devnet-test-token",children:[]}]},{value:"How to deploy a devnet node?",id:"how-to-deploy-a-devnet-node",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article will describe how to debug local applications by connecting to the PlatON DevNet(development Network)."),(0,r.kt)("h2",{id:"how-to-access-the-dev-network-to-debug-local-applications"},"How to access the dev network to debug local applications?"),(0,r.kt)("h3",{id:"step-1-connect-to-the-devnet-via-rpc-address"},(0,r.kt)("strong",{parentName:"h3"},"Step 1: Connect to the DevNet via RPC address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://35.247.155.162:6789 and ws://35.247.155.162:6790\n")),(0,r.kt)("h4",{id:"access-method-1--connect-to-the-devnet-via-the-local-platon-node"},"Access method 1:  Connect to the DevNet via the local PlatON node"),(0,r.kt)("p",null,"on the ubuntu 18.04 server, download and install the PlatON binary with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://download.platon.network/platon/platon/1.1.1/platon -P /usr/bin    \n")),(0,r.kt)("p",null,"Connect to the development network by."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://35.247.155.162:6789\n")),(0,r.kt)("h4",{id:"access-method-2-connect-to-the-platon-devnet-through-the-sdks"},"Access method 2: Connect to the PlatON DevNet through the SDKs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/Java_SDK"},"Java SDK")," to connect to the DevNet, for example, as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Web3j platonWeb3j = Web3j.build(new HttpService("http://35.247.155.162:6789"));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/Python_SDK"},"Python SDK")," to access the DevNet, the example is as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'w3 = Web3(HTTPProvider("http://35.247.155.162:6789"))\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/JS_SDK"},"JS SDK")," to access the DevNet, the example is as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var Web3 = require('web3');\nvar web3 = new Web3('http://35.247.155.162:6789');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/Json_Rpc"},"JSON RPC")," to access the DevNet, the example is as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST -H \'content-type: application/json\' --data \'{"jsonrpc": "2.0", "method": "web3_clientVersion", "params":[], "id":67}\' 35.247.155.162:6789\n')),(0,r.kt)("p",null,"Not limited to the above language SDKs, you also have access through SDKs in other languages."),(0,r.kt)("h3",{id:"step-2-apply-for-devnet-test-token"},(0,r.kt)("strong",{parentName:"h3"},"Step 2: Apply for DevNet Test Token")),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.platon.network/faucet/?id=e5d32df10aee11ec911142010a667c03"},"faucet")," to receive the Test Token. If you have a large Test Token request, please send an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," using the following format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," Title: PlatON Development Network Token Request\n Your Name:\n Contact information\uff1a\n Wechart ID (or other instant messaging software)\uff1a\n Amount\uff1a\n Use\uff1a\n Receiving addressA:\n Remarks:\n")),(0,r.kt)("p",null,"After successfully accessing the DevNet, you can send transactions after completing the test Token collection to start your test journey and can check the transactions in ",(0,r.kt)("a",{parentName:"p",href:"https://devnetscan.platon.network"},"DevNet Browser"),"."),(0,r.kt)("h2",{id:"how-to-deploy-a-devnet-node"},"How to deploy a devnet node?"),(0,r.kt)("p",null,"If you want to deploy a DevNet verification node, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Become_PlatON_Dev_Verification"},"Run a dev node"),"."))}d.isMDXComponent=!0}}]);