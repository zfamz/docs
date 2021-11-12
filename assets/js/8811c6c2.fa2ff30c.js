"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[579],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),k=o,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6161:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={id:"Build_Private_Chain",title:"Private Network",sidebar_label:"Private Network"},p=void 0,d={unversionedId:"Build_Private_Chain",id:"Build_Private_Chain",isDocsHomePage:!1,title:"Private Network",description:"This document describes how to quickly deploy a private blockchain.",source:"@site/../docs/\u90e8\u7f72\u79c1\u6709\u7f51\u7edc.md",sourceDirName:".",slug:"/Build_Private_Chain",permalink:"/docs/Build_Private_Chain",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u90e8\u7f72\u79c1\u6709\u7f51\u7edc.md",version:"current",frontMatter:{id:"Build_Private_Chain",title:"Private Network",sidebar_label:"Private Network"},sidebar:"docs",previous:{title:"Dev Network",permalink:"/docs/Join_Dev_Network"},next:{title:"System contracts",permalink:"/docs/PlatON_system_contract"}},s=[{value:"Standalone or Single Node Mode",id:"standalone-or-single-node-mode",children:[]},{value:"Cluster Deployment",id:"cluster-deployment",children:[]}],c={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to quickly deploy a private blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before building the private chain, you need to compile the binary. You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Install_PlatON"},"Install PlatON document"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Take the private chain deployment under Ubuntu as an example, including single node and cluster deployment. The deployment procedures under Windows is similar to Ubuntu. "))),(0,r.kt)("p",null,"If you can't easily connect to an external network, you can choose to build your own private network.PlatON supports single node mode and cluster mode to run private networks.Take the Ubuntu environment as an example and suppose the node data directory is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/platon-node/data"))," , which the users should modify accordingly:"),(0,r.kt)("h2",{id:"standalone-or-single-node-mode"},"Standalone or Single Node Mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate nodekey and blskey files"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/platon-node/data && platonkey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/nodeid) && platonkey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/blskey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/blspub)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"nodeid: node public key (ID) file, which stores the public key of the node and is used to identify the node"),(0,r.kt)("li",{parentName:"ul"},"nodekey: node private key file which stores the node's private key and can not be public and need to do a backup."),(0,r.kt)("li",{parentName:"ul"},"blspub: node BLS public key file which stores the BLS public key of the node, and is used for fast verification of signatures in the consensus protocol."),(0,r.kt)("li",{parentName:"ul"},"blskey: node BLS private key file which stores the node's BLS private key, cannot be published and need to make a backup."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate wallet file"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/platon-node/data && platon --datadir ~/platon-node/data account new\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your new account is locked with a password. Please give a password. Do not forget this password."),(0,r.kt)("p",{parentName:"blockquote"},"Passphrase:"),(0,r.kt)("p",{parentName:"blockquote"},"Repeat passphrase:"),(0,r.kt)("p",{parentName:"blockquote"},"Address: {lax1zmzhskk9vtl5rckulhuzn3dpgtclenta5fjs08}"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note\uff1a")),(0,r.kt)("p",{parentName:"blockquote"},"The wallet file and password are very important for the generated account address. Losing the wallet file or forgetting the password will cause the token in the account to be lost. Please make a backup of the wallet file and remember the password.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Editing the genesis block configuration file ",(0,r.kt)("inlineCode",{parentName:"strong"},"platon.json")))),(0,r.kt)("p",null,"Create the genesis block configuration file platon.json in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/platon-node")," directory, then copy the following genesis block configuration file template content to platon.json file, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"your-node-pubkey")," as the previously generated ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"node public key (nodeid)")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"your-node-blspubkey")," as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"node BLS public key (blspub)")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"your-account-address")," as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"the wallet address")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\u2026\u2026\n    "cbft": {\n    "initialNodes": [{\n        "node": "enode://your-node-pubkey@127.0.0.1:16789",\n        "blsPubKey": "your-node-blspubkey"\n    }],\n    \u2026\u2026\n    "alloc": {\n      "your-account-address": {\n            "balance": "999000000000000000000"\n      }\n    },\n\u2026\u2026\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Genesis block configuration file template"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "config": {\n        "chainId": 1021,\n        "eip155Block": 3,\n        "cbft": {\n            "initialNodes": [\n              {\n                    "node":"enode://4fcc251cf6bf3ea53a748971a223f5676225ee4380b65c7889a2b491e1551d45fe9fcc19c6af54dcf0d5323b5aa8ee1d919791695082bae1f86dd282dba4150f@127.0.0.1:16790",\n                    "blsPubKey":"d341a0c485c9ec00cecf7ea16323c547900f6a1bacb9daacb00c2b8bacee631f75d5d31b75814b7f1ae3a4e18b71c617bc2f230daa0c893746ed87b08b2df93ca4ddde2816b3ac410b9980bcc048521562a3b2d00e900fd777d3cf88ce678719"\n              }\n            ],\n            "amount": 10,\n            "period": 10000,\n            "validatorMode": "ppos"\n        },\n        "genesisVersion": 3328\n    },\n    "economicModel":{\n        "common":{\n            "maxEpochMinutes":4,\n            "maxConsensusVals":4,\n            "additionalCycleTime":28\n        },\n        "staking":{\n            "stakeThreshold": 100000000000000000000000,\n            "operatingThreshold": 10000000000000000000,\n            "maxValidators": 30,\n            "unStakeFreezeDuration": 2,\n            "rewardPerMaxChangeRange": 500,\n            "rewardPerChangeInterval": 10\n        },\n        "slashing":{\n           "slashFractionDuplicateSign": 100,\n           "duplicateSignReportReward": 50,\n           "maxEvidenceAge":1,\n           "slashBlocksReward":20,\n           "zeroProduceCumulativeTime":3,\n           "zeroProduceNumberThreshold":2,\n           "zeroProduceFreezeDuration":1\n        },\n         "gov": {\n            "versionProposalVoteDurationSeconds": 160,\n            "versionProposalSupportRate": 6670,\n            "textProposalVoteDurationSeconds": 160,\n            "textProposalVoteRate": 5000,\n            "textProposalSupportRate": 6670,          \n            "cancelProposalVoteRate": 5000,\n            "cancelProposalSupportRate": 6670,\n            "paramProposalVoteDurationSeconds": 160,\n            "paramProposalVoteRate": 5000,\n            "paramProposalSupportRate": 6670      \n        },\n        "reward":{\n            "newBlockRate": 50,\n            "platonFoundationYear": 10,\n            "increaseIssuanceRatio": 250\n        },\n        "innerAcc":{\n            "platonFundAccount": "lax1fyeszufxwxk62p46djncj86rd553skpptsj8v6",\n            "platonFundBalance": 0,\n            "cdfAccount": "lax1c8enpvs5v6974shxgxxav5dsn36e5jl4v29pec",\n            "cdfBalance": 331811981000000000000000000\n        }\n    },\n    "nonce": "0x0376e56dffd12ab53bb149bda4e0cbce2b6aabe4cccc0df0b5a39e12977a2fcd23",\n    "timestamp": "0x5bc94a8a",\n    "extraData": "0xd782070186706c61746f6e86676f312e3131856c696e757800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "gasLimit": "4712388",\n    "alloc": {\n        "lax1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrzpqayr": {\n            "balance": "200000000000000000000000000"\n        },\n        "lax17ekt83lj35zc4c7xak2f834fu2naw7rdxuz3wt": {\n            "balance": "9718188019000000000000000000"\n        }\n    },\n    "number": "0x0",\n    "gasUsed": "0x0",\n    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Initialize the genesis block"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/platon-node && platon --datadir ./data init platon.json\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: "),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"Successfully genesis state")," prompt appears to indicate that the initialization of the genesis information is complete. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start Node")),(0,r.kt)("p",{parentName:"li"},"In general, the platon process is always in the foreground, so we cannot do anything else, and if we exit the terminal in the middle, the program will exit.Ubuntu can launch programs in nohup mode: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/platon-node && nohup platon --identity "platon" --datadir ./data --port 16789 --rpcaddr 127.0.0.1 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data/nodekey --cbft.blskey ./data/blskey & > ./data/platon.log 2>&1 &\n')),(0,r.kt)("p",null,"When succeed in excuting the command of nohup, press enter again to ensure that the process does not exit because the terminal is closed by mistake. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Check the running status of the node"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"platon attach http://localhost:6789 --exec platon.blockNumber\n")),(0,r.kt)("p",null,"Execute the above command several times. If the block height keeps growing, the single-node private chain deployment is successful. "),(0,r.kt)("h2",{id:"cluster-deployment"},"Cluster Deployment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PlatON cluster")," is a private chain with multiple nodes. Here we assume that you can already build a single node. And we will build a network of two nodes on one server.The deployment of more than two nodes is similar.U:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each node instance has a separate data directory (--datadir)"),(0,r.kt)("li",{parentName:"ul"},"Each instance runs on a different port, whether it is a p2p port or an rpc port (--port and --rpcport)"),(0,r.kt)("li",{parentName:"ul"},"Nodes can be interconnected with each other"),(0,r.kt)("li",{parentName:"ul"},"RPC server port is not occupied")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.Create directory")),(0,r.kt)("p",null,"Create directories data0 and data1 under the platon-node directory as the data directories for the two nodes. Generate two coinbase accounts for each node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/platon-node/data0 ~/platon-node/data1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Generate key pair")),(0,r.kt)("p",null,"Save the nodekey and blskey of the two nodes to 'data0' and 'data1' respectively. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/platon-node/data0 && platonkey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ./nodeid) && platonkey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./blskey) >(grep \"PublicKey\" | awk '{print $3}' > ./blspub)\n\ncd ~/platon-node/data1 && platonkey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ./nodeid) && platonkey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./blskey) >(grep \"PublicKey\" | awk '{print $3}' > ./blspub)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Editing genesis files")),(0,r.kt)("p",null,"Modify the genesis block configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"platon.json"),"."),(0,r.kt)("p",null,"Add the node information of the two nodes to the initialNodes array, which is 2 because we are generating a two-node cluster environment.The platon.json file needs to be modified: please replace the contents of the following files 'node0-nodekey ', 'node1-nodekey', 'node0-blspubkey' and 'node1-blspubkey' with the node public key and node BLS public key generated in the previous step.Replace 'your account-address' with the wallet address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\u2026\u2026\n  "cbft": {\n  "initialNodes": [{\n        "node": "enode://node0-pubkey@127.0.0.1:16789",\n        "blsPubKey": "node0-blspubkey"\n    },{\n        "node": "enode://node1-pubkey@127.0.0.1:16790",\n        "blsPubKey": "node1-blspubkey"\n    }],\n    \u2026\u2026\n  "alloc": {\n    "your-account-address": {\n        "balance": "999000000000000000000"\n    },\n    "1000000000000000000000000000000000000003": {\n        "balance": "200000000000000000000000000"\n    }\n  },\n\u2026\u2026\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Initialization and startup")),(0,r.kt)("p",null,"Initialize genesis block information for node 0 and node 1, respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"platon --datadir ~/platon-node/data0 init platon.json && platon --datadir ~/platon-node/data1 init platon.json\n")),(0,r.kt)("p",null,"After successful initialization, start node 0 and node 1 in nohup mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/platon-node && nohup platon --identity "platon0" --datadir ./data0 --port 16789 --rpcaddr 0.0.0.0 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data0/nodekey --cbft.blskey ./data0/blskey > ./data0/platon.log 2>&1 &\n\ncd ~/platon-node && nohup platon --identity "platon1" --datadir ./data1 --port 16790 --rpcaddr 0.0.0.0 --rpcport 6790 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data1/nodekey --cbft.blskey ./data1/blskey  > ./data1/platon.log 2>&1 &\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Check")),(0,r.kt)("p",null,"Go to the platon console for any node as described above to see if the node is connected to its counterpart and to see if the cluster has started successfully by seeing if blockNumber continues to grow. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"platon attach http://localhost:6789 --exec platon.blockNumber\nplaton attach http://localhost:6790 --exec platon.blockNumber\n")),(0,r.kt)("p",null,"Do this multiple times and watch if the block height increases."))}u.isMDXComponent=!0}}]);