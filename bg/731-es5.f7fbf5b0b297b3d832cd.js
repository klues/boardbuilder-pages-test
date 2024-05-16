!function(){var e,t,n,i,o,a,r,c;function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[731],{72081:function(e){e.exports=function(){"use strict";var e=/^(b|B)$/,t={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},n={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},i={floor:Math.floor,ceil:Math.ceil};function o(o){var a,r,c,l,u,f,s,d,b,m,g,p,v,y,x,h,Z,M,A,T,S=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},w=[],q=0;if(isNaN(o))throw new TypeError("Invalid number");if(c=!0===S.bits,x=!0===S.unix,p=!0===S.pad,v=void 0!==S.round?S.round:x?1:2,s=void 0!==S.locale?S.locale:"",d=S.localeOptions||{},h=void 0!==S.separator?S.separator:"",Z=void 0!==S.spacer?S.spacer:x?"":" ",A=S.symbols||{},M=2===(r=S.base||2)&&S.standard||"jedec",g=S.output||"string",u=!0===S.fullform,f=S.fullforms instanceof Array?S.fullforms:[],a=void 0!==S.exponent?S.exponent:-1,T=i[S.roundingMethod]||Math.round,l=r>2?1e3:1024,(b=(m=Number(o))<0)&&(m=-m),(-1===a||isNaN(a))&&(a=Math.floor(Math.log(m)/Math.log(l)))<0&&(a=0),a>8&&(a=8),"exponent"===g)return a;if(0===m)w[0]=0,y=w[1]=x?"":t[M][c?"bits":"bytes"][a];else{q=m/(2===r?Math.pow(2,10*a):Math.pow(1e3,a)),c&&(q*=8)>=l&&a<8&&(q/=l,a++);var k=Math.pow(10,a>0?v:0);w[0]=T(q*k)/k,w[0]===l&&a<8&&void 0===S.exponent&&(w[0]=1,a++),y=w[1]=10===r&&1===a?c?"kb":"kB":t[M][c?"bits":"bytes"][a],x&&(w[1]="jedec"===M?w[1].charAt(0):a>0?w[1].replace(/B$/,""):w[1],e.test(w[1])&&(w[0]=Math.floor(w[0]),w[1]=""))}if(b&&(w[0]=-w[0]),w[1]=A[w[1]]||w[1],!0===s?w[0]=w[0].toLocaleString():s.length>0?w[0]=w[0].toLocaleString(s,d):h.length>0&&(w[0]=w[0].toString().replace(".",h)),p&&!1===Number.isInteger(w[0])&&v>0){var B=h||".",C=w[0].toString().split(B),z=C[1]||"",O=z.length,_=v-O;w[0]="".concat(C[0]).concat(B).concat(z.padEnd(O+_,"0"))}return u&&(w[1]=f[a]?f[a]:n[M][a]+(c?"bit":"byte")+(1===w[0]?"":"s")),"array"===g?w:"object"===g?{value:w[0],symbol:w[1],exponent:a,unit:y}:w.join(Z)}return o.partial=function(e){return function(t){return o(t,e)}},o}()},26731:function(f,d,b){"use strict";b.r(d),b.d(d,{MediaModule:function(){return J},routes:function(){return Y}});var m=b(61116),g=b(82051),p=b(35366),v=b(22318),y=b(47068),x=b(97070),h=b(40936),Z=b(35965),M=b(84369),A=b(88006),T=b(77307),S=b(22797),w=b(72081),q=function(){var e=function(){function e(){u(this,e)}return s(e,[{key:"transform",value:function(t,n){return Array.isArray(t)?t.map(function(t){return e.transformOne(t,n)}):e.transformOne(t,n)}}],[{key:"transformOne",value:function(e,t){return w(e,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=p.Yjl({name:"filesize",type:e,pure:!0}),e}(),k=function(){var e=function e(){u(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({}),e}();function B(e,t){1&e&&p._UZ(0,"app-loading-notice",6)}function C(e,t){1&e&&(p.TgZ(0,"p",18),p.SDv(1,19),p.qZA())}var z=function(){return{round:0}},O=function(e){return{mediaItem:e}};function _(e,t){if(1&e&&(p.TgZ(0,"div",20),p.TgZ(1,"mat-card"),p._UZ(2,"img",21),p.TgZ(3,"mat-card-actions",22),p.TgZ(4,"span"),p._uU(5),p.ALo(6,"filesize"),p.qZA(),p.TgZ(7,"button",23),p.TgZ(8,"mat-icon"),p._uU(9,"more_vert"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){var n=t.$implicit;p.oxw(2);var i=p.MAs(4);p.xp6(2),p.Q6J("src",n.public_url,p.LSH),p.xp6(3),p.Oqu(p.xi3(6,4,n.filesize,p.DdM(7,z))),p.xp6(2),p.Q6J("matMenuTriggerFor",i)("matMenuTriggerData",p.VKq(8,O,n))}}function j(e,t){if(1&e){var n=p.EpF();p.ynx(0),p.TgZ(1,"h2"),p.SDv(2,7),p.qZA(),p.TgZ(3,"p"),p.SDv(4,8),p.ALo(5,"filesize"),p.qZA(),p.YNc(6,C,2,0,"p",9),p.TgZ(7,"div",10),p.TgZ(8,"div",11),p.TgZ(9,"button",12),p.NdJ("click",function(){return p.CHM(n),p.oxw().openSymbolCreator()}),p.TgZ(10,"div",13),p.TgZ(11,"mat-icon",14),p._uU(12,"construction"),p.qZA(),p.TgZ(13,"div",15),p.SDv(14,16),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.YNc(15,_,10,10,"div",17),p.qZA(),p.BQk()}if(2&e){var i=p.oxw();p.xp6(5),p.pQV(p.xi3(5,3,i.spaceUsed,p.DdM(6,z))),p.QtT(4),p.xp6(1),p.Q6J("ngIf",0===i.media.length),p.xp6(9),p.Q6J("ngForOf",i.media)}}function F(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"button",24),p.NdJ("click",function(){var e=p.CHM(n).mediaItem;return p.oxw().openSymbolCreator(e)}),p.TgZ(1,"mat-icon"),p._uU(2,"construction"),p.qZA(),p.TgZ(3,"span"),p.SDv(4,25),p.qZA(),p.qZA(),p.TgZ(5,"button",26),p.NdJ("click",function(){var e=p.CHM(n).mediaItem;return p.oxw().download(e)}),p.TgZ(6,"mat-icon"),p._uU(7,"save_alt"),p.qZA(),p.TgZ(8,"span"),p.SDv(9,27),p.qZA(),p.qZA(),p.TgZ(10,"button",26),p.NdJ("click",function(){var e=p.CHM(n).mediaItem;return p.oxw().delete(e)}),p.TgZ(11,"mat-icon"),p._uU(12,"delete"),p.qZA(),p.TgZ(13,"span"),p.SDv(14,28),p.qZA(),p.qZA()}2&e&&p.Q6J("disabled",!t.mediaItem.canvas_url)}var I,N=function(){var f=function(){function e(t,n){u(this,e),this.service=t,this.dialogService=n}return s(e,[{key:"ngOnInit",value:function(){this.loadMedia()}},{key:"loadMedia",value:function(){var e=this;this.loading=!0,this.service.list().subscribe(function(t){return e.media=t},function(e){return null},function(){return e.loading=!1})}},{key:"delete",value:function(e){var t=this;this.dialogService.delete({heading:"Delete this Symbol?",content:"The Symbol will be permanently removed from any Boards it's used in."}).afterClosed().subscribe(function(n){n&&t.service.delete(e).subscribe(function(n){t.media=t.media.filter(function(t){return t!==e})})})}},{key:"spaceUsed",get:function(){var e=0;return this.media.forEach(function(t){return e+=t.filesize}),e}},{key:"openSymbolCreator",value:function(e){var t=this;this.dialogService.openSymbolCreator(e).afterClosed().subscribe(function(e){e&&t.loadMedia()})}},{key:"download",value:function(e){this.service.getImage(e).subscribe(function(e){var t=e.type.match(/\/([a-z]+)/)[1];(0,g.saveAs)(e,"image.".concat(t))})}}]),e}();return f.\u0275fac=function(e){return new(e||f)(p.Y36(v.y),p.Y36(y.x))},f.\u0275cmp=p.Xpm({type:f,selectors:[["app-media"]],decls:6,vars:2,consts:function(){var u;return[[1,"container","mt-3"],["subject",u="\u0421\u0438\u043C\u0432\u043E\u043B\u0438",4,"ngIf"],[4,"ngIf"],["xPosition","before"],["menu","matMenu"],["matMenuContent",""],["subject",u],"\u041C\u043E\u0438\u0442\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u0438","\u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0441\u0442\u0435 " + "\ufffd0\ufffd" + ".",["class","text-center mt-3",4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","1rem grid"],["fxFlex.xs","50","fxFlex.sm","33","fxFlex","20",1,"add-symbol-button","text-center"],["mat-flat-button","","color","primary","fxFlex","","gaCategory","SymbolCreator","gaEvent","open",3,"click"],["fxLayout","column","fxLayoutAlign","space-between center"],["fxFlex","grow"],[1,"mt-3"],"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B",["fxFlex.xs","50","fxFlex.sm","33","fxFlex","20",4,"ngFor","ngForOf"],[1,"text-center","mt-3"],"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u0435 \u0441\u0442\u0435 \u043A\u0430\u0447\u0438\u043B\u0438 \u043D\u0438\u043A\u0430\u043A\u0432\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.",["fxFlex.xs","50","fxFlex.sm","33","fxFlex","20"],["mat-card-image","","alt","Media Item",3,"src"],["fxLayoutAlign","space-between center"],["mat-icon-button","",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-menu-item","",3,"disabled","click"],"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B",["mat-menu-item","",3,"click"],"\u0417\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435 \u0432 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E","\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"]},template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.YNc(1,B,1,0,"app-loading-notice",1),p.YNc(2,j,16,7,"ng-container",2),p.qZA(),p.TgZ(3,"mat-menu",3,4),p.YNc(5,F,15,1,"ng-template",5),p.qZA()),2&e&&(p.xp6(1),p.Q6J("ngIf",t.loading),p.xp6(1),p.Q6J("ngIf",!t.loading))},directives:[m.O5,x.VK,x.KA,h.W,Z.xw,Z.SQ,Z.yH,M.lW,A.ht,A.kw,Z.Wh,T.Hw,m.sg,S.a8,S.G2,S.hq,x.p6,x.OP],pipes:[q],styles:["img[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{-o-object-fit:scale-down;object-fit:scale-down;height:10rem;margin-top:0;margin-bottom:0}mat-card-actions[_ngcontent-%COMP%]{color:rgba(0,0,0,.5)}.add-symbol-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large}.add-symbol-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:block;height:8rem;width:8rem;font-size:8rem}"]}),f}(),P=b(75425),D=b(33464),E=b(24311),Y=[{path:"",component:N,pathMatch:"full"}],J=((I=function e(){u(this,e)}).\u0275fac=function(e){return new(e||I)},I.\u0275mod=p.oAB({type:I}),I.\u0275inj=p.cJS({imports:[[k,m.ez,P.m,D.Bz.forChild(Y),x.Tx,T.Ps,Z.ae,M.ot,S.QW,E.AV,A.yz]]}),I)}}])}();