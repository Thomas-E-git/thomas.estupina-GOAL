(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b6d5c8","chunk-19cb8ed1"],{"0595":function(t,e,s){t.exports=s.p+"img/PC.690effc2.png"},"25aa":function(t,e,s){"use strict";s("cd88")},"262c":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center mx-auto mt-5 pb-5 buttons"},[s("button",{staticClass:"button btn-secondary h1 mr-5",on:{click:t.goTo1}},[t._v(t._s(t.button1))]),s("button",{staticClass:"button btn-secondary h1 ml-5",on:{click:t.goTo2}},[t._v(t._s(t.button2))])])},n=[],o=(s("b0c0"),{name:"Buttons",props:["button1","button2","link1","link2"],methods:{goTo1:function(){this.$router.push(this.link1)},goTo2:function(){this.$router.push(this.link2).catch((function(t){if("NavigationDuplicated"!=t.name)throw t}))}}}),r=o,a=(s("bfb1"),s("2877")),l=Object(a["a"])(r,i,n,!1,null,null,null);e["a"]=l.exports},"2a85":function(t,e,s){},"2fa0":function(t,e,s){},"36f2":function(t,e,s){"use strict";s("2fa0")},5063:function(t,e,s){},"67ed":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.revelePC?s("div",{staticClass:"PC1",style:t.cssProps,attrs:{id:"PC1"}},[t._m(0),s("button",{staticClass:"mt-3",on:{click:t.togglePC}},[t._v("Eteindre l'ordinateur")]),s("div",{staticClass:"projet btn",attrs:{id:"projet"},on:{click:t.openProject}}),s("div",{attrs:{id:"openprojet"}})]):t._e()},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tableau loader d-flex flex-column justify-content-center",attrs:{id:"loader"}},[s("p",{staticClass:"h3 text-white"},[t._v("Bienvenue sur le PC de Thomas")]),s("div",{staticClass:"lds-roller mx-auto mt-3"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")])])}],o=(s("9911"),{name:"PC1",props:["revelePC","togglePC","img","link","text"],methods:{openProject:function(){window.confirm(this.text)&&window.open(this.link)}},computed:{cssProps:function(){return{"--img":this.img}}}}),r=o,a=(s("36f2"),s("2877")),l=Object(a["a"])(r,i,n,!1,null,"2edba978",null);e["default"]=l.exports},7088:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{style:t.cssProps,attrs:{src:s("0f71"),id:"user",alt:"user logo"}})},n=[],o={name:"User",props:["posX","posY"],computed:{cssProps:function(){return{"--posX":this.posX+"px","--posY":this.posY+"px"}}}},r=o,a=(s("7b90"),s("2877")),l=Object(a["a"])(r,i,n,!1,null,"b7da873c",null);e["a"]=l.exports},7279:function(t,e,s){},"7b90":function(t,e,s){"use strict";s("7ebf")},"7ebf":function(t,e,s){},8301:function(t,e,s){"use strict";s("7279")},"857a":function(t,e,s){var i=s("1d80"),n=s("577e"),o=/"/g;t.exports=function(t,e,s,r){var a=n(i(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+n(r).replace(o,"&quot;")+'"'),l+">"+a+"</"+e+">"}},9911:function(t,e,s){"use strict";var i=s("23e7"),n=s("857a"),o=s("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return n(this,"a","href",t)}})},a077:function(t,e,s){"use strict";s("5063")},a999:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"canvas",attrs:{id:"canvas"}},[s("User",{attrs:{posX:t.posX,posY:t.posY}}),s("Bulle"),s("Transition",{attrs:{transition:t.transition}}),s("div",{attrs:{id:"tableau"}},[s("button",{attrs:{id:"close"},on:{click:t.close}},[t._v("Fermer le tableau")])]),s("div",{staticClass:"text-center",attrs:{id:"open"}},[s("p",[t._v("Voulez-vous voir le tableau ?")]),s("button",{staticClass:"mr-3",on:{click:t.open}},[t._v(" oui ")])]),s("div",{attrs:{id:"code"}},[s("label",{attrs:{for:"code"}},[t._v("Entrez le code d'accès : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"ml-3 text-center",attrs:{type:"text",id:"codeinput",name:"code",onfocus:"if(this.value !== '1910')this.value = '';"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"Valider"},on:{click:function(e){return t.togglePC()}}}),s("p",{staticClass:"text-danger h6 text-left",attrs:{id:"error"}})]),s("div",{attrs:{id:"codeporte"}},[s("label",{attrs:{for:"codePorte"}},[t._v("Entrez le code d'accès : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.codePorte,expression:"codePorte"}],staticClass:"ml-3 text-center",attrs:{type:"text",id:"codeinput1",name:"codePorte",onfocus:"if(this.value !== 'reservia')this.value = '';"},domProps:{value:t.codePorte},on:{input:function(e){e.target.composing||(t.codePorte=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"Valider"},on:{click:t.next}}),s("p",{staticClass:"text-danger h6 text-left",attrs:{id:"errorPorte"}})]),s("PC1",{attrs:{revelePC:t.revelePC,togglePC:t.togglePC,img:t.img,link:t.link,text:t.text}})],1),s("Buttons",{attrs:{button1:"Menu principal",button2:"Recommencer le jeu",link1:"/",link2:"Aventure"}})],1)},n=[],o=s("67ed"),r=s("262c"),a=s("d690"),l=s("7088"),c=s("adea"),u={name:"lvl1",components:{PC1:o["default"],Buttons:r["a"],Bulle:a["a"],User:l["a"],Transition:c["a"]},data:function(){return{posX:300,posY:15,code:null,revelePC:!1,codePorte:null,img:"url(".concat(s("0595"),")"),link:"https://thomas-e-git.github.io/Projet2_ThomasEstupina_02112020/",text:"Vous allez être redirigé (dans une nouvelle fenêtre) vers la page Github de mon premier projet en tant que Développeur web, il s'agit une intégration web",transition:!0}},created:function(){document.addEventListener("keydown",this.keyDownHandler)},destroyed:function(){document.removeEventListener("keydown",this.keyDownHandler)},methods:{keyDownHandler:function(t){var e=document.getElementById("bulle"),s=document.getElementById("bulle-text"),i=document.getElementById("open"),n=document.getElementById("code"),o=document.getElementById("codeporte"),r=document.getElementById("user");39!=t.keyCode&&37!=t.keyCode&&40!=t.keyCode&&38!=t.keyCode||t.preventDefault(),39==t.keyCode&&(this.posY>=0&&this.posY<=65&&this.posX<=400||this.posY>=65&&this.posY<=485&&this.posX<=690)?(this.posX+=10,r.style.setProperty("--posX","".concat(this.posX,"px"))):37==t.keyCode&&(this.posY>=0&&this.posY<=265&&this.posX>=220||this.posY<=485&&this.posY>=265&&this.posX>=510)?(this.posX-=10,r.style.setProperty("--posX","".concat(this.posX,"px"))):40==t.keyCode&&(this.posX>=210&&this.posX<=410&&this.posY>=15||this.posX<=700&&this.posX>=210&&this.posY>=75)?(this.posY-=10,r.style.setProperty("--posY","".concat(this.posY,"px"))):38==t.keyCode&&(this.posX>=210&&this.posX<=510&&this.posY<=255||this.posX<=700&&this.posX>=500&&this.posY<=475)&&(this.posY+=10,r.style.setProperty("--posY","".concat(this.posY,"px"))),this.posX<=250&&this.posY>=235?(e.style.setProperty("visibility","visible"),s.innerHTML="Il semblerait que l'ordinateur soit vérouillé ! C'est un code à 4 chiffres, J'ai laissé un indice : 'tableau jaune E-sport'",n.style.setProperty("visibility","visible")):this.posX<=440&&this.posX>=390&&265==this.posY?(e.style.setProperty("visibility","visible"),s.innerHTML="\n        Quel joli tableau ! Je suis un adepte d'E-sport, J'aime jouer aux jeux et regarder les compétitions en ligne qui rassemblent des dizaines de milliers de spéctateurs. J'ai déjà participé à plusieurs événements majeurs et j'espère pouvoir le refaire !",i.style.setProperty("visibility","visible")):this.posX<=630&&this.posX>=560&&this.posY>=465?(e.style.setProperty("visibility","visible"),s.innerHTML="\n        Pour passer à l'étape suivante, vous devez trouver le code secret, il est composé de 8 lettres, c'est le nom du premier site de réservation en ligne que j'ai réalisé en tant que tout nouveau développeur",o.style.setProperty("display","block")):(e.style.setProperty("visibility","hidden"),i.style.setProperty("visibility","hidden"),n.style.setProperty("visibility","hidden"),o.style.setProperty("display","none"))},open:function(){document.getElementById("tableau").style.setProperty("visibility","visible")},close:function(){document.getElementById("tableau").style.setProperty("visibility","hidden")},togglePC:function(){var t=document.getElementById("error");1910==this.code?(this.revelePC=!this.revelePC,t.innerHTML=""):t.innerHTML="Code incorrect, regardes bien le tableau juste à côté"},next:function(){var t=document.getElementById("errorPorte");"reservia"==this.codePorte?(this.$router.push("lvl2"),t.innerHTML=""):t.innerHTML="Code incorrect, as-tu allumé l'ordinateur ?"}}},d=u,p=(s("8301"),s("2877")),v=Object(p["a"])(d,i,n,!1,null,"44f369aa",null);e["default"]=v.exports},adea:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.transition?s("div",{staticClass:"transition",style:t.cssProps,attrs:{id:"transition"}}):t._e()},n=[],o={name:"Transition",props:["transiBot","transiLeft","transition"],computed:{cssProps:function(){return{"--bot":this.transiBot,"--left":this.transiLeft}}}},r=o,a=(s("25aa"),s("2877")),l=Object(a["a"])(r,i,n,!1,null,"36d37ee1",null);e["a"]=l.exports},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b0c0:function(t,e,s){var i=s("83ab"),n=s("9bf2").f,o=Function.prototype,r=o.toString,a=/^\s*function ([^ (]*)/,l="name";i&&!(l in o)&&n(o,l,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})},bfb1:function(t,e,s){"use strict";s("2a85")},cd88:function(t,e,s){},d690:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",attrs:{id:"bulle"}},[s("div",{attrs:{id:"modale"}}),s("div",{attrs:{id:"bulle-text"}})])}],o={name:"Bulle"},r=o,a=(s("a077"),s("2877")),l=Object(a["a"])(r,i,n,!1,null,"d65b27da",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-76b6d5c8.6d2e7f28.js.map