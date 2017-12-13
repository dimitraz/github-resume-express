webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_profiles_public_profiles_component__ = __webpack_require__("../../../../../src/app/components/public-profiles/public-profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edit_project_edit_project_component__ = __webpack_require__("../../../../../src/app/components/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_interests_edit_interests_component__ = __webpack_require__("../../../../../src/app/components/edit-interests/edit-interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    //{ path: ':token', component: LoginComponent },
    { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'public-profiles', canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__components_public_profiles_public_profiles_component__["a" /* PublicProfilesComponent */] },
    { path: 'profile/:id/projects/:project_id', canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__components_edit_project_edit_project_component__["a" /* EditProjectComponent */] },
    { path: 'profile/:id/interests', canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__components_edit_interests_edit_interests_component__["a" /* EditInterestsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<br>\n<br>\n\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_public_profiles_public_profiles_component__ = __webpack_require__("../../../../../src/app/components/public-profiles/public-profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_project_edit_project_component__ = __webpack_require__("../../../../../src/app/components/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_edit_interests_edit_interests_component__ = __webpack_require__("../../../../../src/app/components/edit-interests/edit-interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_interest_service__ = __webpack_require__("../../../../../src/app/services/interest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Components







// Services





// Interceptors

// Guards

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_public_profiles_public_profiles_component__["a" /* PublicProfilesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_edit_project_edit_project_component__["a" /* EditProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_edit_interests_edit_interests_component__["a" /* EditInterestsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_17__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_18__services_interest_service__["a" /* InterestService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_19__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; width: 70%; padding: 5em 0; margin: 0 auto\" class=\"align-middle\">\n  <h1 style=\"font-weight: bold\">\n    <span class=\"octicon octicon-mark-github\" style=\"font-size: 45px\"></span> &nbsp; Welcome, {{ user.login }}\n  </h1>\n  <br>\n  \n  <h2 style=\"font-weight: normal\">\n    Show off your skills, projects and interests by modifying your profile page. Get started now!\n  </h2>\n  <br>\n\n  <button class=\"btn btn-primary btn-lg\" href=\"#\" routerLink=\"/profile\">Modify profile</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.token = this.authService.getToken();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser(this.token)
            .subscribe(function (user) { return _this.getUser(user); });
    };
    DashboardComponent.prototype.getUser = function (user) {
        this.user = user;
        this.id = user._id;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-interests/edit-interests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-interests/edit-interests.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"/profile\">&larr; Back to profile</a>\n  <br>\n  <br>\n</div>\n\n<div *ngFor=\"let interest of interests\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(interest._id)\" class=\"form-inline\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" name=\"int\" id=\"int\" [(ngModel)]=\"interest.interest\" required\n        ngModel>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mb-2 mr-sm-2 mb-sm-0\">Submit</button>\n    <a class=\"btn btn-danger mb-2 mr-sm-2 mb-sm-0\" (click)=\"deleteInterest(interest._id)\">Delete</a>\n  </form>\n  <br>\n</div>\n\n<div>\n  <form #add=\"ngForm\" (ngSubmit)=\"onSubmitAdd()\" class=\"form-inline\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" name=\"int\" id=\"int\" [(ngModel)]=\"newInterest\" required\n        ngModel>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success mb-2 mr-sm-2 mb-sm-0\">Add</button>\n  </form>\n  <br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-interests/edit-interests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInterestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interest_service__ = __webpack_require__("../../../../../src/app/services/interest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditInterestsComponent = (function () {
    function EditInterestsComponent(route, interestService, flashMessagesService) {
        this.route = route;
        this.interestService = interestService;
        this.flashMessagesService = flashMessagesService;
    }
    EditInterestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params['id'];
        this.interestService.getInterests(this.userId)
            .subscribe(function (interests) { return _this.getInterests(interests); });
    };
    EditInterestsComponent.prototype.getInterests = function (interests) {
        this.interests = interests;
    };
    EditInterestsComponent.prototype.deleteInterest = function (id) {
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.remove(this.interests, function (i) {
            return i._id == id;
        });
        this.interestService.deleteInterest(this.userId, id).subscribe();
        this.flashMessagesService.show('Interest deleted successfully', { cssClass: 'alert-success' });
    };
    EditInterestsComponent.prototype.onSubmit = function (id) {
        var _this = this;
        var index = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.findIndex(this.interests, function (i) {
            return i._id == id;
        });
        this.interestService.updateInterest(this.userId, id, this.interests[index].interest)
            .subscribe(function (interest) {
            _this.flashMessagesService.show('Interest saved successfully', { cssClass: 'alert-success' });
        });
    };
    EditInterestsComponent.prototype.onSubmitAdd = function () {
        var _this = this;
        this.interestService.addInterest(this.userId, this.newInterest)
            .subscribe(function (interest) {
            _this.interests.push(interest);
            _this.newInterest = '';
            _this.flashMessagesService.show('Interest added successfully', { cssClass: 'alert-success' });
        });
    };
    return EditInterestsComponent;
}());
EditInterestsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-interests',
        template: __webpack_require__("../../../../../src/app/components/edit-interests/edit-interests.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-interests/edit-interests.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_interest_service__["a" /* InterestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_interest_service__["a" /* InterestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], EditInterestsComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-interests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-project/edit-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-project/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <a href=\"/profile\">&larr; Back to profile</a>\n    <br>\n    <br>\n</div>\n\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control form-control-lg\" name=\"name\" id=\"name\" [(ngModel)]=\"project.name\" required ngModel>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"desc\">Description</label>\n        <textarea class=\"form-control\" id=\"desc\" name=\"desc\" [(ngModel)]=\"project.description\" rows=\"3\" ngModel></textarea>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"ghurl\">Github URL</label>\n        <input type=\"text\" class=\"form-control\" name=\"ghurl\" id=\"ghurl\" [(ngModel)]=\"project.html_url\" ngModel>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"url\">Project URL</label>\n        <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" [(ngModel)]=\"project.ext_url\" ngModel>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lang\">Language (separate with comma)</label>\n        <input type=\"text\" class=\"form-control\" name=\"lang\" id=\"lang\" [(ngModel)]=\"project.language\" ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/edit-project/edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProjectComponent = (function () {
    function EditProjectComponent(route, projectService, flashMessagesService) {
        this.route = route;
        this.projectService = projectService;
        this.flashMessagesService = flashMessagesService;
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params['id'];
        this.id = this.route.snapshot.params['project_id'];
        this.projectService.getProject(this.userId, this.id)
            .subscribe(function (project) { return _this.getProject(project); });
    };
    EditProjectComponent.prototype.getProject = function (project) {
        this.project = project;
    };
    EditProjectComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.projectService.updateProject(this.userId, this.id, this.project)
            .catch(function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred
                console.error('An error occurred:', err.error.message);
            }
            else {
                // The server returned an unsuccessful response code
                var error = err.error.error.split(':')[3].trim();
                _this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({ description: 'Error Value Emitted' });
        })
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.flashMessagesService.show('Project saved successfully', { cssClass: 'alert-success' });
            }
        });
    };
    return EditProjectComponent;
}());
EditProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-project',
        template: __webpack_require__("../../../../../src/app/components/edit-project/edit-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-project/edit-project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], EditProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; width: 70%; padding: 5em 0; margin: 0 auto\" class=\"align-middle\">\n  <h1 style=\"font-weight: bold\">\n    <span class=\"octicon octicon-mark-github\" style=\"font-size: 45px\"></span> &nbsp; Github Resume\n  </h1>\n  <br>\n\n  <h2 style=\"font-weight: normal\">\n    Generate a beautiful resume from your GitHub account. Log in now to get started!\n  </h2>\n  <br>\n\n  <a class=\"btn btn-primary btn-lg\" href=\"http://localhost:3000/auth/login\">Log in</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, authService, userService, router) {
        this.route = route;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
        var token = this.route.snapshot.queryParams['token'];
        if (token) {
            this.authService.login(token);
            this.router.navigate(['/dashboard']);
        }
        this.userService.getUser(this.authService.getLoggedInId()).subscribe(function (user) {
            console.log(user);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">Github Resume</a>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li *ngIf=\"isLoggedIn\" class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/profile\">Profile</a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/public-profiles\">Public Profiles</a>\n                </li>\n            </ul>\n\n            <ul class=\"navbar-nav ml-auto\">\n                    <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item active\">\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Register</a>\n                    </li>\n\n                    <li *ngIf=\"!isLoggedIn\" class=\"nav-item active\">\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n                    </li>\n\n                    <li *ngIf=\"isLoggedIn\" class=\"nav-item active\">\n                        <a class=\"nav-link\">{{ loggedInUser }}</a>\n                    </li>\n\n                    <li *ngIf=\"isLoggedIn\" class=\"nav-item active\">\n                        <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n                    </li>\n                </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var auth = this.authService.isAuthenticated();
        if (auth) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/colours.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colours; });
var colours = [
    {
        "id": "Mercury",
        "colour": "#ff2b2b"
    },
    {
        "id": "TypeScript",
        "colour": "#2b7489"
    },
    {
        "id": "PureBasic",
        "colour": "#5a6986"
    },
    {
        "id": "Objective-C++",
        "colour": "#6866fb"
    },
    {
        "id": "Self",
        "colour": "#0579aa"
    },
    {
        "id": "edn",
        "colour": "#db5855"
    },
    {
        "id": "NewLisp",
        "colour": "#87AED7"
    },
    {
        "id": "Jupyter Notebook",
        "colour": "#DA5B0B"
    },
    {
        "id": "Rebol",
        "colour": "#358a5b"
    },
    {
        "id": "Frege",
        "colour": "#00cafe"
    },
    {
        "id": "Dart",
        "colour": "#00B4AB"
    },
    {
        "id": "AspectJ",
        "colour": "#a957b0"
    },
    {
        "id": "Shell",
        "colour": "#89e051"
    },
    {
        "id": "Web Ontology Language",
        "colour": "#9cc9dd"
    },
    {
        "id": "xBase",
        "colour": "#403a40"
    },
    {
        "id": "Eiffel",
        "colour": "#946d57"
    },
    {
        "id": "Nix",
        "colour": "#7e7eff"
    },
    {
        "id": "RAML",
        "colour": "#77d9fb"
    },
    {
        "id": "MTML",
        "colour": "#b7e1f4"
    },
    {
        "id": "Racket",
        "colour": "#22228f"
    },
    {
        "id": "Elixir",
        "colour": "#6e4a7e"
    },
    {
        "id": "SAS",
        "colour": "#B34936"
    },
    {
        "id": "Agda",
        "colour": "#315665"
    },
    {
        "id": "wisp",
        "colour": "#7582D1"
    },
    {
        "id": "D",
        "colour": "#ba595e"
    },
    {
        "id": "Kotlin",
        "colour": "#F18E33"
    },
    {
        "id": "Opal",
        "colour": "#f7ede0"
    },
    {
        "id": "Crystal",
        "colour": "#776791"
    },
    {
        "id": "Objective-C",
        "colour": "#438eff"
    },
    {
        "id": "ColdFusion CFC",
        "colour": "#ed2cd6"
    },
    {
        "id": "Oz",
        "colour": "#fab738"
    },
    {
        "id": "Mirah",
        "colour": "#c7a938"
    },
    {
        "id": "Objective-J",
        "colour": "#ff0c5a"
    },
    {
        "id": "Gosu",
        "colour": "#82937f"
    },
    {
        "id": "FreeMarker",
        "colour": "#0050b2"
    },
    {
        "id": "Ruby",
        "colour": "#701516"
    },
    {
        "id": "Component Pascal",
        "colour": "#b0ce4e"
    },
    {
        "id": "Arc",
        "colour": "#aa2afe"
    },
    {
        "id": "Brainfuck",
        "colour": "#2F2530"
    },
    {
        "id": "Nit",
        "colour": "#009917"
    },
    {
        "id": "APL",
        "colour": "#5A8164"
    },
    {
        "id": "Go",
        "colour": "#375eab"
    },
    {
        "id": "Visual Basic",
        "colour": "#945db7"
    },
    {
        "id": "PHP",
        "colour": "#4F5D95"
    },
    {
        "id": "Cirru",
        "colour": "#ccccff"
    },
    {
        "id": "SQF",
        "colour": "#3F3F3F"
    },
    {
        "id": "Glyph",
        "colour": "#e4cc98"
    },
    {
        "id": "Java",
        "colour": "#b07219"
    },
    {
        "id": "MAXScript",
        "colour": "#00a6a6"
    },
    {
        "id": "Scala",
        "colour": "#DC322F"
    },
    {
        "id": "Makefile",
        "colour": "#427819"
    },
    {
        "id": "ColdFusion",
        "colour": "#ed2cd6"
    },
    {
        "id": "Perl",
        "colour": "#0298c3"
    },
    {
        "id": "Lua",
        "colour": "#000080"
    },
    {
        "id": "Vue",
        "colour": "#2c3e50"
    },
    {
        "id": "Verilog",
        "colour": "#b2b7f8"
    },
    {
        "id": "Factor",
        "colour": "#636746"
    },
    {
        "id": "Haxe",
        "colour": "#df7900"
    },
    {
        "id": "Pure Data",
        "colour": "#91de79"
    },
    {
        "id": "Forth",
        "colour": "#341708"
    },
    {
        "id": "Red",
        "colour": "#ee0000"
    },
    {
        "id": "Hy",
        "colour": "#7790B2"
    },
    {
        "id": "Volt",
        "colour": "#1F1F1F"
    },
    {
        "id": "LSL",
        "colour": "#3d9970"
    },
    {
        "id": "eC",
        "colour": "#913960"
    },
    {
        "id": "CoffeeScript",
        "colour": "#244776"
    },
    {
        "id": "HTML",
        "colour": "#e44b23"
    },
    {
        "id": "Lex",
        "colour": "#DBCA00"
    },
    {
        "id": "API Blueprint",
        "colour": "#2ACCA8"
    },
    {
        "id": "Swift",
        "colour": "#ffac45"
    },
    {
        "id": "C",
        "colour": "#555555"
    },
    {
        "id": "AutoHotkey",
        "colour": "#6594b9"
    },
    {
        "id": "Isabelle",
        "colour": "#FEFE00"
    },
    {
        "id": "Metal",
        "colour": "#8f14e9"
    },
    {
        "id": "Clarion",
        "colour": "#db901e"
    },
    {
        "id": "JSONiq",
        "colour": "#40d47e"
    },
    {
        "id": "Boo",
        "colour": "#d4bec1"
    },
    {
        "id": "AutoIt",
        "colour": "#1C3552"
    },
    {
        "id": "Clojure",
        "colour": "#db5855"
    },
    {
        "id": "Rust",
        "colour": "#dea584"
    },
    {
        "id": "Prolog",
        "colour": "#74283c"
    },
    {
        "id": "SourcePawn",
        "colour": "#5c7611"
    },
    {
        "id": "AMPL",
        "colour": "#E6EFBB"
    },
    {
        "id": "FORTRAN",
        "colour": "#4d41b1"
    },
    {
        "id": "ANTLR",
        "colour": "#9DC3FF"
    },
    {
        "id": "Harbour",
        "colour": "#0e60e3"
    },
    {
        "id": "Tcl",
        "colour": "#e4cc98"
    },
    {
        "id": "BlitzMax",
        "colour": "#cd6400"
    },
    {
        "id": "PigLatin",
        "colour": "#fcd7de"
    },
    {
        "id": "Lasso",
        "colour": "#999999"
    },
    {
        "id": "ECL",
        "colour": "#8a1267"
    },
    {
        "id": "VHDL",
        "colour": "#adb2cb"
    },
    {
        "id": "Elm",
        "colour": "#60B5CC"
    },
    {
        "id": "Propeller Spin",
        "colour": "#7fa2a7"
    },
    {
        "id": "X10",
        "colour": "#4B6BEF"
    },
    {
        "id": "IDL",
        "colour": "#a3522f"
    },
    {
        "id": "ATS",
        "colour": "#1ac620"
    },
    {
        "id": "Ada",
        "colour": "#02f88c"
    },
    {
        "id": "Unity3D Asset",
        "colour": "#ab69a1"
    },
    {
        "id": "Nu",
        "colour": "#c9df40"
    },
    {
        "id": "LFE",
        "colour": "#004200"
    },
    {
        "id": "SuperCollider",
        "colour": "#46390b"
    },
    {
        "id": "Oxygene",
        "colour": "#cdd0e3"
    },
    {
        "id": "ASP",
        "colour": "#6a40fd"
    },
    {
        "id": "Assembly",
        "colour": "#6E4C13"
    },
    {
        "id": "Gnuplot",
        "colour": "#f0a9f0"
    },
    {
        "id": "JFlex",
        "colour": "#DBCA00"
    },
    {
        "id": "NetLinx",
        "colour": "#0aa0ff"
    },
    {
        "id": "Turing",
        "colour": "#45f715"
    },
    {
        "id": "Vala",
        "colour": "#fbe5cd"
    },
    {
        "id": "Processing",
        "colour": "#0096D8"
    },
    {
        "id": "Arduino",
        "colour": "#bd79d1"
    },
    {
        "id": "FLUX",
        "colour": "#88ccff"
    },
    {
        "id": "NetLogo",
        "colour": "#ff6375"
    },
    {
        "id": "C Sharp",
        "colour": "#178600"
    },
    {
        "id": "CSS",
        "colour": "#563d7c"
    },
    {
        "id": "Emacs Lisp",
        "colour": "#c065db"
    },
    {
        "id": "Stan",
        "colour": "#b2011d"
    },
    {
        "id": "SaltStack",
        "colour": "#646464"
    },
    {
        "id": "QML",
        "colour": "#44a51c"
    },
    {
        "id": "Pike",
        "colour": "#005390"
    },
    {
        "id": "LOLCODE",
        "colour": "#cc9900"
    },
    {
        "id": "ooc",
        "colour": "#b0b77e"
    },
    {
        "id": "Handlebars",
        "colour": "#01a9d6"
    },
    {
        "id": "J",
        "colour": "#9EEDFF"
    },
    {
        "id": "Mask",
        "colour": "#f97732"
    },
    {
        "id": "EmberScript",
        "colour": "#FFF4F3"
    },
    {
        "id": "TeX",
        "colour": "#3D6117"
    },
    {
        "id": "Nemerle",
        "colour": "#3d3c6e"
    },
    {
        "id": "KRL",
        "colour": "#28431f"
    },
    {
        "id": "Ren'Py",
        "colour": "#ff7f7f"
    },
    {
        "id": "Unified Parallel C",
        "colour": "#4e3617"
    },
    {
        "id": "Golo",
        "colour": "#88562A"
    },
    {
        "id": "Fancy",
        "colour": "#7b9db4"
    },
    {
        "id": "OCaml",
        "colour": "#3be133"
    },
    {
        "id": "Shen",
        "colour": "#120F14"
    },
    {
        "id": "Pascal",
        "colour": "#b0ce4e"
    },
    {
        "id": "F#",
        "colour": "#b845fc"
    },
    {
        "id": "Puppet",
        "colour": "#302B6D"
    },
    {
        "id": "ActionScript",
        "colour": "#882B0F"
    },
    {
        "id": "Diff",
        "colour": "#88dddd"
    },
    {
        "id": "Ragel in Ruby Host",
        "colour": "#9d5200"
    },
    {
        "id": "Fantom",
        "colour": "#dbded5"
    },
    {
        "id": "Zephir",
        "colour": "#118f9e"
    },
    {
        "id": "Click",
        "colour": "#E4E6F3"
    },
    {
        "id": "Smalltalk",
        "colour": "#596706"
    },
    {
        "id": "DM",
        "colour": "#447265"
    },
    {
        "id": "Ioke",
        "colour": "#078193"
    },
    {
        "id": "PogoScript",
        "colour": "#d80074"
    },
    {
        "id": "LiveScript",
        "colour": "#499886"
    },
    {
        "id": "JavaScript",
        "colour": "#f1e05a"
    },
    {
        "id": "VimL",
        "colour": "#199f4b"
    },
    {
        "id": "PureScript",
        "colour": "#1D222D"
    },
    {
        "id": "ABAP",
        "colour": "#E8274B"
    },
    {
        "id": "Matlab",
        "colour": "#bb92ac"
    },
    {
        "id": "Slash",
        "colour": "#007eff"
    },
    {
        "id": "R",
        "colour": "#198ce7"
    },
    {
        "id": "Erlang",
        "colour": "#B83998"
    },
    {
        "id": "Pan",
        "colour": "#cc0000"
    },
    {
        "id": "LookML",
        "colour": "#652B81"
    },
    {
        "id": "Eagle",
        "colour": "#814C05"
    },
    {
        "id": "Scheme",
        "colour": "#1e4aec"
    },
    {
        "id": "PLSQL",
        "colour": "#dad8d8"
    },
    {
        "id": "Python",
        "colour": "#3572A5"
    },
    {
        "id": "Max",
        "colour": "#c4a79c"
    },
    {
        "id": "Common Lisp",
        "colour": "#3fb68b"
    },
    {
        "id": "Latte",
        "colour": "#A8FF97"
    },
    {
        "id": "XQuery",
        "colour": "#5232e7"
    },
    {
        "id": "Omgrofl",
        "colour": "#cabbff"
    },
    {
        "id": "XC",
        "colour": "#99DA07"
    },
    {
        "id": "Nimrod",
        "colour": "#37775b"
    },
    {
        "id": "SystemVerilog",
        "colour": "#DAE1C2"
    },
    {
        "id": "Chapel",
        "colour": "#8dc63f"
    },
    {
        "id": "Groovy",
        "colour": "#e69f56"
    },
    {
        "id": "Dylan",
        "colour": "#6c616e"
    },
    {
        "id": "E",
        "colour": "#ccce35"
    },
    {
        "id": "Parrot",
        "colour": "#f3ca0a"
    },
    {
        "id": "Grammatical Framework",
        "colour": "#79aa7a"
    },
    {
        "id": "Game Maker Language",
        "colour": "#8fb200"
    },
    {
        "id": "Papyrus",
        "colour": "#6600cc"
    },
    {
        "id": "NetLinx+ERB",
        "colour": "#747faa"
    },
    {
        "id": "Clean",
        "colour": "#3F85AF"
    },
    {
        "id": "Alloy",
        "colour": "#64C800"
    },
    {
        "id": "Squirrel",
        "colour": "#800000"
    },
    {
        "id": "PAWN",
        "colour": "#dbb284"
    },
    {
        "id": "UnrealScript",
        "colour": "#a54c4d"
    },
    {
        "id": "Standard ML",
        "colour": "#dc566d"
    },
    {
        "id": "Slim",
        "colour": "#ff8f77"
    },
    {
        "id": "Perl6",
        "colour": "#0000fb"
    },
    {
        "id": "Julia",
        "colour": "#a270ba"
    },
    {
        "id": "Haskell",
        "colour": "#29b544"
    },
    {
        "id": "NCL",
        "colour": "#28431f"
    },
    {
        "id": "Io",
        "colour": "#a9188d"
    },
    {
        "id": "Rouge",
        "colour": "#cc0088"
    },
    {
        "id": "cpp",
        "colour": "#f34b7d"
    },
    {
        "id": "AGS Script",
        "colour": "#B9D9FF"
    },
    {
        "id": "Dogescript",
        "colour": "#cca760"
    },
    {
        "id": "nesC",
        "colour": "#94B0C7"
    }
];
//# sourceMappingURL=colours.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <img src=\"{{ user.avatar_url }}\" class=\"img-thumbnail rounded-circle\">\n            <br>\n            <br>\n\n            <h2 style=\"font-weight: bold\">{{ user.name }}</h2>\n            <div *ngIf=\"user.location\">\n                <span class=\"octicon octicon-location\"></span> {{ user.location }}\n                <br>\n            </div>\n            <div *ngIf=\"user.blog\">\n                <span class=\"octicon octicon-link\"></span>\n                <a href=\"{{ user.blog }}\">Website</a>\n                <br>\n            </div>\n            <div *ngIf=\"user.company\">\n                <span class=\"octicon octicon-organization\"></span>{{ user.company }}\n                <br>\n            </div>\n            <div *ngIf=\"user.email\">\n                <span class=\"octicon octicon-mail\"></span>{{ user.email }}\n                <br>\n            </div>\n\n            <br>\n            <p>{{ user.bio }}</p>\n\n            <h5>Interests</h5>\n            <div *ngFor=\"let interest of interests\">\n                <li> {{ interest.interest }}</li>\n            </div>\n            <br>\n            <button type=\"button\" href=\"#\" routerLink=\"/profile/{{ user._id }}/interests\" class=\"btn btn-primary btn-sm\">\n                <span class=\"octicon octicon-pencil\"></span>\n                Edit interests\n            </button>\n        </div>\n        <div class=\"col-6\">\n            <div style=\"border: 2px solid #eee; padding: 1.5em; margin-bottom: 2em\">\n                <h2 style=\"font-weight: bold\">Skills</h2>\n                <div *ngFor=\"let skill of skills\">\n                    <li style=\"display: inline\">\n                        <div [ngStyle]=\"{background: findColour(skill).colour}\" style=\"\n                            -webkit-border-radius: 8px;\n                            moz-border-radius: 8px;\n                            border-radius: 8px;\n                            width: 8px;\n                            height: 8px;\n                            display: inline-block;\n                            margin-right: 5px;\">\n                        </div>\n                        {{ skill }}</li>\n                </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-bottom: 2em;\">\n                <div class=\"col\">\n                    <h2 style=\"font-weight: bold\">Projects</h2>\n                </div>\n                <div class=\"col\" style=\"text-align: right\">\n                    <button type=\"button\" class=\"btn btn-success\">\n                        <span class=\"octicon octicon-plus\"></span>\n                        Add new\n                    </button>\n                </div>\n            </div>\n\n            <div *ngFor=\"let project of projects\">\n                <h3 style=\"font-weight: bold\">{{ project.name }}</h3>\n\n                <small *ngIf=\"project.html_url\">\n                    <span class=\"octicon octicon-mark-github\"></span>\n                    <a href=\"{{ project.html_url }}\">View on Github</a> &middot;\n\n                </small>\n                <small *ngIf=\"project.html_url\">\n                    <span class=\"octicon octicon-link\"></span>\n                    <a href=\"{{ project.ext_url }}\">Project link</a>\n                </small>\n\n                <p style=\"padding-top: 5px\">{{ project.description }}</p>\n                <a class=\"btn btn-secondary\" href=\"#\" routerLink=\"/profile/{{ user._id }}/projects/{{ project._id }}\">Edit</a>\n                <a class=\"btn btn-danger\" (click)=\"deleteProject(project._id)\" href=\"#\" routerLink=\"/profile\">Delete</a>\n                <br>\n                <br>\n                <br>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interest_service__ = __webpack_require__("../../../../../src/app/services/interest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colours__ = __webpack_require__("../../../../../src/app/components/profile/colours.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(authService, userService, projectService, interestService) {
        this.authService = authService;
        this.userService = userService;
        this.projectService = projectService;
        this.interestService = interestService;
        this.token = this.authService.getToken();
        this.colours = __WEBPACK_IMPORTED_MODULE_5__colours__["a" /* colours */];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the user
        this.userService.getUser(this.authService.getLoggedInId()).subscribe(function (user) {
            _this.getUser(user);
        });
    };
    ProfileComponent.prototype.getUser = function (user) {
        var _this = this;
        this.user = user;
        this.id = user._id;
        // Get user's projects
        this.projectService.getProjects(this.user._id)
            .subscribe(function (projects) { return _this.getProjects(projects); });
        // Get user's interests
        this.interestService.getInterests(this.user._id)
            .subscribe(function (interests) { return _this.getInterests(interests); });
    };
    ProfileComponent.prototype.getProjects = function (projects) {
        this.projects = projects;
        this.getSkills();
    };
    ProfileComponent.prototype.getSkills = function () {
        var skills = [];
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            if (project.language) {
                var langs = (project.language).split(',');
                for (var _b = 0, langs_1 = langs; _b < langs_1.length; _b++) {
                    var lang = langs_1[_b];
                    this.add(skills, lang.trim());
                }
            }
        }
        this.skills = skills;
    };
    ProfileComponent.prototype.findColour = function (name) {
        var colour = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.colours, { 'id': name });
        if (colour !== undefined) {
            return colour;
        }
        return { id: 'undefined', colour: '#ddd' };
    };
    ProfileComponent.prototype.getInterests = function (interests) {
        this.interests = interests;
    };
    ProfileComponent.prototype.add = function (array, value) {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    };
    ProfileComponent.prototype.deleteProject = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.remove(this.projects, function (p) {
            return p._id === id;
        });
        this.projectService.deleteProject(this.id, id).subscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_interest_service__["a" /* InterestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interest_service__["a" /* InterestService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profiles/public-profiles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profiles/public-profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>All users</h1>\n<br>\n\n<div class=\"card-columns\">\n    <div *ngFor=\"let user of users\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"{{ user.avatar_url }}\" width=\"100%\" alt=\"\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">{{ user.login }}</h4>\n                <p>\n                    <span class=\"octicon octicon-pin\" aria-hidden=\"true\"></span>\n                    {{ user.location }}\n                </p>\n                <p class=\"card-text\">{{ user.bio }}</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/public-profiles/public-profiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfilesComponent = (function () {
    function PublicProfilesComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.token = this.authService.getToken();
    }
    PublicProfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get all users
        this.userService.getUsers()
            .subscribe(function (user) { return _this.getUsers(user); });
    };
    PublicProfilesComponent.prototype.getUsers = function (users) {
        this.users = users;
    };
    return PublicProfilesComponent;
}());
PublicProfilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-profiles',
        template: __webpack_require__("../../../../../src/app/components/public-profiles/public-profiles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-profiles/public-profiles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], PublicProfilesComponent);

var _a, _b;
//# sourceMappingURL=public-profiles.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem("token") === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]); // get it here within intercept
        var token = this.authService.getToken();
        var authRequest = request.clone({
            headers: request.headers.set('Authorization', "bearer " + token)
        });
        console.log(authRequest);
        return next.handle(authRequest);
    };
    return TokenInterceptor;
}());
TokenInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], TokenInterceptor);

var _a;
//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var api = 'http://localhost:3000';
var AuthService = (function () {
    function AuthService(http, userService, projectService, router) {
        this.http = http;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
    }
    AuthService.prototype.login = function (token) {
        var _this = this;
        localStorage.setItem('token', token);
        this.getUserId(token).subscribe(function (id) {
            localStorage.setItem('userId', id);
        });
        this.getUser(token).subscribe(function (user) {
            _this.projectService.getProjects(user._id).subscribe(function (projects) {
                if (projects.length === 0 && user.interests.length == 0) {
                    _this.userService.populateUser(user._id, user.login);
                    return;
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('token', null);
        localStorage.setItem('userId', null);
        this.router.navigate(['/']);
    };
    AuthService.prototype.getUser = function (token) {
        return this.http.get(api + "/auth/return", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization', 'bearer ' + token)
        })
            .map(function (user) { return user['user']; });
    };
    AuthService.prototype.getUserId = function (token) {
        return this.http.get(api + "/auth/return")
            .map(function (user) { return user['user']._id; });
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getLoggedInId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.getToken() == null && this.getLoggedInId() == null) {
            return false;
        }
        else {
            return true;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/interest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var api = 'http://localhost:3000/api';
var InterestService = (function () {
    function InterestService(http) {
        this.http = http;
    }
    InterestService.prototype.getInterests = function (userId) {
        return this.http.get(api + "/users/" + userId + "/interests");
    };
    InterestService.prototype.getInterest = function (userId, interestId) {
        return this.http.get(api + "/users/" + userId + "/interests");
    };
    InterestService.prototype.addInterest = function (userId, interest) {
        return this.http.post(api + "/users/" + userId + "/interests", { interest: interest });
    };
    InterestService.prototype.deleteInterest = function (userId, interestId) {
        return this.http.delete(api + "/users/" + userId + "/interests/" + interestId);
    };
    InterestService.prototype.updateInterest = function (userId, interestId, interest) {
        return this.http.put(api + "/users/" + userId + "/interests/" + interestId, { interest: interest });
    };
    return InterestService;
}());
InterestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], InterestService);

var _a;
//# sourceMappingURL=interest.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var api = 'http://localhost:3000/api';
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function (id) {
        return this.http.get(api + "/users/" + id + "/projects");
    };
    ProjectService.prototype.getProject = function (userId, projectId) {
        return this.http.get(api + "/users/" + userId + "/projects/" + projectId);
    };
    ProjectService.prototype.addProject = function (userId, project) {
        var name = project.name;
        var description = project.description || '';
        var language = project.language || '';
        var html_url = project.html_url || '';
        var ext_url = project.ext_url || '';
        return this.http.post(api + "/users/" + userId + "/projects", {
            name: name,
            userId: userId,
            description: description,
            language: language,
            html_url: html_url,
            ext_url: ext_url
        });
    };
    ProjectService.prototype.deleteProject = function (userId, projectId) {
        return this.http.delete(api + "/users/" + userId + "/projects/" + projectId);
    };
    ProjectService.prototype.updateProject = function (userId, projectId, project) {
        var name = project.name;
        var description = project.description;
        var language = project.language;
        var html_url = project.html_url;
        var ext_url = project.ext_url;
        return this.http.put(api + "/users/" + userId + "/projects/" + projectId, {
            name: name,
            userId: userId,
            description: description,
            language: language,
            html_url: html_url,
            ext_url: ext_url
        }, { observe: 'response' });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interest_service__ = __webpack_require__("../../../../../src/app/services/interest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var api = 'http://localhost:3000/api';
var github_api = 'https://api.github.com/user';
var UserService = (function () {
    function UserService(http, https, interestService, projectService) {
        this.http = http;
        this.https = https;
        this.interestService = interestService;
        this.projectService = projectService;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(api + "/users");
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(api + "/users/" + id);
    };
    UserService.prototype.populateUser = function (id, login) {
        var _this = this;
        // Add five random interests
        var randomInterests = ['Pizza', 'Mario-Kart 64', 'Airports', 'Hyperloop', 'Electro Synth', 'The Roman Forum as Cicero saw it',
            'The Old Kanye', 'Crop circles', 'Eames Chairs', 'Competitive trampolining', 'Russian Constructivism', 'WW1 Memorabilia',
            'Planetariums', 'UFO Conspiracy theories', 'Dadism'];
        var interests = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.sampleSize(randomInterests, 5);
        for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
            var interest = interests_1[_i];
            this.interestService.addInterest(id, interest).subscribe();
        }
        // Get user's projects from github
        this.getRepos(login).subscribe(function (projects) {
            for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
                var project = projects_1[_i];
                _this.projectService.addProject(id, project).subscribe();
            }
        });
    };
    UserService.prototype.getRepos = function (login) {
        return this.https.get(github_api + "s/" + login + "/repos")
            .map(function (projects) {
            return projects.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__interest_service__["a" /* InterestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interest_service__["a" /* InterestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__project_service__["a" /* ProjectService */]) === "function" && _d || Object])
], UserService);

var _a, _b, _c, _d;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map