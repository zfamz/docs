"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6185],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3780:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={id:"walletconnect_tutorial",title:"WalletConnect \u7b80\u5355\u793a\u4f8b",sidebar_label:"WalletConnect"},i=void 0,p={unversionedId:"walletconnect_tutorial",id:"walletconnect_tutorial",isDocsHomePage:!1,title:"WalletConnect \u7b80\u5355\u793a\u4f8b",description:"\u4ec0\u4e48\u662f WalletConnect \u534f\u8bae",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/WalletConnect\u6559\u7a0b.md",sourceDirName:".",slug:"/walletconnect_tutorial",permalink:"/docs/zh-CN/walletconnect_tutorial",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/WalletConnect\u6559\u7a0b.md",version:"current",frontMatter:{id:"walletconnect_tutorial",title:"WalletConnect \u7b80\u5355\u793a\u4f8b",sidebar_label:"WalletConnect"},sidebar:"docs",previous:{title:"WASM\u2014\u5185\u7f6e\u6570\u636e\u7ed3\u6784",permalink:"/docs/zh-CN/WASM_Contract_8"},next:{title:"ATON\u64cd\u4f5c\u6307\u5357",permalink:"/docs/zh-CN/ATON-user-manual"}},u=[{value:"\u4ec0\u4e48\u662f WalletConnect \u534f\u8bae",id:"\u4ec0\u4e48\u662f-walletconnect-\u534f\u8bae",children:[]},{value:"\u6838\u5fc3\u67b6\u6784",id:"\u6838\u5fc3\u67b6\u6784",children:[{value:"\u8bf7\u6c42\u8fde\u63a5",id:"\u8bf7\u6c42\u8fde\u63a5",children:[]},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",children:[]}]},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",children:[]}],d={toc:u};function s(e){var t=e.components,c=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-walletconnect-\u534f\u8bae"},"\u4ec0\u4e48\u662f WalletConnect \u534f\u8bae"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://walletconnect.org/"},"WalletConnect")," \u662f\u4e00\u79cd\u5f00\u653e\u534f\u8bae\uff0c\u7528\u4e8e\u5728 Dapp \u548c\u94b1\u5305\u4e4b\u95f4\u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u3002\u8be5\u534f\u8bae\u5728\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u548c/\u6216\u8bbe\u5907\u4e4b\u95f4\u5efa\u7acb\u8fdc\u7a0b\u914d\u5bf9\uff0c\u4f7f\u7528\u4e2d\u7ee7\u670d\u52a1\u5668\u6765\u4e2d\u7ee7\u6709\u6548\u8f7d\u8377\u3002\u8fd9\u4e9b\u6709\u6548\u8f7d\u8377\u901a\u8fc7\u4e24\u4e2a\u5bf9\u7b49\u65b9\u4e4b\u95f4\u7684\u5171\u4eab\u5bc6\u94a5\u8fdb\u884c\u5bf9\u79f0\u52a0\u5bc6\u3002\u914d\u5bf9\u7531\u663e\u793a\u7684\u4e8c\u7ef4\u7801\u6216\u5e26\u6709\u6807\u51c6WalletConnect URI \u5730\u5740\u7684\u4e00\u65b9\u53d1\u8d77\uff0c\u5e76\u5728\u5bf9\u65b9\u540c\u610f\u6b64\u914d\u5bf9\u8bf7\u6c42\u65f6\u5efa\u7acb\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"ATON1.1.0\u7248\u672c\u5f00\u59cb\u652f\u6301 WalletConnect \u534f\u8bae\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4fdd\u6301\u79c1\u94a5\u4e0d\u79bb\u5f00\u79fb\u52a8\u8bbe\u5907\uff0c\u4e0d\u66b4\u9732\u7ed9\u8fde\u63a5\u7684DApp\u7684\u524d\u63d0\u4e0b\uff0c\u5b9e\u73b0\u4e0eDApp\u7684\u8fde\u63a5\u548c\u4ea4\u6613\u7b7e\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a DApp \u5f00\u53d1\u4eba\u5458\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u6709\u5173 Walletconnect \u96c6\u6210\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u8ba9\u60a8\u7684\u7528\u6237\u80fd\u591f\u5728 ATON \u94b1\u5305\u4e2d\u672c\u5730\u7b7e\u7f72\u7531\u60a8\u7684 DApp \u751f\u6210\u7684\u4ea4\u6613\u3002"))),(0,l.kt)("h2",{id:"\u6838\u5fc3\u67b6\u6784"},"\u6838\u5fc3\u67b6\u6784"),(0,l.kt)("p",null,"\u8be5\u67b6\u6784\u4e3b\u8981\u7531\u4f7f\u7528\u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u5bf9\u7b49\u65b9\uff08Dapp \u548c\u94b1\u5305\uff09\u4e4b\u95f4\u7684 websocket \u670d\u52a1\u5668\uff08\u6865\u63a5\u5668\uff09\u7ec4\u6210\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"arch",src:n(8975).Z})),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u8fde\u63a5"},"\u8bf7\u6c42\u8fde\u63a5"),(0,l.kt)("p",null,"\u53d1\u8d77\u8005\uff0c\u662f\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u8fde\u63a5\u7684\u8282\u70b9\uff08Dapp \uff09\u3002Dapp \u4f7f\u7528\u6807\u51c6WalletConnect URI\u683c\u5f0f\uff08",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"),"\uff09\u5730\u5740\uff0c\u5411\u6865\u63a5\u670d\u52a1\u5668\u53d1\u9001\u8fde\u63a5\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"wc:{topic...}@{version...}?bridge={url...}&key={key...}\n// Example URL\nwc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wc"),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u524d\u7f00 ",(0,l.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u9898\uff08\u4ec5\u7528\u4e8e\u63e1\u624b\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bridge"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6865\u63a5\u670d\u52a1\u5668\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u79f0\u5bc6\u94a5")))),(0,l.kt)("h3",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"establishing connection",src:n(1870).Z})),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u8282\u70b9( Wallet )\u5c06\u4f7f\u7528\u4e8c\u7ef4\u7801\u6216\u6df1\u5c42\u94fe\u63a5\u8bfb\u53d6 URI\u3002\u8bfb\u53d6 URI \u540e\uff0c\u5bf9\u7b49\u65b9\u5c06\u7acb\u5373\u63a5\u6536\u5e76\u89e3\u5bc6\u8fde\u63a5\u7684\u8bf7\u6c42\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u94b1\u5305\u5c06\u5411\u7528\u6237\u663e\u793a Dapp \u63d0\u4f9b\u7684\u8bf7\u6c42\u8be6\u7ec6\u4fe1\u606f\u3002\u7136\u540e\u7528\u6237\u5c06\u6279\u51c6\u6216\u62d2\u7edd\u8fde\u63a5\u3002\u5982\u679c\u88ab\u62d2\u7edd\uff0cDapp \u5c06\u7acb\u5373\u4e0e\u6865\u63a5\u670d\u52a1\u5668\u65ad\u5f00\u8fde\u63a5\uff0c\u5e76\u5728\u94b1\u5305\u63d0\u4f9b\u7684\u60c5\u51b5\u4e0b\u629b\u51fa\u9519\u8bef\u6d88\u606f\u3002\u5982\u679c\u83b7\u5f97\u6279\u51c6\uff0cDapp \u5c06\u4ece\u94b1\u5305\u6536\u5230\u63d0\u4f9b\u7684\u5e10\u6237\u548c ChainID\u3002"),(0,l.kt)("p",null,"\u5efa\u7acb\u8fde\u63a5\u540e\uff0cDapp \u5c06\u80fd\u591f\u53d1\u9001\u4efb\u4f55\u7531\u94b1\u5305\u5904\u7406\u7684 JSON-RPC \u8c03\u7528\u8bf7\u6c42\uff0c\u4ee5\u4ece\u5176\u8282\u70b9\u8bfb\u53d6\u6570\u636e\u6216\u4e3a\u4ea4\u6613\u6216\u6d88\u606f\u53d1\u51fa\u7b7e\u540d\u8bf7\u6c42\u3002"),(0,l.kt)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/WalletConnect-Example"},"\u8be6\u7ec6\u6e90\u7801"),"\uff0c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/client-api"},"JSON-RPC \u8bf4\u660e")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import WalletConnect from "@walletconnect/client";\nimport QRCodeModal from "@walletconnect/qrcode-modal";\n\n// \u521b\u5efa\u8fde\u63a5\nconst connector = new WalletConnect({\n  bridge: "https://bridge.walletconnect.org",\n  qrcodeModal: QRCodeModal,\n});\n\n// \u68c0\u67e5\u8fde\u63a5\u662f\u5426\u5df2\u7ecf\u5efa\u7acb\nif (!connector.connected) {\n  // \u521b\u5efa\u4f1a\u8bdd\n  connector.createSession();\n}\n\n// \u8ba2\u9605\u8fde\u63a5\u4e8b\u4ef6\nconnector.on("connect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n    // \u8fde\u63a5\u6210\u529f\u540e\u4f1a\u8fd4\u56de\u94b1\u5305\u5e10\u53f7\u548c\u94feID\n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("session_update", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("disconnect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n});\n\n// \u8c03\u7528\u65b9\u6cd5\uff0c \u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u8bbf\u95eehttps://docs.walletconnect.com/1.0/client-api\n// \u53d1\u9001\u4ea4\u6613\u65b9\u6cd5\u793a\u4f8b\nconnector.sendTransaction({\n  data: "0x",\n  from: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  gasLimit: "0x5208",\n  gasPrice: "0x746a528800",\n  nonce: "0x12",\n  to: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  value: "0x00"\n}).then(txHash => {\n  // \u53d1\u9001\u4ea4\u6613\u6210\u529f\uff0c \u94b1\u5305\u4f1a\u8fd4\u56de\u4ea4\u6613hash\n  console.log(\'txHash: \', txHash)\n})\n\n')))}s.isMDXComponent=!0},1870:function(e,t,n){t.Z=n.p+"assets/images/establishing-connection-121e17f010e4b61a7995b823bd590327.png"},8975:function(e,t,n){t.Z=n.p+"assets/images/walletconnect-header-efbfd1fbd6de5bd770cf2f7e91d5cd7a.png"}}]);