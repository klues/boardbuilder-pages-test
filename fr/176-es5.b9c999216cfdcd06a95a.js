!function(){var e,t,n,c,a;function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}(self.webpackChunkboardbuilder=self.webpackChunkboardbuilder||[]).push([[176],{93176:function(u,s,l){"use strict";l.r(s),l.d(s,{AuthModule:function(){return T}});var f=l(61116),g=l(33464),b=l(35366),d=l(3796),p=l(22797),h=l(87672),v=l(84369),m=l(35965);function y(e,t){1&e&&(b.TgZ(0,"mat-card-content",5),b._UZ(1,"mat-spinner",6),b.TgZ(2,"p",0),b.SDv(3,7),b.qZA(),b.qZA())}function Z(e,t){if(1&e){var n=b.EpF();b.ynx(0),b.TgZ(1,"button",10),b.NdJ("click",function(){return b.CHM(n),b.oxw(2).login()}),b.SDv(2,11),b.qZA(),b.BQk()}}function A(e,t){1&e&&(b.ynx(0),b.TgZ(1,"button",12),b.SDv(2,13),b.qZA(),b.BQk())}function x(e,t){if(1&e&&(b.ynx(0),b.TgZ(1,"mat-card-content",0),b.TgZ(2,"p"),b.SDv(3,8),b.qZA(),b.TgZ(4,"p"),b.SDv(5,9),b.qZA(),b.qZA(),b.TgZ(6,"mat-card-actions",0),b.YNc(7,Z,3,0,"ng-container",4),b.ALo(8,"async"),b.YNc(9,A,3,0,"ng-container",4),b.ALo(10,"async"),b.qZA(),b.BQk()),2&e){var n=b.oxw();b.xp6(7),b.Q6J("ngIf",!b.lcZ(8,2,n.canActivateProtectedRoutes)),b.xp6(2),b.Q6J("ngIf",b.lcZ(10,4,n.canActivateProtectedRoutes))}}var k,S=function(){var u=function(){function e(t,n){var c=this;i(this,e),this.authService=t,this.router=n,this.isDoneLoading=this.authService.isDoneLoading$,this.canActivateProtectedRoutes=this.authService.canActivateProtectedRoutes$,this.subscription=this.authService.canActivateProtectedRoutes$.subscribe(function(e){e&&c.router.navigate(["/","boardsets"])})}var t,n,c;return t=e,(n=[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"login",value:function(){this.authService.login()}}])&&r(t.prototype,n),c&&r(t,c),e}();return u.\u0275fac=function(e){return new(e||u)(b.Y36(d.e),b.Y36(g.F0))},u.\u0275cmp=b.Xpm({type:u,selectors:[["app-login"]],decls:7,vars:6,consts:function(){return[[1,"mt-3"],["mat-card-image","",1,"bg-primary","text-center","py-2"],["src","assets/images/navbar-logo.svg","alt","Global Symbols Board Builder",2,"max-height","1rem"],["class","py-2 text-center",4,"ngIf"],[4,"ngIf"],[1,"py-2","text-center"],[2,"margin","0 auto"],"V\xE9rification de votre compte\u2026","Utilisez Board Builder pour cr\xE9er des cartes de communication.","Tout est enregistr\xE9 sur votre compte Global Symbols.",["fxFlex","","mat-flat-button","","color","primary",3,"click"],"Connectez-vous avec des symboles globaux",["fxFlex","","mat-flat-button","","color","primary","routerLink","boardsets"],"continuer"]},template:function(e,t){1&e&&(b.TgZ(0,"mat-card",0),b.TgZ(1,"div",1),b._UZ(2,"img",2),b.qZA(),b.YNc(3,y,4,0,"mat-card-content",3),b.ALo(4,"async"),b.YNc(5,x,11,6,"ng-container",4),b.ALo(6,"async"),b.qZA()),2&e&&(b.xp6(3),b.Q6J("ngIf",!b.lcZ(4,2,t.isDoneLoading)),b.xp6(2),b.Q6J("ngIf",b.lcZ(6,4,t.isDoneLoading)))},directives:[p.a8,p.G2,f.O5,p.dn,h.$g,p.hq,v.lW,m.yH,g.rH],pipes:[f.Ov],styles:[""]}),u}(),L=l(77154),q=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"",children:[{path:"login",component:S}]}],T=((k=function e(){i(this,e)}).\u0275fac=function(e){return new(e||k)},k.\u0275mod=b.oAB({type:k}),k.\u0275inj=b.cJS({imports:[[f.ez,g.Bz.forChild(q),p.QW,h.Cq,L.o9,v.ot]]}),k)}}])}();