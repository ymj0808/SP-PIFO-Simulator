(function(e){function t(t){for(var i,r,c=t[0],u=t[1],o=t[2],f=0,b=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&b.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/SP-PIFO-Simulator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"038d":function(e,t,n){"use strict";n("a6db")},"14d8":function(e,t,n){"use strict";n("57c0")},4678:function(e,t,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("99af");var i=n("7a23"),s=Object(i["l"])("h1",{class:"title"},"SP-PIFO Simulator",-1),a={style:{color:"black"},href:"https://github.com/ymj0808/SP-PIFO-Simulator",target:"_blank"},r={class:"card-title"},c=Object(i["k"])(" Configuration "),u={class:"card-title"},o=Object(i["k"])(" Result "),l={class:"card-title"},f=Object(i["k"])(" Inversion "),b={class:"card-title"},d=Object(i["k"])(" Bandwidth ");function h(e,t,n,h,p,j){var m=Object(i["G"])("a-col"),g=Object(i["G"])("github-outlined"),O=Object(i["G"])("a-row"),v=Object(i["G"])("a-layout-header"),k=Object(i["G"])("setting-outlined"),y=Object(i["G"])("config-card"),z=Object(i["G"])("a-card"),S=Object(i["G"])("play-square-outlined"),w=Object(i["G"])("a-empty"),x=Object(i["G"])("result-card"),C=Object(i["G"])("inversion-card"),_=Object(i["G"])("speed-card"),q=Object(i["G"])("a-layout-content"),I=Object(i["G"])("a-layout");return Object(i["z"])(),Object(i["j"])(I,{class:"container"},{default:Object(i["Q"])((function(){return[Object(i["l"])(v,{style:"background: #fff;padding: 0!important;line-height: ".concat(p.headerHeight,"px;z-index:233")},{default:Object(i["Q"])((function(){return[Object(i["l"])(O,{class:"header",type:"flex",justify:"space-between"},{default:Object(i["Q"])((function(){return[Object(i["l"])(m,{span:8},{default:Object(i["Q"])((function(){return[s]})),_:1}),Object(i["l"])(m,{span:8,style:{"text-align":"right"}},{default:Object(i["Q"])((function(){return[Object(i["l"])("a",a,[Object(i["l"])(g)])]})),_:1})]})),_:1})]})),_:1},8,["style"]),Object(i["l"])(q,{style:"background: #fff;overflow: auto;padding: 20px 50px"},{default:Object(i["Q"])((function(){return[Object(i["l"])(z,{hoverable:!0},{title:Object(i["Q"])((function(){return[Object(i["l"])("span",r,[Object(i["l"])(k,{style:{"margin-right":"5px"}}),c])]})),default:Object(i["Q"])((function(){return[Object(i["l"])(y,{onChangeConfig:j.changeConfig},null,8,["onChangeConfig"])]})),_:1}),Object(i["l"])(z,{style:{margin:"20px 0"},hoverable:!0},{title:Object(i["Q"])((function(){return[Object(i["l"])("span",u,[Object(i["l"])(S,{style:{"margin-right":"5px"}}),o])]})),default:Object(i["Q"])((function(){return["{}"===JSON.stringify(p.config)?(Object(i["z"])(),Object(i["j"])(w,{key:0,image:"https://i.loli.net/2021/03/28/K2WvekuqXBQiLlx.png","image-style":{height:"30vw"},description:"You should do basic configuration first!"})):(Object(i["z"])(),Object(i["j"])(x,{key:1,packages:p.config.packages,queueAmount:p.config.queueAmount,bufferSize:p.config.bufferSize,flowAmount:p.config.flowAmount,observeWin:p.config.observeWin,timeInterval:p.config.timeInterval,ref:"resultCard",onShowInversionCharts:j.showInversionCharts,onShowSpeedCharts:j.showSpeedCharts},null,8,["packages","queueAmount","bufferSize","flowAmount","observeWin","timeInterval","onShowInversionCharts","onShowSpeedCharts"]))]})),_:1}),Object(i["R"])(Object(i["l"])(z,{hoverable:!0},{title:Object(i["Q"])((function(){return[Object(i["l"])("span",l,[Object(i["l"])(S,{style:{"margin-right":"5px"}}),f])]})),default:Object(i["Q"])((function(){return[Object(i["l"])(C,{ref:"inversionCard"},null,512)]})),_:1},512),[[i["N"],p.inversionPackages.length>0]]),Object(i["l"])(z,null,{title:Object(i["Q"])((function(){return[Object(i["l"])("span",b,[Object(i["l"])(S,{style:{"margin-right":"5px"}}),d])]})),default:Object(i["Q"])((function(){return[Object(i["l"])(_,{ref:"SpeedCard"},null,512)]})),_:1})]})),_:1})]})),_:1})}var p=n("d4c2"),j=n("a109"),m=n("f014"),g=Object(i["T"])("data-v-b0d94272");Object(i["C"])("data-v-b0d94272");var O=Object(i["k"])("Schedule"),v=Object(i["l"])("br",null,null,-1),k={class:"small"},y={class:"big"},z=Object(i["k"])(" New Package "),S=Object(i["l"])("br",null,null,-1),w=Object(i["k"])("Random"),x=Object(i["k"])("Increasing"),C=Object(i["k"])("Decreasing"),_=Object(i["k"])("Increasing Waving"),q=Object(i["k"])("Decreasing Waving"),I=Object(i["k"])("Gaussian"),A=Object(i["k"])("Possion"),P={style:{"border-style":"none"}};Object(i["A"])();var L=g((function(e,t,n,s,a,r){var c=Object(i["G"])("a-input-number"),u=Object(i["G"])("a-form-item"),o=Object(i["G"])("a-button"),l=Object(i["G"])("left-outlined"),f=Object(i["G"])("right-outlined"),b=Object(i["G"])("a-tag"),d=Object(i["G"])("a-popover"),h=Object(i["G"])("plus-outlined"),p=Object(i["G"])("a-form");return Object(i["z"])(),Object(i["j"])(p,{class:"config-form",ref:"formRef",layout:"inline",model:a.formState},{default:g((function(){return[Object(i["l"])(u,{label:"Queue Amount"},{default:g((function(){return[Object(i["l"])(c,{style:{"min-width":"200px"},value:a.formState.queueAmount,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.queueAmount=e}),min:2,max:32},null,8,["value"])]})),_:1}),Object(i["l"])(u,{label:"Buffer Size(packets)"},{default:g((function(){return[Object(i["l"])(c,{style:{"min-width":"200px"},value:a.formState.bufferSize,"onUpdate:value":t[2]||(t[2]=function(e){return a.formState.bufferSize=e}),min:0,max:1024},null,8,["value"])]})),_:1}),Object(i["l"])(u,{label:"Flow Amount"},{default:g((function(){return[Object(i["l"])(c,{style:{"min-width":"200px"},value:a.formState.flowAmount,"onUpdate:value":t[3]||(t[3]=function(e){return a.formState.flowAmount=e}),min:0,max:1024,step:1},null,8,["value"])]})),_:1}),Object(i["l"])(u,{label:"Observe Window"},{default:g((function(){return[Object(i["l"])(c,{style:{"min-width":"200px"},value:a.formState.observeWin,"onUpdate:value":t[4]||(t[4]=function(e){return a.formState.observeWin=e}),min:0,max:65535,step:1},null,8,["value"])]})),_:1}),Object(i["l"])(u,{label:"Time Interval(seconds)"},{default:g((function(){return[Object(i["l"])(c,{style:{"min-width":"200px"},value:a.formState.timeInterval,"onUpdate:value":t[5]||(t[5]=function(e){return a.formState.timeInterval=e}),min:0,max:4,step:.1},null,8,["value","step"])]})),_:1}),Object(i["l"])(u,{"wrapper-col":{span:14,offset:4}},{default:g((function(){return[Object(i["l"])(o,{type:"primary",onClick:r.onSubmit},{default:g((function(){return[O]})),_:1},8,["onClick"])]})),_:1}),v,Object(i["l"])(u,{label:"Packages",class:"package-info",autoLink:!1,style:{margin:"10px 0"}},{default:g((function(){return[(Object(i["z"])(!0),Object(i["j"])(i["b"],null,Object(i["F"])(a.formState.packages,(function(t,n){return Object(i["z"])(),Object(i["j"])(d,{key:t.id,placement:"bottom"},{content:g((function(){return[Object(i["l"])("div",null,[Object(i["l"])(o,{disabled:0===n,shape:"circle",style:{"margin-right":"10px"},size:"small",onClick:function(e){return r.movePackage(n,"left")}},{icon:g((function(){return[Object(i["l"])(l)]})),_:2},1032,["disabled","onClick"]),Object(i["l"])(o,{disabled:n===a.formState.packages.length-1,shape:"circle",size:"small",onClick:function(e){return r.movePackage(n,"right")}},{icon:g((function(){return[Object(i["l"])(f)]})),_:2},1032,["disabled","onClick"])])]})),default:g((function(){return[Object(i["l"])(b,{closable:!0,onClose:function(e){return r.handleRemove(t.id)},color:e.$packageColor(60*t.id)},{default:g((function(){return[Object(i["l"])("div",k,"#"+Object(i["I"])(n+1),1),Object(i["l"])("div",y,Object(i["I"])(t.size),1)]})),_:2},1032,["onClose","color"])]})),_:2},1024)})),128)),a.inputVisible?(Object(i["z"])(),Object(i["j"])(c,{key:0,ref:"newPackRef",min:a.sizeRange.min,max:a.sizeRange.max,style:{width:"78px"},value:a.newPack,"onUpdate:value":t[6]||(t[6]=function(e){return a.newPack=e}),onKeyup:Object(i["S"])(r.handleInputConfirm,["enter"])},null,8,["min","max","value","onKeyup"])):(Object(i["z"])(),Object(i["j"])(b,{key:1,onClick:r.showAddTag,style:{background:"#fff","border-style":"dashed","font-size":"12px"}},{default:g((function(){return[Object(i["l"])(h),z]})),_:1},8,["onClick"]))]})),_:1}),S,Object(i["l"])(u,{label:"Common Distribution",class:"distribution-items"},{default:g((function(){return[Object(i["l"])(o,{onClick:r.onSubmitRandom},{default:g((function(){return[w]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitIncreasing},{default:g((function(){return[x]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitDecreasing},{default:g((function(){return[C]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitWavingIn},{default:g((function(){return[_]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitWavingDe},{default:g((function(){return[q]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitGaussian},{default:g((function(){return[I]})),_:1},8,["onClick"]),Object(i["l"])(o,{onClick:r.onSubmitPossion},{default:g((function(){return[A]})),_:1},8,["onClick"]),Object(i["l"])(u,{"wrapper-col":{span:12,offset:2}},{default:g((function(){return[Object(i["l"])("div",P,[Object(i["l"])("input",{type:"file",ref:"doc",onChange:t[7]||(t[7]=function(e){return r.onSubmitTrace()})},null,544)])]})),_:1})]})),_:1}),Object(i["l"])(u),Object(i["l"])(u),Object(i["l"])(u),Object(i["l"])(u),Object(i["l"])(u),Object(i["l"])(u)]})),_:1},8,["model"])})),G=n("2909"),R=(n("1276"),n("ac1f"),n("4de4"),n("8ba4"),n("a9e3"),n("fb6a"),n("47ce")),T=n("2b46"),$=n("31d7"),Q={name:"ConfigCard",components:{PlusOutlined:R["a"],LeftOutlined:T["a"],RightOutlined:$["a"]},data:function(){return{inputVisible:!1,newPack:1,sizeRange:{min:1,max:65535},formState:{queueAmount:4,timeInterval:0,packages:[],bufferSize:1024,flowAmount:4,observeWin:4},file:null,content:null,pac:""}},computed:{},methods:{onSubmit:function(){this.formState.packages.length<1?this.$message.error("Packages can not be empty"):this.$emit("changeConfig",this.formState)},startTransmit:function(){this.formState.packages.length<1?this.$message.error("Packages can not be empty"):this.$emit("resetConfig",this.formState)},onSubmitRandom:function(){for(var e=[],t=0;t<100;t++)e.push({size:Math.round(100*Math.random()),id:t,inversion:[],preemption:[]});this.formState.packages=e},onSubmitIncreasing:function(){for(var e=[],t=0;t<100;t++)e.push({size:t+1,id:t,inversion:[],preemption:[]});this.formState.packages=e},onSubmitDecreasing:function(){for(var e=[],t=0;t<100;t++)e.push({size:100-t,id:t,inversion:[],preemption:[]});this.formState.packages=e},onSubmitWavingIn:function(){for(var e=[],t=0;t<50;t++)e.push({size:t+1,id:t,inversion:[],preemption:[]}),e.push({size:100-t,id:t,inversion:[],preemption:[]});this.formState.packages=e},onSubmitWavingDe:function(){for(var e=[],t=0;t<50;t++)e.push({size:100-t,id:t,inversion:[],preemption:[]}),e.push({size:t+1,id:t,inversion:[],preemption:[]});this.formState.packages=e},onSubmitGaussian:function(){for(var e=[],t=[45,48,65,68,68,10,84,22,37,88,71,89,89,13,59,66,40,88,47,89,82,38,26,78,73,10,21,81,70,80,48,65,83,89,50,30,20,20,15,40,33,66,10,58,33,32,75,24,36,76],n=0;n<50;n++)e.push({size:t[n],id:n,inversion:[],preemption:[]});this.formState.packages=e},onSubmitPossion:function(){for(var e=[],t=[29,18,19,23,24,33,19,29,22,27,24,27,28,27,27,25,24,23,33,26,25,34,21,31,31,23,19,19,28,24,23,27,28,29,28,26,25,23,25,28,23,32,17,26,40,20,21,24,23,19],n=0;n<50;n++)e.push({size:t[n],id:n,inversion:[],preemption:[]});this.formState.packages=e},onSubmitTrace:function(){var e=this,t=[];this.file=this.$refs.doc.files[0];var n=new FileReader;n.readAsText(this.file),n.onload=function(n){e.content=n.target.result;for(var i=0;i<e.flowAmount;++i)e.packetsTrans.push(0);for(var s=e.content.split("\n"),a=0;a<s.length;++a){var r=s[a].split(" ");t.push({size:parseInt(r[1]),id:parseInt(r[0]),inversion:[],preemption:[]})}e.formState.packages=t}},showAddTag:function(){var e=this;this.inputVisible=!0,this.newPack=1,this.$nextTick((function(){e.$refs.newPackRef.focus()}))},handleRemove:function(e){this.formState.packages=this.formState.packages.filter((function(t){return t.id!==e}))},handleInputConfirm:function(){Number.isInteger(this.newPack)?this.newPack>=this.sizeRange.min&&this.newPack<=this.sizeRange.max?(this.formState.packages.push({size:this.newPack,id:Date.now()}),this.inputVisible=!1):this.$message.error("Package size should between ".concat(this.sizeRange.min,"-").concat(this.sizeRange.max)):this.$message.error("Package size should be a integer")},movePackage:function(e,t){var n=[];"right"===t?(n.push.apply(n,Object(G["a"])(this.formState.packages.slice(0,e))),n.push(this.formState.packages[e+1],this.formState.packages[e]),n.push.apply(n,Object(G["a"])(this.formState.packages.slice(e+2)))):(n.push.apply(n,Object(G["a"])(this.formState.packages.slice(0,e-1))),n.push(this.formState.packages[e],this.formState.packages[e-1]),n.push.apply(n,Object(G["a"])(this.formState.packages.slice(e+1)))),this.formState.packages=n}}},N=(n("f44a"),n("6b0d")),W=n.n(N);const D=W()(Q,[["render",L],["__scopeId","data-v-b0d94272"]]);var M=D,J=Object(i["T"])("data-v-4174b108");Object(i["C"])("data-v-4174b108");var U=Object(i["k"])("Speedup"),F={type:"flex",style:{width:"100%"}},E={style:{width:"100%"}},B={style:{"font-weight":"bold","font-size":"16px","line-height":"30px","text-align":"center"}},V=Object(i["k"])("Clear"),K={type:"flex",style:{width:"100%"}},H={style:{width:"100%"}},X=Object(i["l"])("p",{style:{"font-weight":"bold","font-size":"16px","line-height":"30px","text-align":"center"}},Object(i["I"])("Output"),-1);Object(i["A"])();var Y=J((function(e,t,n,s,a,r){var c=Object(i["G"])("a-card"),u=Object(i["G"])("a-list-item"),o=Object(i["G"])("a-list"),l=Object(i["G"])("a-col"),f=Object(i["G"])("a-row"),b=Object(i["G"])("a-button"),d=Object(i["G"])("a-tag");return Object(i["z"])(),Object(i["j"])("div",null,[Object(i["l"])(f,{style:{"min-height":"100px"},type:"flex",justify:"space-between"},{default:J((function(){return[Object(i["l"])(l,{span:24,style:{"border-right":"1px dashed #ddd"}},{default:J((function(){return[Object(i["l"])(o,{grid:{gutter:16,xs:1,sm:2,lg:24},locale:{emptyText:"No more packages"},"data-source":r.remainedPackages},{renderItem:J((function(t){var n=t.item;return[Object(i["l"])(u,null,{default:J((function(){return[Object(i["l"])(c,{class:"package-small","body-style":{padding:"10px"},style:"background: ".concat(e.$packageColor(60*n.id),";")},{default:J((function(){return[Object(i["l"])("p",null,Object(i["I"])(n.size),1)]})),_:2},1032,["style"])]})),_:2},1024)]})),_:1},8,["data-source"])]})),_:1})]})),_:1}),Object(i["l"])(f,{style:{"min-height":"400px"},type:"flex",justify:"space-between"},{default:J((function(){return[Object(i["l"])(l,{span:24,style:{"padding-left":"10px"}},{default:J((function(){return[Object(i["l"])(b,{type:"primary",onClick:r.finishNow},{default:J((function(){return[U]})),_:1},8,["onClick"]),Object(i["l"])(o,{"item-layout":"horizontal","data-source":a.queueList},{renderItem:J((function(t){var n=t.item,s=t.index;return[Object(i["l"])(u,null,{default:J((function(){return[Object(i["l"])("div",F,[Object(i["l"])("div",null,[Object(i["l"])(d,{color:e.$packageColor(n.bound)},{default:J((function(){return[Object(i["k"])(" Bound: "+Object(i["I"])(n.bound),1)]})),_:2},1032,["color"]),Object(i["l"])(d,{color:e.$packageColor(n.minRank)},{default:J((function(){return[Object(i["k"])(" Min Rank: "+Object(i["I"])(n.minRank),1)]})),_:2},1032,["color"])]),Object(i["l"])("div",E,[Object(i["l"])("p",B,Object(i["I"])("Queue #".concat(s+1)),1),Object(i["l"])(o,{locale:{emptyText:"Empty list"},grid:{gutter:4,xs:1,sm:2,lg:24},"data-source":n.list,class:"queue"},{renderItem:J((function(t){var n=t.item;return[Object(i["l"])(u,null,{default:J((function(){return[Object(i["l"])(c,{class:"package-small","body-style":{padding:"2px"},style:"background: ".concat(e.$packageColor(60*n.id),";")},{default:J((function(){return[Object(i["l"])("p",null,Object(i["I"])(n.size),1)]})),_:2},1032,["style"])]})),_:2},1024)]})),_:2},1032,["data-source"])])])]})),_:2},1024)]})),_:1},8,["data-source"])]})),_:1}),Object(i["l"])(l,{span:24,style:{"border-right":"1px dashed #ddd"}},{default:J((function(){return[Object(i["l"])(b,{type:"primary",onClick:r.clear},{default:J((function(){return[V]})),_:1},8,["onClick"]),Object(i["l"])(o,{"item-layout":"horizontal","data-source":a.outputQueueList},{renderItem:J((function(t){var n=t.item;return[Object(i["l"])(u,null,{default:J((function(){return[Object(i["l"])("div",K,[Object(i["l"])("div",H,[X,Object(i["l"])(o,{locale:{emptyText:"Empty list"},grid:{gutter:4,xs:1,sm:2,lg:24},"data-source":n.list,class:"queue"},{renderItem:J((function(t){var n=t.item;return[Object(i["l"])(u,null,{default:J((function(){return[Object(i["l"])(c,{class:"package-small","body-style":{padding:"2px"},style:"background: ".concat(e.$packageColor(60*n.id),";")},{default:J((function(){return[Object(i["l"])("p",null,Object(i["I"])(n.size),1)]})),_:2},1032,["style"])]})),_:2},1024)]})),_:2},1032,["data-source"])])])]})),_:2},1024)]})),_:1},8,["data-source"])]})),_:1})]})),_:1})])})),Z={name:"ResultCard",props:{packages:{type:Array,required:!0},queueAmount:{type:Number,default:4},timeInterval:{type:Number,default:1},bufferSize:{type:Number,default:1024},flowAmount:{type:Number,default:4},observeWin:{type:Number,default:4}},computed:{remainedPackages:function(){var e=this.packages.slice(this.finishAmount).concat();return e.reverse()}},data:function(){return{finishAmount:0,outputAmount:0,queueList:[],outputQueueList:[{list:[]}],timer:null,packetsTrans:[]}},methods:{clear:function(){this.outputQueueList=[{list:[]}]},popPackage:function(){if(!(this.finishAmount>=this.packages.length)){var e=this.packages[this.finishAmount];this.finishAmount++;for(var t=this.queueList.length-1;t>=0;t--)if(e.size>=this.queueList[t].bound)return this.queueList[t].list.push(e),this.queueList[t].bound=e.size,void(e.size<this.queueList[t].minRank&&(this.queueList[t].minRank=e.size));this.queueList[0].list.push(e),e.size<this.queueList[0].minRank&&(this.queueList[0].minRank=e.size);for(var n=this.queueList.length-1;n>=0;n--)this.queueList[n].bound-=this.queueList[0].bound-e.size}},apply:function(){this.timer&&clearInterval(this.timer),this.queueList=[],this.finishAmount=0,this.outputAmount=0;for(var e=0;e<this.queueAmount;e++)this.queueList.push({bound:0,list:[],minRank:1e4});for(var t=0;t<this.bufferSize;t++)this.popPackage();this.timer=setInterval(this.transmit,1e3*this.timeInterval)},transmit:function(){this.finishAmount<this.packages.length&&this.popPackage(),(this.finishAmount==this.packages.length||this.finishAmount>this.bufferSize&&this.outputAmount<this.packages.length)&&this.output();var e=this.outputQueueList[0].list.concat();this.$emit("showInversionCharts",e)},finishNow:function(){clearInterval(this.timer);while(this.outputAmount<this.packages.length)this.transmit()},output:function(){if(0==this.packetsTrans.length)for(var e=0;e<this.flowAmount;++e)this.packetsTrans.push(0);for(var t=0;t<this.queueAmount;t++)if(!(this.queueList[t].list.length<=0)){var n=this.queueList[t].list.shift();this.outputQueueList[0].list.push(n),this.packetsTrans[n.id]++;for(var i=t;i<this.queueAmount;i++)if(this.queueList[i].minRank<n.size)for(var s=0;s<this.queueList[i].list.length;s++)n.size>this.queueList[i].list[s].size&&(this.queueList[i].list[s].inversion.push(n.size-this.queueList[i].list[s].size),this.queueList[i].list[s].preemption.push(n.size));if(this.outputAmount++,this.outputAmount>=this.packages.length&&clearInterval(this.timer),this.outputAmount>=this.observeWin&&this.outputAmount%this.observeWin==0||this.outputAmount==this.packages.length){var a=this.packetsTrans.concat();this.packetsTrans=[],this.$emit("showSpeedCharts",a)}break}},transmit_orig:function(){for(var e=[],t=0;t<this.queueAmount;t++){for(var n=0;n<this.queueList[t].list.length;n++){for(var i=this.queueList[t].list[n],s=n+1;s<this.queueList[t].list.length;s++)i.size>this.queueList[t].list[s].size&&(this.queueList[t].list[s].inversion.push(i.size-this.queueList[t].list[s].size),this.queueList[t].list[s].preemption.push(i.size));for(var a=t+1;a<this.queueAmount;a++)if(this.queueList[a].minRank<i.size)for(var r=0;r<this.queueList[a].list.length;r++)i.size>this.queueList[a].list[r].size&&(this.queueList[a].list[r].inversion.push(i.size-this.queueList[a].list[r].size),this.queueList[a].list[r].preemption.push(i.size))}e=e.concat(this.queueList[t].list)}this.$emit("showInversionCharts",e)}},beforeUnmount:function(){clearInterval(this.timer)}};n("038d");const ee=W()(Z,[["render",Y],["__scopeId","data-v-4174b108"]]);var te=ee,ne=Object(i["T"])("data-v-66c64065"),ie=ne((function(e,t,n,s,a,r){var c=Object(i["G"])("v-chart");return Object(i["z"])(),Object(i["j"])(c,{class:"chart",option:a.option},null,8,["option"])})),se=(n("159b"),n("5c7f")),ae=n("22b4"),re=n("f95e"),ce=n("3620"),ue=n("4b2a"),oe=n("2da7");Object(ae["a"])([re["a"],ce["a"],ue["a"],oe["a"]]);var le={name:"InversionCard",components:{"v-chart":se["a"]},data:function(){return{option:null}},methods:{changeData:function(e){var t=[],n=[];e.sort((function(e,t){return e.size-t.size})),e.forEach((function(e){t.push(e.size);var i=0;e.inversion.forEach((function(e){return i+=e})),n.push(i)})),this.option={xAxis:{type:"category",name:"magnitude",data:t},yAxis:{type:"value"},series:[{data:n,type:"line",smooth:!0}]}}}};n("9f1b");const fe=W()(le,[["render",ie],["__scopeId","data-v-66c64065"]]);var be=fe,de=Object(i["T"])("data-v-58f1bb40"),he=de((function(e,t,n,s,a,r){var c=Object(i["G"])("v-chart");return Object(i["z"])(),Object(i["j"])(c,{class:"chart",option:a.option},null,8,["option"])}));Object(ae["a"])([re["a"],ce["a"],ue["a"],oe["a"]]);var pe={name:"SpeedCard",components:{"v-chart":se["a"]},data:function(){return{option:null,x:[],y:[],results:[]}},methods:{changeData:function(e){if(this.x.push(this.x.length),0==this.y.length)for(var t=0;t<e.length;t++){var n=[];n.push(e[t]),this.y.push(n)}else for(var i=0;i<e.length;i++)this.y[i].push(e[i]);for(var s=0;s<e.length;s++)this.results.push({data:this.y[s],type:"line",smooth:!0});this.option={legend:{data:["flow1","flow2","flow3","flow4"]},xAxis:{type:"category",name:"time",data:this.x},yAxis:{type:"value",name:"bandwidth"},series:this.results}}}};n("14d8");const je=W()(pe,[["render",he],["__scopeId","data-v-58f1bb40"]]);var me=je,ge={name:"App",components:{ConfigCard:M,ResultCard:te,InversionCard:be,SpeedCard:me,GithubOutlined:p["a"],PlaySquareOutlined:j["a"],SettingOutlined:m["a"]},data:function(){return{headerHeight:64,config:{},inversionPackages:[],speedPackets:[]}},methods:{changeConfig:function(e){var t=this;this.config=JSON.parse(JSON.stringify(e)),this.inversionPackages=[],this.$nextTick((function(){t.$refs.resultCard.apply()}))},resetConfig:function(e){var t=this;this.config=JSON.parse(JSON.stringify(e)),this.$nextTick((function(){t.$refs.resultCard.transmit()}))},startOutput:function(e){var t=this;this.config=JSON.parse(JSON.stringify(e)),this.$nextTick((function(){t.$refs.resultCard.output()}))},showInversionCharts:function(e){this.inversionPackages=e,this.$refs.inversionCard.changeData(e)},showSpeedCharts:function(e){this.speedPackets=e,this.$refs.SpeedCard.changeData(e)}}};n("e46c");const Oe=W()(ge,[["render",h]]);var ve=Oe,ke=n("f23d"),ye=(n("202f"),Object(i["i"])(ve));ye.config.productionTip=!1,ye.config.globalProperties.$packageColor=function(e){var t=e/100,n=0,i={r:0,g:102,b:153},s={r:0,g:153,b:153},a=function(e,t,n){return{r:Math.round((e.r-t.r)*n+t.r),g:Math.round((e.g-t.g)*n+t.g),b:Math.round((e.b-t.b)*n+t.b)}};t>.75?n=(t-.75)/.25:t>.5?(n=(t-.5)/.25,i={r:0,g:153,b:153},s={r:153,g:204,b:0}):t>.25?(n=(t-.25)/.25,i={r:153,g:204,b:0},s={r:255,g:204,b:0}):(n=t/.25,i={r:255,g:204,b:0},s={r:255,g:0,b:51});var r=a(i,s,n);return"rgb(".concat(r.r,", ").concat(r.g,", ").concat(r.b,")")},ye.use(ke["a"]),ye.mount("#app")},"57c0":function(e,t,n){},8251:function(e,t,n){},"9f1b":function(e,t,n){"use strict";n("e715")},a40e:function(e,t,n){},a6db:function(e,t,n){},e46c:function(e,t,n){"use strict";n("a40e")},e715:function(e,t,n){},f44a:function(e,t,n){"use strict";n("8251")}});
//# sourceMappingURL=app.b8b00d8e.js.map