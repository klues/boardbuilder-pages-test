(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[91],{75091:function(e,t,a){"use strict";a.r(t),a.d(t,{HomeModule:function(){return Q},routes:function(){return z}});var n=a(61116),o=a(35366),i=a(3796),c=a(33464),r=a(98508),s=a(35965);function l(e,t){if(1&e&&(o.TgZ(0,"h1"),o._uU(1),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Oqu(e.heading)}}function d(e,t){if(1&e&&(o.TgZ(0,"h2"),o._uU(1),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Oqu(e.heading)}}const g=["*"];let f=(()=>{class e{constructor(){this.headingType="h2"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home-panel"]],inputs:{even:"even",headingType:"headingType",heading:"heading",imageUrl:"imageUrl"},ngContentSelectors:g,decls:8,vars:6,consts:[["fxLayout","row","fxLayout.xs","column","fxLayoutGap","40px","fxLayoutAlign","space-between center",1,"panel"],["fxFlex","45","fxFlex.sm","50","fxFlex.xs",""],[3,"ngSwitch"],[4,"ngSwitchCase"],["fxFlex","55","fxFlex.sm","50","fxFlex.xs","",3,"fxFlexOrder.gt-sm"],[3,"src","alt"]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.ynx(2,2),o.YNc(3,l,2,1,"h1",3),o.YNc(4,d,2,1,"h2",3),o.BQk(),o.Hsn(5),o.qZA(),o.TgZ(6,"div",4),o._UZ(7,"img",5),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngSwitch",t.headingType),o.xp6(1),o.Q6J("ngSwitchCase","h1"),o.xp6(1),o.Q6J("ngSwitchCase","h2"),o.xp6(2),o.Q6J("fxFlexOrder.gt-sm",t.even?-1:0),o.xp6(1),o.Q6J("src",t.imageUrl,o.LSH)("alt",t.heading))},directives:[s.xw,s.SQ,s.Wh,s.yH,n.RF,n.n9,s.r7],styles:[".panel[_ngcontent-%COMP%]{margin-bottom:2rem!important}.panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}h1[_ngcontent-%COMP%]{font-size:3rem;line-height:3.2rem}h2[_ngcontent-%COMP%]{font-weight:400;padding-bottom:.83em;border-bottom:2px solid #006aba}"]}),e})();var b=a(84369),m=a(37112);function p(e,t){1&e&&(o.ynx(0),o.SDv(1,27),o.BQk())}function h(e,t){1&e&&(o.ynx(0),o.SDv(1,28),o.BQk())}const u=function(){return["/","media"]};function y(e,t){1&e&&(o.TgZ(0,"button",29),o.SDv(1,30),o.qZA()),2&e&&o.Q6J("routerLink",o.DdM(1,u))}function x(e,t){1&e&&(o.ynx(0),o.SDv(1,31),o.BQk())}function v(e,t){1&e&&(o.ynx(0),o.SDv(1,32),o.BQk())}function Z(e,t){1&e&&(o.TgZ(0,"button",29),o.SDv(1,33),o.qZA()),2&e&&o.Q6J("routerLink",o.DdM(1,u))}let S=(()=>{class e{constructor(e,t,a){this.authService=e,this.router=t,this.toolbarService=a,this.panelId=0,this.isDoneLoading=this.authService.isDoneLoading$,this.canActivateProtectedRoutes=this.authService.canActivateProtectedRoutes$,this.authService.canActivateProtectedRoutes$.subscribe(e=>this.signedIn=e)}login(){this.authService.login()}getStarted(){this.signedIn?this.router.navigate(["/","boardsets"]):this.authService.login()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(i.e),o.Y36(c.F0),o.Y36(r.O))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home"]],decls:48,vars:15,consts:function(){let e,t,a,n,o,i,c,r,s,l,d,g,f,b,m,p,h,u,y,x,v,Z,S,w,T,A,q;return e="\u041A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435 \u0442\u0430\u0431\u043B\u0435 \u043D\u0430 \u043B\u0430\u043A\u0448\u0438 \u043D\u0430\u0447\u0438\u043D",t="\u041D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u043A\u043E\u0458\u0435 \u045B\u0435 \u043F\u043E\u043C\u043E\u045B\u0438 \u0443 \u043A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0458\u0438 \u0441\u0430 \u0445\u0438\u0459\u0430\u0434\u0430\u043C\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0438\u0445 \u0441\u043B\u0438\u043A\u0430.",a="\u0421\u0432\u0435 \u0441\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E \u0441\u043A\u043B\u0430\u0434\u0438\u0448\u0442\u0438 \u043D\u0430 \u0432\u0430\u0448 \u043D\u0430\u043B\u043E\u0433 Global Symbols.",n="\u0417\u0430\u043F\u043E\u0447\u043D\u0438\u0442\u0435 \u0441\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0448\u043A\u043E\u043C \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438 \u0440\u0430\u0441\u043F\u043E\u0440\u0435\u0434",o="\u0411\u0440\u0437\u043E \u043F\u0440\u0432\u0438 \u043A\u043E\u0440\u0430\u0446\u0438 \u0441\u0430 \u043D\u0430\u0448\u043E\u043C \u043A\u043E\u043B\u0435\u043A\u0446\u0438\u0458\u043E\u043C \u0437\u0433\u043E\u0434\u043D\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0430\u043A\u0430.",i="\u0423\u0432\u0435\u043A \u0438\u043C\u0430\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0443 \u0434\u0430 \u043F\u0440\u0438\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u043F\u043E\u0440\u0435\u0434 \u0438\u0437\u0432\u0430\u043D \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0430\u043A\u0430.",c="\u041F\u0440\u0435\u0442\u0440\u0430\u0436\u0438\u0442\u0435 \u0445\u0438\u0459\u0430\u0434\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0438\u0445 \u0441\u043B\u0438\u043A\u0430 \u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0435",r="\u0411\u0440\u0437\u043E \u043F\u0440\u043E\u043D\u0430\u0452\u0438\u0442\u0435 \u0441\u0438\u043C\u0431\u043E\u043B\u0435 \u043A\u043E\u0458\u0438 \u0441\u0443 \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0438 \u043F\u0440\u0435\u0442\u0440\u0430\u0436\u0438\u0432\u0430\u045A\u0435\u043C \u0445\u0438\u0459\u0430\u0434\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0438\u0445 \u0441\u043B\u0438\u043A\u0430 \u0438\u0437 \u043F\u043E\u043F\u0443\u043B\u0430\u0440\u043D\u0438\u0445 \u0441\u043A\u0443\u043F\u043E\u0432\u0430 \u0441\u0438\u043C\u0431\u043E\u043B\u0430 \u043D\u0430 \u0413\u043B\u043E\u0431\u0430\u043B\u0421y\u043C\u0431\u043E\u043B\u0441\u0443.",s="\u0423\u0441\u043A\u043B\u0430\u0434\u0438\u0448\u0442\u0438\u0442\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0458\u0435 \u0438 \u0441\u043B\u0438\u043A\u0435 \u0443 \u0411\u043E\u0430\u0440\u0434\u0411\u0443\u0438\u043B\u0434\u0435\u0440 \u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0438\u0445 \u043D\u0430 \u0441\u0432\u043E\u0458\u0438\u043C \u0434\u0430\u0441\u0430\u043A\u0430\u043C\u0430.",l="\u041A\u043E\u043C\u0443\u043D\u0438\u0446\u0438\u0440\u0430\u0458 \u0441\u0430 \u0431\u043E\u0458\u043E\u043C \u0438 \u0458\u043E\u0448 \u043C\u043D\u043E\u0433\u043E \u0442\u043E\u0433\u0430",d="\u041A\u0440\u043E\u0458\u0438\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u0441\u0430 \u043E\u043C\u0438\u0459\u0435\u043D\u0438\u043C \u0431\u043E\u0458\u0430\u043C\u0430 \u0438 \u0436\u0435\u0459\u0435\u043D\u0438\u043C \u0444\u043E\u043D\u0442\u043E\u0432\u0438\u043C\u0430.",g="\u041B\u0430\u043A\u043E \u043F\u043E\u043D\u043E\u0432\u043E \u0440\u0430\u0441\u043F\u043E\u0440\u0435\u0434\u0438\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u0438 \u043F\u043E\u0432\u0435\u0436\u0438\u0442\u0435 \u0441\u0435 \u0438\u0437\u043C\u0435\u0452\u0443 \u0442\u0430\u0431\u043B\u0438 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u043A\u0440\u0435\u0438\u0440\u0430\u043B\u0438 \u043A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435 \u043A\u045A\u0438\u0433\u0435.",f="\u041A\u0440\u0435\u0438\u0440\u0430\u045A\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438\u0445 \u0441\u0438\u043C\u0431\u043E\u043B\u0430",b="\u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0435 \u0441\u0438\u043C\u0431\u043E\u043B\u0435 \u0437\u0430 \u043D\u0435\u043A\u043E\u043B\u0438\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u043A\u043E\u043C\u0431\u0438\u043D\u0443\u0458\u0443\u045B\u0438 \u043E\u0431\u043B\u0438\u043A\u0435, \u0442\u0435\u043A\u0441\u0442, \u0441\u0438\u043C\u0431\u043E\u043B\u0435, \u043F\u0430 \u0447\u0430\u043A \u0438 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0435 \u0441\u043B\u0438\u043A\u0435.",m="\u0421\u0430\u0432\u0440\u0448\u0435\u043D\u043E \u0437\u0430 \u043E\u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0430 \u043A\u0430\u0434\u0430 \u0442\u0438 \u0442\u0440\u0435\u0431\u0430 \u043D\u0435\u0448\u0442\u043E \u043C\u0430\u043B\u043E \u0434\u0440\u0443\u0433\u0430\u0447\u0438\u0458\u0435.",p="\u041F\u0440\u0435\u0443\u0437\u0438\u043C\u0430\u045A\u0435 , \u0448\u0442\u0430\u043C\u043F\u0430\u045A\u0435 \u0438 \u0434\u0435\u0459\u0435\u045A\u0435",h="\u0411\u0440\u0437\u043E \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0443\u0458\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u0443 \u041F\u0414\u0424 \u043A\u0430\u043A\u043E \u0431\u0438 \u0441\u0435 \u043B\u0430\u043A\u043E \u0434\u0435\u043B\u0438\u043B\u0435 \u0441\u0430 \u0431\u0438\u043B\u043E \u043A\u0438\u043C.",u="\u041E\u0434\u0448\u0442\u0430\u043C\u043F\u0430\u0458\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u0436\u0435\u0459\u0435\u043D\u0435 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0435 \u043F\u0430\u043F\u0438\u0440\u0430, \u0443\u0432\u0435\u0437\u0438\u0442\u0435 \u0438 \u0438\u0437\u0432\u0435\u0437\u0438\u0442\u0435 \u0442\u0430\u0431\u043B\u0435 \u0443 \u041E\u0411\u0424 \u0438 \u041E\u0411\u0417 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043C\u0430.",y="\u041F\u0440\u0432\u0438 \u043A\u043E\u0440\u0430\u0446\u0438",x="\u0411\u043E\u0430\u0440\u0434\u0411\u0443\u0438\u043B\u0434\u0435\u0440 \u0441\u043A\u043B\u0430\u0434\u0438\u0448\u0442\u0438 \u0441\u0432\u0435 \u0443 \u0432\u0430\u0448\u0435\u043C \u043D\u0430\u043B\u043E\u0433\u0443 \u0437\u0430 \u0433\u043B\u043E\u0431\u0430\u043B\u043D\u0435 \u0441\u0438\u043C\u0431\u043E\u043B\u0435.",v="\u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u043D\u0430\u043B\u043E\u0433 \u0430\u043A\u043E \u0433\u0430 \u0432\u0435\u045B \u043D\u0435\u043C\u0430\u0442\u0435.",Z="\u041C\u043E\u0458\u0438 \u0441\u043A\u0443\u043F\u043E\u0432\u0438 \u0442\u0430\u0431\u043B\u0438",S="\u041F\u0440\u0432\u0438 \u043A\u043E\u0440\u0430\u0446\u0438",w="\u041C\u043E\u0458\u0438 \u0441\u0438\u043C\u0431\u043E\u043B\u0438",T="\u041C\u043E\u0458\u0438 \u0441\u043A\u0443\u043F\u043E\u0432\u0438 \u0442\u0430\u0431\u043B\u0438",A="\u041F\u0440\u0432\u0438 \u043A\u043E\u0440\u0430\u0446\u0438",q="\u041C\u043E\u0458\u0438 \u0441\u0438\u043C\u0431\u043E\u043B\u0438",[[1,"container",2,"max-width","1000px"],["heading",e,"imageUrl","assets/images/home/main.svg","headingType","h1",3,"even"],t,a,["mat-flat-button","","color","primary",1,"button-lg","mb-1","mr-1",3,"ngSwitch","click"],[4,"ngSwitchCase"],["mat-flat-button","","color","primary","class","button-lg mb-1",3,"routerLink",4,"ngIf"],["heading",n,"imageUrl","assets/images/home/templates.svg",3,"even"],o,i,["heading",c,"imageUrl","assets/images/home/search-images.svg",3,"even"],r,s,["heading",l,"imageUrl","assets/images/home/colour.svg",3,"even"],d,g,["heading",f,"imageUrl","assets/images/home/symbol-creator.svg",3,"even"],b,m,["heading",p,"imageUrl","assets/images/home/pdf-and-print.svg",3,"even"],h,u,["heading",y,"imageUrl","assets/images/home/get-started.svg",3,"even"],x,v,["color","primary"],["fxFlex","",1,"text-center"],Z,S,["mat-flat-button","","color","primary",1,"button-lg","mb-1",3,"routerLink"],w,T,A,q]},template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"app-home-panel",1),o.TgZ(2,"p"),o.SDv(3,2),o.qZA(),o.TgZ(4,"p"),o.SDv(5,3),o.qZA(),o.TgZ(6,"button",4),o.NdJ("click",function(){return t.getStarted()}),o.YNc(7,p,2,0,"ng-container",5),o.YNc(8,h,2,0,"ng-container",5),o.qZA(),o.YNc(9,y,2,2,"button",6),o.qZA(),o.TgZ(10,"app-home-panel",7),o.TgZ(11,"p"),o.SDv(12,8),o.qZA(),o.TgZ(13,"p"),o.SDv(14,9),o.qZA(),o.qZA(),o.TgZ(15,"app-home-panel",10),o.TgZ(16,"p"),o.SDv(17,11),o.qZA(),o.TgZ(18,"p"),o.SDv(19,12),o.qZA(),o.qZA(),o.TgZ(20,"app-home-panel",13),o.TgZ(21,"p"),o.SDv(22,14),o.qZA(),o.TgZ(23,"p"),o.SDv(24,15),o.qZA(),o.qZA(),o.TgZ(25,"app-home-panel",16),o.TgZ(26,"p"),o.SDv(27,17),o.qZA(),o.TgZ(28,"p"),o.SDv(29,18),o.qZA(),o.qZA(),o.TgZ(30,"app-home-panel",19),o.TgZ(31,"p"),o.SDv(32,20),o.qZA(),o.TgZ(33,"p"),o.SDv(34,21),o.qZA(),o.qZA(),o.TgZ(35,"app-home-panel",22),o.TgZ(36,"p"),o.SDv(37,23),o.qZA(),o.TgZ(38,"p"),o.SDv(39,24),o.qZA(),o.TgZ(40,"button",4),o.NdJ("click",function(){return t.getStarted()}),o.YNc(41,x,2,0,"ng-container",5),o.YNc(42,v,2,0,"ng-container",5),o.qZA(),o.YNc(43,Z,2,2,"button",6),o.qZA(),o.qZA(),o.TgZ(44,"mat-toolbar",25),o.TgZ(45,"div",26),o.TgZ(46,"small"),o._uU(47," \xa9 Global Symbols CIC "),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(1),o.Q6J("even",!1),o.xp6(5),o.Q6J("ngSwitch",t.signedIn),o.xp6(1),o.Q6J("ngSwitchCase",!0),o.xp6(1),o.Q6J("ngSwitchCase",!1),o.xp6(1),o.Q6J("ngIf",t.signedIn),o.xp6(1),o.Q6J("even",!0),o.xp6(5),o.Q6J("even",!1),o.xp6(5),o.Q6J("even",!0),o.xp6(5),o.Q6J("even",!1),o.xp6(5),o.Q6J("even",!0),o.xp6(5),o.Q6J("even",!1),o.xp6(5),o.Q6J("ngSwitch",t.signedIn),o.xp6(1),o.Q6J("ngSwitchCase",!0),o.xp6(1),o.Q6J("ngSwitchCase",!1),o.xp6(1),o.Q6J("ngIf",t.signedIn))},directives:[f,b.lW,n.RF,n.n9,n.O5,m.Ye,s.yH,c.rH],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:40rem;bottom:0;left:0;right:0}.container[_ngcontent-%COMP%]{font-size:1.2rem;padding:0 2rem}p[_ngcontent-%COMP%]{line-height:1.8rem}.button-lg[_ngcontent-%COMP%]{font-size:1.2rem;line-height:3rem;padding:0 32px}"]}),e})();var w=a(22797),T=a(77154),A=a(52309),q=a(87672);const z=[{path:"",component:S,pathMatch:"full"}];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,c.Bz.forChild(z),w.QW,b.ot,T.o9,A.N6,q.Cq,m.g0]]}),e})()}}]);