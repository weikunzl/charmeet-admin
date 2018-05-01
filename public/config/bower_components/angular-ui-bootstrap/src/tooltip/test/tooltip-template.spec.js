describe("tooltip template",function(){function e(e,t){e.trigger(t),e.scope().$$childTail.$digest()}var t,o,n,i,p,l;beforeEach(module("ui.bootstrap.tooltip")),beforeEach(module("uib/template/tooltip/tooltip-template-popup.html")),beforeEach(inject(function(e){e.put("myUrl",[200,"<span>{{ myTemplateText }}</span>",{}])})),beforeEach(inject(function(e,c,s){l=s,o=angular.element('<div><span uib-tooltip-template="templateUrl">Selector Text</span></div>'),n=e,c(o)(n),n.templateUrl="myUrl",n.$digest(),t=o.find("span"),i=t.scope(),p=i.$$childTail})),afterEach(function(){l.off("keypress")}),it("should open on mouseenter",inject(function(){e(t,"mouseenter"),expect(p.isOpen).toBe(!0),expect(o.children().length).toBe(2)})),it("should not open on mouseenter if templateUrl is empty",inject(function(){n.templateUrl=null,n.$digest(),e(t,"mouseenter"),expect(p.isOpen).toBe(!1),expect(o.children().length).toBe(1)})),it("should show updated text",inject(function(){n.myTemplateText="some text",e(t,"mouseenter"),expect(p.isOpen).toBe(!0),n.$digest(),expect(o.children().eq(1).text().trim()).toBe("some text"),n.myTemplateText="new text",n.$digest(),expect(o.children().eq(1).text().trim()).toBe("new text")})),it("should hide tooltip when template becomes empty",inject(function(i){e(t,"mouseenter"),expect(p.isOpen).toBe(!0),n.templateUrl="",n.$digest(),expect(p.isOpen).toBe(!1),i.flush(),expect(o.children().length).toBe(1)}))});