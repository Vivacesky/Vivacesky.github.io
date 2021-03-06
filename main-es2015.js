(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h1>Furkan Pinar</h1>\r\n    <h5 class=\"ml-3\">Application Developer</h5>\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n      <p>\r\n        Hoi! Welkom op mijn blog van mijn internationale stage in Rotterdam. Ik\r\n        ben Furkan Pinar. Ik studeer toegepaste informatica aan de Hogeschool\r\n        PXL. Als afstudeer richting heb ik gekozen voor applicatieontwikkeling\r\n        (web and mobile).\r\n      </p>\r\n      <P>\r\n        Voor meer informatie of vragen kan je mij bereiken via LinkedIn.\r\n      </P>\r\n      <a href=\"https://www.linkedin.com/in/furkanpinar9/\">\r\n        <i class=\"fab fa-linkedin\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-masthead></app-masthead>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<hr />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\r\n<div class=\"row\">\r\n  <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as\r\n      possible!</p>\r\n    <form name=\"sentMessage\" id=\"contactForm\" novalidate>\r\n      <div class=\"control-group\">\r\n        <div class=\"form-group floating-label-form-group controls\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"name\" required\r\n            data-validation-required-message=\"Please enter your name.\">\r\n          <p class=\"help-block text-danger\"></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"control-group\">\r\n        <div class=\"form-group floating-label-form-group controls\">\r\n          <label>Email Address</label>\r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" id=\"email\" required\r\n            data-validation-required-message=\"Please enter your email address.\">\r\n          <p class=\"help-block text-danger\"></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"control-group\">\r\n        <div class=\"form-group col-xs-12 floating-label-form-group controls\">\r\n          <label>Phone Number</label>\r\n          <input type=\"tel\" class=\"form-control\" placeholder=\"Phone Number\" id=\"phone\" required\r\n            data-validation-required-message=\"Please enter your phone number.\">\r\n          <p class=\"help-block text-danger\"></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"control-group\">\r\n        <div class=\"form-group floating-label-form-group controls\">\r\n          <label>Message</label>\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Message\" id=\"message\" required\r\n            data-validation-required-message=\"Please enter a message.\"></textarea>\r\n          <p class=\"help-block text-danger\"></p>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div id=\"success\"></div>\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" id=\"sendMessageButton\">Send</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center; margin-bottom: 12px; color: lightslategray;\">\r\n  Recente Posts\r\n</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n    <div *ngFor=\"let post of posts\">\r\n      <app-preview-post [post]=\"post\"></app-preview-post>\r\n      <hr />\r\n    </div>\r\n\r\n    <div class=\"clearfix\">\r\n      <a class=\"btn btn-secondary float-right pointer\" routerLink=\"/posts\">\r\n        Alle Posts &rarr;\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loading/loading.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loading/loading.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n        <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n        <span class=\"sr-only\">Loading...</span>    \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/masthead/masthead.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/masthead/masthead.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header\r\n  class=\"masthead\"\r\n  style=\"background-image: url('assets/images/home-bg.jpg')\"\r\n>\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"site-heading\">\r\n          <h1>Welkom op mijn blog</h1>\r\n          <span class=\"subheading\">Erasmus Internship @Rotterdam</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  navbar works!\r\n</p>\r\n<a routerLink=\"home\">Home</a> <br >\r\n<a routerLink=\"about\">About</a> <br >\r\n<a routerLink=\"contact\">Contact</a> <br >\r\n<a routerLink=\"posts\">Posts</a> <br > -->\r\n\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand pointer\" routerLink=\"home\">Furkan Pinar Blog</a>\r\n    <button\r\n      class=\"navbar-toggler navbar-toggler-right\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarResponsive\"\r\n      aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      Menu\r\n      <i class=\"fa fa-bars\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link pointer\" routerLink=\"home\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link pointer\" routerLink=\"about\">Over Mij</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link pointer\" routerLink=\"posts\">Posts</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/past-posts/past-posts.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/past-posts/past-posts.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\"></app-loading>\r\n<div class=\"row\" *ngIf=\"!loading\">\r\n  <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n    <h1 style=\"text-align: center; margin-bottom: 12px; color: lightslategray;\">\r\n      All Posts\r\n    </h1>\r\n    <br />\r\n    <div *ngFor=\"let post of posts\">\r\n      <app-preview-post [post]=\"post\"></app-preview-post>\r\n      <hr />\r\n    </div>\r\n    <!-- Pager -->\r\n\r\n    <!-- Home Button -->\r\n    <div>\r\n      <br />\r\n      <br />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preview-post/preview-post.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preview-post/preview-post.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\r\n  <a (click)=\"go()\" class=\"pointer\">\r\n    <h2 class=\"post-title\" [textContent]=\"post.title\">\r\n    </h2>\r\n    <h3 class=\"post-subtitle\">{{ post.content.length > 48 ? post.content.substring(0, 50)+\"...\" : post.content }}\r\n    </h3>\r\n  </a>\r\n  <p class=\" post-meta\">Posted by\r\n    <a href=\"#\" [textContent]=\"post.author\"></a>\r\n  </p>\r\n</div>\r\n<!--- .substring(0, 48) --->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-post/view-post.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-post/view-post.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n    <h1 [textContent]=\"post.title\"></h1>\r\n\r\n    <p class=\"post-content\" [textContent]=\"parts[0]\"></p>\r\n\r\n    <img class=\"d-block w-100\" [src]=\"post.img[0]\" />\r\n    <p class=\"post-content\" [textContent]=\"parts[1]\"></p>\r\n\r\n    <img class=\"d-block w-100\" [src]=\"post.img[1]\" />\r\n\r\n    <p class=\"post-content\" [textContent]=\"parts[2]\"></p>\r\n\r\n    <p style=\"color: grey; text-align: center;\" class=\"post-meta\">\r\n      <i>Posted by </i>\r\n      <i\r\n        ><a\r\n          href=\"#\"\r\n          style=\"color: grey; text-decoration: none;\"\r\n          [textContent]=\"post.author\"\r\n        ></a\r\n      ></i>\r\n    </p>\r\n  </div>\r\n  <!-- Pager -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-about",
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var src_app_past_posts_past_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/past-posts/past-posts.component */ "./src/app/past-posts/past-posts.component.ts");
/* harmony import */ var src_app_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view-post/view-post.component */ "./src/app/view-post/view-post.component.ts");







const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "about", component: src_app_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "posts", component: src_app_past_posts_past_posts_component__WEBPACK_IMPORTED_MODULE_5__["PastPostsComponent"] },
    { path: "post/:id", component: src_app_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_6__["ViewPostComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "angular-blog-new";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _past_posts_past_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./past-posts/past-posts.component */ "./src/app/past-posts/past-posts.component.ts");
/* harmony import */ var _view_post_view_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-post/view-post.component */ "./src/app/view-post/view-post.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masthead/masthead.component */ "./src/app/masthead/masthead.component.ts");
/* harmony import */ var _preview_post_preview_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./preview-post/preview-post.component */ "./src/app/preview-post/preview-post.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _past_posts_past_posts_component__WEBPACK_IMPORTED_MODULE_11__["PastPostsComponent"],
            _view_post_view_post_component__WEBPACK_IMPORTED_MODULE_12__["ViewPostComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_15__["MastheadComponent"],
            _preview_post_preview_post_component__WEBPACK_IMPORTED_MODULE_16__["PreviewPostComponent"],
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() { }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-contact",
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.year = new Date().getFullYear().toString();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_blog_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/blog-post.service */ "./src/app/service/blog-post.service.ts");




let HomeComponent = class HomeComponent {
    constructor(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.posts = this.postService.GetRecent();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/loading/loading.component.html"),
        styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/masthead/masthead.component.css":
/*!*************************************************!*\
  !*** ./src/app/masthead/masthead.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RoZWFkL21hc3RoZWFkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/masthead/masthead.component.ts":
/*!************************************************!*\
  !*** ./src/app/masthead/masthead.component.ts ***!
  \************************************************/
/*! exports provided: MastheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastheadComponent", function() { return MastheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MastheadComponent = class MastheadComponent {
    constructor() { }
    ngOnInit() {
    }
};
MastheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-masthead',
        template: __webpack_require__(/*! raw-loader!./masthead.component.html */ "./node_modules/raw-loader/index.js!./src/app/masthead/masthead.component.html"),
        styles: [__webpack_require__(/*! ./masthead.component.css */ "./src/app/masthead/masthead.component.css")]
    })
], MastheadComponent);



/***/ }),

/***/ "./src/app/models/blog-post.ts":
/*!*************************************!*\
  !*** ./src/app/models/blog-post.ts ***!
  \*************************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
class BlogPost {
    //assign vals from json to properties
    constructor(id, content, title, image) {
        this._id = id;
        this.content = content;
        this.title = title;
        this.author = "Furkan";
        this.img = image;
    }
}
BlogPost.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() { }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/past-posts/past-posts.component.css":
/*!*****************************************************!*\
  !*** ./src/app/past-posts/past-posts.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3QtcG9zdHMvcGFzdC1wb3N0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/past-posts/past-posts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/past-posts/past-posts.component.ts ***!
  \****************************************************/
/*! exports provided: PastPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastPostsComponent", function() { return PastPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_blog_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog-post.service */ "./src/app/service/blog-post.service.ts");



let PastPostsComponent = class PastPostsComponent {
    constructor(postService) {
        this.postService = postService;
        this.loading = false;
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.posts = this.postService.GetPosts();
    }
};
PastPostsComponent.ctorParameters = () => [
    { type: _service_blog_post_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"] }
];
PastPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-past-posts",
        template: __webpack_require__(/*! raw-loader!./past-posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/past-posts/past-posts.component.html"),
        styles: [__webpack_require__(/*! ./past-posts.component.css */ "./src/app/past-posts/past-posts.component.css")]
    })
], PastPostsComponent);



/***/ }),

/***/ "./src/app/preview-post/preview-post.component.css":
/*!*********************************************************!*\
  !*** ./src/app/preview-post/preview-post.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXctcG9zdC9wcmV2aWV3LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/preview-post/preview-post.component.ts":
/*!********************************************************!*\
  !*** ./src/app/preview-post/preview-post.component.ts ***!
  \********************************************************/
/*! exports provided: PreviewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPostComponent", function() { return PreviewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PreviewPostComponent = class PreviewPostComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    go() {
        this.router.navigateByUrl("/post/" + this.post._id);
    }
};
PreviewPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreviewPostComponent.prototype, "post", void 0);
PreviewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-preview-post",
        template: __webpack_require__(/*! raw-loader!./preview-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/preview-post/preview-post.component.html"),
        styles: [__webpack_require__(/*! ./preview-post.component.css */ "./src/app/preview-post/preview-post.component.css")]
    })
], PreviewPostComponent);



/***/ }),

/***/ "./src/app/service/blog-post.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/blog-post.service.ts ***!
  \**********************************************/
/*! exports provided: BlogPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostService", function() { return BlogPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_blog_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/blog-post */ "./src/app/models/blog-post.ts");



let BlogPostService = class BlogPostService {
    constructor() {
        this.blogs = [];
        this.blogs.push(new _models_blog_post__WEBPACK_IMPORTED_MODULE_2__["BlogPost"](0, "Hoi! Welkom op mijn eerste post van mijn internationale stage in Rotterdam. Mijn naam is Pinar Furkan. Ik studeer aan de hogeschool PXL. Ik studeer toegepaste informatica, met specialisatie in applicatieontwikkeling. Ik woon in een appartement in Schiedam dat mijn stagebedrijf verhuurt. Ik woon hier niet alleen, we zijn met een paar collega's. Samen met deze collega’s ga ik naar het kantoor in Rotterdam. ++ De eerste week kon ik de stad niet echt verkennen. Ik had geen vervoer. Ook had ik nog geen OV-chipkaart. Je kunt het vergelijken als een Buzzy Pazz als je niet weet wat een OV-chipkaart is. Een week geleden had ik eentje besteld naar mijn huis in België, maar is aangekomen toen ik al in Schiedam aankwam. Natuurlijk is dat heel stom. Als ik naar het centrum van Rotterdam zou willen gaan, moest ik ongeveer een uur wandelen, dus dat was totaal geen optie. ++ Hierbij, mijn eerste en waarschijnlijk de belangrijkste tip, weeg slim en bestel je OV-chipkaart twee weken voor je stage gaat beginnen. Als je een Nederlandse bankrekening hebt, dan hoef je geen zorgen te maken. Je kan het bestellen via het internet.", "Week 1. Welcome To Rotterdam", ["assets/images/schiedam.jpeg", "assets/images/willemswerf.jpeg"]));
        this.blogs.push(new _models_blog_post__WEBPACK_IMPORTED_MODULE_2__["BlogPost"](1, "Zoals je aan de titel kan zien ben ik tijdens de tweede week naar de bekerwestrijd geweest van Feyenoord. Het was een geweldige ervaring. Er vielen 8 goalen tijdens die nacht. Feyenoord heeft met 7 - 1 gewonnen tegen NAC Breda. Feyenoord gaat naar de finale tegen Utrecht. Ik ga proberen om een ticket te kopen om naar de finale te gaan.", "Week 2. Feyenoord 7 - 1 NAC Breda", [
            "assets/images/feyenoord1.jpeg",
            "assets/images/feyenoord2.jpeg",
            "assets/images/feyenoord3.jpeg"
        ]));
        this.blogs.push(new _models_blog_post__WEBPACK_IMPORTED_MODULE_2__["BlogPost"](2, "Ik was van plan om deze week naar Amsterdam te gaan, maar helaas is alles gesloten en niet aangeraden om naar toeristische plekken te gaan. Deze week ga ik niet veel kunnen doen :3 helaas.", "Week 3. Corona?!", ["assets/images/werk.jpeg", "assets/images/corona.jpeg"]));
        // this.blogs.push(
        //   new BlogPost(
        //     3,
        //     "fsdfsadfasdfsadfads",
        //     "fsadsfafsd",
        //     "assets/images/home-bg.jpg"
        //   )
        // );
        // this.blogs.push(
        //   new BlogPost(
        //     4,
        //     "fsdfsadfasdfsadfads",
        //     "fsadsfafsd",
        //     "assets/images/home-bg.jpg"
        //   )
        // );
    }
    GetRecent() {
        const blgs = [];
        blgs.push(this.blogs[this.blogs.length - 1]);
        return blgs;
    }
    GetPosts() {
        console.log(this.blogs);
        return this.blogs;
    }
    GetPost(id) {
        return this.blogs[id];
    }
};
BlogPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], BlogPostService);



/***/ }),

/***/ "./src/app/view-post/view-post.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-post/view-post.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcG9zdC92aWV3LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-post/view-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-post/view-post.component.ts ***!
  \**************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_blog_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/blog-post.service */ "./src/app/service/blog-post.service.ts");





let ViewPostComponent = class ViewPostComponent {
    constructor(route, router, postService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.loading = false;
    }
    ngOnInit() {
        this.getPost();
    }
    getPost() {
        const id = this.route.snapshot.paramMap.get("id");
        this.post = this.postService.GetPost(+id);
        this.parts = this.post.content.split("++");
    }
};
ViewPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"] }
];
ViewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-post",
        template: __webpack_require__(/*! raw-loader!./view-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-post/view-post.component.html"),
        styles: [__webpack_require__(/*! ./view-post.component.css */ "./src/app/view-post/view-post.component.css")]
    })
], ViewPostComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: {
        base: "http://localhost:3000/",
        entries: "entries"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\11700579\Desktop\Stage\Blog\clean-angular-blog-template\blog-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map