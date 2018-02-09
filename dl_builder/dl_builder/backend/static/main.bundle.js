webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100vw;\n}\n\napp-new-slide-form {\n  min-width: 90%;\n  height: auto;\n}\n\n.full-width {\n  width:100%;\n  height: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n  <app-sidebar (displayForm)=\"display_form($event)\"></app-sidebar>\n  <app-popup></app-popup>\n  <div class=\"full-width\"></div>\n  <app-new-slide-form *ngIf=\"this.showSlideForm==true\"></app-new-slide-form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showSlideForm = false;
        this.title = 'app';
    }
    AppComponent.prototype.display_form = function (e) {
        console.log("here");
        this.showSlideForm = this.showSlideForm == true ? false : true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var popup_component_1 = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
var generate_slide_component_1 = __webpack_require__("../../../../../src/app/sidebar/generate-slide/generate-slide.component.ts");
var new_slide_form_component_1 = __webpack_require__("../../../../../src/app/new-slide-form/new-slide-form.component.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var new_slide_service_1 = __webpack_require__("../../../../../src/app/new-slide-form/new-slide.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                popup_component_1.PopupComponent,
                generate_slide_component_1.GenerateSlideComponent,
                new_slide_form_component_1.NewSlideFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                http_1.HttpClientModule,
                http_1.HttpClientXsrfModule.withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken',
                }),
            ],
            providers: [new_slide_service_1.NewSlideService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<header class=\" menu mdc-toolbar mdc-toolbar--fixed\">\n  <a href=\"#\" class=\"material-icons mdc-toolbar__menu-icon\">menu</a>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/new-slide-form/new-slide-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-slide-form/new-slide-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdc-layout-grid grid\">\n  <div class=\"mdc-layout-grid__inner grid\">\n    <div class=\"mdc-layout-grid__cell--span-4\"></div>\n    <div class=\"mdc-layout-grid__cell--span-4\">\n        <h1 class=\"mdc-typography--display1\">Let's give this thing a name!</h1>\n\n        <form  id=\"greeting-form\">\n          <div>\n            <div class=\"mdc-form-field\">\n              <div class=\"mdc-text-field mdc-text-field--upgraded\">\n                <input type=\"text\" id=\"pre-filled\" class=\"mdc-text-field__input\" value=\"\">\n                <label class=\"mdc-text-field__label mdc-text-field__label--float-above\" for=\"pre-filled\">\n                  Slide Deck Name\n                </label>\n                <div class=\"mdc-text-field__bottom-line\"></div>\n              </div>\n              <p class=\"mdc-text-field-helper-text\" aria-hidden=\"true\">\n                This will be displayed on your public profile\n              </p>\n            </div>\n          </div>\n\n          <button type=\"submit\"\n                  class=\"mdc-button\n                         mdc-button--raised\n                         mdc-ripple-surface\"\n                  data-mdc-auto-init=\"MDCRipple\"\n                   (click)=\"sendRequest()\">\n            Next\n          </button>\n        </form>\n    </div>\n    <div class=\"mdc-layout-grid__cell--span-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-slide-form/new-slide-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var new_slide_service_1 = __webpack_require__("../../../../../src/app/new-slide-form/new-slide.service.ts");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var NewSlideFormComponent = /** @class */ (function () {
    function NewSlideFormComponent(_newSlideService) {
        this._newSlideService = _newSlideService;
    }
    NewSlideFormComponent.prototype.ngOnInit = function () {
    };
    NewSlideFormComponent.prototype.sendRequest = function () {
        var obj = { name: "Testing" };
        this._newSlideService.newSlide(obj).subscribe(function (data) {
            // refresh the list
            console.log(data);
            return true;
        }, function (error) {
            console.error("Error saving food!");
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    NewSlideFormComponent = __decorate([
        core_1.Component({
            selector: 'app-new-slide-form',
            template: __webpack_require__("../../../../../src/app/new-slide-form/new-slide-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-slide-form/new-slide-form.component.css")]
        }),
        __metadata("design:paramtypes", [new_slide_service_1.NewSlideService])
    ], NewSlideFormComponent);
    return NewSlideFormComponent;
}());
exports.NewSlideFormComponent = NewSlideFormComponent;


/***/ }),

/***/ "../../../../../src/app/new-slide-form/new-slide.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var NewSlideService = /** @class */ (function () {
    function NewSlideService(http) {
        this.http = http;
    }
    NewSlideService.prototype.newSlide = function (obj) {
        var body = JSON.stringify(obj);
        console.log(obj);
        return this.http.post('http://localhost:8000/links/', body, httpOptions);
    };
    NewSlideService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NewSlideService);
    return NewSlideService;
}());
exports.NewSlideService = NewSlideService;


/***/ }),

/***/ "../../../../../src/app/popup/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<aside id=\"my-mdc-dialog\"\n  class=\"mdc-dialog\"\n  role=\"alertdialog\"\n  aria-labelledby=\"my-mdc-dialog-label\"\n  aria-describedby=\"my-mdc-dialog-description\">\n  <div class=\"mdc-dialog__surface\">\n    <header class=\"mdc-dialog__header\">\n      <h2 id=\"my-mdc-dialog-label\" class=\"mdc-dialog__header__title\">\n        Want to learn the ropes?\n      </h2>\n    </header>\n    <section id=\"my-mdc-dialog-description\" class=\"mdc-dialog__body mdc-theme--text-primary\">\n      Welcome to the datalayer builder! Since this is your first time here, would you like a quick tutorial on how things work? It'll take about 5 minutes.\n    </section>\n    <footer class=\"mdc-dialog__footer\">\n      <button type=\"button\" class=\"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel\">Pshh. I'm a pro</button>\n      <button type=\"button\" class=\"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept\">Show me the way</button>\n    </footer>\n  </div>\n  <div class=\"mdc-dialog__backdrop\"></div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dialog_1 = __webpack_require__("../../../../@material/dialog/index.js");
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
        var dialog = new dialog_1.MDCDialog(document.querySelector('#my-mdc-dialog'));
        dialog.show();
    };
    PopupComponent = __decorate([
        core_1.Component({
            selector: 'app-popup',
            template: __webpack_require__("../../../../../src/app/popup/popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;


/***/ }),

/***/ "../../../../../src/app/sidebar/generate-slide/generate-slide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/generate-slide/generate-slide.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<aside id=\"my-mdc-dialog\"\n  class=\"mdc-dialog mdc-theme--secondary \"\n  role=\"alertdialog\"\n  aria-labelledby=\"my-mdc-dialog-label\"\n  aria-describedby=\"my-mdc-dialog-description\">\n  <div class=\"mdc-dialog__surface background\">\n    <header class=\"mdc-dialog__header\">\n      <h2 id=\"my-mdc-dialog-label\" class=\"mdc-dialog__header__title\">\n        Great! Let's get going!\n      </h2>\n    </header>\n    <section id=\"my-mdc-dialog-description\" class=\"mdc-dialog__body mdc-theme--text-primary-on-light\">\n      Do you want to create a spec or an audit?\n    </section>\n    <section>\n      <div class=\"mdc-layout-grid\">\n        <div class=\"mdc-layout-grid__inner\">\n          <div class=\"mdc-layout-grid__cell--span-2\"></div>\n          <div class=\"mdc-layout-grid__cell--span-4\">\n            <div class=\"mdc-form-field\">\n              <div class=\"mdc-checkbox\">\n                <input type=\"checkbox\"\n                       id=\"my-checkbox\"\n                       class=\"mdc-checkbox__native-control\"/>\n                <div class=\"mdc-checkbox__background\">\n                  <svg class=\"mdc-checkbox__checkmark\"\n                       viewBox=\"0 0 24 24\">\n                    <path class=\"mdc-checkbox__checkmark__path\"\n                          fill=\"none\"\n                          stroke=\"white\"\n                          d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n                  </svg>\n                  <div class=\"mdc-checkbox__mixedmark\"></div>\n                </div>\n              </div>\n\n              <label for=\"my-checkbox\">Implementation Spec</label>\n            </div>\n          </div>\n          <div class=\"mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--order-4\">\n            <div class=\"mdc-form-field\">\n              <div class=\"mdc-checkbox\">\n                <input type=\"checkbox\"\n                       id=\"my-checkbox\"\n                       class=\"mdc-checkbox__native-control\"/>\n                <div class=\"mdc-checkbox__background\">\n                  <svg class=\"mdc-checkbox__checkmark\"\n                       viewBox=\"0 0 24 24\">\n                    <path class=\"mdc-checkbox__checkmark__path\"\n                          fill=\"none\"\n                          stroke=\"white\"\n                          d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n                  </svg>\n                  <div class=\"mdc-checkbox__mixedmark\"></div>\n                </div>\n              </div>\n              <label for=\"my-checkbox\">Implementation Audit</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <footer class=\"mdc-dialog__footer\">\n      <button (click)=\"destroy($event)\" type=\"submit\"\n              class=\"mdc-button\n                     mdc-button--raised\n                     mdc-ripple-surface\"\n              data-mdc-auto-init=\"MDCRipple\">\n        Create!\n      </button>\n    </footer>\n  </div>\n  <div class=\"mdc-dialog__backdrop\"></div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/generate-slide/generate-slide.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dialog_1 = __webpack_require__("../../../../@material/dialog/index.js");
var GenerateSlideComponent = /** @class */ (function () {
    function GenerateSlideComponent() {
        this.authorClick = new core_1.EventEmitter();
    }
    GenerateSlideComponent.prototype.ngOnInit = function () {
        var dialog = new dialog_1.MDCDialog(document.querySelector('#my-mdc-dialog'));
        dialog.show();
    };
    GenerateSlideComponent.prototype.destroy = function (e) {
        this.authorClick.emit(e);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GenerateSlideComponent.prototype, "authorClick", void 0);
    GenerateSlideComponent = __decorate([
        core_1.Component({
            selector: 'app-generate-slide',
            template: __webpack_require__("../../../../../src/app/sidebar/generate-slide/generate-slide.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/generate-slide/generate-slide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GenerateSlideComponent);
    return GenerateSlideComponent;
}());
exports.GenerateSlideComponent = GenerateSlideComponent;


/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdc-drawer{\n  height: 100vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<aside class=\"mdc-drawer mdc-drawer--persistent mdc-typography\">\n  <nav class=\"mdc-drawer__drawer mdc-theme--primary\">\n    <header class=\"mdc-drawer__header \">\n      <div class=\"mdc-drawer__header-content\">\n        Slide Builder\n      </div>\n    </header>\n    <nav id=\"icon-with-text-demo\" class=\"mdc-drawer__content mdc-list\">\n      <a class=\"mdc-list-item mdc-list-item--activated\" href=\"#\">\n        <i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">assignment_ind</i>View Builds\n      </a>\n      <a class=\"mdc-list-item mdc-theme--primary-bg mdc-theme--text-primary-on-dark\" href=\"#\">\n        <i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">slideshow</i>Export Build\n      </a>\n      <header class=\"mdc-drawer__header \">\n        <div class=\"mdc-drawer__header-content\">\n          Things to do\n        </div>\n      </header>\n      <a class=\"mdc-list-item mdc-list-item\" (click)=\"menu_selected()\" href=\"#\">\n        <i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">assignment_ind</i>Build Spec\n      </a>\n      <a class=\"mdc-list-item mdc-list-item\" href=\"#\">\n        <i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">assignment_ind</i>Build Push\n      </a>\n      <a class=\"mdc-list-item mdc-list-item\" href=\"#\">\n        <i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">assignment_ind</i>Insert Report\n      </a>\n    </nav>\n  </nav>\n</aside>\n<app-generate-slide *ngIf=\"this.loadGenerate==true\" (authorClick)=\"display_menu($event)\"></app-generate-slide>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var drawer_1 = __webpack_require__("../../../../@material/drawer/index.js");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.displayForm = new core_1.EventEmitter();
        this.loadGenerate = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var drawer = new drawer_1.MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
        document.querySelector('.menu').addEventListener('click', function () { return drawer.open = drawer.open == true ? false : true; });
    };
    SidebarComponent.prototype.menu_selected = function () {
        this.loadGenerate = this.loadGenerate == true ? false : true;
    };
    SidebarComponent.prototype.display_menu = function (e) {
        this.displayForm.emit(e);
        this.loadGenerate = this.loadGenerate == true ? false : true;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "displayForm", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map