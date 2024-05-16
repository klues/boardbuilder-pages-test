!function(){var e,t,a,i,n,o,r,d,l,s,c,h,g,p,u,b,f,m;function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t,a){return t&&v(e.prototype,t),a&&v(e,a),e}(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[860],{46024:function(e,t,a){"use strict";a.d(t,{t:function(){return i}});var i=function(){function e(t){Z(this,e),t&&this.deserialise(t)}return y(e,[{key:"deserialise",value:function(e){return Object.assign(this,e),this}},{key:"shortEdge",get:function(){return Math.min.apply(Math,[this.x,this.y])}},{key:"longEdge",get:function(){return Math.max.apply(Math,[this.x,this.y])}},{key:"ratio",get:function(){return this.longEdge/this.shortEdge}}]),e}()},74703:function(v,T,w){"use strict";w.d(T,{q:function(){return U}});var A=w(35366),I=w(91286),q=w(35965),S=w(13070),k=w(61116),M=w(9550),C=w(31041),P=w(79418),_=w(57173),O=w(23695),F=w(13841),B=w(87064),Q=w(84369),J=w(24311),z=w(46024);function E(e,t){if(1&e&&(A.O4$(),A._UZ(0,"use",14)),2&e){var a=t.$implicit,i=A.oxw();A.uIk("x",a.x)("y",a.y)("height",a.height)("width",a.width)("href","#"+i.randomId+"caption-"+i.board.captions_position)}}var $=function(){var e=function(){function e(){Z(this,e),this.paper=new z.t({name:"A4",x:210,y:297}),this.cellSpacingFraction=.2,this.pagePaddingFraction=.1,this.pageOutlineColour="#6b6b6b",this.generateRandomId(1,1e8)}return y(e,[{key:"ngOnChanges",value:function(){this.calculatePageDimensions(),this.pagePadding=this.paper.shortEdge*this.pagePaddingFraction,this.pageInnerHeight=this.height-2*this.pagePadding,this.pageInnerWidth=this.width-2*this.pagePadding,this.calculateCellSpacing(),this.innerPageTranslate="translate(".concat(this.pagePadding," ").concat(this.pagePadding,")"),this.viewBox="0 0 ".concat(this.width," ").concat(this.height),this.innerPageViewBox="".concat(this.pagePadding," ").concat(this.pagePadding," ").concat(this.width-2*this.pagePadding," ").concat(this.height-2*this.pagePadding),this.pageOutlineWidth=this.paper.longEdge/55,this.thumbnails=[];for(var e=(this.pageInnerWidth-this.cellSpacing*(this.board.columns-1))/this.board.columns,t=(this.pageInnerHeight-this.cellSpacing*(this.board.rows-1))/this.board.rows,a=0,i=1;i<=this.board.rows;i++){for(var n=0,o=1;o<=this.board.columns;o++)this.thumbnails.push({x:n,y:a,height:t,width:e}),n=n+e+this.cellSpacing;a=a+t+this.cellSpacing}}},{key:"calculateCellSpacing",value:function(){var e=Math.max.apply(Math,[this.board.rows,this.board.columns]),t=Math.max.apply(Math,[this.pageInnerHeight,this.pageInnerWidth]);this.cellSpacing=t/e*this.cellSpacingFraction}},{key:"calculatePageDimensions",value:function(){var e=["left","right"].includes(this.board.captions_position)?2:1;this.board.rows>this.board.columns*e?(this.height=this.paper.longEdge,this.width=this.paper.shortEdge,this.svgWidth="auto",this.svgHeight=this.size):(this.height=this.paper.shortEdge,this.width=this.paper.longEdge,this.svgWidth=this.size,this.svgHeight="auto")}},{key:"generateRandomId",value:function(e,t){this.randomId=Math.floor(Math.random()*(t-e)+e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=A.Xpm({type:e,selectors:[["app-board-preview-svg"]],inputs:{board:"board",paper:"paper",selected:"selected",size:"size",maxHeight:"maxHeight",maxWidth:"maxWidth"},features:[A.TTD],decls:23,vars:30,consts:[["xmlns","http://www.w3.org/2000/svg","shape-rendering","geometricPrecision","image-rendering","optimizeQuality","fill-rule","evenodd"],["d","M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z",3,"id"],["viewBox","0 0 24 24",3,"id"],[1,"thumbnail"],["transform","translate(0, 4)",1,"thumbnail"],["x1","1","y1","4","x2","23","y2","4",1,"text"],["transform","translate(0, -4)",1,"thumbnail"],["x1","1","y1","20","x2","23","y2","20",1,"text"],["viewBox","0 0 52 24",3,"id"],["transform","translate(28, 0)",1,"thumbnail"],["x1","0","y1","12","x2","24","y2","12",1,"text"],["x1","28","y1","12","x2","52","y2","12",1,"text"],[1,"page"],["class","cell",4,"ngFor","ngForOf"],[1,"cell"]],template:function(e,t){1&e&&(A.O4$(),A.TgZ(0,"svg",0),A.TgZ(1,"style"),A._uU(2," .thumbnail { fill: #006aba; } .text { stroke-width: 2; stroke: #006aba; } .page { fill: none; } svg:not(.selected):hover .page { fill: #BEE0FC; } .selected .text { stroke: white; } .selected use.thumbnail { fill: white; } .selected .page { fill: #006aba; } "),A.qZA(),A.TgZ(3,"defs"),A._UZ(4,"path",1),A.qZA(),A.TgZ(5,"symbol",2),A._UZ(6,"use",3),A.qZA(),A.TgZ(7,"symbol",2),A._UZ(8,"use",4),A._UZ(9,"line",5),A.qZA(),A.TgZ(10,"symbol",2),A._UZ(11,"use",6),A._UZ(12,"line",7),A.qZA(),A.TgZ(13,"symbol",8),A._UZ(14,"use",9),A._UZ(15,"line",10),A.qZA(),A.TgZ(16,"symbol",8),A._UZ(17,"use",3),A._UZ(18,"line",11),A.qZA(),A.TgZ(19,"g"),A._UZ(20,"rect",12),A.TgZ(21,"g"),A.YNc(22,E,1,5,"use",13),A.qZA(),A.qZA(),A.qZA()),2&e&&(A.Udp("width",t.svgWidth)("height",t.svgHeight)("max-height",t.maxHeight)("max-width",t.maxWidth),A.ekj("selected",t.selected),A.uIk("viewBox",t.viewBox),A.xp6(4),A.Q6J("id",t.randomId+"thumbnail"),A.xp6(1),A.Q6J("id",t.randomId+"caption-hidden"),A.xp6(1),A.uIk("href","#"+t.randomId+"thumbnail"),A.xp6(1),A.Q6J("id",t.randomId+"caption-above"),A.xp6(1),A.uIk("href","#"+t.randomId+"thumbnail"),A.xp6(2),A.Q6J("id",t.randomId+"caption-below"),A.xp6(1),A.uIk("href","#"+t.randomId+"thumbnail"),A.xp6(2),A.Q6J("id",t.randomId+"caption-left"),A.xp6(1),A.uIk("href","#"+t.randomId+"thumbnail"),A.xp6(2),A.Q6J("id",t.randomId+"caption-right"),A.xp6(1),A.uIk("href","#"+t.randomId+"thumbnail"),A.xp6(3),A.uIk("x",t.pageOutlineWidth)("y",t.pageOutlineWidth)("width",t.width-2*t.pageOutlineWidth)("height",t.height-2*t.pageOutlineWidth)("stroke",t.pageOutlineColour)("stroke-width",t.pageOutlineWidth),A.xp6(1),A.uIk("transform",t.innerPageTranslate),A.xp6(1),A.Q6J("ngForOf",t.thumbnails))},directives:[k.sg],styles:[""]}),e}(),D=["titleField"];function L(e,t){1&e&&(A.ynx(0),A.SDv(1,35),A.BQk())}function W(e,t){1&e&&(A.TgZ(0,"mat-hint"),A.SDv(1,36),A.qZA())}function H(e,t){1&e&&(A.ynx(0),A.SDv(1,37),A.BQk())}function N(e,t){if(1&e){var a=A.EpF();A.TgZ(0,"div",38),A.TgZ(1,"button",39),A.NdJ("click",function(){var e=A.CHM(a).$implicit;return A.oxw().selectTemplate(e)}),A._UZ(2,"app-board-preview-svg",40),A.qZA(),A.qZA()}if(2&e){var i=t.$implicit,n=A.oxw();A.xp6(1),A.Q6J("matTooltip",i.description),A.xp6(1),A.Q6J("board",i.board)("selected",n.board.matchesTemplate(i))}}var U=function(){var v=function(){function e(t){Z(this,e),this.service=t}return y(e,[{key:"ngOnInit",value:function(){var e=this;this.service.templates().subscribe(function(t){e.templates=t,e.board.persisted()&&!t.find(function(t){return e.board.matchesTemplate(t)})&&(e.selectedTab=2)})}},{key:"selectTemplate",value:function(e){this.board.rows=e.board.rows,this.board.columns=e.board.columns,this.board.captions_position=e.board.captions_position,this.board.populateCells()}},{key:"focusTitleField",value:function(){var e=this;setTimeout(function(){return e.titleField.nativeElement.select()},500)}}]),e}();return v.\u0275fac=function(e){return new(e||v)(A.Y36(I.$))},v.\u0275cmp=A.Xpm({type:v,selectors:[["app-board-editor-form"]],viewQuery:function(e,t){var a;(1&e&&A.Gf(D,5),2&e)&&(A.iGM(a=A.CRH())&&(t.titleField=a.first))},inputs:{board:"board"},decls:53,vars:24,consts:function(){return[["fxLayoutGap","20px grid"],["fxFlex","50",1,"w-100"],[4,"ngIf"],"titel",["matInput","","required","","maxlength","250","appStopPropagation","",3,"ngModel","ngModelChange"],["titleField",""],["align","end"],["fxFlex","50",1,"w-100","mb-2"],"Beschrijving",["matInput","","maxlength","250","appStopPropagation","",3,"ngModel","ngModelChange"],"facultatief. Weergegeven in PDF's gemaakt van dit bord.","indeling",["mat-stretch-tabs","","dynamicHeight","",3,"selectedIndex","selectedIndexChange"],["label","Algemene sjablonen"],["fxLayout","row wrap","fxLayoutGap","20px grid","fxLayoutAlign","space-around center",1,"w-100","p-1"],["fxFlex","0 1 calc(25% - 20px)","class","template",4,"ngFor","ngForOf"],["label","Aangepaste instellingen"],["fxLayout","row","fxLayoutAlign","space-between start","fxLayoutGap","20px",1,"mt-2"],["fxFlex","50"],"Kolommen: " + "\ufffd0\ufffd" + "",["appStopPropagation","",1,"example-margin","w-100",3,"max","min","step","thumbLabel","tickInterval","ngModel","ngModelChange","change"],"Rijen: " + "\ufffd0\ufffd" + "","Labelpositie",["appStopPropagation","",3,"ngModel","ngModelChange"],["value","above"],"Boven",["value","below"],"bodem",["value","left"],"Links",["value","right"],"Rechts",["value","hidden"],"verborgen","Hiermee stelt u in waar tekst in elke cel wordt weergegeven ten opzichte van de afbeelding.","Eerste bestuur","Kies een naam voor het eerste bord in je nieuwe boardset.","Eerste bestuur",["fxFlex","0 1 calc(25% - 20px)",1,"template"],["mat-button","","color","primary","appStopPropagation","","disableRipple","",3,"matTooltip","click"],["size","90","maxHeight","90","maxWidth","90",3,"board","selected"]]},template:function(e,t){1&e&&(A.TgZ(0,"div",0),A.TgZ(1,"mat-form-field",1),A.TgZ(2,"mat-label"),A.YNc(3,L,2,0,"ng-container",2),A.ynx(4),A.SDv(5,3),A.BQk(),A.qZA(),A.TgZ(6,"input",4,5),A.NdJ("ngModelChange",function(e){return t.board.title=e}),A.qZA(),A.YNc(8,W,2,0,"mat-hint",2),A.TgZ(9,"mat-hint",6),A._uU(10),A.qZA(),A.qZA(),A.TgZ(11,"mat-form-field",7),A.TgZ(12,"mat-label"),A.YNc(13,H,2,0,"ng-container",2),A.ynx(14),A.SDv(15,8),A.BQk(),A.qZA(),A.TgZ(16,"input",9),A.NdJ("ngModelChange",function(e){return t.board.description=e}),A.qZA(),A.TgZ(17,"mat-hint"),A.SDv(18,10),A.qZA(),A.TgZ(19,"mat-hint",6),A._uU(20),A.qZA(),A.qZA(),A.qZA(),A.TgZ(21,"div"),A.TgZ(22,"h2"),A.SDv(23,11),A.qZA(),A.TgZ(24,"mat-tab-group",12),A.NdJ("selectedIndexChange",function(e){return t.selectedTab=e}),A.TgZ(25,"mat-tab",13),A.TgZ(26,"div",14),A.YNc(27,N,3,3,"div",15),A.qZA(),A.qZA(),A.TgZ(28,"mat-tab",16),A.TgZ(29,"div",17),A.TgZ(30,"div",18),A.TgZ(31,"mat-label"),A.SDv(32,19),A.qZA(),A.TgZ(33,"mat-slider",20),A.NdJ("ngModelChange",function(e){return t.board.columns=e})("change",function(){return t.board.populateCells()}),A.qZA(),A.TgZ(34,"mat-label"),A.SDv(35,21),A.qZA(),A.TgZ(36,"mat-slider",20),A.NdJ("ngModelChange",function(e){return t.board.rows=e})("change",function(){return t.board.populateCells()}),A.qZA(),A.qZA(),A.TgZ(37,"mat-form-field",18),A.TgZ(38,"mat-label"),A.SDv(39,22),A.qZA(),A.TgZ(40,"mat-select",23),A.NdJ("ngModelChange",function(e){return t.board.captions_position=e}),A.TgZ(41,"mat-option",24),A.SDv(42,25),A.qZA(),A.TgZ(43,"mat-option",26),A.SDv(44,27),A.qZA(),A.TgZ(45,"mat-option",28),A.SDv(46,29),A.qZA(),A.TgZ(47,"mat-option",30),A.SDv(48,31),A.qZA(),A.TgZ(49,"mat-option",32),A.SDv(50,33),A.qZA(),A.qZA(),A.TgZ(51,"mat-hint"),A.SDv(52,34),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()),2&e&&(A.xp6(3),A.Q6J("ngIf",!t.board.board_set_id),A.xp6(3),A.Q6J("ngModel",t.board.title),A.xp6(2),A.Q6J("ngIf",!t.board.board_set_id||!0),A.xp6(2),A.hij("",(null==t.board.title?null:t.board.title.length)||0,"\xa0/\xa0250"),A.xp6(3),A.Q6J("ngIf",!t.board.board_set_id),A.xp6(3),A.Q6J("ngModel",t.board.description),A.xp6(4),A.hij("",(null==t.board.description?null:t.board.description.length)||0,"\xa0/\xa0250"),A.xp6(4),A.Q6J("selectedIndex",t.selectedTab),A.xp6(3),A.Q6J("ngForOf",t.templates),A.xp6(5),A.pQV(t.board.columns),A.QtT(32),A.xp6(1),A.Q6J("max",12)("min",1)("step",1)("thumbLabel",!0)("tickInterval",1)("ngModel",t.board.columns),A.xp6(2),A.pQV(t.board.rows),A.QtT(35),A.xp6(1),A.Q6J("max",12)("min",1)("step",1)("thumbLabel",!0)("tickInterval",1)("ngModel",t.board.rows),A.xp6(4),A.Q6J("ngModel",t.board.captions_position))},directives:[q.SQ,S.KE,q.yH,S.hX,k.O5,M.Nt,C.Fj,C.Q7,C.nD,P._,C.JJ,C.On,S.bx,_.SP,_.uX,q.xw,q.Wh,k.sg,O.pH,F.gD,B.ey,Q.lW,J.gM,$],styles:[".template[_ngcontent-%COMP%]{text-align:center}.template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0}.template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:90px;max-width:90px}mat-tab-body[_ngcontent-%COMP%]{padding-top:20px}"]}),v}()}}])}();