!function(){var e,t,a,n,o,i,c,r,l,s,d,f,g,b,m,u,p,h,y,v,x,Z,S,w,T,A,q;function z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[91],{75091:function($,H,D){"use strict";D.r(H),D.d(H,{HomeModule:function(){return ie},routes:function(){return oe}});var k=D(61116),J=D(35366),M=D(3796),O=D(33464),P=D(98508),B=D(35965);function F(e,t){if(1&e&&(J.TgZ(0,"h1"),J._uU(1),J.qZA()),2&e){var a=J.oxw();J.xp6(1),J.Oqu(a.heading)}}function U(e,t){if(1&e&&(J.TgZ(0,"h2"),J._uU(1),J.qZA()),2&e){var a=J.oxw();J.xp6(1),J.Oqu(a.heading)}}var Y=["*"],_=function(){var e=function e(){Q(this,e),this.headingType="h2"};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=J.Xpm({type:e,selectors:[["app-home-panel"]],inputs:{even:"even",headingType:"headingType",heading:"heading",imageUrl:"imageUrl"},ngContentSelectors:Y,decls:8,vars:6,consts:[["fxLayout","row","fxLayout.xs","column","fxLayoutGap","40px","fxLayoutAlign","space-between center",1,"panel"],["fxFlex","45","fxFlex.sm","50","fxFlex.xs",""],[3,"ngSwitch"],[4,"ngSwitchCase"],["fxFlex","55","fxFlex.sm","50","fxFlex.xs","",3,"fxFlexOrder.gt-sm"],[3,"src","alt"]],template:function(e,t){1&e&&(J.F$t(),J.TgZ(0,"div",0),J.TgZ(1,"div",1),J.ynx(2,2),J.YNc(3,F,2,1,"h1",3),J.YNc(4,U,2,1,"h2",3),J.BQk(),J.Hsn(5),J.qZA(),J.TgZ(6,"div",4),J._UZ(7,"img",5),J.qZA(),J.qZA()),2&e&&(J.xp6(2),J.Q6J("ngSwitch",t.headingType),J.xp6(1),J.Q6J("ngSwitchCase","h1"),J.xp6(1),J.Q6J("ngSwitchCase","h2"),J.xp6(2),J.Q6J("fxFlexOrder.gt-sm",t.even?-1:0),J.xp6(1),J.Q6J("src",t.imageUrl,J.LSH)("alt",t.heading))},directives:[B.xw,B.SQ,B.Wh,B.yH,k.RF,k.n9,B.r7],styles:[".panel[_ngcontent-%COMP%]{margin-bottom:2rem!important}.panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}h1[_ngcontent-%COMP%]{font-size:3rem;line-height:3.2rem}h2[_ngcontent-%COMP%]{font-weight:400;padding-bottom:.83em;border-bottom:2px solid #006aba}"]}),e}(),G=D(84369),I=D(37112);function L(e,t){1&e&&(J.ynx(0),J.SDv(1,27),J.BQk())}function N(e,t){1&e&&(J.ynx(0),J.SDv(1,28),J.BQk())}var j=function(){return["/","media"]};function R(e,t){1&e&&(J.TgZ(0,"button",29),J.SDv(1,30),J.qZA()),2&e&&J.Q6J("routerLink",J.DdM(1,j))}function E(e,t){1&e&&(J.ynx(0),J.SDv(1,31),J.BQk())}function W(e,t){1&e&&(J.ynx(0),J.SDv(1,32),J.BQk())}function X(e,t){1&e&&(J.TgZ(0,"button",29),J.SDv(1,33),J.qZA()),2&e&&J.Q6J("routerLink",J.DdM(1,j))}var K,V=function(){var $=function(){function e(t,a,n){var o=this;Q(this,e),this.authService=t,this.router=a,this.toolbarService=n,this.panelId=0,this.isDoneLoading=this.authService.isDoneLoading$,this.canActivateProtectedRoutes=this.authService.canActivateProtectedRoutes$,this.authService.canActivateProtectedRoutes$.subscribe(function(e){return o.signedIn=e})}var t,a,n;return t=e,(a=[{key:"login",value:function(){this.authService.login()}},{key:"getStarted",value:function(){this.signedIn?this.router.navigate(["/","boardsets"]):this.authService.login()}}])&&C(t.prototype,a),n&&C(t,n),e}();return $.\u0275fac=function(e){return new(e||$)(J.Y36(M.e),J.Y36(O.F0),J.Y36(P.O))},$.\u0275cmp=J.Xpm({type:$,selectors:[["app-home"]],decls:48,vars:15,consts:function(){return[[1,"container",2,"max-width","1000px"],["heading","\u0540\u0561\u0572\u0578\u0580\u0564\u0561\u056F\u0581\u0574\u0561\u0576 \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580 \u0570\u0565\u0577\u057F \u0573\u0561\u0576\u0561\u057A\u0561\u0580\u0570\u0578\u057E","imageUrl","assets/images/home/main.svg","headingType","h1",3,"even"],"\u054D\u057F\u0565\u0572\u056E\u0565\u0584 \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580, \u0578\u0580\u0578\u0576\u0584 \u056F\u0585\u0563\u0576\u0565\u0576 \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u056F\u0581\u057E\u0565\u056C \u0570\u0561\u0566\u0561\u0580\u0561\u057E\u0578\u0580 \u0561\u0566\u0561\u057F \u057A\u0561\u057F\u056F\u0565\u0580\u0576\u0565\u0580\u056B \u0570\u0565\u057F:","\u0531\u0574\u0565\u0576 \u056B\u0576\u0579 \u0561\u057A\u0561\u0570\u0578\u057E \u057A\u0561\u0570\u057E\u0578\u0582\u0574 \u0567 \u0571\u0565\u0580 \u0563\u056C\u0578\u0562\u0561\u056C \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u056B \u0570\u0561\u0577\u057E\u056B \u0574\u0565\u057B:",["mat-flat-button","","color","primary",1,"button-lg","mb-1","mr-1",3,"ngSwitch","click"],[4,"ngSwitchCase"],["mat-flat-button","","color","primary","class","button-lg mb-1",3,"routerLink",4,"ngIf"],["heading","\u054D\u056F\u057D\u0565\u0584 \u0571\u0587\u0561\u0576\u0574\u0578\u0582\u0577\u056B\u0581 \u056F\u0561\u0574 \u056F\u0561\u0566\u0574\u0565\u0584 \u0571\u0565\u0580 \u0576\u0561\u056D\u0561\u0563\u056B\u056E\u0568","imageUrl","assets/images/home/templates.svg",3,"even"],"\u0531\u0580\u0561\u0563 \u057D\u056F\u057D\u0565\u0584 \u0574\u0565\u0580 \u0585\u0563\u057F\u0561\u056F\u0561\u0580 \u0574\u0578\u0564\u0565\u056C\u0576\u0565\u0580\u056B \u057F\u0561\u056D\u057F\u0561\u056F\u056B\u0581:","\u0534\u0578\u0582\u0584 \u0574\u056B\u0577\u057F \u0578\u0582\u0576\u0565\u0584 \u057E\u0565\u0580\u0561\u0570\u057D\u056F\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576, \u0578\u0580\u057A\u0565\u057D\u0566\u056B \u0570\u0561\u0580\u0574\u0561\u0580\u0565\u0581\u0576\u0565\u0584 \u0570\u0561\u057F\u0561\u056F\u0561\u0563\u056B\u056E\u0568 \u0574\u0565\u0580 \u0574\u0578\u0564\u0565\u056C\u0576\u0565\u0580\u056B\u0581 \u0561\u0575\u0576 \u056F\u0578\u0572\u0574:",["heading","\u0553\u0576\u057F\u0580\u0565\u0584 \u0570\u0561\u0566\u0561\u0580\u0561\u057E\u0578\u0580 \u0561\u0576\u057E\u0573\u0561\u0580 \u0576\u056F\u0561\u0580\u0576\u0565\u0580 \u0565\u0582 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0565\u0584 \u0571\u0565\u0580 \u057D\u0565\u0583\u0561\u056F\u0561\u0576\u0568","imageUrl","assets/images/home/search-images.svg",3,"even"],"\u0531\u0580\u0561\u0563\u0578\u0580\u0565\u0576 \u0563\u057F\u0576\u0565\u056C \u0571\u0565\u0566 \u0561\u0576\u0570\u0580\u0561\u056A\u0565\u0577\u057F \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568\u055D \u0578\u0580\u0578\u0576\u0565\u056C\u0578\u057E \u0570\u0561\u0566\u0561\u0580\u0561\u057E\u0578\u0580 \u0561\u0566\u0561\u057F \u057A\u0561\u057F\u056F\u0565\u0580\u0576\u0565\u0580 GlobalSymbols-\u056B \u0570\u0561\u0575\u057F\u0576\u056B \u057D\u056B\u0574\u057E\u0578\u056C\u056B\u056F \u0570\u0561\u057E\u0561\u0584\u0561\u056E\u0578\u0582\u0576\u0565\u0580\u056B\u0581:","\u054A\u0561\u0570\u0565\u0584 \u0571\u0565\u0580 \u057D\u0565\u0583\u0561\u056F\u0561\u0576 \u0576\u056F\u0561\u0580\u0576\u0565\u0580\u0576 \u0578\u0582 \u057A\u0561\u057F\u056F\u0565\u0580\u0576\u0565\u0580\u0568 BoardBuilder-\u0578\u0582\u0574 \u0565\u0582 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0565\u0584 \u0564\u0580\u0561\u0576\u0584 \u0571\u0565\u0580 \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u056B \u057D\u057F\u0565\u0572\u056E\u0574\u0561\u0576 \u0578\u0572\u057B \u0568\u0576\u0569\u0561\u0581\u0584\u0578\u0582\u0574:",["heading","\u0540\u0561\u0572\u0578\u0580\u0564\u0561\u056F\u0581\u057E\u0565\u0584 \u0563\u0578\u0582\u0575\u0576\u0565\u0580\u0578\u057E \u0565\u0582 \u0561\u057E\u0565\u056C\u056B","imageUrl","assets/images/home/colour.svg",3,"even"],"\u0538\u0576\u057F\u0580\u0565\u0584 \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580 \u0571\u0565\u0580 \u057D\u056B\u0580\u0561\u056E \u0563\u0578\u0582\u0575\u0576\u0565\u0580\u0578\u057E \u0565\u0582 \u0576\u0561\u056D\u0568\u0576\u057F\u0580\u0565\u056C\u056B \u057F\u0561\u057C\u0561\u057F\u0565\u057D\u0561\u056F\u0576\u0565\u0580\u0578\u057E:","\u0540\u0565\u0577\u057F\u0578\u0582\u0569\u0575\u0561\u0574\u0562 \u057E\u0565\u0580\u0561\u056F\u0561\u0566\u0574\u0561\u056F\u0565\u0580\u057A\u0565\u056C \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u0568 \u0587 \u056F\u0561\u057A\u0565\u056C \u0574\u056B\u0574\u0575\u0561\u0576\u0581\u055D \u057D\u057F\u0565\u0572\u056E\u0565\u056C\u0578\u0582 \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u056F\u0581\u0574\u0561\u0576 \u0563\u0580\u0584\u0565\u0580:",["heading","\u054D\u057F\u0565\u0572\u056E\u0565\u0584 \u0571\u0565\u0580 \u057D\u0565\u0583\u0561\u056F\u0561\u0576 \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568","imageUrl","assets/images/home/symbol-creator.svg",3,"even"],"\u054D\u057F\u0565\u0572\u056E\u0565\u0584 \u0571\u0565\u0580 \u057D\u0565\u0583\u0561\u056F\u0561\u0576 \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568 \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576\u0576\u0565\u0580\u056B \u0568\u0576\u0569\u0561\u0581\u0584\u0578\u0582\u0574\u055D \u0574\u056B\u0561\u057E\u0578\u0580\u0565\u056C\u0578\u057E \u0571\u0587\u0565\u0580\u0568, \u057F\u0565\u0584\u057D\u057F\u0568, \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568 \u0565\u0582 \u0576\u0578\u0582\u0575\u0576\u056B\u057D\u056F \u0571\u0565\u0580 \u057D\u0565\u0583\u0561\u056F\u0561\u0576 \u0576\u056F\u0561\u0580\u0576\u0565\u0580\u0568:","\u053F\u0561\u057F\u0561\u0580\u0575\u0561\u056C \u0561\u0575\u0576 \u0564\u0565\u057A\u0584\u0565\u0580\u056B \u0570\u0561\u0574\u0561\u0580, \u0565\u0580\u0562 \u0574\u056B \u0583\u0578\u0584\u0580 \u0561\u0575\u056C \u0562\u0561\u0576\u056B \u056F\u0561\u0580\u056B\u0584 \u0578\u0582\u0576\u0565\u057D:",["heading","\u0546\u0565\u0580\u0562\u0565\u057C\u0576\u0565\u056C, \u057F\u057A\u0565\u056C \u0565\u0582 \u056F\u056B\u057D\u057E\u0565\u056C","imageUrl","assets/images/home/pdf-and-print.svg",3,"even"],"\u0531\u0580\u0561\u0563 \u0583\u0578\u056D\u0561\u056F\u0565\u0580\u057A\u0565\u056C \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u0568 PDF, \u0578\u0580\u057A\u0565\u057D\u0566\u056B \u0564\u0580\u0561\u0576\u0584 \u0570\u0565\u0577\u057F\u0578\u0582\u0569\u0575\u0561\u0574\u0562 \u056F\u056B\u057D\u057E\u0565\u0576 \u0581\u0561\u0576\u056F\u0561\u0581\u0561\u056E\u056B \u0570\u0565\u057F:","\u054F\u057A\u0565\u056C \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u0568 \u0571\u0565\u0580 \u0576\u0561\u056D\u0568\u0576\u057F\u0580\u0561\u056E \u0569\u0572\u0569\u0561\u0575\u056B\u0576 \u0579\u0561\u0583\u0565\u0580\u056B, \u0576\u0565\u0580\u0574\u0578\u0582\u056E\u0574\u0561\u0576 \u0565\u0582 \u0561\u0580\u057F\u0561\u0570\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580 OBF \u0587 OBZ \u0571\u0565\u0582\u0561\u0579\u0561\u0583\u0565\u0580\u0578\u057E:",["heading","\u054D\u056F\u057D\u0565\u0584","imageUrl","assets/images/home/get-started.svg",3,"even"],"BoardBuilder-\u0568 \u057A\u0561\u0570\u0578\u0582\u0574 \u0567 \u0561\u0574\u0565\u0576 \u056B\u0576\u0579 \u0571\u0565\u0580 \u0563\u056C\u0578\u0562\u0561\u056C \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u056B \u0570\u0561\u0577\u057E\u056B \u0574\u0565\u057B:","\u054D\u057F\u0565\u0572\u056E\u0565\u0584 \u0570\u0561\u0577\u056B\u057E, \u0565\u0569\u0565 \u0561\u0580\u0564\u0565\u0576 \u0579\u0578\u0582\u0576\u0565\u0584:",["color","primary"],["fxFlex","",1,"text-center"],"\u053B\u0574 \u0576\u056F\u0561\u0580\u0576\u0565\u0580\u056B \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u0568","\u054D\u056F\u057D\u0565\u0584",["mat-flat-button","","color","primary",1,"button-lg","mb-1",3,"routerLink"],"\u053B\u0574 \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568","\u053B\u0574 \u0576\u056F\u0561\u0580\u0576\u0565\u0580\u056B \u057F\u0561\u056D\u057F\u0561\u056F\u0576\u0565\u0580\u0568","\u054D\u056F\u057D\u0565\u0584","\u053B\u0574 \u057D\u056B\u0574\u057E\u0578\u056C\u0576\u0565\u0580\u0568"]},template:function(e,t){1&e&&(J.TgZ(0,"div",0),J.TgZ(1,"app-home-panel",1),J.TgZ(2,"p"),J.SDv(3,2),J.qZA(),J.TgZ(4,"p"),J.SDv(5,3),J.qZA(),J.TgZ(6,"button",4),J.NdJ("click",function(){return t.getStarted()}),J.YNc(7,L,2,0,"ng-container",5),J.YNc(8,N,2,0,"ng-container",5),J.qZA(),J.YNc(9,R,2,2,"button",6),J.qZA(),J.TgZ(10,"app-home-panel",7),J.TgZ(11,"p"),J.SDv(12,8),J.qZA(),J.TgZ(13,"p"),J.SDv(14,9),J.qZA(),J.qZA(),J.TgZ(15,"app-home-panel",10),J.TgZ(16,"p"),J.SDv(17,11),J.qZA(),J.TgZ(18,"p"),J.SDv(19,12),J.qZA(),J.qZA(),J.TgZ(20,"app-home-panel",13),J.TgZ(21,"p"),J.SDv(22,14),J.qZA(),J.TgZ(23,"p"),J.SDv(24,15),J.qZA(),J.qZA(),J.TgZ(25,"app-home-panel",16),J.TgZ(26,"p"),J.SDv(27,17),J.qZA(),J.TgZ(28,"p"),J.SDv(29,18),J.qZA(),J.qZA(),J.TgZ(30,"app-home-panel",19),J.TgZ(31,"p"),J.SDv(32,20),J.qZA(),J.TgZ(33,"p"),J.SDv(34,21),J.qZA(),J.qZA(),J.TgZ(35,"app-home-panel",22),J.TgZ(36,"p"),J.SDv(37,23),J.qZA(),J.TgZ(38,"p"),J.SDv(39,24),J.qZA(),J.TgZ(40,"button",4),J.NdJ("click",function(){return t.getStarted()}),J.YNc(41,E,2,0,"ng-container",5),J.YNc(42,W,2,0,"ng-container",5),J.qZA(),J.YNc(43,X,2,2,"button",6),J.qZA(),J.qZA(),J.TgZ(44,"mat-toolbar",25),J.TgZ(45,"div",26),J.TgZ(46,"small"),J._uU(47," \xa9 Global Symbols CIC "),J.qZA(),J.qZA(),J.qZA()),2&e&&(J.xp6(1),J.Q6J("even",!1),J.xp6(5),J.Q6J("ngSwitch",t.signedIn),J.xp6(1),J.Q6J("ngSwitchCase",!0),J.xp6(1),J.Q6J("ngSwitchCase",!1),J.xp6(1),J.Q6J("ngIf",t.signedIn),J.xp6(1),J.Q6J("even",!0),J.xp6(5),J.Q6J("even",!1),J.xp6(5),J.Q6J("even",!0),J.xp6(5),J.Q6J("even",!1),J.xp6(5),J.Q6J("even",!0),J.xp6(5),J.Q6J("even",!1),J.xp6(5),J.Q6J("ngSwitch",t.signedIn),J.xp6(1),J.Q6J("ngSwitchCase",!0),J.xp6(1),J.Q6J("ngSwitchCase",!1),J.xp6(1),J.Q6J("ngIf",t.signedIn))},directives:[_,G.lW,k.RF,k.n9,k.O5,I.Ye,B.yH,O.rH],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:40rem;bottom:0;left:0;right:0}.container[_ngcontent-%COMP%]{font-size:1.2rem;padding:0 2rem}p[_ngcontent-%COMP%]{line-height:1.8rem}.button-lg[_ngcontent-%COMP%]{font-size:1.2rem;line-height:3rem;padding:0 32px}"]}),$}(),ee=D(22797),te=D(77154),ae=D(52309),ne=D(87672),oe=[{path:"",component:V,pathMatch:"full"}],ie=((K=function e(){Q(this,e)}).\u0275fac=function(e){return new(e||K)},K.\u0275mod=J.oAB({type:K}),K.\u0275inj=J.cJS({imports:[[k.ez,O.Bz.forChild(oe),ee.QW,G.ot,te.o9,ae.N6,ne.Cq,I.g0]]}),K)}}])}();