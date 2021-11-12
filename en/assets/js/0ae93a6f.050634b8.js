"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"walletconnect_tutorial",title:"WalletConnect Simple example",sidebar_label:"WalletConnect"},c=void 0,s={unversionedId:"walletconnect_tutorial",id:"walletconnect_tutorial",isDocsHomePage:!1,title:"WalletConnect Simple example",description:"Introduction",source:"@site/../docs/WalletConnect\u6559\u7a0b.md",sourceDirName:".",slug:"/walletconnect_tutorial",permalink:"/docs/en/walletconnect_tutorial",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/WalletConnect\u6559\u7a0b.md",version:"current",frontMatter:{id:"walletconnect_tutorial",title:"WalletConnect Simple example",sidebar_label:"WalletConnect"},sidebar:"docs",previous:{title:"WASM\u2014Build-in Type",permalink:"/docs/en/WASM_Contract_8"},next:{title:"ATON Wallet User Manual",permalink:"/docs/en/ATON-user-manual"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Core Architecture",id:"core-architecture",children:[{value:"\u8bf7\u6c42\u8fde\u63a5",id:"\u8bf7\u6c42\u8fde\u63a5",children:[]},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",children:[]},{value:"Simple example",id:"simple-example",children:[]}]}],d={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.org/"},"WalletConnect")," is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps). The protocol establishes a remote connection between two apps and/or devices using a Bridge server to relay payloads. These payloads are symmetrically encrypted through a shared key between the two peers. The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request. It also includes an optional Push server to allow Native applications to notify the user of incoming payloads for established connections."),(0,o.kt)("h2",{id:"core-architecture"},"Core Architecture"),(0,o.kt)("p",null,"The architecture consists essentially of a websocket server (Bridge) between two peers (Dapp and Wallet) that use the Client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arch",src:n(8975).Z})),(0,o.kt)("h3",{id:"\u8bf7\u6c42\u8fde\u63a5"},"\u8bf7\u6c42\u8fde\u63a5"),(0,o.kt)("p",null,"The initiator, is the first peer who requests connection (Dapp). Dapp posts an encrypted payload consisting of one-time topic (used for handshake only) and connection request details to the Bridge Server. Then using the WalletConnect Standard URI format (",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"),") Dapp assembles together the required parameters to establish the connection: (handshake) topic, bridge (url) and (symmetric) key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"wc:{topic...}@{version...}?bridge={url...}&key={key...}\n// Example URL\nwc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Required parts"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wc"),(0,o.kt)("td",{parentName:"tr",align:null},"Wallet Connect protocol defined in  ",(0,o.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"topic"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"version"),(0,o.kt)("td",{parentName:"tr",align:null},"Number (eg. 1.9.0)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bridge"),(0,o.kt)("td",{parentName:"tr",align:null},"Bridge URL (URL Encoded)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"Symmetric key hex string")))),(0,o.kt)("h3",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"establishing connection",src:n(1870).Z})),(0,o.kt)("p",null,"The second peer (Wallet) will read the URI using either a QR Code or a deep link. After reading the URI the peer will immediately receive and decrypt the connection request payload."),(0,o.kt)("p",null,"The Wallet will then display to the user request details provided by the Dapp. The user will then approve or reject the connection. If rejected, the Dapp will disconnect from the Bridge Server immediately and throw an error message if provided by the Wallet. If approved, the Dapp will receive provided account and chainId from the Wallet."),(0,o.kt)("p",null,"Once the connection is established, the Dapp will be able to send any JSON-RPC call requests to be handled by the Wallet either to read data from its node or make signing requests for transactions or messages."),(0,o.kt)("h3",{id:"simple-example"},"Simple example"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/WalletConnect-Example"},"GitHub"),"\uff0c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/client-api"},"JSON-RPC Description")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import WalletConnect from "@walletconnect/client";\nimport QRCodeModal from "@walletconnect/qrcode-modal";\n\n// Create a connector\nconst connector = new WalletConnect({\n  bridge: "https://bridge.walletconnect.org", // Required\n  qrcodeModal: QRCodeModal,\n});\n\n// Check if connection is already established\nif (!connector.connected) {\n  // create new session\n  connector.createSession();\n}\n\n// Subscribe events\nconnector.on("connect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n  \n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("session_update", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("disconnect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n});\n\n// Call method, for details please visit https://docs.walletconnect.com/1.0/client-api\n// transaction method\nconnector.sendTransaction({\n  data: "0x",\n  from: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  gasLimit: "0x5208",\n  gasPrice: "0x746a528800",\n  nonce: "0x12",\n  to: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  value: "0x00"\n}).then(txHash => {\n  // When the transaction is sent successfully, the wallet will return the transaction hash\n  console.log(\'txHash: \', txHash)\n})\n\n')))}u.isMDXComponent=!0},1870:function(e,t,n){t.Z=n.p+"assets/images/establishing-connection-121e17f010e4b61a7995b823bd590327.png"},8975:function(e,t,n){t.Z=n.p+"assets/images/walletconnect-header-efbfd1fbd6de5bd770cf2f7e91d5cd7a.png"}}]);