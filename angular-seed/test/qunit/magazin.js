
var injector = angular.injector(['ng', 'magazineApp']);
module("The magazine application, ", {
  setup: function () {
                debugger;
                this.$scope = injector.get('$rootScope').$new();
              },
  teardown: function () { }
});

//test("as already mentioned, should show elements and steps in the sidebar on the left", function(){
//  ok($('#elementList').length > 0, "Elements present");
//  ok($('#stepList').length > 0, "Steps present");
//});

asyncTest("as already mentioned, should allow element content to be vertically scrolled", function () {
  //browser.element('#elementList li:eq(1)').click();
  var $compile = injector.get('$compile');
  $compile('<div id="index"></div><div id="content"></div><div ng-controller="asyncQUnitController"><x-page-navigator id="guidelineNavigator" indexId="#index" contentId="#content" bookmark="1" scrollX="0" scrollY="0" qunitCB="navigatorScrollDownTest"></x-page-navigator></div>')(this.$scope);
  //var browser = injector.get('$browser');
  //ok(element.attr("page") === "foo", "we're accessing the Angular DOM via a scenario");
  //using('.doc-example-live').element(':button:first').click();
  //element('#contentNavigationMenu a:last').click();
  //angular.element("#elementList li:eq(1)").click();
  //$('#elementList li:eq(1)').trigger("click");
  //angular.element("#content").scrollTo
  //$("#content").stop().scrollTo({ top: "100%", left: "0%"}, 1000);
  //ok(angular.element("#content").attr("scrollTop") > 0, "Content can scroll vertically");
});

//test("as already mentioned, should allow step content to be vertically scrolled", function () {
//  ok(true === true, "this test passes");
//});

//test("as already mentioned, a flick to the left should show next element", function () {
//  ok(true === true, "this test passes");
//});

//test("as already mentioned, a flick to the right should show previous element", function () {
//  ok(true === true, "this test passes");
//});

//test("as already mentioned, pictures should be shown in a popup gallery", function () {
//  ok(true === true, "this test passes");
//});

//test("as already mentioned, should show reference information in a pop-up box", function () {
//  ok(true === true, "this test passes");
//});

//asyncTest("as already mentioned, should provide a gallery viewer (marked up section tag) for viewing the pictures on the page", function () {
//  debugger;
//  var $compile = injector.get('$compile');
//  var testMarkupWithXGalleryViewerDirective = '<section x-gallery-viewer ng-controller="asyncQUnitController" qunitCB="galleryViewerTest"></section>';
//  $compile(testMarkupWithXGalleryViewerDirective)(this.$scope);
//});

//asyncTest("as already mentioned, should select gallery items (marked up image tags) for display in the gallery viewer", function () {
//  debugger;
//  var $compile = injector.get('$compile');
//  var testMarkupWithXGalleryItemDirective = '<div ng-controller="asyncQUnitController"><x-gallery-item src="/angular-seed/app/img/gallery/sectorFood.jpg" qunitCB="galleryItemTest"></x-gallery-item></div>';
//  $compile(testMarkupWithXGalleryItemDirective)(this.$scope);
//});