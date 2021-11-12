"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2718],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=r.createContext({}),s=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(i.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,i=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(f,o(o({ref:e},p),{},{components:t})):r.createElement(f,o({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=n,u.mdxType="string"==typeof n?n:a,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9194:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],u={id:"Solidity_Contract_Migrate",title:"\u8fc1\u79fb\u6559\u7a0b",sidebar_label:"\u8fc1\u79fb\u6559\u7a0b"},i=void 0,s={unversionedId:"Solidity_Contract_Migrate",id:"Solidity_Contract_Migrate",isDocsHomePage:!1,title:"\u8fc1\u79fb\u6559\u7a0b",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/solidity\u5408\u7ea6\u8fc1\u79fb\u6559\u7a0b.md",sourceDirName:".",slug:"/Solidity_Contract_Migrate",permalink:"/docs/zh-CN/Solidity_Contract_Migrate",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/solidity\u5408\u7ea6\u8fc1\u79fb\u6559\u7a0b.md",version:"current",frontMatter:{id:"Solidity_Contract_Migrate",title:"\u8fc1\u79fb\u6559\u7a0b",sidebar_label:"\u8fc1\u79fb\u6559\u7a0b"},sidebar:"docs",previous:{title:"\u5165\u95e8\u624b\u518c",permalink:"/docs/zh-CN/Solidity_Dev_Manual"},next:{title:"\u5f00\u53d1\u6210\u672c",permalink:"/docs/zh-CN/Solidity_Contract_Dev_Costs"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u64cd\u4f5c\u6b65\u805a",id:"\u64cd\u4f5c\u6b65\u805a",children:[]}],c={toc:p};function m(n){var e=n.components,t=(0,a.Z)(n,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"PlatON\u652f\u6301\u7684solidity\u7248\u672c\u53f7\u6709(0.4.26 0.5.17 0.6.12 0.7.6 0.8.2)\uff0c\u5982\u679c\u8fc1\u79fb\u5176\u5b83\u7248\u672c\u7684\u5408\u7ea6\uff0c\u9700\u8981\u4fee\u6539\u6210\u5bf9\u5e94\u7248\u672c\u53f7\uff0c\u5e76\u8c03\u6574\u76f8\u5173\u8bed\u6cd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u4ee5\u592a\u574a\u7684\u667a\u80fd\u5408\u7ea6\u8fc1\u79fb\u5230PlatON\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7platon-truffle\u5f00\u53d1\u5de5\u5177\u6765\u8fdb\u884c\u3002\u9996\u5148\u786e\u4fdd\u60a8\u6b63\u786e\u5b89\u88c5\u4e86platon-truffle,\u53ea\u9700\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5c06\u6f14\u793a\u5c06\u4ee5\u592a\u574a\u7684ERC200513Token\u5408\u7ea6\u8fc1\u79fb\u81f3PlatON\u4e0a\uff0cERC200513Token.sol\u5408\u7ea6\u6587\u4ef6\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pragma solidity 0.5.17;\n\ncontract ERC200513Token {\n    string public name; // ERC20\u6807\u51c6--\u4ee3\u5e01\u540d\u79f0\n    string public symbol; // ERC20\u6807\u51c6\u2014\u2014\u4ee3\u5e01\u7b80\u79f0\n    uint8 public decimals = 18;  // ERC20\u6807\u51c6\uff0cdecimals \u53ef\u4ee5\u6709\u7684\u5c0f\u6570\u70b9\u4e2a\u6570\uff0c\u6700\u5c0f\u7684\u4ee3\u5e01\u5355\u4f4d\u300218 \u662f\u5efa\u8bae\u7684\u9ed8\u8ba4\u503c\n    uint256 public totalSupply = 10000000000000000000 ether; // ERC20\u6807\u51c6 \u603b\u4f9b\u5e94\u91cf\n\n    // \u7528mapping\u4fdd\u5b58\u6bcf\u4e2a\u5730\u5740\u5bf9\u5e94\u7684\u4f59\u989d ERC20\u6807\u51c6\n    mapping(address => uint256) public balanceOf;\n    // \u5b58\u50a8\u5bf9\u8d26\u53f7\u7684\u63a7\u5236 ERC20\u6807\u51c6\n    mapping(address => mapping(address => uint256)) public allowance;\n\n    // \u4e8b\u4ef6\uff0c\u7528\u6765\u901a\u77e5\u5ba2\u6237\u7aef\u4ea4\u6613\u53d1\u751f ERC20\u6807\u51c6\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    // \u4e8b\u4ef6\uff0c\u7528\u6765\u901a\u77e5\u5ba2\u6237\u7aef\u4ee3\u5e01\u88ab\u6d88\u8d39 ERC20\u6807\u51c6\n    event Burn(address indexed from, uint256 value);\n\n    /**\n     * \u521d\u59cb\u5316\u6784\u9020\n     */\n    constructor(uint256 initialSupply, string memory tokenName, string memory tokenSymbol) public {\n        totalSupply = initialSupply * 10 ** uint256(decimals);\n        // \u4f9b\u5e94\u7684\u4efd\u989d\uff0c\u4efd\u989d\u8ddf\u6700\u5c0f\u7684\u4ee3\u5e01\u5355\u4f4d\u6709\u5173\uff0c\u4efd\u989d = \u5e01\u6570 * 10 ** decimals\u3002\n        balanceOf[msg.sender] = totalSupply;\n        // \u521b\u5efa\u8005\u62e5\u6709\u6240\u6709\u7684\u4ee3\u5e01\n        name = tokenName;\n        // \u4ee3\u5e01\u540d\u79f0\n        symbol = tokenSymbol;\n        // \u4ee3\u5e01\u7b26\u53f7\n    }\n    /**\n     * \u8fd4\u56de\u4ee3\u5e01\u7684\u540d\u79f0\n     */\n    function getName() view public returns (string memory){\n        return name;\n    }\n\n    /**\n     * \u8fd4\u56de\u4ee3\u5e01\u7684\u7b80\u79f0\n     */\n    function getSymbol() view public returns (string memory){\n        return symbol;\n    }\n    /**\n      * \u8fd4\u56de\u4ee3\u5e01\u6700\u5c0f\u5206\u5272\u91cf\n      */\n    function getDecimals() public view returns (uint8){\n        return decimals;\n    }\n\n    function getTotalSupply() public view returns (uint256 theTotalSupply) {\n        //\u51fd\u6570\u58f0\u660e\u4e2d\u5df2\u7ecf\u5b9a\u4e49\u4e86\u8fd4\u56de\u53d8\u91cftheTotalSupply\n        theTotalSupply = totalSupply;\n        return theTotalSupply;\n    }\n\n    function getBalanceOf(address _owner) public view returns (uint256 balance) {\n        //\u8fd4\u56de\u6307\u5b9a\u5730\u5740\u7684\u901a\u8bc1\u4f59\u989d\n        return balanceOf[_owner];\n    }\n    /**\n     * \u4ee3\u5e01\u4ea4\u6613\u8f6c\u79fb\u7684\u5185\u90e8\u5b9e\u73b0\n     */\n    function _transfer(address _from, address _to, uint _value) internal returns (bool success){\n        // \u786e\u4fdd\u76ee\u6807\u5730\u5740\u4e0d\u4e3a0x0\uff0c\u56e0\u4e3a0x0\u5730\u5740\u4ee3\u8868\u9500\u6bc1\n        require(_to != address(uint160(0)));\n        // \u68c0\u67e5\u53d1\u9001\u8005\u4f59\u989d\n        require(balanceOf[_from] >= _value);\n        // \u786e\u4fdd\u8f6c\u79fb\u4e3a\u6b63\u6570\u4e2a\n        require(balanceOf[_to] + _value > balanceOf[_to]);\n\n        // \u4ee5\u4e0b\u7528\u6765\u68c0\u67e5\u4ea4\u6613\uff0c\n        uint previousBalances = balanceOf[_from] + balanceOf[_to];\n        // Subtract from the sender\n        balanceOf[_from] -= _value;\n        // Add the same to the recipient\n        balanceOf[_to] += _value;\n        emit Transfer(_from, _to, _value);\n\n        // \u7528assert\u6765\u68c0\u67e5\u4ee3\u7801\u903b\u8f91\u3002\n        return (balanceOf[_from] + balanceOf[_to] == previousBalances);\n    }\n\n    /**\n     *  \u4ee3\u5e01\u4ea4\u6613\u8f6c\u79fb\n     *  \u4ece\u81ea\u5df1\uff08\u521b\u5efa\u4ea4\u6613\u8005\uff09\u8d26\u53f7\u53d1\u9001`_value`\u4e2a\u4ee3\u5e01\u5230 `_to`\u8d26\u53f7\n     * ERC20\u6807\u51c6\n     * @param _to \u63a5\u6536\u8005\u5730\u5740\n     * @param _value \u8f6c\u79fb\u6570\u989d\n     */\n    function transfer(address _to, uint256 _value) public returns (bool success){\n        return _transfer(msg.sender, _to, _value);\n    }\n\n    /**\n     * \u8d26\u53f7\u4e4b\u95f4\u4ee3\u5e01\u4ea4\u6613\u8f6c\u79fb\n     * ERC20\u6807\u51c6\n     * @param _from \u53d1\u9001\u8005\u5730\u5740\n     * @param _to \u63a5\u6536\u8005\u5730\u5740\n     * @param _value \u8f6c\u79fb\u6570\u989d\n     */\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\n        require(_value <= allowance[_from][msg.sender]);\n        // Check allowance\n        allowance[_from][msg.sender] -= _value;\n        _transfer(_from, _to, _value);\n        return true;\n    }\n\n    /**\n     * \u8bbe\u7f6e\u67d0\u4e2a\u5730\u5740\uff08\u5408\u7ea6\uff09\u53ef\u4ee5\u521b\u5efa\u4ea4\u6613\u8005\u540d\u4e49\u82b1\u8d39\u7684\u4ee3\u5e01\u6570\u3002\n     *\n     * \u5141\u8bb8\u53d1\u9001\u8005`_spender` \u82b1\u8d39\u4e0d\u591a\u4e8e `_value` \u4e2a\u4ee3\u5e01\n     * ERC20\u6807\u51c6\n     * @param _spender The address authorized to spend\n     * @param _value the max amount they can spend\n     */\n    function approve(address _spender, uint256 _value) public\n    returns (bool success) {\n        allowance[msg.sender][_spender] = _value;\n        return true;\n    }\n\n\n    /**\n     *\n     * \u83b7\u53d6_spender\u53ef\u4ee5\u4ece\u8d26\u6237_owner\u4e2d\u8f6c\u51fatoken\u7684\u5269\u4f59\u6570\u91cf\n     */\n    function getAllowance(address _owner, address _spender) public view returns (uint remaining){\n        return allowance[_owner][_spender];\n    }\n\n    /**\n     * \u9500\u6bc1\u6211\uff08\u521b\u5efa\u4ea4\u6613\u8005\uff09\u8d26\u6237\u4e2d\u6307\u5b9a\u4e2a\u4ee3\u5e01\n     *-\u975eERC20\u6807\u51c6\n     */\n    function burn(uint256 _value) public returns (bool success) {\n        require(balanceOf[msg.sender] >= _value);\n        // Check if the sender has enough\n        balanceOf[msg.sender] -= _value;\n        // Subtract from the sender\n        totalSupply -= _value;\n        // Updates totalSupply\n        emit Burn(msg.sender, _value);\n        return true;\n    }\n\n    /**\n     * \u9500\u6bc1\u7528\u6237\u8d26\u6237\u4e2d\u6307\u5b9a\u4e2a\u4ee3\u5e01\n     *-\u975eERC20\u6807\u51c6\n     * Remove `_value` tokens from the system irreversibly on behalf of `_from`.\n     *\n     * @param _from the address of the sender\n     * @param _value the amount of money to burn\n     */\n    function burnFrom(address _from, uint256 _value) public returns (bool success) {\n        require(balanceOf[_from] >= _value);\n        // Check if the targeted balance is enough\n        require(_value <= allowance[_from][msg.sender]);\n        // Check allowance\n        balanceOf[_from] -= _value;\n        // Subtract from the targeted balance\n        allowance[_from][msg.sender] -= _value;\n        // Subtract from the sender's allowance\n        totalSupply -= _value;\n        // Update totalSupply\n        emit Burn(_from, _value);\n        return true;\n    }\n}\n")),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u805a"},"\u64cd\u4f5c\u6b65\u805a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step1.")," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5de5\u4f5c\u76ee\u5f55\u5982example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir example && cd example\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u547d\u4ee4\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\u90fd\u5728example\u76ee\u5f55\u4e0b\u8fdb\u884c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2.")," \u4f7f\u7528platon-truffle\u521d\u59cb\u5316\u4e00\u4e2a\u5de5\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle init\n")),(0,l.kt)("p",null,"\u5728\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\uff0c\u5c31\u6709\u8fd9\u6837\u7684\u4e00\u4e2a\u9879\u76ee\u7ed3\u6784\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"contracts/: Solidity\u5408\u7ea6\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"migrations/: \u90e8\u7f72\u811a\u672c\u6587\u4ef6\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"test/: \u6d4b\u8bd5\u811a\u672c\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"truffle-config.js: platon-truffle \u914d\u7f6e\u6587\u4ef6"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3.")," \u5c06\u4ee5\u592a\u574a\u5408\u7ea6\u6587\u4ef6ERC200513Token.sol\u653e\u81f3example/contracts\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u770b\u5230 ERC200513Token.sol"),(0,l.kt)("li",{parentName:"ul"},"PlatON\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u8d27\u5e01\u5355\u4f4d\u4e3aLAT\u548cVON\u3002\u8981\u5c06\u4ee5\u592a\u574a\u667a\u80fd\u5408\u7ea6\u8fc1\u79fb\u81f3PlatON\uff0c\u8bf7\u5c06\u4ee5\u592a\u5e01\u9762\u989d\u66f4\u6539\u4e3aPlatON\u9762\u989d\u3002\u540c\u65f6\u6ce8\u610f\u4ee5\u592a/LAT\u5e02\u573a\u6c47\u7387\uff08\u6b64\u5408\u7ea6\u6211\u4eec\u5047\u8bbe\u5e02\u573a\u6c47\u73871:1\uff0c\u5c06uint256 public totalSupply = 10000000000000000000 ether; \u4fee\u6539\u6210uint256 public totalSupply = 10000000000000000000 lat; \uff09"),(0,l.kt)("li",{parentName:"ul"},"PlatON\u667a\u80fd\u5408\u7ea6\u4e2dblock.timestamp\u8868\u793a\u7684\u662f\u5f53\u524d\u533a\u5757\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233\uff0c\u4ee5\u592a\u574a\u662f\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step4.")," \u4fee\u6539truffle-config.js\u4e2d\u7684\u7f16\u8bd1\u7248\u672c\u53f7\u53ca\u94fe\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'module.exports = {\n  networks: {\n     development: {\n      host: "10.1.1.6",     // \u94fe\u5730\u5740\n      port: 8806,            // \u94fe\u4f7f\u7528\u7684rpc\u7aef\u53e3\n      network_id: "*",       // Any network (default: none)\n      from: "lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc", //\u90e8\u7f72\u5408\u7ea6\u6240\u4f7f\u7528\u7684\u94b1\u5305\u5730\u5740\n      gas: 999999,\n      gasPrice: 50000000004,         \n     },\n  },\n\n  compilers: {\n    solc: {\n       version: "0.5.17",    // \u7f16\u8bd1\u5408\u7ea6\u6240\u4f7f\u7528\u7684solidity\u7248\u672c\u53f7\uff0c\u4e0e\u5408\u7ea6\u5b9a\u4e49\u7248\u672c\u4e00\u81f4\n       docker: false,        // Use "0.5.1" you\'ve installed locally with docker\n    }\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step5.")," \u7f16\u8bd1\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle compile\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Compiling your contracts...\nCompiling ./contracts/ERC200513Token.sol\nCompiling ./contracts/Migrations.sol\n  compilation warnings encountered:\n\nWarning: This is a pre-release compiler version, please do not use it in production.\nArtifacts written to /home/guest/example/build/contracts\nCompiled successfully using: //\u8868\u793a\u7f16\u8bd1\u6210\u529f\n  solc: 0.5.17-develop.2020.1.2+commit.9ff23752.mod.Emscripten.clang\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step6.")," \u6dfb\u52a0\u5408\u7ea6\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd migrations && touch 2_initial_ERC200513Token.js\n")),(0,l.kt)("p",null,"\u5408\u7ea6\u90e8\u7f72\u914d\u7f6e\u6587\u4ef62_initial_ERC200513Token.js\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const ERC200513Token = artifacts.require(\"ERC200513Token\"); //\u62ec\u53f7\u4e2d\u4e3a\u8fc1\u79fb\u5408\u7ea6\u7c7b\u540d\nmodule.exports = function(deployer) {\n  deployer.deploy(ERC200513Token,100,'PLA','PLAT'); //ERC200513Token\u540e\u9762\u4e09\u4e2a\u53c2\u6570\u4e3a\u5408\u7ea6\u6784\u9020\u51fd\u6570\u53c2\u6570\n};  \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step7.")," \u90e8\u7f72\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle migrate\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff0c\u8868\u793a\u8fc1\u79fb\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Compiling your contracts...\nEverything is up to date, there is nothing to compile.\n2_initial_ERC200513Token.js\n===========================\n\n   Deploying 'ERC200513Token'\n   --------------------------\n   > transaction hash:    0x5667101234fcd3b9dadf96a19bce20d1b94d742e0fd8f3528c641fa587b17eb3\n   > Blocks: 0            Seconds: 0\n   > contract address:    lat1uetshtp4tp6l067tl02e4x435py9ajrfdhsrd4\n   > block number:        2153\n   > block timestamp:     1585538899787\n   > account:             lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc\n   > balance:             4499992.02433\n   > gas used:            641243\n   > gas price:           1 gvon\n   > value sent:          0 LAT\n   > total cost:          0.000641243 LAT\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.000641243 LAT\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.000755566 LAT\n")),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);