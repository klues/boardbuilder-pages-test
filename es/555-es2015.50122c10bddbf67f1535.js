(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[555],{98555:function(e,t,a){"use strict";a.r(t),a.d(t,{PdfModule:function(){return R},routes:function(){return L}});var i=a(61116),n=a(33464),r=a(87672),o=a(35965),s=a(84369),l=a(73291),c=a(82051),d=a(46024);class p{deserialise(e){return e.pageSize&&(this.pageSize=(new d.t).deserialise(e.pageSize)),Object.assign(this,e)}}var g=a(35366),u=a(91286),f=a(529),h=a(79996),b=a(42693);let m=(()=>{class e{constructor(e){this.http=e,this.apiEndpoint=`${f.N.boardBuilderApiBase}/templates`}pageSizes(){return this.http.get(`${this.apiEndpoint}/page_sizes`).pipe((0,h.U)(e=>e.map(e=>(new d.t).deserialise(e))))}}return e.\u0275fac=function(t){return new(t||e)(g.LFG(b.eN))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=a(99624),S=a(98508),v=a(13070),T=a(13841),A=a(87064),x=a(6489),q=a(40994),z=a(31041),P=a(24311),D=a(77307),y=a(40936);let w=(()=>{class e{constructor(e){this.sanitiser=e}transform(e,t){switch(t){case"html":return this.sanitiser.bypassSecurityTrustHtml(e);case"style":return this.sanitiser.bypassSecurityTrustStyle(e);case"script":return this.sanitiser.bypassSecurityTrustScript(e);case"url":return this.sanitiser.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitiser.bypassSecurityTrustResourceUrl(e);default:return this.sanitiser.bypassSecurityTrustHtml(e)}}}return e.\u0275fac=function(t){return new(t||e)(g.Y36(Z.H7,16))},e.\u0275pipe=g.Yjl({name:"bypassSanitiser",type:e,pure:!0}),e})();function C(e,t){if(1&e&&(g.TgZ(0,"mat-option",24),g._uU(1),g.qZA()),2&e){const e=t.$implicit;g.Q6J("value",e),g.xp6(1),g.Oqu(e.name)}}function J(e,t){if(1&e&&(g.TgZ(0,"mat-option",24),g._uU(1),g.qZA()),2&e){const e=t.$implicit;g.Q6J("value",e),g.xp6(1),g.hij("",e," pt")}}function $(e,t){if(1&e&&(g.TgZ(0,"mat-option",24),g._uU(1),g.qZA()),2&e){const e=t.$implicit;g.Q6J("value",e),g.xp6(1),g.hij("",e," pt")}}function Q(e,t){if(1&e&&(g.TgZ(0,"mat-option",24),g._uU(1),g.qZA()),2&e){const e=t.$implicit;g.Q6J("value",e),g.xp6(1),g.hij("",e," pt")}}function F(e,t){if(1&e&&(g.TgZ(0,"mat-option",24),g._uU(1),g.qZA()),2&e){const e=t.$implicit;g.Q6J("value",e),g.xp6(1),g.hij("",e," pt")}}function N(e,t){if(1&e){const e=g.EpF();g.TgZ(0,"button",38),g.NdJ("click",function(){return g.CHM(e),g.oxw().setTemplateDefaults()}),g.SDv(1,39),g.qZA()}}function k(e,t){if(1&e&&g._UZ(0,"app-loading-notice",40),2&e){const e=g.oxw();g.Q6J("error",!!e.apiError)}}function O(e,t){if(1&e&&(g.TgZ(0,"li"),g.SDv(1,47),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.pQV(e.apiError.overflow),g.QtT(1)}}const E=function(){return["above","below"]};function Y(e,t){if(1&e&&(g.TgZ(0,"div",41),g.TgZ(1,"span"),g.SDv(2,42),g.qZA(),g.TgZ(3,"ul"),g.TgZ(4,"li"),g.SDv(5,43),g.qZA(),g.TgZ(6,"li"),g.SDv(7,44),g.qZA(),g.YNc(8,O,2,1,"li",45),g.TgZ(9,"li"),g.SDv(10,46),g.qZA(),g.qZA(),g.qZA()),2&e){const e=g.oxw();g.xp6(5),g.pQV(e.apiError.overflow/2),g.QtT(5),g.xp6(2),g.pQV(e.apiError.overflow),g.QtT(7),g.xp6(1),g.Q6J("ngIf",g.DdM(3,E).includes(e.board.captions_position))}}let _=(()=>{class e{constructor(e,t,a,i,n,r,o,s){this.boardService=e,this.templateService=t,this.route=a,this.router=i,this.location=n,this.sanitiser=r,this.hotkeysService=o,this.toolbarService=s,this.status="loading",this.compiledPdf="about:blank",this.pdfEmbedWidth=1e3,this.pdfEmbedHeight=600,this.showReset=!1,this.hotkeysService.add(new l.qm("escape",()=>(this.returnToBoard(),!1))),this.template=new p,this.fontSizes=Array.from(Array(108).keys()),this.cellSpacingValues=Array.from(Array(51).keys()).filter(e=>e%5==0)}ngOnInit(){this.boardService.get(this.route.snapshot.paramMap.get("board_id")).subscribe(e=>{this.board=e,this.setTemplateDefaults()}),this.toolbarService.setButtons([{text:"Board Set",icon:"arrow_back",action:()=>this.router.navigate(["/","boardsets",this.route.snapshot.paramMap.get("id")])}])}setTemplateDefaults(){this.showReset=!1,this.template.orientation=this.board.rows>this.board.logicalColumns?"portrait":"landscape",this.templateService.pageSizes().subscribe(e=>{this.pageSizes=e,this.template.pageSize=e.find(e=>"A4"===e.name),this.template.fontSize=Math.round(this.template.pageSize.y/this.board.rows*.1),this.template.cellPadding=10,this.template.cellSpacing=10,this.template.drawCellBorders=!0,this.template.imageTextSpacing=-1,this.loadPdf()})}onSettingChanged(){this.showReset=!0,this.loadPdf()}loadPdf(){this.status="loading",this.apiError=null,this.setEmbedHeight(),this.boardService.pdf(this.route.snapshot.paramMap.get("board_id"),this.template).then(e=>{this.compiledPdf=e,this.status="success"},e=>(e.error.text().then(e=>{this.apiError=JSON.parse(e).error}),this.status="error"))}setEmbedHeight(){this.pdfEmbedHeight="portrait"===this.template.orientation?this.pdfEmbedWidth*this.template.pageSize.ratio+60:this.pdfEmbedWidth/this.template.pageSize.ratio+60}downloadPdf(){(0,c.saveAs)(this.compiledPdf,`${this.board.name}.pdf`)}returnToBoard(){this.board?this.router.navigate(["/","boardsets",this.board.board_set_id],{queryParams:{board:this.board.id}}).then():this.location.back()}}return e.\u0275fac=function(t){return new(t||e)(g.Y36(u.$),g.Y36(m),g.Y36(n.gz),g.Y36(n.F0),g.Y36(i.Ye),g.Y36(Z.H7),g.Y36(l.tm),g.Y36(S.O))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-pdf-preview"]],decls:70,vars:26,consts:function(){let e,t,a,i,n,r,o,s,l,c,d,p,g,u,f,h,b,m,Z,S,v,T,A,x,q;return e="Configuraci\xF3n de PDF",t="Tama\xF1o del papel",a="orientaci\xF3n",i="retrato",n="paisaje",r="Tama\xF1o del texto (m\xE1ximo)",o="El texto puede reducirse para ajustarse al espacio disponible",s="Configuraci\xF3n avanzada",l="Espaciado de celda",c="Ajusta el espaciado entre cada cuadro",d="Relleno de celda",p="Ajusta el espaciado dentro de cada cuadro",g="Espaciado de imagen/etiqueta",u="Ajusta el espaciado entre la imagen y la etiqueta",f="Bordes de celda",h="Descargar",b="Actualizar PDF",m="Actualizar PDF",Z="PDF",S="Restablecer configuraci\xF3n",v="No podemos encajar todo en la p\xE1gina con la configuraci\xF3n elegida. Puede solucionar esto por\u2026",T="Reducir el espaciado de celda o el relleno de celdas en al menos " + "\ufffd0\ufffd" + " pt.",A="Reducci\xF3n del espaciado entre im\xE1genes y etiquetas en al menos " + "\ufffd0\ufffd" + " pt.",x="Uso de un tama\xF1o de papel m\xE1s grande.",q="Reducir el tama\xF1o del texto en al menos " + "\ufffd0\ufffd" + " pt. ",[[1,"section"],["fxLayout","column","fxLayoutAlign","center center"],[1,"mb-2",2,"max-width","750px","width","100%"],[1,"mb-3"],e,["fxLayout","row","fxLayoutGap","20px"],["appearance","outline","fxFlex","33"],t,[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],a,["value","portrait"],i,["value","landscape"],n,r,o,[3,"expanded"],s,l,c,d,p,g,[3,"value"],u,[1,"mt-2"],[3,"ngModel","ngModelChange","change"],f,["fxLayoutAlign","space-between center",1,"mt-2"],[1,"mb-1"],["mat-raised-button","","color","primary",1,"mr-2",3,"disabled","click"],h,["mat-icon-button","","aria-label",b,"matTooltip",m,"matTooltipPosition","right",3,"disabled","click"],["mat-button","","color","primary","mat-stroked-button","",3,"click",4,"ngIf"],["action","Generating","subject",Z,3,"error",4,"ngIf"],["class","mt-3",4,"ngIf"],[2,"max-width","1000px","width","100%",3,"data","height"],["mat-button","","color","primary","mat-stroked-button","",3,"click"],S,["action","Generating","subject",Z,3,"error"],[1,"mt-3"],v,T,A,[4,"ngIf"],x,q]},template:function(e,t){1&e&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"h2",3),g.SDv(4,4),g.qZA(),g.TgZ(5,"div",5),g.TgZ(6,"mat-form-field",6),g.TgZ(7,"mat-label"),g.SDv(8,7),g.qZA(),g.TgZ(9,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.pageSize=e})("valueChange",function(){return t.onSettingChanged()}),g.YNc(10,C,2,2,"mat-option",9),g.qZA(),g.qZA(),g.TgZ(11,"mat-form-field",6),g.TgZ(12,"mat-label"),g.SDv(13,10),g.qZA(),g.TgZ(14,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.orientation=e})("valueChange",function(){return t.onSettingChanged()}),g.TgZ(15,"mat-option",11),g.SDv(16,12),g.qZA(),g.TgZ(17,"mat-option",13),g.SDv(18,14),g.qZA(),g.qZA(),g.qZA(),g.TgZ(19,"mat-form-field",6),g.TgZ(20,"mat-label"),g.SDv(21,15),g.qZA(),g.TgZ(22,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.fontSize=e})("valueChange",function(){return t.onSettingChanged()}),g.YNc(23,J,2,2,"mat-option",9),g.qZA(),g.TgZ(24,"mat-hint"),g.SDv(25,16),g.qZA(),g.qZA(),g.qZA(),g.TgZ(26,"mat-accordion"),g.TgZ(27,"mat-expansion-panel",17),g.TgZ(28,"mat-expansion-panel-header"),g.TgZ(29,"mat-panel-title"),g.SDv(30,18),g.qZA(),g.qZA(),g.TgZ(31,"div",5),g.TgZ(32,"mat-form-field",6),g.TgZ(33,"mat-label"),g.SDv(34,19),g.qZA(),g.TgZ(35,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.cellSpacing=e})("valueChange",function(){return t.onSettingChanged()}),g.YNc(36,$,2,2,"mat-option",9),g.qZA(),g.TgZ(37,"mat-hint"),g.SDv(38,20),g.qZA(),g.qZA(),g.TgZ(39,"mat-form-field",6),g.TgZ(40,"mat-label"),g.SDv(41,21),g.qZA(),g.TgZ(42,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.cellPadding=e})("valueChange",function(){return t.onSettingChanged()}),g.YNc(43,Q,2,2,"mat-option",9),g.qZA(),g.TgZ(44,"mat-hint"),g.SDv(45,22),g.qZA(),g.qZA(),g.TgZ(46,"mat-form-field",6),g.TgZ(47,"mat-label"),g.SDv(48,23),g.qZA(),g.TgZ(49,"mat-select",8),g.NdJ("valueChange",function(e){return t.template.imageTextSpacing=e})("valueChange",function(){return t.onSettingChanged()}),g.TgZ(50,"mat-option",24),g._uU(51,"Automatic"),g.qZA(),g.YNc(52,F,2,2,"mat-option",9),g.qZA(),g.TgZ(53,"mat-hint"),g.SDv(54,25),g.qZA(),g.qZA(),g.qZA(),g.TgZ(55,"div",26),g.TgZ(56,"mat-checkbox",27),g.NdJ("ngModelChange",function(e){return t.template.drawCellBorders=e})("change",function(){return t.onSettingChanged()}),g.SDv(57,28),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(58,"div",29),g.TgZ(59,"div",30),g.TgZ(60,"button",31),g.NdJ("click",function(){return t.downloadPdf()}),g.SDv(61,32),g.qZA(),g.TgZ(62,"button",33),g.NdJ("click",function(){return t.loadPdf()}),g.TgZ(63,"mat-icon"),g._uU(64,"refresh"),g.qZA(),g.qZA(),g.qZA(),g.YNc(65,N,2,0,"button",34),g.qZA(),g.qZA(),g.YNc(66,k,1,1,"app-loading-notice",35),g.YNc(67,Y,11,4,"div",36),g._UZ(68,"object",37),g.ALo(69,"bypassSanitiser"),g.qZA(),g.qZA()),2&e&&(g.xp6(9),g.Q6J("value",t.template.pageSize),g.xp6(1),g.Q6J("ngForOf",t.pageSizes),g.xp6(4),g.Q6J("value",t.template.orientation),g.xp6(8),g.Q6J("value",t.template.fontSize),g.xp6(1),g.Q6J("ngForOf",t.fontSizes),g.xp6(4),g.Q6J("expanded",!1),g.xp6(8),g.Q6J("value",t.template.cellSpacing),g.xp6(1),g.Q6J("ngForOf",t.cellSpacingValues),g.xp6(6),g.Q6J("value",t.template.cellPadding),g.xp6(1),g.Q6J("ngForOf",t.cellSpacingValues),g.xp6(6),g.Q6J("value",t.template.imageTextSpacing),g.xp6(1),g.Q6J("value",-1),g.xp6(2),g.Q6J("ngForOf",t.cellSpacingValues),g.xp6(4),g.Q6J("ngModel",t.template.drawCellBorders),g.xp6(4),g.Q6J("disabled","success"!=t.status),g.xp6(2),g.Q6J("disabled","loading"==t.status),g.xp6(3),g.Q6J("ngIf",t.showReset),g.xp6(1),g.Q6J("ngIf","loading"===t.status||"error"===t.status),g.xp6(1),g.Q6J("ngIf","insufficient_cell_height"===(null==t.apiError?null:t.apiError.category)),g.xp6(1),g.Udp("visibility","success"===t.status?"visible":"hidden"),g.Q6J("data",g.xi3(69,23,t.compiledPdf,"resourceUrl"),g.uOi)("height",t.pdfEmbedHeight))},directives:[o.xw,o.Wh,o.SQ,v.KE,o.yH,v.hX,T.gD,i.sg,A.ey,v.bx,x.pp,x.ib,x.yz,x.yK,q.oG,z.JJ,z.On,s.lW,P.gM,D.Hw,i.O5,y.W],pipes:[w],styles:["mat-progress-spinner[_ngcontent-%COMP%]{margin:30px auto}.section[_ngcontent-%COMP%]{margin:1rem}"]}),e})();var I=a(22797),M=a(75425);const L=[{path:":board_id",component:_,pathMatch:"full"}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[i.ez,n.Bz.forChild(L),r.Cq,o.ae,s.ot,z.u5,T.LD,I.QW,M.m,D.Ps,P.AV,q.p9,x.To]]}),e})()}}]);