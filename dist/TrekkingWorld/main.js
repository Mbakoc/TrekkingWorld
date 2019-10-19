(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myVideo {\r\n    max-width: 100%;\r\n    max-height: 650 px;\r\n    margin: 0;\r\n  }\r\n  \r\n  .content {\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    padding: 20px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  h1{\r\n      color: rgb(35, 206, 134);\r\n      text-shadow: 1px 1px 2px rgb(70, 63, 63), 0 0 25px rgb(23, 181, 195), 0 0 5px rgb(20, 209, 35);\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .content {display: none;}\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUNBO01BQ0ksd0JBQXdCO01BQ3hCLDhGQUE4RjtFQUNsRzs7RUFDQTtJQUNFLFVBQVUsYUFBYSxDQUFDO0lBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDY1MCBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgY29sb3I6IHJnYigzNSwgMjA2LCAxMzQpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDcwLCA2MywgNjMpLCAwIDAgMjVweCByZ2IoMjMsIDE4MSwgMTk1KSwgMCAwIDVweCByZ2IoMjAsIDIwOSwgMzUpO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb250ZW50IHtkaXNwbGF5OiBub25lO31cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-flex\">\n  <video autoplay muted loop id=\"myVideo\">\n    <source src=\"./assets/slike/mountain_lake_time_lapse.mov\" type=\"video/mp4\">\n    Your browser does not support HTML5 video.\n  </video>\n  <div class=\"content\">\n    <h1>Trekking.com</h1>\n    <p>Hey guys, welcome to Trekking.com, Balkan’s biggest adventure travel blog</p>\n    <p>Thanks so much for swinging by our little corner of the internet. We’re so stoked\n       that you found our site and want to know a bit more about us. So grab your favourite drink, \n       pull up a chair and let us fill you in on just what the hell we are about.</p>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/allItems.ts":
/*!*****************************!*\
  !*** ./src/app/allItems.ts ***!
  \*****************************/
/*! exports provided: allItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allItems", function() { return allItems; });
var allItems = [
    { 'id': '0',
        'name': 'Forerunner® 735XT',
        'price': 225.99,
        'description': 'Be a better athlete today than you were yesterday with Forerunner 735XT. This GPS running watch with multisport features is for athletes who want dialed-in data for training and a lighter load on race day.',
        'url': '/assets/slike/sat.jpg'
    },
    { 'id': '1',
        'name': 'Salewa Wild Hiker MID Goretex',
        'price': 125.99,
        'description': 'The Wild Hiker Is A Flexible And Comfortable Hiking Boot Designed For Mixed Mountain Terrain.Its Versatile And Multifunctional Vibram Oban Outsole Provides An Optimal Balance Between Traction, Flexibility And Self-Cleaning Lugs For Superb Grip And Stability.',
        'url': '/assets/slike/cipele1.jpg'
    },
    { 'id': '2',
        'name': 'TRAIL BLITZ 12 - BACKPACK',
        'price': 39.95,
        'description': 'Whether you’re bagging the Grand Teton in a quick car-to-car push, heading into the mountains for a scramble up your favorite ridge, or simply looking for a no-frills day pack for a few days of travel, the Trail Blitz carries everything you need while remaining light and fast. Featuring our signature Blitz-style main opening for quick and easy access to your gear.',
        'url': '/assets/slike/backpack.jpg'
    },
    { 'id': '3',
        'name': 'ASTRO175',
        'price': 17.99,
        'description': 'Strong enough for any mountain pursuit and compact enough for backup or emergency use, the new Astro175 boasts a powerful beam at 175 lumens, yet is simple, sleek and affordable',
        'url': '/assets/slike/ceonalampa.jpg'
    },
    { 'id': '4',
        'name': 'HELIO ACTIVE SHELL - MEN',
        'price': 175.99,
        'description': 'An ultralight ski touring jacket, the Black Diamond Helio Active is the ultimate shell for fast and light mountain missions. Featuring Gore-Tex® Active technology, this 3-layer jacket is extremely breathable, yet durably waterproof and windproof, making it the ideal solution for high-intensity days in the backcountry',
        'url': '/assets/slike/trailjacket.jpg'
    },
    { 'id': '5',
        'name': 'Salomon X Ultra 3 Mid Goretex',
        'price': 125.99,
        'description': 'If you are one of those who prefers a high or medium cane trekking boot, the Salomon X Ultra 3 Mid Goretex is your perfect choice for maximum stability and control of the ankle. ',
        'url': '/assets/slike/cipele.jpg'
    },
    { 'id': '6',
        'name': 'CIRQUE SHELL - WOMEN',
        'price': 125.99,
        'description': 'The Cirque Shell is a versatile, three-season shell built for climbing and trekking. Featuring 4-way stretch, double-weave fabric that’s weather resistant, the Cirque Shell keeps you moving fast in the mountains',
        'url': '/assets/slike/WJacket.jpg'
    },
    { 'id': '7',
        'name': 'BD FORGED TEE - MEN',
        'price': 25.99,
        'description': 'Our equipment and apparel has stood the test of rugged ascents for decades and has forever forged its way to the top. Wear the organic cotton BD.Forged tee with pride. ',
        'url': '/assets/slike/T-shirt.jpg'
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.title = 'TrekkingWorld';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyCiE15ebsTtp0o5CfTtTXAfRcEETx-01i0",
            authDomain: "trekkingf-84b29.firebaseapp.com",
            projectId: "trekkingf-84b29"
        });
    };
    AppComponent.prototype.signOut = function () {
        this.authenticationService.signOutUser();
        this.router.navigate(['/signin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _galery_galery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./galery/galery.component */ "./src/app/galery/galery.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _itemdetails_itemdetails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./itemdetails/itemdetails.component */ "./src/app/itemdetails/itemdetails.component.ts");
/* harmony import */ var _home_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/introduction/introduction.component */ "./src/app/home/introduction/introduction.component.ts");
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/carousel/carousel.component */ "./src/app/home/carousel/carousel.component.ts");
/* harmony import */ var _home_video_video_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/video/video.component */ "./src/app/home/video/video.component.ts");
/* harmony import */ var _home_homegalery_homegalery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/homegalery/homegalery.component */ "./src/app/home/homegalery/homegalery.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _cartmini_cartmini_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cartmini/cartmini.component */ "./src/app/cartmini/cartmini.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _postblog_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _blog_blog_add_blog_add_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blog/blog-add/blog-add.component */ "./src/app/blog/blog-add/blog-add.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






































var appRoutes = [
    { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_12__["FrontpageComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"] },
    { path: 'blog-add', component: _blog_blog_add_blog_add_component__WEBPACK_IMPORTED_MODULE_35__["BlogAddComponent"] },
    { path: 'galery', component: _galery_galery_component__WEBPACK_IMPORTED_MODULE_16__["GaleryComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_17__["ShopComponent"] },
    { path: 'shoppingcart', component: _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingcartComponent"] },
    { path: 'itemdetails/:productId', component: _itemdetails_itemdetails_component__WEBPACK_IMPORTED_MODULE_22__["ItemdetailsComponent"] },
    { path: 'pagenotfound', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__["PagenotfoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_12__["FrontpageComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
                _galery_galery_component__WEBPACK_IMPORTED_MODULE_16__["GaleryComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_17__["ShopComponent"],
                _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingcartComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__["PagenotfoundComponent"],
                _itemdetails_itemdetails_component__WEBPACK_IMPORTED_MODULE_22__["ItemdetailsComponent"],
                _home_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_23__["IntroductionComponent"],
                _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__["CarouselComponent"],
                _home_video_video_component__WEBPACK_IMPORTED_MODULE_25__["VideoComponent"],
                _home_homegalery_homegalery_component__WEBPACK_IMPORTED_MODULE_26__["HomegaleryComponent"],
                _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_28__["NavComponent"],
                _cartmini_cartmini_component__WEBPACK_IMPORTED_MODULE_29__["CartminiComponent"],
                _blog_blog_add_blog_add_component__WEBPACK_IMPORTED_MODULE_35__["BlogAddComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_36__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_4__["Ng2CarouselamosModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBK_DYq58LvOhAG7q2uLVMAUg-EPSH-bxo'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"]
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_30__["AuthenticationService"], _postblog_service__WEBPACK_IMPORTED_MODULE_31__["PostblogService"], _shopping_service__WEBPACK_IMPORTED_MODULE_32__["ShoppingService"], _guard_service__WEBPACK_IMPORTED_MODULE_33__["GuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.registerTheUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/home']);
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthenticationService.prototype.logInUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/home']);
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthenticationService.prototype.returnToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthenticationService.prototype.registered = function () {
        return this.token != null;
    };
    AuthenticationService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut();
        this.token = null;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/blog-add/blog-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1hZGQvYmxvZy1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-add/blog-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-5\">\n  <div class=\"blog\"><button class=\"btn btn-info\" routerLink=\"/blog\">Back to blogs</button></div>\n  <hr/>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.id\">\n  <div class=\"form-group\">\n    <input name=\"title\" #title=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.title\" class=\"form-control\" placeholder=\"Full title\" required>\n    <div *ngIf=\"title.invalid && title.touched\" class=\"validation-error\">This field is required.</div>\n  </div>\n  <div class=\"form-group\">\n    <textarea name=\"content\" #content=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.content\" class=\"form-control\" placeholder=\"Content\"></textarea>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <input name=\"imageUrl\" #imageUrl=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.imageUrl\" class=\"form-control\" placeholder=\"Image\">\n    </div>\n    <div class=\"form-group  col-md-6\">\n      <input name=\"author\" #author=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.author\" class=\"form-control\" placeholder=\"Author\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">SUBMIT</button>\n  </div>\n\n</form>\n</div>\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading clearfix\">\n        <h4 class=\"pull-left\">Submit a Post</h4>\n        <button class=\"btn btn-primary pull-right\" style=\"margin-left: 3px;\"><i\n          class=\"glyphicon glyphicon-save\"></i> Submit\n        </button>\n        <a [routerLink]=\"['/blog']\" class=\"btn btn-default pull-right\"><i\n          class=\"glyphicon glyphicon-circle-arrow-left\"></i> Cancel </a>\n      </div>\n    </div>\n    <form class=\"form-horizontal\" (submit)=\"onSubmit(form)\" #form=\"ngForm\">\n      <div class=\"col-md-6 col-sm-8 col-sm-offset-2\">\n        <div class=\"form-group\">\n          <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.id\">\n          <label for=\"title\" class=\"col-lg-2 control-label\">Title</label>\n          <div class=\"col-lg-10\">\n            <input name=\"title\" #title=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.title\" class=\"form-control\" placeholder=\"Full title\" required>\n            <div *ngIf=\"title.invalid && title.touched\" class=\"validation-error\">This field is required.</div> \n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"content\" class=\"col-lg-2 control-label\">Content</label>\n          <div class=\"col-lg-10\">\n            <textarea name=\"content\" #content=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.content\" class=\"form-control\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"featuredImage\" class=\"col-lg-2 control-label\">Featured Image</label>\n          <div class=\"col-lg-10\">\n            <input name=\"imageUrl\" #imageUrl=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.imageUrl\" class=\"form-control\" >\n            <span class=\"help-block\">Add a URL of your image</span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"featuredImage\" class=\"col-lg-2 control-label\">Author</label>\n          <div class=\"col-lg-10\">\n            <input name=\"author\" #author=\"ngModel\" [(ngModel)]=\"postBlogService.blogs.author\" class=\"form-control\" >\n            <span class=\"help-block\">Add an author</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-2\">\n            <a type=\"reset\" class=\"btn btn-default\" routerLink=\"/posts\">Cancel</a>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>-->\n"

/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/blog-add/blog-add.component.ts ***!
  \*****************************************************/
/*! exports provided: BlogAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogAddComponent", function() { return BlogAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var BlogAddComponent = /** @class */ (function () {
    function BlogAddComponent(postBlogService, firestore) {
        this.postBlogService = postBlogService;
        this.firestore = firestore;
    }
    BlogAddComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    BlogAddComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.postBlogService.blogs = {
            id: null,
            title: '',
            content: '',
            imageUrl: '',
            author: ''
        };
    };
    BlogAddComponent.prototype.onSubmit = function (form) {
        var data = form.value;
        this.firestore.collection('blogs').add(data);
        this.resetForm(form);
    };
    BlogAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-add',
            template: __webpack_require__(/*! ./blog-add.component.html */ "./src/app/blog/blog-add/blog-add.component.html"),
            styles: [__webpack_require__(/*! ./blog-add.component.css */ "./src/app/blog/blog-add/blog-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_postblog_service__WEBPACK_IMPORTED_MODULE_2__["PostblogService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], BlogAddComponent);
    return BlogAddComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\nbutton{\r\n  position: relative;\r\n  float: right;\r\n}\r\nspan.s1 {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  font-size: 15rem;\r\n  font-weight: 800;\r\n  text-transform: uppercase;\r\n  color: #3C4447;\r\n}\r\nspan.s2 {\r\n  font-weight: 800;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  font-size: 15rem;\r\n  text-transform: uppercase;\r\n  color: #3C4447;\r\n}\r\n.row{\r\n  padding: 50px;\r\n}\r\n.card {\r\n  min-width: 200px;\r\n  margin-bottom: 1rem;\r\n  padding: 5px;\r\n  margin: 20px;\r\n  background-color: #FFF;\r\n  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n.card-img {\r\n  position: relative;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  max-height: 230px;\r\n  max-width: 500px;\r\n  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);\r\n\r\n}\r\n.card-title {\r\n  margin-bottom: 0.3rem;\r\n}\r\n.fa-users {\r\n  margin-left: 1rem;\r\n}\r\n.card-footer {\r\n  font-size: 0.8rem;\r\n}\r\ni{\r\n    padding: 5px;\r\n}\r\n#upload{\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFHdEIsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLGtEQUFrRDs7QUFFcEQ7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuc3Bhbi5zMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjM0M0NDQ3O1xyXG59XHJcblxyXG5zcGFuLnMyIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAxNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjM0M0NDQ3O1xyXG59XHJcbi5yb3d7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA5M3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDkzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDkzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLmNhcmQtaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIzMHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggOTNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA5M3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA5M3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG5cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxufVxyXG5cclxuLmZhLXVzZXJzIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5pe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiN1cGxvYWR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"add-blog\"><button class=\"btn btn-success\" routerLink=\"/blog-add\">Add the blog</button></div>\n    <div class=\"fond\"> <span class=\"s1\">blog </span><span class=\"s2\">card</span></div>\n  <div class=\"row\">  \n    <div class=\"col-md-10\" *ngFor=\"let blog of bloglist\">\n      <div class=\"card\">\n        <img class=\"card-img\" [src]=\"blog.imageUrl\" [alt]=\"blog.title\">\n        <div class=\"card-img-overlay\">\n         <!-- <a href=\"#\" class=\"btn btn-light btn-sm\">Read More</a>-->\n      </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{blog.title}}</h4>\n          <small class=\"text-muted cat\">\n            <i class=\"fas fa-globe-asia\"></i>Travel\n            <i class=\"fas fa-thumbs-up\"></i>Recomanded\n          </small>\n          <p class=\"card-text\">{{blog.content}}</p>\n          <a href=\"#\" class=\"btn btn-outline-info\">Read more</a>\n        </div>\n        <div class=\"card-footer text-muted d-flex justify-content-between bg-transparent border-top-0\">\n          <div class=\"views\"> {{blog.author}} Avg 20, 12:45PM\n          </div>\n          <div class=\"stats\">\n           \t<i class=\"far fa-eye\"></i> 87\n            <i class=\"far fa-comment\"></i>34\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _postblog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var BlogComponent = /** @class */ (function () {
    function BlogComponent(postBlogService, firestore) {
        this.postBlogService = postBlogService;
        this.firestore = firestore;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postBlogService.getBlogs().subscribe(function (res) {
            _this.bloglist = res.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_postblog_service__WEBPACK_IMPORTED_MODULE_2__["PostblogService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/cartmini/cartmini.component.css":
/*!*************************************************!*\
  !*** ./src/app/cartmini/cartmini.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-link {\r\n    top: 10px;\r\n    left: auto;\r\n    right: 0;\r\n    width: 300px;\r\n    background-color: white;\r\n    color :rgb(8, 8, 8);\r\n    border-radius: 3px;\r\n    padding: 2px;\r\n  }\r\n  a{\r\n      text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydG1pbmkvY2FydG1pbmkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtNQUNJLHFCQUFxQjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NhcnRtaW5pL2NhcnRtaW5pLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpbmsge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvciA6cmdiKDgsIDgsIDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuICBhe1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/cartmini/cartmini.component.html":
/*!**************************************************!*\
  !*** ./src/app/cartmini/cartmini.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"navbar-link\" routerLink=\"/cart\">\n  <span class=\"icon\">\n    <i class=\"fas fa-shopping-cart\"></i>\n    <!--<span class=\"badge badge-light\">Light{{ cartminiProducts.length }}</span>-->\n  </span>\n  Cart &nbsp; <span class=\"total\" *ngIf=\"cartminiProducts.length > 0\">\n    {{ cartminiProducts.length }}\n  </span>\n</a>\n"

/***/ }),

/***/ "./src/app/cartmini/cartmini.component.ts":
/*!************************************************!*\
  !*** ./src/app/cartmini/cartmini.component.ts ***!
  \************************************************/
/*! exports provided: CartminiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartminiComponent", function() { return CartminiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");



var CartminiComponent = /** @class */ (function () {
    function CartminiComponent(shopS) {
        this.shopS = shopS;
    }
    CartminiComponent.prototype.ngOnInit = function () {
        this.cartminiProducts = this.shopS.cart;
    };
    CartminiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartmini',
            template: __webpack_require__(/*! ./cartmini.component.html */ "./src/app/cartmini/cartmini.component.html"),
            styles: [__webpack_require__(/*! ./cartmini.component.css */ "./src/app/cartmini/cartmini.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], CartminiComponent);
    return CartminiComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: rgb(72, 126, 70);\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAxMjYsIDcwKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\">\n<footer class=\"page-footer font-small special-color-dark pt-4\">\n\n  <!-- Footer Elements -->\n  <div class=\"container\">\n\n    <!-- Social buttons -->\n    <ul class=\"list-unstyled list-inline text-center\">\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-fb mx-1\">\n          <i class=\"fab fa-facebook-f\"> </i>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-tw mx-1\">\n          <i class=\"fab fa-twitter\"> </i>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-gplus mx-1\">\n          <i class=\"fab fa-google-plus-g\"> </i>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-li mx-1\">\n          <i class=\"fab fa-linkedin-in\"> </i>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-dribbble mx-1\">\n          <i class=\"fab fa-dribbble\"> </i>\n        </a>\n      </li>\n    </ul>\n    <!-- Social buttons -->\n\n  </div>\n  <!-- Footer Elements -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a href=\"\">TrekkingWorld.com</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/frontpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/slike/frontpage.jpg) no-repeat;\r\n    background-size: cover;\r\n    min-height: 650px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n#text{\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: #F5F5F5;\r\n    text-align:center;\r\n    position: absolute;\r\n    text-align:center;\r\n    top: 55%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 5vw;\r\n    text-shadow: 1px 1px 2px black, 0 0 25px #008B8B, 0 0 5px #4682B4;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2Zyb250cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0VBQXNFO0lBQ3RFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsaUVBQWlFOztBQUVyRSIsImZpbGUiOiJzcmMvYXBwL2Zyb250cGFnZS9mcm9udHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvc2xpa2UvZnJvbnRwYWdlLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3RleHR7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNGNUY1RjU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdG9wOiA1NSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCAjMDA4QjhCLCAwIDAgNXB4ICM0NjgyQjQ7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/frontpage/frontpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n  <div class=\"col-md-12 col-sm-12\" id=\"text\">\n    <h1 id=\"text1\">Discover your limits</h1>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/frontpage/frontpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.ts ***!
  \**************************************************/
/*! exports provided: FrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontpageComponent", function() { return FrontpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrontpageComponent = /** @class */ (function () {
    function FrontpageComponent() {
    }
    FrontpageComponent.prototype.ngOnInit = function () {
    };
    FrontpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frontpage',
            template: __webpack_require__(/*! ./frontpage.component.html */ "./src/app/frontpage/frontpage.component.html"),
            styles: [__webpack_require__(/*! ./frontpage.component.css */ "./src/app/frontpage/frontpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrontpageComponent);
    return FrontpageComponent;
}());



/***/ }),

/***/ "./src/app/galery/galery.component.css":
/*!*********************************************!*\
  !*** ./src/app/galery/galery.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: rgba(132, 218, 62, 0.794);\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.row {\r\n    margin: 15px;\r\n}\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    transform: scale(0.92) rotate(-3deg);\r\n}\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    transform: scale(1.1) rotate(2deg);\r\n    box-shadow: 0 0 40px rgb(84, 248, 78);\r\n    \r\n}\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\nh1{\r\n    color: white;\r\n    text-shadow: 2px 2px 4px #acb1f3;\r\n}\r\nhr{\r\n    border-top: 1px solid whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsZXJ5L2dhbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7Ozs7QUFJdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQzs7QUFFcEM7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMscUNBQXFDOztBQUV6QztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZ2FsZXJ5L2dhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMyLCAyMTgsIDYyLCAwLjc5NCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi50aHVtYm5haWxze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHMgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbn1cclxuXHJcbi50aHVtYm5haWxzOmhvdmVyIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpIHJvdGF0ZSgtM2RlZyk7XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDJkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiKDg0LCAyNDgsIDc4KTtcclxuICAgIFxyXG59XHJcbiNncmlkMSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjYWNiMWYzO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/galery/galery.component.html":
/*!**********************************************!*\
  !*** ./src/app/galery/galery.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1>Trekking Image Galery</h1>\n  <hr/>\n</div>\n\n<div class=\"container\">\n  <div id=\"grid1\">\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking1.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking1.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking2.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking2.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking4.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking4.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking5.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking5.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking6.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking6.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking7.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking7.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking8.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking8.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking9.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking9.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking10.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking10.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking11.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking11.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking12.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking12.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking13.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking13.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking14.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking14.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking15.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking15.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking16.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking16.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/galery/galery.component.ts":
/*!********************************************!*\
  !*** ./src/app/galery/galery.component.ts ***!
  \********************************************/
/*! exports provided: GaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryComponent", function() { return GaleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaleryComponent = /** @class */ (function () {
    function GaleryComponent() {
    }
    GaleryComponent.prototype.ngOnInit = function () {
    };
    GaleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galery',
            template: __webpack_require__(/*! ./galery.component.html */ "./src/app/galery/galery.component.html"),
            styles: [__webpack_require__(/*! ./galery.component.css */ "./src/app/galery/galery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaleryComponent);
    return GaleryComponent;
}());



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");



var GuardService = /** @class */ (function () {
    function GuardService(authenticationService) {
        this.authenticationService = authenticationService;
    }
    GuardService.prototype.canActive = function (route, state) {
        return this.authenticationService.registered();
    };
    GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/home/carousel/carousel.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 100%;\r\n    margin: 5em auto;\r\n}\r\n.card{\r\n    text-align: center;\r\n    max-width: 500px;\r\n    height: 450px;\r\n}\r\n#left #right{\r\n    max-width: 50px;\r\n    margin: 30px;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .card{\r\n        width: 150px;\r\n        max-height: 320px;\r\n    }\r\n    .card-img-top{\r\n        height: 120px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDVlbSBhdXRvO1xyXG59XHJcbi5jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbn1cclxuI2xlZnQgI3JpZ2h0e1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div ng2-carouselamos class=\"slides-wrapper\"\n     [items]=\"items\"\n     [width]=\"500\"\n     [$prev]=\"prev\"\n     [$next]=\"next\"\n     [$item]=\"item\">\n  </div>\n  <ng-template #prev>\n      <img src=\"https://img.icons8.com/nolan/64/000000/chevron-left.png\" id=\"left\">\n  </ng-template>\n  <ng-template #next>\n      <img src=\"https://img.icons8.com/nolan/64/000000/chevron-right.png\" id=\"right\">\n  </ng-template>\n  <ng-template #item let-item let-i=\"index\">\n     <div class=\"items col-md-6 col-xs-10\">\n      <div class=\"card\">\n          <img class=\"card-img-top\" src=\"{{item.name}}\" alt=\"\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{item.title}}</h4>\n            <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/itemdetails', 4]\">Shop now</a>\n          </div>\n        </div>\n     </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.items = [];
        this.items = [
            { name: 'assets/slike/sat.jpg',
                title: 'Forerunner® 735XT' },
            { name: 'assets/slike/ceonalampa.jpg',
                title: 'ASTRO175' },
            { name: 'assets/slike/backpack.jpg',
                title: 'TRAIL BLITZ 12 - BACKPACK' },
            { name: 'assets/slike/cipele.jpg',
                title: 'Salewa Wild Hiker' },
            { name: 'assets/slike/jakna.jpg',
                title: 'HELIO ACTIVE SHELL' },
            { name: 'assets/slike/majica.jpg',
                title: 'HELIO ACTIVE SHELL' },
            { name: 'assets/slike/pants.jpg',
                title: 'Salomon X Ultra' },
        ];
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/home/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/home/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/home/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 300px;\r\n}\r\n.contact{\r\n    background-color: rgb(240, 230, 219);\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\ni{\r\n    padding: 10px;\r\n}\r\n#podaci{\r\n    text-align: center;\r\n}\r\ninput{\r\n    border: none;\r\n    border-bottom: 1px solid gray;\r\n}\r\ninput .ng-invalid .ng-touched{\r\n    border-bottom: 1px solid red;\r\n}\r\nspan{\r\n    color: red;\r\n}\r\n.col-md-4{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5jb250YWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjMwLCAyMTkpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5pe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4jcG9kYWNpe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuaW5wdXQgLm5nLWludmFsaWQgLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5jb2wtbWQtNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact\">\n<section id=\"contact\" class=\"py-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <h4>About us</h4>\n              <p>Contact us for all questions</p>\n              <hr/>\n              <h4>Address</h4>\n              <p><i class=\"fas fa-home\"></i>Partizanskih baza 4, Novi Sad, Serbia</p>\n              <hr/>\n              <h4>Email</h4>\n              <p><i class=\"fas fa-envelope\"></i>mbakoc81@gmail.com</p>\n              <hr/>\n              <h4>Phone</h4>\n              <p><i class=\"fas fa-mobile\"></i>+381 62 132 45 32</p>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <h3>Fill in the form to be in touch</h3>\n            <hr/>\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onPosalji()\">\n            <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"name\">Name</label>-->\n                        <input \n                        type=\"text\" \n                        id=\"name\" \n                        formControlName=\"name\"\n                        class=\"form-control\"\n                        placeholder=\"Name\">\n                        <span *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\">\n                          Enter your name!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"surname\">Surname</label>-->\n                        <input \n                        type=\"text\" \n                        id=\"surname\" \n                        formControlName=\"surname\"\n                        class=\"form-control\"\n                        placeholder=\"Surname\">\n                        <span *ngIf=\"!signupForm.get('surname').valid && signupForm.get('surname').touched\">\n                          Enter your name!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"email\">Email</label>-->\n                        <input \n                          type=\"email\" \n                          id=\"email\" \n                          formControlName=\"email\"\n                          class=\"form-control\"\n                          placeholder=\"Email\"/>\n                          <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                            Please enter a valid email!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"phone\">Phone number:</label>-->\n                        <input \n                          type=\"phone\" \n                          id=\"phone\" \n                          formControlName=\"phone\"\n                          class=\"form-control\" \n                          placeholder=\"Phone number\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <textarea \n                          class=\"form-control\"\n                          id=\"textarea\"\n                          formControlName=\"textarea\"\n                          class=\"form-control\"\n                          placeholder=\"Write your message..\">\n                        </textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-md-10\">\n                    <span *ngIf=\"!signupForm.valid && signupForm.touched\">\n                        Fill in the form!</span><br>\n                    <button class=\"btn btn-outline-primary btn-block\" type=\"submit\">Send</button>\n                  </div>      \n               </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr/>\n  </div>\n</section>\n<div class=\"container\">\n  <agm-map \n        [latitude]=\"latitude\" \n        [longitude]=\"longitude\" \n        (mapClick)=\"onChoseLocation($event)\" >\n            <agm-marker \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\">\n            </agm-marker>\n    </agm-map>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.latitude = 45.2671;
        this.longitude = 19.8335;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'surname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'textarea': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ContactComponent.prototype.onPosalji = function () {
        console.log(this.signupForm);
        this.signupForm.reset();
    };
    ContactComponent.prototype.onChoseLocation = function (event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/home/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-introduction></app-introduction>\n<app-carousel></app-carousel>\n<app-video></app-video>\n<app-homegalery></app-homegalery>\n<app-contact></app-contact>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: rgba(139, 214, 233, 0.794);\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.row {\r\n    margin: 15px;\r\n}\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    max-width: 100%;\r\n    \r\n}\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    transform: scale(0.92) rotate(-5deg);\r\n}\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    transform: scale(1.1) rotate(7deg);\r\n    box-shadow: 0 0 40px rgb(12, 133, 144);\r\n    \r\n}\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lZ2FsZXJ5L2hvbWVnYWxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjs7OztBQUl2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7O0FBRzFCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWVnYWxlcnkvaG9tZWdhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCAyMTQsIDIzMywgMC43OTQpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKSByb3RhdGUoLTVkZWcpO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg3ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYigxMiwgMTMzLCAxNDQpO1xyXG4gICAgXHJcbn1cclxuI2dyaWQxIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"grid1\">\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking1.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking1.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking2.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking2.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking4.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking4.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking5.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking5.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking6.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking6.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking7.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking7.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <button type=\"button\" class=\"btn btn-outline-info\" routerLink=\"/galery\">See All</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.ts ***!
  \*********************************************************/
/*! exports provided: HomegaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomegaleryComponent", function() { return HomegaleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomegaleryComponent = /** @class */ (function () {
    function HomegaleryComponent() {
    }
    HomegaleryComponent.prototype.ngOnInit = function () {
    };
    HomegaleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homegalery',
            template: __webpack_require__(/*! ./homegalery.component.html */ "./src/app/home/homegalery/homegalery.component.html"),
            styles: [__webpack_require__(/*! ./homegalery.component.css */ "./src/app/home/homegalery/homegalery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomegaleryComponent);
    return HomegaleryComponent;
}());



/***/ }),

/***/ "./src/app/home/introduction/introduction.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\nh1 {font-size: 2.4rem;margin-bottom: 30px;}\r\n.banner img {width:100%;}\r\n.banner-box {position: relative;}\r\n.intro-text { width:100%; position: absolute; top:75%; text-align: center; color:#fff;}\r\n.intro-text-box { width: 62%;margin: auto;background-color: rgba(157, 184, 155, 0.6);padding: 20px;border: 10px solid #beecc8af;}\r\n.intro-text-box h1 {font-size:3em;}\r\n@media (max-width: 767px) {\r\n    .intro-text {display: none;}\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0EsSUFBSSxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztBQUMxQyxhQUFhLFVBQVUsQ0FBQztBQUN4QixhQUFhLGtCQUFrQixDQUFDO0FBQ2hDLGNBQWMsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLENBQUM7QUFDdEYsa0JBQWtCLFVBQVUsQ0FBQyxZQUFZLENBQUMsMENBQTBDLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0FBQ2hJLG9CQUFvQixhQUFhLENBQUM7QUFFbEM7SUFDSSxhQUFhLGFBQWEsQ0FBQztJQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaDEge2ZvbnQtc2l6ZTogMi40cmVtO21hcmdpbi1ib3R0b206IDMwcHg7fVxyXG4uYmFubmVyIGltZyB7d2lkdGg6MTAwJTt9XHJcbi5iYW5uZXItYm94IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uaW50cm8tdGV4dCB7IHdpZHRoOjEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjc1JTsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjojZmZmO31cclxuLmludHJvLXRleHQtYm94IHsgd2lkdGg6IDYyJTttYXJnaW46IGF1dG87YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTcsIDE4NCwgMTU1LCAwLjYpO3BhZGRpbmc6IDIwcHg7Ym9yZGVyOiAxMHB4IHNvbGlkICNiZWVjYzhhZjt9XHJcbi5pbnRyby10ZXh0LWJveCBoMSB7Zm9udC1zaXplOjNlbTt9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5pbnRyby10ZXh0IHtkaXNwbGF5OiBub25lO31cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/introduction/introduction.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section class=\"banner\">\n  <div class=\"banner-box\">\n    <div class=\"intro-text\">\n      <div class=\"intro-text-box\">\n        <h1>LIFE IS AN ADVENTURE</h1>\n        <p></p>\n      </div>\n    </div>\n    <img src=\"assets/slike/trekking15.jpg\" alt=\"banner\" />\n  </div>\n</section>\n</div>\n"

/***/ }),

/***/ "./src/app/home/introduction/introduction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/home/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/home/introduction/introduction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/home/video/video.component.css":
/*!************************************************!*\
  !*** ./src/app/home/video/video.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    text-align: center;\r\n    background: url(/assets/slike/mountain-984083_1280.jpg) no-repeat;\r\n    background-size: cover; \r\n    padding: 20px; \r\n    border-radius: 5px;\r\n}\r\nvideo{\r\n    max-width: 100%;\r\n}\r\ntable{\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aWRlby92aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlFQUFpRTtJQUNqRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aWRlby92aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NsaWtlL21vdW50YWluLTk4NDA4M18xMjgwLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG52aWRlb3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG50YWJsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/video/video.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/video/video.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"video\">\n    <video width=\"520\" height=\"440\" controls>\n      <source src=\"./assets/slike/190212_04_MarrakechAtlasMountains_HD_29.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n    </video>\n  </div>\n  <table class=\"table table-borderless table-dark table-hover \">\n    <tbody>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Mont Blan</td>\n        <td>john@example.com</td>\n      </tr>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Atlas Mountains</td>\n        <td>mary@example.com</td>\n      </tr>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Mountain bridge</td>\n        <td>july@example.com</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/home/video/video.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/video/video.component.ts ***!
  \***********************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/home/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/home/video/video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/itemdetails/itemdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin: 20px;\r\n    padding: 10px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.card{\r\n    padding: 5px;\r\n    max-width: 1000px;\r\n    position: absolute;\r\n    left: 50%;\r\n    \r\n}\r\n\r\nimg{\r\n    margin: auto;\r\n    max-width: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbWRldGFpbHMvaXRlbWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7O0FBRWI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaXRlbWRldGFpbHMvaXRlbWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgXHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/itemdetails/itemdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Product Details</h2>\n  <hr/>\n      <div class=\"item\">\n        <div class=\"col-md-8\" *ngIf=\"product\">\n          <div class=\"card align-content-center\">\n            <img class=\"card-img-top\" [src]=\"product.url\" [alt]=\"product.name\" [title]=\"product.name\" />\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">{{product.name}}</h4>\n              <p class=\"card-text\">${{product.price}}</p>\n              <p class=\"card-text\" *ngIf=\"product.description\">{{product.description}}</p>\n              <a class=\"add-to-cart btn btn-primary\"\n               routerLink=\"/shoppingcart\"\n               (click)=\"addToCart(product)\">Buy Product</a>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/itemdetails/itemdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.component.ts ***!
  \******************************************************/
/*! exports provided: ItemdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsComponent", function() { return ItemdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allItems */ "./src/app/allItems.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");





var ItemdetailsComponent = /** @class */ (function () {
    function ItemdetailsComponent(route, shoppingService) {
        this.route = route;
        this.shoppingService = shoppingService;
        this.products = _allItems__WEBPACK_IMPORTED_MODULE_3__["allItems"];
    }
    ItemdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.product = _this.products[+params.get('productId')];
        });
    };
    ItemdetailsComponent.prototype.addToCart = function (product) {
        window.alert('Your product has been added to the cart!');
        this.shoppingService.putInCart(product);
    };
    ItemdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itemdetails',
            template: __webpack_require__(/*! ./itemdetails.component.html */ "./src/app/itemdetails/itemdetails.component.html"),
            styles: [__webpack_require__(/*! ./itemdetails.component.css */ "./src/app/itemdetails/itemdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"]])
    ], ItemdetailsComponent);
    return ItemdetailsComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    font-size: 1.2em;\r\n}\r\nstrong{\r\n    text-shadow: 1px 1px 2px rgb(241, 234, 234), 0 0 25px rgb(185, 223, 228), 0 0 5px rgb(145, 145, 238);\r\n}\r\nli{\r\n    position: relative;\r\n    padding: 2px;\r\n    margin: 2px;\r\n }\r\nli:hover {\r\n    box-shadow: 0 2px 2px rgba(202, 189, 189, 0.3);\r\n    border-bottom: 2px solid rgb(187, 222, 228);\r\n    left: .1em;\r\n    border-radius: 5px;\r\n    left: 3px;\r\n    color: rgb(8, 8, 8);\r\n    font-weight: bold;\r\n }\r\n.dropdown-menu{\r\n    background-color: rgb(7, 7, 7);\r\n }\r\n.dropdown-item{\r\n    color:rgb(236, 240, 241);\r\n }\r\n.dropdown-item:hover{\r\n    background-color: rgb(18, 28, 34);\r\n    color:rgb(134, 148, 130);\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvR0FBb0c7QUFDeEc7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0E7SUFDRyw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7QUFDQTtJQUNHLDhCQUE4QjtDQUNqQztBQUNBO0lBQ0csd0JBQXdCO0NBQzNCO0FBQ0E7SUFDRyxpQ0FBaUM7SUFDakMsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5zdHJvbmd7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0MSwgMjM0LCAyMzQpLCAwIDAgMjVweCByZ2IoMTg1LCAyMjMsIDIyOCksIDAgMCA1cHggcmdiKDE0NSwgMTQ1LCAyMzgpO1xyXG59XHJcbmxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiB9XHJcbiBsaTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyMDIsIDE4OSwgMTg5LCAwLjMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxODcsIDIyMiwgMjI4KTtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiAuZHJvcGRvd24tbWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3LCA3KTtcclxuIH1cclxuIC5kcm9wZG93bi1pdGVte1xyXG4gICAgY29sb3I6cmdiKDIzNiwgMjQwLCAyNDEpO1xyXG4gfVxyXG4gLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDI4LCAzNCk7XHJcbiAgICBjb2xvcjpyZ2IoMTM0LCAxNDgsIDEzMCk7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar transparent navbar-light navbar-fixed-top navbar-expand-md\">\n  <div class=\"container px-0\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/slike/trekking.png\" /><strong>Trekking World</strong></a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <ng-template [ngIf]=\"authenticationService.registered()\">\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" active>\n          <a routerLink=\"/home\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/about\" class=\"nav-link\">About</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/blog\" class=\"nav-link\">Blog</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/galery\" class=\"nav-link\">Galery</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/shop\" class=\"nav-link\">Shop</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" style=\"padding-top:10px;\">\n          <app-cartmini></app-cartmini>\n        </li>\n        </ng-template>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user-friends\"></i></a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" routerLink=\"/signup\" >Sign Up</a>\n            <a class=\"dropdown-item\" routerLink=\"/signin\">Sign In</a>\n            <a class=\"dropdown-item\" (click)=\"signOut()\" style=\"color:whitesmoke;cursor: pointer;\">Sign Out</a>\n          </div>\n      </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.signOut = function () {
        this.authenticationService.signOutUser();
        this.router.navigate(['/signin']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/postblog.service.ts":
/*!*************************************!*\
  !*** ./src/app/postblog.service.ts ***!
  \*************************************/
/*! exports provided: PostblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostblogService", function() { return PostblogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var PostblogService = /** @class */ (function () {
    function PostblogService(firestore) {
        this.firestore = firestore;
    }
    PostblogService.prototype.getBlogs = function () {
        return this.firestore.collection('blogs').snapshotChanges();
    };
    PostblogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PostblogService);
    return PostblogService;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-6{\r\n    text-align: center;\r\n}\r\n.card{\r\n    text-align: center;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    height: 530px;\r\n}\r\nimg{\r\n    max-height: 200px;\r\n    width: 150px;\r\n}\r\n#slika{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiNzbGlrYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row p-2\">\n    <div *ngFor=\"let product of products; index as productId\">\n     <div class=\"col-md-6\">\n         <div class=\"card\" style=\"width: 20rem\">\n            <div id=\"slika\">\n             <img class=\"cars-img-top\" [src]=\"product.url\"/>\n            </div>\n             <div class=\"card-block\">\n               <h4 class=\"card-title\">{{product.name}}</h4>\n               <p class=\"card-text\">${{product.price}}</p>\n               <p class=\"card-text\" *ngIf=\"product.description\">{{product.description}}</p>\n               <a class=\"add-to-cart btn btn-primary\" [routerLink]=\"['/itemdetails', productId]\">See details</a>\n             </div>\n     </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _allItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allItems */ "./src/app/allItems.ts");




var ShopComponent = /** @class */ (function () {
    function ShopComponent(shoppingService) {
        this.shoppingService = shoppingService;
        this.products = _allItems__WEBPACK_IMPORTED_MODULE_3__["allItems"];
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/shopping.service.ts":
/*!*************************************!*\
  !*** ./src/app/shopping.service.ts ***!
  \*************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _allItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allItems */ "./src/app/allItems.ts");



var ShoppingService = /** @class */ (function () {
    function ShoppingService() {
        this.items = _allItems__WEBPACK_IMPORTED_MODULE_2__["allItems"];
        this.cart = [];
    }
    ShoppingService.prototype.putInCart = function (product) {
        this.cart.push(product);
    };
    ShoppingService.prototype.takeProducts = function () {
        return this.cart;
    };
    ShoppingService.prototype.clearcart = function () {
        this.cart = [];
        return this.cart;
    };
    ShoppingService.prototype.total = function () {
        var sum = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var product = _a[_i];
            sum += product.price;
        }
        return sum;
    };
    ShoppingService.prototype.productTotal = function () {
        var productSum = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id == product.id) {
                productSum += product.price;
            }
        }
        return productSum;
    };
    ShoppingService.prototype.removeSingleItem = function (itemIndex) {
        this.cart.splice(itemIndex, 1);
        this.total();
    };
    ShoppingService.prototype.itemsNum = function (prID) {
        var suma = 0;
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == prID) {
                suma++;
            }
        }
        return suma;
    };
    ShoppingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingService);
    return ShoppingService;
}());



/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    padding: 5px;\r\n    margin: 10px;\r\n}\r\n#contact{\r\n   text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4jY29udGFjdHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-4\">\n    <h1 class=\"text-center text-secondary mb-5\">TREKKING GEAR & TREKKING ACCESSORIES</h1>\n    <div class=\"form-row text-center\">\n      <div class=\"col-12 col-sm\">\n        <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n          1. DELIVERY INFORMATION\n        </div>\n      </div>\n      <div class=\"col-12 col-sm\">\n        <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n          2.SHIPPING & PAYMENT \n        </div>\n      </div>\n      <div class=\"col-12 col-sm\">\n        <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n          3.THANK YOU \n        </div>\n      </div>\n    </div>\n  \n    <div class=\"row justify-content-center mt-5\">\n      <div class=\"col-md-8\">\n          <div id=\"naslov\">\n              <h5>SHOPPING CART LIST<i class=\"fas fa-shopping-cart ml-2\"></i></h5>\n          </div>\n       \n        <table class=\"table  col-md-10  table-light table-bordered table-hover\" >\n            <thead>\n                <tr class=\"bg-secondary\">\n                    <td></td>\n                    <td>Picture</td>\n                    <td>List of products</td>\n                    <td>Price</td>\n                    <td>Quantity</td>\n                    <td>Total</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let product of cart; let i = index;\">\n                    <td>\n                       <span class=\"icon\" (click)=\"removeItem(i)\">\n                          <i class=\"fas fa-trash-alt\"></i>\n                       </span>\n                    </td>\n                    <td><img class=\"cars-img-top align-middle\" [src]=\"product.url\" style=\"height:80px ; width: auto ;\"></td>\n                    <td class=\"align-middle\" style=\"text-align: left;\">{{product.name}}</td>\n                    <td class=\"align-middle\">{{product.price}}</td>\n                    <td class=\"align-middle\">{{numberSItem(product.id)}}</td>\n                    <td class=\"align-middle\"></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td class=\"align-middle\" ></td>\n                  <td class=\"align-middle\"></td>\n                  <td class=\"align-middle\"></td>\n                  <td class=\"align-middle\" *ngIf=\"numberOfItems() > 0\">{{numberOfItems()}}</td>\n                  <td class=\"align-middle\" *ngIf=\"numberOfItems() > 0\">{{totalPrice()}}</td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n    </div>\n    <section id=\"contact\" class=\"py-3\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card p-4\" id=\"contact\">\n                  <div class=\"card-body\">\n                    <h4>About us</h4>\n                    <p>Contact us for all questions</p>\n                    <hr/>\n                    <h4>Address</h4>\n                    <p><i class=\"fas fa-home\"></i> Partizanskih baza 4, Novi Sad, Serbia</p>\n                    <hr/>\n                    <h4>Email</h4>\n                    <p><i class=\"fas fa-envelope\"></i> mbakoc81@gmail.com</p>\n                    <hr/>\n                    <h4>Phone</h4>\n                    <p><i class=\"fas fa-mobile\"></i> +381 62 132 45 32</p>\n                  </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                    <h3>\n                      <strong>PAYMENT METHOD<i class=\"fas fa-money-bill-alt ml-2\"></i></strong> \n                      </h3>\n                  <hr/>\n                  <form [formGroup]=\"signupForm\" (ngSubmit)=\"onPosalji()\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <!--<label for=\"name\">Name</label>-->\n                              <input \n                              type=\"text\" \n                              id=\"name\" \n                              formControlName=\"name\"\n                              class=\"form-control\"\n                              placeholder=\"Name\">\n                              <span *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\">\n                                Enter your name!</span>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <!--<label for=\"surname\">Surname</label>-->\n                              <input \n                              type=\"text\" \n                              id=\"surname\" \n                              formControlName=\"surname\"\n                              class=\"form-control\"\n                              placeholder=\"Surname\">\n                              <span *ngIf=\"!signupForm.get('surname').valid && signupForm.get('surname').touched\">\n                                Enter your name!</span>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <!--<label for=\"email\">Email</label>-->\n                              <input \n                                type=\"email\" \n                                id=\"email\" \n                                formControlName=\"email\"\n                                class=\"form-control\"\n                                placeholder=\"Email\"/>\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                  Please enter a valid email!</span>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <!--<label for=\"phone\">Phone number:</label>-->\n                              <input \n                                type=\"phone\" \n                                id=\"phone\" \n                                formControlName=\"phone\"\n                                class=\"form-control\" \n                                placeholder=\"Phone number\"/>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <textarea \n                                class=\"form-control\"\n                                id=\"textarea\"\n                                formControlName=\"textarea\"\n                                class=\"form-control\"\n                                placeholder=\"Write your message..\">\n                              </textarea>\n                          </div>\n                        </div>\n                        <div class=\"col-md-10\">\n                          <span *ngIf=\"!signupForm.valid && signupForm.touched\">\n                              Fill in the form!</span><br>\n                        </div>      \n                     </div>\n                     <div class=\"form-row mt-4\">\n                        <label for=\"paymentmethod\">Choose payment method</label>\n                        <div class=\"form-group col-md-12\">\n                          <div class=\"form-check form-check-inline\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                              <label class=\"form-check-label\" for=\"inlineRadio1\">Pay on delivery <i class=\"fas fa-truck\"></i></label>\n                          </div>\n                          <div class=\"form-check form-check-inline\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                              <label class=\"form-check-label\" for=\"inlineRadio2\">Pay by ATM transfer <i class=\"fab fa-cc-mastercard\"></i><i class=\"fab fa-cc-visa\"></i></label>\n                          </div>\n                          <div class=\"form-check form-check-inline\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n                              <label class=\"form-check-label\" for=\"inlineRadio3\">Pay by electronic transfer <i class=\"fab fa-cc-paypal\"></i></label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-row\">\n                        <div class=\"form-group col-md-12\">\n                          <label for=\"imputCard\">Enter your card number</label>\n                          <input type=\"number\" class=\"form-control\" id=\"imputCard\" placeholder=\"\">\n                        </div>\n                      </div>\n                      <div class=\"form-row col-md-6\">\n                        <div class=\"form-group col-md-12\">\n                          <label for=\"exampleFormControlInput1\"></label>\n                        </div>\n                      </div>\n                      <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <h5>Choose a store</h5>\n                            <label for=\"inputCity\"> Choose your store city.</label>\n                            <select id=\"inputCity\" class=\"form-control\" required>\n                            <option selected value=\"\">Choose...</option>\n                            <option>Novi Sad</option>\n                            <option>Beograd</option>\n                            <option>Subotica</option>\n                            <option>Nis</option>\n                            <option>Zrenjanin</option>\n                            </select>\n                          <div class=\"invalid-feedback\">\n                            Choose your store city.\n                          </div>\n                        </div>\n                      </div>\n                        <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"onPosalji()\">Continue to buy</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr/>\n        </div>\n      </section>\n      <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent(shoppingservice) {
        this.shoppingservice = shoppingservice;
        this.suma = 0;
        this.cene = [];
        this.cart = this.shoppingservice.takeProducts();
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'surname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'textarea': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    ShoppingcartComponent.prototype.onSend = function () {
        console.log(this.signupForm);
        this.signupForm.reset();
    };
    ShoppingcartComponent.prototype.emtyCart = function () {
        this.cart = this.shoppingservice.clearcart();
    };
    ShoppingcartComponent.prototype.numberOfItems = function () {
        return this.cart.length;
    };
    ShoppingcartComponent.prototype.totalPrice = function () {
        return this.shoppingservice.total();
    };
    ShoppingcartComponent.prototype.removeItem = function (itemIndex) {
        this.shoppingservice.removeSingleItem(itemIndex);
    };
    ShoppingcartComponent.prototype.numberSItem = function (itemIndex) {
        return this.shoppingservice.itemsNum(itemIndex);
    };
    ShoppingcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.css */ "./src/app/shoppingcart/shoppingcart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #section{\r\n    background: url(/assets/slike/trekking1.jpg) no-repeat;\r\n    background-size: cover;\r\n    min-height: 700px;\r\n    \r\n}\r\n#section .bckg{\r\n    background-color: rgba( 12, 12, 12, 0.5);\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 700px;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.8;\r\n}*/\r\n\r\n.login-body {\r\n    background-image: url(/assets/slike/trekking2.jpg);\r\n    background-size: cover;\r\n    height: 100vh;\r\n    position: relative\r\n    \r\n}\r\n\r\n.login-body .logIn-sec {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.login-body .login-form {\r\n    margin: auto;\r\n    color: #FFF;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 15px 25px rgba(0,0,0,.5);\r\n}\r\n\r\n.login-body .login-form h2 {\r\n    color: #f0ad4e !important;\r\n    text-transform: capitalize;\r\n   font-size: 30px !important;\r\n    margin: 0 0 30px\r\n}\r\n\r\n.login-body .login-form form {\r\n    border-left: 1px solid #f0ad4e;\r\n    padding: 36px 0 36px 40px;\r\n    margin-left: -20px;\r\n    position: relative;\r\n    transition: .5s;\r\n}\r\n\r\n.login-body .social-media-icons {\r\n    padding: 0 35px\r\n}\r\n\r\n.login-body .login-form form:before {\r\n    \r\n    content: \"OR\";\r\n    height: 50px;\r\n    width: 50px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    font-weight: bold;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    border: 1px solid #f0ad4e;\r\n    display: block;\r\n    top: 50%;\r\n    left: -10.5%;\r\n    transform: translate(50%, -50%);\r\n    background: rgba(0,0,0,.8)\r\n    \r\n}\r\n\r\n.login-body .login-form .form-group {\r\n    position: relative;\r\n    \r\n}\r\n\r\n.login-body .login-form .form-group input {\r\n    border: none;\r\n    padding: 0;\r\n    border-bottom: 1px solid #f0ad4e;\r\n    background-color: transparent;\r\n     color: #FFF;\r\n    font-size: 16px;\r\n    padding: 20px 0;\r\n}\r\n\r\n.login-body .login-form input[type=\"submit\"] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 6px;\r\n    font-size: 17px;\r\n}\r\n\r\n.login-body .login-form .form-group label {\r\n    position: absolute;\r\n    top: 20px;\r\n    transition: .5s;\r\n}\r\n\r\n.login-body .login-form .form-group input:focus ~ label,\r\n.login-body .login-form .form-group input:valid ~ label{\r\n    font-size: 13px;\r\n    top: -10px;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.login-body .login-form img {\r\n  width: 100%;\r\n}\r\n\r\n/* Style for different size media */\r\n\r\n@media (min-width: 1200px) {\r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: 50%;\r\n        left: -8.5%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8);\r\n    }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    \r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: 50%;\r\n        left: -13.5%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8)\r\n    }\r\n    \r\n    .login-body .social-media-icons {\r\n      \r\n        position: absolute;\r\n        top: 45px\r\n    } \r\n       \r\n}\r\n\r\n@media (max-width: 767px) {\r\n   .login-body .login-form form {\r\n    border-left: none;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    position: relative\r\n}\r\n\r\n.login-body .login-form form:before {\r\n    \r\n    display: none\r\n    \r\n}\r\n    \r\n    .login-body .social-media-icons {\r\n        margin-bottom: 30px;\r\n        padding-bottom: 30px;\r\n        text-align: center;\r\n        border-bottom: 1px solid #d78e0e;\r\n        position: unset;\r\n    } \r\n    \r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: -31px;\r\n        left: 40%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8)\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOztBQUVGO0lBQ0ksa0RBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QixhQUFhO0lBQ2I7O0FBRUo7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0dBQzNCLDBCQUEwQjtJQUN6QjtBQUNKOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQjs7QUFFSjs7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdDQUFnQztJQUNoQyw2QkFBNkI7S0FDNUIsV0FBVztJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQSxtQ0FBbUM7O0FBRW5DO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsUUFBUTtRQUNSLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsUUFBUTtRQUNSLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0I7SUFDSjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEI7SUFDSjs7QUFFSjs7QUFFQTtHQUNHO0lBQ0MsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSTtRQUNJLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGdDQUFnQztRQUNoQyxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLFVBQVU7UUFDVixTQUFTO1FBQ1QsK0JBQStCO1FBQy9CO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NsaWtlL3RyZWtraW5nMS5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIFxyXG59XHJcbiNzZWN0aW9uIC5iY2tne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSggMTIsIDEyLCAxMiwgMC41KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxufVxyXG4uY2FyZC1mb3Jte1xyXG4gICBvcGFjaXR5OiAwLjg7XHJcbn0qL1xyXG5cclxuLmxvZ2luLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvc2xpa2UvdHJla2tpbmcyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgXHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5sb2dJbi1zZWMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwwLDAsLjUpO1xyXG59XHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGgyIHtcclxuICAgIGNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4XHJcbn1cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICBwYWRkaW5nOiAzNnB4IDAgMzZweCA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4ubG9naW4tYm9keSAuc29jaWFsLW1lZGlhLWljb25zIHtcclxuICAgIHBhZGRpbmc6IDAgMzVweFxyXG59XHJcblxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSBmb3JtOmJlZm9yZSB7XHJcbiAgICBcclxuICAgIGNvbnRlbnQ6IFwiT1JcIjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLTEwLjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpXHJcbiAgICBcclxufVxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufVxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWQgfiBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsZSBmb3IgZGlmZmVyZW50IHNpemUgbWVkaWEgKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm06YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIk9SXCI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogLTguNSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBcclxuICAgIC5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm06YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIk9SXCI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogLTEzLjUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOClcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luLWJvZHkgLnNvY2lhbC1tZWRpYS1pY29ucyB7XHJcbiAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ1cHhcclxuICAgIH0gXHJcbiAgICAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgIC5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSBmb3JtOmJlZm9yZSB7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIFxyXG59XHJcbiAgICBcclxuICAgIC5sb2dpbi1ib2R5IC5zb2NpYWwtbWVkaWEtaWNvbnMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDc4ZTBlO1xyXG4gICAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm06YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIk9SXCI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGFkNGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiAtMzFweDtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header id=\"section\">\n  <div class=\"bckg\">\n    <div class=\"container content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 d-none d-md-block text-light\">\n          <h1 class=\"display-4\"><strong>Sign In</strong></h1>\n          <p>Sign In if you wont to see all content of page</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card bg-success text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"logIn(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-info btn-block\" type=\"submit\">Sign In</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>-->\n<div class= \"login-body\">\n  <section class=\"content logIn-sec\">  \n    \n    <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"login-form col-sm-12\">\n              <div class=\"row\">\n                  <h2 class=\"title-login-form text-center\"> Log In </h2>                        \n                  <div class=\"col-sm-6\">\n                      <div class=\"social-media-icons\">\n                          <img src=\"https://45eqks401uca3p9xje465puo-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2017/08/GoogleFacebookLogin.png\" alt=\"login with social media\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                      <form (ngSubmit)=\"logIn(f)\" #f=\"ngForm\">\n                          <div class=\"form-group\">\n                            <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                             <!--<label for=\"email\">Email</label>-->\n                          </div>\n                          <div class=\"form-group\">\n                            <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">  \n                              <!--<label for=\"password\">Password</label> -->                   \n                          </div>\n                          <input type=\"submit\" class=\"btn btn-warning btn-block login-bt\" value=\"Log In\">\n                      </form>\n                  </div>\n              </div>\n              \n          </div>\n          \n      </div>\n      \n    </div>\n  \n  </section>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.logIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.autentifikacijaService.logInUser(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#section{\r\n    background: url(/assets/slike/trekking1.jpg) no-repeat;\r\n    background-size: cover;\r\n    min-height: 700px;\r\n    \r\n}\r\n#section .bckg{\r\n    background-color: rgba( 12, 12, 12, 0.5);\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 700px;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.8;\r\n}*/\r\n.login-body {\r\n    background-image: url(/assets/slike/trekking1.jpg);\r\n    background-size: cover;\r\n    height: 100vh;\r\n    position: relative\r\n    \r\n}\r\n.login-body .logIn-sec {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n.login-body .login-form {\r\n    margin: auto;\r\n    color: #FFF;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 15px 25px rgba(0,0,0,.5);\r\n}\r\n.login-body .login-form h2 {\r\n    color: #f0ad4e !important;\r\n    text-transform: capitalize;\r\n   font-size: 30px !important;\r\n    margin: 0 0 30px\r\n}\r\n.login-body .login-form form {\r\n    border-left: 1px solid #f0ad4e;\r\n    padding: 36px 0 36px 40px;\r\n    margin-left: -20px;\r\n    position: relative;\r\n    transition: .5s;\r\n}\r\n.login-body .social-media-icons {\r\n    padding: 0 35px\r\n}\r\n.login-body .login-form form:before {\r\n    \r\n    content: \"OR\";\r\n    height: 50px;\r\n    width: 50px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    font-weight: bold;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    border: 1px solid #f0ad4e;\r\n    display: block;\r\n    top: 50%;\r\n    left: -10.5%;\r\n    transform: translate(50%, -50%);\r\n    background: rgba(0,0,0,.8)\r\n    \r\n}\r\n.login-body .login-form .form-group {\r\n    position: relative;\r\n    \r\n}\r\n.login-body .login-form .form-group input {\r\n    border: none;\r\n    padding: 0;\r\n    border-bottom: 1px solid #f0ad4e;\r\n    background-color: transparent;\r\n     color: #FFF;\r\n    font-size: 16px;\r\n    padding: 20px 0;\r\n}\r\n.login-body .login-form input[type=\"submit\"] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 6px;\r\n    font-size: 17px;\r\n}\r\n.login-body .login-form .form-group label {\r\n    position: absolute;\r\n    top: 20px;\r\n    transition: .5s;\r\n}\r\n.login-body .login-form .form-group input:focus ~ label,\r\n.login-body .login-form .form-group input:valid ~ label{\r\n    font-size: 13px;\r\n    top: -10px;\r\n    box-shadow: none !important;\r\n}\r\n.login-body .login-form img {\r\n  width: 100%;\r\n}\r\n/* Style for different size media */\r\n@media (min-width: 1200px) {\r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: 50%;\r\n        left: -8.5%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8);\r\n    }\r\n}\r\n@media (max-width: 991px) {\r\n    \r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: 50%;\r\n        left: -13.5%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8)\r\n    }\r\n    \r\n    .login-body .social-media-icons {\r\n      \r\n        position: absolute;\r\n        top: 45px\r\n    } \r\n       \r\n}\r\n@media (max-width: 767px) {\r\n   .login-body .login-form form {\r\n    border-left: none;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    position: relative\r\n}\r\n\r\n.login-body .login-form form:before {\r\n    \r\n    display: none\r\n    \r\n}\r\n    \r\n    .login-body .social-media-icons {\r\n        margin-bottom: 30px;\r\n        padding-bottom: 30px;\r\n        text-align: center;\r\n        border-bottom: 1px solid #d78e0e;\r\n        position: unset;\r\n    } \r\n    \r\n    .login-body .login-form form:before {\r\n        content: \"OR\";\r\n        height: 50px;\r\n        width: 50px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        border: 1px solid #f0ad4e;\r\n        display: block;\r\n        top: -31px;\r\n        left: 40%;\r\n        transform: translate(50%, -50%);\r\n        background: rgba(0,0,0,.8)\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBQ0Y7SUFDSSxrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYjs7QUFFSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7R0FDM0IsMEJBQTBCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSTtBQUNKO0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osK0JBQStCO0lBQy9COztBQUVKO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdDQUFnQztJQUNoQyw2QkFBNkI7S0FDNUIsV0FBVztJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBR0EsbUNBQW1DO0FBRW5DO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsUUFBUTtRQUNSLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsMEJBQTBCO0lBQzlCO0FBQ0o7QUFFQTs7SUFFSTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxRQUFRO1FBQ1IsWUFBWTtRQUNaLCtCQUErQjtRQUMvQjtJQUNKOztJQUVBOztRQUVJLGtCQUFrQjtRQUNsQjtJQUNKOztBQUVKO0FBRUE7R0FDRztJQUNDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkO0FBQ0o7O0FBRUE7O0lBRUk7O0FBRUo7O0lBRUk7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixnQ0FBZ0M7UUFDaEMsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsU0FBUztRQUNULCtCQUErQjtRQUMvQjtJQUNKOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NsaWtlL3RyZWtraW5nMS5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIFxyXG59XHJcbiNzZWN0aW9uIC5iY2tne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSggMTIsIDEyLCAxMiwgMC41KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxufVxyXG4uY2FyZC1mb3Jte1xyXG4gICBvcGFjaXR5OiAwLjg7XHJcbn0qL1xyXG4ubG9naW4tYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9zbGlrZS90cmVra2luZzEuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBcclxufVxyXG5cclxuLmxvZ2luLWJvZHkgLmxvZ0luLXNlYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDI1cHggcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gaDIge1xyXG4gICAgY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHhcclxufVxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSBmb3JtIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgIHBhZGRpbmc6IDM2cHggMCAzNnB4IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5zb2NpYWwtbWVkaWEtaWNvbnMge1xyXG4gICAgcGFkZGluZzogMCAzNXB4XHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm06YmVmb3JlIHtcclxuICAgIFxyXG4gICAgY29udGVudDogXCJPUlwiO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAtMTAuNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOClcclxuICAgIFxyXG59XHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4ubG9naW4tYm9keSAubG9naW4tZm9ybSAuZm9ybS1ncm91cCBpbnB1dDp2YWxpZCB+IGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIFN0eWxlIGZvciBkaWZmZXJlbnQgc2l6ZSBtZWRpYSAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gZm9ybTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiT1JcIjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAtOC41JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIFxyXG4gICAgLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gZm9ybTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiT1JcIjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAtMTMuNSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW4tYm9keSAuc29jaWFsLW1lZGlhLWljb25zIHtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDVweFxyXG4gICAgfSBcclxuICAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IC5sb2dpbi1mb3JtIGZvcm06YmVmb3JlIHtcclxuICAgIFxyXG4gICAgZGlzcGxheTogbm9uZVxyXG4gICAgXHJcbn1cclxuICAgIFxyXG4gICAgLmxvZ2luLWJvZHkgLnNvY2lhbC1tZWRpYS1pY29ucyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNzhlMGU7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLmxvZ2luLWJvZHkgLmxvZ2luLWZvcm0gZm9ybTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiT1JcIjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwYWQ0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IC0zMXB4O1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpXHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header id=\"section\">\n  <div class=\"bckg\">\n    <div class=\"container content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 d-none d-md-block text-light\">\n          <h1 class=\"display-4\"><strong>Sign Up</strong></h1>\n          <p>Register if you wont to see all content of page</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card bg-warning text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"register(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-info btn-block\" type=\"submit\">Sign Up</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>-->\n<div class= \"login-body\">\n  <section class=\"content logIn-sec\">  \n    \n    <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"login-form col-sm-12\">\n              <div class=\"row\">\n                  <h2 class=\"title-login-form text-center\"> Sign Up </h2>                        \n                  <div class=\"col-sm-6\">\n                      <div class=\"social-media-icons\">\n                          <img src=\"https://45eqks401uca3p9xje465puo-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2017/08/GoogleFacebookLogin.png\" alt=\"login with social media\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                      <form (ngSubmit)=\"register(f)\" #f=\"ngForm\">\n                          <div class=\"form-group\">\n                            <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                             <!--<label for=\"email\">Email</label>-->\n                          </div>\n                          <div class=\"form-group\">\n                            <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">  \n                              <!--<label for=\"password\">Password</label> -->                   \n                          </div>\n                          <input type=\"submit\" class=\"btn btn-warning btn-block login-bt\" value=\"Sign Up\">\n                      </form>\n                  </div>\n              </div>\n              \n          </div>\n          \n      </div>\n      \n    </div>\n  \n  </section>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.autentifikacijaService.registerTheUser(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCiE15ebsTtp0o5CfTtTXAfRcEETx-01i0",
        authDomain: "trekkingf-84b29.firebaseapp.com",
        databaseURL: "https://trekkingf-84b29.firebaseio.com",
        projectId: "trekkingf-84b29",
        storageBucket: "trekkingf-84b29.appspot.com",
        messagingSenderId: "878971576081",
        appId: "1:878971576081:web:41c865f4d1df71a90df6b0"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programiranje\SmartInIt kurs\KURS Zadaci\TrekkingWorld\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map