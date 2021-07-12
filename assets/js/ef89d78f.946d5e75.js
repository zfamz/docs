(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[366],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8289:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"PlatON_Validation_Introduce",title:"Intro to validator",sidebar_label:"Intro to validator"},l=void 0,s={unversionedId:"PlatON_Validation_Introduce",id:"PlatON_Validation_Introduce",isDocsHomePage:!1,title:"Intro to validator",description:"What is a validator?",source:"@site/../docs/PlatON\u9a8c\u8bc1\u8282\u70b9\u4ecb\u7ecd.md",sourceDirName:".",slug:"/PlatON_Validation_Introduce",permalink:"/docs/PlatON_Validation_Introduce",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatON\u9a8c\u8bc1\u8282\u70b9\u4ecb\u7ecd.md",version:"current",frontMatter:{id:"PlatON_Validation_Introduce",title:"Intro to validator",sidebar_label:"Intro to validator"},sidebar:"docs",previous:{title:"WebAssembly(Wasm)",permalink:"/docs/Wasm_Operation_Principle"},next:{title:"Run a validator node",permalink:"/docs/Become_PlatON_Main_Verification"}},d=[{value:"What is a validator?",id:"what-is-a-validator",children:[]},{value:"Basic requirements to become a validator",id:"basic-requirements-to-become-a-validator",children:[]},{value:"How to be a validator?",id:"how-to-be-a-validator",children:[]},{value:"What rewards will I get for being a validator?",id:"what-rewards-will-i-get-for-being-a-validator",children:[]},{value:"Node Rewards",id:"node-rewards",children:[]},{value:"What acts will be punished",id:"what-acts-will-be-punished",children:[]},{value:"Zero block generation penalty",id:"zero-block-generation-penalty",children:[]},{value:"How to participate in the governance",id:"how-to-participate-in-the-governance",children:[]}],c={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-a-validator"},"What is a validator?"),(0,r.kt)("p",null,"PlatON is a blockchain project that implements democratic governance. Validators are jointly selected by all LAT holders to maintain and develop the PlatON network. The 201 nodes with the most votes will become alternative nodes, from which 43 validators will be randomly selected by VRF to participate in the management of the entire PlatON network. The responsibilities of a validator are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maintaining PlatON nodes and network"),(0,r.kt)("li",{parentName:"ul"},"Production and validating the blocks"),(0,r.kt)("li",{parentName:"ul"},"Proposal voting and decision-making")),(0,r.kt)("h3",{id:"basic-requirements-to-become-a-validator"},"Basic requirements to become a validator"),(0,r.kt)("h4",{id:"minimum-staking-requirements"},"Minimum staking requirements"),(0,r.kt)("p",null,"Minimum staking of 100,000 LAT is required and additional staking can be made, but all staking can only be canceled at once. If the actual staking is lower than the minimum staking due to penalties or other reasons., the node will automatically be removed from the list of alternative node candidates."),(0,r.kt)("h4",{id:"recommended-configurations"},"Recommended configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Server: Server or backup server running PlatON software (firewall required)"),(0,r.kt)("li",{parentName:"ul"},"Memory: 8GB RAM "),(0,r.kt)("li",{parentName:"ul"},"Local storage: 100GB system disk, 200GB data disk (online scalable)"),(0,r.kt)("li",{parentName:"ul"},"Processor: 64-Bit 4 core (each core 2.4 GHz or higher)"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 5 MB/s (online scalable)")),(0,r.kt)("h4",{id:"software-requirements"},"Software requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux: Ubuntu 18.04 or higher"),(0,r.kt)("li",{parentName:"ul"},"Clock synchronization: NTP"),(0,r.kt)("li",{parentName:"ul"},"User tools: Node management tools (mtool or other open sources/ self-developed tools)")),(0,r.kt)("h4",{id:"operation-requirements"},"Operation requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network monitoring and real-time support"),(0,r.kt)("li",{parentName:"ul"},"99.9% uptime"),(0,r.kt)("li",{parentName:"ul"},"Cross-regional failure recovery and data backup"),(0,r.kt)("li",{parentName:"ul"},"Safety and security measures"),(0,r.kt)("li",{parentName:"ul"},"Support software upgrade")),(0,r.kt)("h3",{id:"how-to-be-a-validator"},"How to be a validator?"),(0,r.kt)("p",null,"Firstly, make sure you have a balance of 100,000 LAT in your staking account, locked or unlocked. Secondly, you have to own a server with recommended configurations mentioned above. When you meet the above two conditions, staking can be made ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Become_PlatON_Main_Verification/"},"Become a mainnet validator"),"."),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Economic_Model#role-description"},"Role Description")," for node-related terms and role descriptions."),(0,r.kt)("h3",{id:"what-rewards-will-i-get-for-being-a-validator"},"What rewards will I get for being a validator?"),(0,r.kt)("h4",{id:"source-of-reward"},"Source of reward"),(0,r.kt)("p",null,"The source of reward consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#incentives"},"Offerings"),": Each year, 2.5% of the total of the previous year is offered in increments, and 80% of the offerings (which is 2% of the total) enter the reward pool"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#incentives"},"Foundation subsidy"),": Equivalent to 3% of the total initial allocation. Allocated in the first 10 years. Keep the node reward pool the same every year")),(0,r.kt)("h3",{id:"node-rewards"},"Node Rewards"),(0,r.kt)("p",null,"Node reward consists of three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#incentives"},"Block generation reward"),": For each block produced, the validator will receive a fixed amount of LAT as a reward. 1/2 of the total annual node reward pool is used as block generation reward, which is distributed evenly based on the number of blocks per year (about 28,688,727)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#incentives"},"Transaction Fee"),": The fees for packaging transactions are all charged by validators who package the blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#incentives"},"Staking reward"),": 1/2 of the total node reward pool is used as Staking reward, which is distributed evenly based on the number of Staking epochs per year (about 2668). Each staking epoch is (10,750 blocks, around 3 hours). Upon completion, the reward is distributed evenly to all alternative nodes.")),(0,r.kt)("h4",{id:"delegator-reward"},(0,r.kt)("a",{parentName:"h4",href:"/docs/en/Economic_Model#delegated-award"},"Delegator reward")),(0,r.kt)("p",null,"  Staking rewards are issued to validators and alternative nodes, which will distribute them to the relevant delegators according to the set dividend proportion."),(0,r.kt)("h3",{id:"what-acts-will-be-punished"},"What acts will be punished"),(0,r.kt)("h3",{id:"zero-block-generation-penalty"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/Economic_Model#zero-block-the-system-automatically-judges-and-punishes"},"Zero block generation penalty")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A consensus round is selected as a validator, and if no blocks are produced or all blocks produced are not confirmed by other validators, it is determined that there are zero blocks generated;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Zero blocks were generated in a consensus round. If no blocks are produced in the following 20 consensus rounds (about 2 hours and a half), there will be a penalty equivalent to the block generation rewards of 2500 blocks, and the node qualification will be restricted. If the staking is less than 100,000 LAT after the penalty, ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Economic_Model#platons-way-of-punishment"},"the status as an alternative node candidate will be revoked"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A consensus round is selected as a validator, and if no blocks are produced or all blocks produced are not confirmed by other validators, it is determined that there are zero blocks generated;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a node generates zero blocks in a consensus round and does not produce blocks for the next 20 consensus rounds (about 2 hours and a half), it will receive the penalty, which is a deduction of LAT equivalent to the block generation rewards of 2500 blocks,"))),(0,r.kt)("h4",{id:"dual-signing"},(0,r.kt)("a",{parentName:"h4",href:"/docs/en/Economic_Model#duplicateprepareduplicatevote-manual-reporting-and-systematic-penalties"},"Dual signing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Producing or signing multiple blocks in the same block height is deem as dual signing;"),(0,r.kt)("li",{parentName:"ul"},"Except for the revocation of nodes, a dual signing requires ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/Economic_Model#platons-way-of-punishment"},"a deduction of 10\u2030 of its staking"),";"),(0,r.kt)("li",{parentName:"ul"},"Anyone can report a dual signing, and after the current validator verifies and reaches consensus, the reported person will be recognized as a violation and punished. 50% of the penalty is given to the informer and 50% is placed in the reward pool for the next year's block generation and Staking rewards.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Restrict the status for nodes: Temporary disqualification of the nodes, locking 56 epochs, during which period one cannot be a validator and cannot participate in block generation, and there will be no Staking rewards.\nRevocation of nodes: The staking is forcibly unsecured and the violator would be kicked out from the list of alternative node candidates. The staking LAT is returned to the original staking account after 168 Epochs, and cannot be re-staked as a new node during the pledge freeze period, and the original delegation relationship is abolished after re-staking.\nDeduct Staking LAT: Deduct LAT from the staking of the node and place the amount into the reward pool for block generation and staking rewards in the second year. If the staking is less than 100,000 LAT after the penalty, the node would be revoked.")),(0,r.kt)("h3",{id:"how-to-participate-in-the-governance"},"How to participate in the governance"),(0,r.kt)("p",null,"In PlatON, governance is done through on-chain proposal voting with the following types of proposals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/en/PlatON_Governance_Solution#proposal-classification"},"Text proposal"),": Decisions that could be implemented without code can be initiated with a text proposal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/en/PlatON_Governance_Solution#span-idupgradeupgrade-mechanismspan"},"Upgrade proposal"),": Used for initiating version upgrade voting on the chain for smooth upgrade purposes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/en/PlatON_Governance_Solution#governance-parameters"},"Parameter proposal"),": Used for modifying the governable parameters such as system parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/en/PlatON_Governance_Solution#quick-upgrade"},"Cancel proposal"),": Used for canceling a software upgrade or parameter modification proposal which is being voted on the chain."))))}u.isMDXComponent=!0}}]);