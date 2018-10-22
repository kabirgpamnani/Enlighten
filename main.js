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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#csia-logo {\n    width: 8vw;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav mode=\"side\" #sideMenu> \n    <mat-toolbar color=\"primary\"> </mat-toolbar>\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let l of labels\" (click)=\"showItem(l)\">\n        {{ l }}\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <mat-toolbar color=\"primary\" \n        fxLayout=\"row column\" fxLayoutAlign=\"space-between center\">\n      <div fxLayoutAlign=\"start center\">\n        <!-- event binding -->\n        <mat-icon style=\"margin-right: 10px;\" (click)=\"toggleSideMenu()\">\n          menu\n        </mat-icon>\n        <span></span>\n      </div>\n      <img src=\"assets/lightbulb.png\" id=\"csia-logo\">\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    //Inject in the router component / must have private
    function AppComponent(router) {
        this.router = router;
        this.labels = ['Enlighten', 'Electricity', 'Car', 'Food', 'Air Travel'];
    }
    AppComponent.prototype.toggleSideMenu = function () {
        this.sideMenu.toggle();
    };
    AppComponent.prototype.showItem = function (menuItem) {
        console.log('>>> selected: ', menuItem);
        this.sideMenu.close();
        this.router.navigate(['/', menuItem.toLocaleLowerCase()]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sideMenu'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "sideMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_enlighten_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/enlighten.component */ "./src/app/components/enlighten.component.ts");
/* harmony import */ var _approute_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approute.module */ "./src/app/approute.module.ts");
/* harmony import */ var _components_electricity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/electricity.component */ "./src/app/components/electricity.component.ts");
/* harmony import */ var _components_car_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/car.component */ "./src/app/components/car.component.ts");
/* harmony import */ var _components_etotals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/etotals.component */ "./src/app/components/etotals.component.ts");
/* harmony import */ var _components_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reduce-or-replenish.component */ "./src/app/components/reduce-or-replenish.component.ts");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enlighten.service */ "./src/app/enlighten.service.ts");
/* harmony import */ var _components_pie_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pie-chart.component */ "./src/app/components/pie-chart.component.ts");
/* harmony import */ var _components_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/export.component */ "./src/app/components/export.component.ts");
/* harmony import */ var _components_car_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/car-reduce-or-replenish.component */ "./src/app/components/car-reduce-or-replenish.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//AppComponent is part of the generated code












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_enlighten_component__WEBPACK_IMPORTED_MODULE_6__["EnlightenComponent"],
                _components_electricity_component__WEBPACK_IMPORTED_MODULE_8__["ElectricityComponent"],
                _components_car_component__WEBPACK_IMPORTED_MODULE_9__["CarComponent"],
                _components_etotals_component__WEBPACK_IMPORTED_MODULE_10__["EtotalsComponent"],
                _components_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_11__["ReduceOrReplenishComponent"],
                _components_pie_chart_component__WEBPACK_IMPORTED_MODULE_13__["PieChartComponent"],
                _components_export_component__WEBPACK_IMPORTED_MODULE_14__["ExportComponent"],
                _components_car_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_15__["CarReduceOrReplenishComponent"],
            ],
            //Imports all exported components @NgModule({ exports: [ ... ]})
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _approute_module__WEBPACK_IMPORTED_MODULE_7__["AppRouteModule"],
            ],
            providers: [_enlighten_service__WEBPACK_IMPORTED_MODULE_12__["EnlightenService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approute.module.ts":
/*!************************************!*\
  !*** ./src/app/approute.module.ts ***!
  \************************************/
/*! exports provided: AppRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteModule", function() { return AppRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_enlighten_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/enlighten.component */ "./src/app/components/enlighten.component.ts");
/* harmony import */ var _components_electricity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/electricity.component */ "./src/app/components/electricity.component.ts");
/* harmony import */ var _components_car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/car.component */ "./src/app/components/car.component.ts");
/* harmony import */ var _components_etotals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/etotals.component */ "./src/app/components/etotals.component.ts");
/* harmony import */ var _components_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reduce-or-replenish.component */ "./src/app/components/reduce-or-replenish.component.ts");
/* harmony import */ var _components_export_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/export.component */ "./src/app/components/export.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var APPROUTE = [
    { path: "", component: _components_enlighten_component__WEBPACK_IMPORTED_MODULE_2__["EnlightenComponent"] },
    { path: "enlighten", component: _components_enlighten_component__WEBPACK_IMPORTED_MODULE_2__["EnlightenComponent"] },
    { path: "electricity", component: _components_electricity_component__WEBPACK_IMPORTED_MODULE_3__["ElectricityComponent"] },
    { path: "car", component: _components_car_component__WEBPACK_IMPORTED_MODULE_4__["CarComponent"] },
    //Need to add routes here 
    { path: "etotals", component: _components_etotals_component__WEBPACK_IMPORTED_MODULE_5__["EtotalsComponent"] },
    { path: "reduceorreplenish", component: _components_reduce_or_replenish_component__WEBPACK_IMPORTED_MODULE_6__["ReduceOrReplenishComponent"] },
    { path: "export", component: _components_export_component__WEBPACK_IMPORTED_MODULE_7__["ExportComponent"] },
    //Last line
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRouteModule = /** @class */ (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APPROUTE)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouteModule);
    return AppRouteModule;
}());



/***/ }),

/***/ "./src/app/components/car-reduce-or-replenish.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/car-reduce-or-replenish.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/car-reduce-or-replenish.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/car-reduce-or-replenish.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  car-reduce-or-replenish works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/car-reduce-or-replenish.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/car-reduce-or-replenish.component.ts ***!
  \*****************************************************************/
/*! exports provided: CarReduceOrReplenishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarReduceOrReplenishComponent", function() { return CarReduceOrReplenishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarReduceOrReplenishComponent = /** @class */ (function () {
    function CarReduceOrReplenishComponent() {
    }
    CarReduceOrReplenishComponent.prototype.ngOnInit = function () {
    };
    CarReduceOrReplenishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-reduce-or-replenish',
            template: __webpack_require__(/*! ./car-reduce-or-replenish.component.html */ "./src/app/components/car-reduce-or-replenish.component.html"),
            styles: [__webpack_require__(/*! ./car-reduce-or-replenish.component.css */ "./src/app/components/car-reduce-or-replenish.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarReduceOrReplenishComponent);
    return CarReduceOrReplenishComponent;
}());



/***/ }),

/***/ "./src/app/components/car.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/car.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/car.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/car.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group >\n    <mat-tab label=\"Car\"> \n      <div style =\"padding: 10px;\" >\n     <div fxLayoutAlign = \"center\" > \n       <h1 id = \"title\" >Car</h1> </div>\n      <h2>1. Cars</h2>\n      <p>Let's evaluate your Car Usage! Find out how costly your usage is:</p>\n  \n      <form fxLayout=\"column row\" style=\"padding: 10px;\" fxLayoutAlign = \"space-between\"\n          #carForm=\"ngForm\" (ngSubmit)=\"saveCar()\">\n      \n        <mat-form-field>\n          <input type=\"number\" name=\"CQty\" placeholder=\"Quantity\" \n              required matInput [ngModel]=\"carData.Cqty\">\n          <mat-hint>Please enter the number of cars you have</mat-hint>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input type=\"number\" name=\"CHrs\" placeholder=\"Number of Hours\" \n              required matInput [ngModel]=\"carData.Chrs\">\n          <mat-hint>Please enter your average daily usage (hours)</mat-hint>\n        </mat-form-field>\n          <mat-form-field>\n              <input type=\"number\" name=\"CMonthlyCost\" placeholder=\"Monthly Cost ($)\" \n                  [(ngModel)]=\"carData.CmonthlyTotal\" readonly matInput >\n              \n            </mat-form-field>\n    \n            <mat-form-field>\n                <input type=\"number\" name=\"CYearlyCost\"  placeholder=\"Yearly Cost ($)\" \n                    [(ngModel)]=\"carData.CyearlyTotal\" readonly matInput>\n                \n              </mat-form-field>\n    \n              <mat-form-field>\n                <input type=\"number\" name=\"CCo2\" placeholder=\"CO2 Equivalence\" \n                    [(ngModel)]=\"carData.Cco2\" readonly matInput>\n                </mat-form-field>\n    \n              <div>\n                <button type=\"submit\" mat-button mat-raised-button color=\"accent\">\n                  <mat-icon>save</mat-icon> Save\n                </button>\n    \n              </div>\n           \n          </form>\n        </div>\n          </mat-tab>\n        </mat-tab-group>\n\n"

/***/ }),

/***/ "./src/app/components/car.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/car.component.ts ***!
  \*********************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enlighten.service */ "./src/app/enlighten.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarComponent = /** @class */ (function () {
    function CarComponent(router, enlightenSvc) {
        this.router = router;
        this.enlightenSvc = enlightenSvc;
        this.carData = {
            name: 'car',
            Cqty: 0,
            Chrs: 0,
            CmonthlyTotal: 0,
            CyearlyTotal: 0,
            Cco2: 0,
        };
    }
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formSub = this.carForm.valueChanges.subscribe(
        //When the form is changed, this function will be called
        //Update calulation when form data changes
        function (val) {
            var carQty = val.Cqty || 0;
            var carHrs = val.Chrs || 0;
            _this.carData.Cqty = carQty;
            _this.carData.Chrs = carHrs;
            _this.carData.CmonthlyTotal = carQty * 1.5 * carHrs * 30 * 0.23;
            _this.carData.CyearlyTotal = _this.carData.CmonthlyTotal * 12;
            _this.carData.Cco2 = _this.carData.CmonthlyTotal * 0.2;
        });
        this.enlightenSvc.getAllData()
            .then(function (results) {
            console.log('results: ', results);
            _this.carData = results[0];
        });
    };
    CarComponent.prototype.ngOnDestroy = function () {
        //Must unsub otherwise memory leak
        this.formSub.unsubscribe();
    };
    CarComponent.prototype.saveCar = function () {
        var promise = this.enlightenSvc.updateCar(this.carData);
        promise.then(function () {
        });
        promise.catch(function (err) {
            console.error('Update error: ', err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CarComponent.prototype, "carForm", void 0);
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/components/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.css */ "./src/app/components/car.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _enlighten_service__WEBPACK_IMPORTED_MODULE_3__["EnlightenService"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/components/electricity.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/electricity.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/electricity.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/electricity.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Airconditioner\">\n    <div style=\"padding: 10px;\">\n      <div fxLayoutAlign=\"center\">\n        <h1 id=\"title\">Electricity</h1>\n      </div>\n      <h2>1. Airconditioners</h2>\n      <p>Let's start with the Airconditioner! ACs are the most energy intensive appliances in Singapore households.\n        Find out how costly your usage is:</p>\n\n      <form fxLayout=\"column row\" style=\"padding: 10px;\" fxLayoutAlign=\"space-between\" #electricityForm=\"ngForm\"\n        (ngSubmit)=\"saveValues()\">\n\n        <mat-form-field>\n          <input type=\"number\" name=\"ACqty\" placeholder=\"Quantity\" required matInput [ngModel]=\"electricityData.ACqty\">\n          <mat-hint>Please enter the number of aircons you have</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"AChrs\" placeholder=\"Number of Hours\" required matInput [ngModel]=\"electricityData.AChrs\">\n          <mat-hint>Please enter your average daily usage (hours)</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"ACkWH\" value=\"1.5\" placeholder=\"KiloWatts per Hour used\" required matInput\n            readonly>\n          <mat-hint>This is our suggested value</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"ACMonthlyCost\" placeholder=\"Monthly Cost ($)\" [(ngModel)]=\"electricityData.monthlyTotal\"\n            readonly matInput>\n\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"ACYearlyCost\" placeholder=\"Yearly Cost ($)\" [(ngModel)]=\"electricityData.yearlyTotal\"\n            readonly matInput>\n\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"ACCO2\" placeholder=\"CO2 Equivalence\" [(ngModel)]=\"electricityData.co2\" readonly\n            matInput>\n        </mat-form-field>\n\n        <div>\n          <button type=\"submit\" mat-button mat-raised-button color=\"accent\">\n            <mat-icon>save</mat-icon> Save\n          </button>\n\n        </div>\n\n      </form>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Water Heater\">\n    <div style=\"padding: 10px;\">\n      <h1 id=\"title\">Electricity</h1>\n      <h2>2. Water Heaters</h2>\n      <p>Water Heaters are the 2nd most energy intensive appliances in Singapore households. Find out how costly your\n        usage is:</p>\n      <form fxLayout=\"column row\" style=\"padding: 10px;\" fxLayoutAlign=\"space-between\" #waterHeaterForm=\"ngForm\"\n        (ngSubmit)=\"processWaterHeater()\">\n\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHqty\" placeholder=\"Quantity\" required matInput required matInput [ngModel]=\"waterHeaterData.WHqty\">\n          <mat-hint>Please enter the number of water heaters you have</mat-hint>\n\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHhrs\" placeholder=\"Number of Hours\" required matInput required matInput [ngModel]=\"waterHeaterData.WHhrs\">\n          <mat-hint>Please enter your average daily usage (hours)</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHkWH\" value=\"3\" placeholder=\"KiloWatts per Hour used\" required matInput required\n            matInput readonly>\n          <mat-hint>This is our suggested value</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHMonthlyCost\" placeholder=\"Monthly Cost ($)\" required matInput [(ngModel)]=\"waterHeaterData.WHmonthlyTotal\"\n            readonly matInput>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHYearlyCost\" placeholder=\"Yearly Cost ($)\" required matInput [(ngModel)]=\"waterHeaterData.WHmonthlyTotal\"\n            readonly matInput>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"WHCO2\" placeholder=\"CO2 Equivalence\" required matInput [(ngModel)]=\"waterHeaterData.WHco2\"\n            readonly matInput>\n        </mat-form-field>\n        <div>\n          <button type=\"submit\" mat-button mat-raised-button color=\"accent\">\n            <mat-icon>save</mat-icon> Save\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Dryer\">\n    <div style=\"padding: 10px;\">\n      <h1 id=\"title\"> Electricity</h1>\n\n      <h2>3. Dryer</h2>\n      <p>Clothes Dryers are a huge part of your energy consumption and also one of the easiest to reduce. Find out how\n        costly your usage is:</p>\n      <form fxLayout=\"column row\" style=\"padding: 10px;\" fxLayoutAlign=\"space-between\" #dryerForm=\"ngForm\" (ngSubmit)=\"dryer()\">\n\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDqty\" placeholder=\"Quantity\" required matInput required matInput [ngModel]=\"dryerData.CDqty\">\n          <mat-hint>Please enter the number of aircons you have</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDhrs\" placeholder=\"Number of Hours\" required matInput required matInput [ngModel]=\"dryerData.CDhrs\">\n          <mat-hint>Please enter your average daily usage (hours)</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDkWH\" value=\"3\" placeholder=\"KiloWatts per Hour used\" required matInput required\n            matInput readonly>\n          <mat-hint>This is our suggested value</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDMonthlyCost\" placeholder=\"Monthly Cost ($)\" required matInput [(ngModel)]=\"dryerData.CDmonthlyTotal\"\n            readonly matInput>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDYearlyCost\" placeholder=\"Yearly Cost ($)\" required matInput [(ngModel)]=\"dryerData.CDyearlyTotal\"\n            readonly matInput>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" name=\"CDCO2\" placeholder=\"CO2 Equivalence\" required matInput [(ngModel)]=\"dryerData.CDco2\"\n            readonly matInput>\n        </mat-form-field>\n        <div fxLayoutAlign=\"space-around\">\n          <button type=\"button\" mat-button mat-raised-button color=\"accent\" (click)=\"exportData()\">\n            <mat-icon>import_export</mat-icon> Export\n          </button>\n\n          <button type=\"submit\" mat-button mat-raised-button color=\"accent\">\n            <mat-icon>save</mat-icon> Save\n          </button>\n\n          <button type=\"button\" mat-button mat-raised-button color=\"accent\" (click)=\"submit()\">\n            <mat-icon>list</mat-icon>\n            Summary\n          </button>\n        </div>\n      </form>\n    </div>\n  </mat-tab>\n\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/electricity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/electricity.component.ts ***!
  \*****************************************************/
/*! exports provided: ElectricityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityComponent", function() { return ElectricityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enlighten.service */ "./src/app/enlighten.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(router, enlightenSvc) {
        this.router = router;
        this.enlightenSvc = enlightenSvc;
        this.dryerData = {
            name: 'dryer',
            CDqty: 0,
            CDhrs: 0,
            CDkWH: 3,
            CDmonthlyTotal: 0,
            CDyearlyTotal: 0,
            CDco2: 0
        };
        this.waterHeaterData = {
            name: 'waterHeater',
            WHqty: 0,
            WHhrs: 0,
            WHkWH: 3,
            WHmonthlyTotal: 0,
            WHyearlyTotal: 0,
            WHco2: 0
        };
        this.electricityData = {
            name: 'electricity',
            ACqty: 0,
            AChrs: 0,
            ACkWH: 1.5,
            monthlyTotal: 0,
            yearlyTotal: 0,
            co2: 0
        };
    }
    //Called when component is created
    ElectricityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formSub = this.electricityForm.valueChanges.subscribe(
        //When the form is changed, this function will be called
        //Update calulation when form data changes
        function (val) {
            console.info('>>> elec form changes');
            var acQty = val.ACqty || 0;
            var acHrs = val.AChrs || 0;
            _this.electricityData.ACqty = acQty;
            _this.electricityData.AChrs = acHrs;
            _this.electricityData.monthlyTotal = acQty * 1.5 * acHrs * 30 * 0.23;
            _this.electricityData.yearlyTotal = _this.electricityData.monthlyTotal * 12;
            _this.electricityData.co2 = _this.electricityData.monthlyTotal * 0.2;
            console.info('done');
        });
        this.formSub = this.dryerForm.valueChanges.subscribe(
        //When the form is changed, this function will be called
        //Update calulation when form data changes
        function (val) {
            var cdQty = val.CDqty || 0;
            var cdHrs = val.CDhrs || 0;
            _this.dryerData.CDqty = cdQty;
            _this.dryerData.CDhrs = cdHrs;
            _this.dryerData.CDmonthlyTotal = cdQty * 1.5 * cdHrs * 30 * 0.23;
            _this.dryerData.CDyearlyTotal = _this.dryerData.CDmonthlyTotal * 12;
            _this.dryerData.CDco2 = _this.dryerData.CDmonthlyTotal * 0.2;
        });
        this.formSub = this.WaterHeaterForm.valueChanges.subscribe(function (val) {
            var whQty = val.WHqty || 0;
            var whHrs = val.WHhrs || 0;
            _this.waterHeaterData.WHqty = whQty;
            _this.waterHeaterData.WHhrs = whHrs;
            _this.waterHeaterData.WHmonthlyTotal = whQty * 3 * whHrs * 30 * 0.23;
            _this.waterHeaterData.WHyearlyTotal = _this.waterHeaterData.WHmonthlyTotal * 12;
            _this.waterHeaterData.WHco2 = _this.waterHeaterData.WHmonthlyTotal * 0.2;
        });
        this.enlightenSvc.getAllData()
            .then(function (results) {
            console.log('results: ', results);
            _this.electricityData = results[0];
            _this.waterHeaterData = results[1];
            _this.dryerData = results[2];
        });
        // Monad
        /*
        this.enlightenSvc.getElectricity() //returns a Promise
          .then((recs: ElectricityData[]) => {
            console.log('result from database: ', recs);
            if (recs.length > 0) {
              this.electricityData = recs[0];
            }
          }) //returns a Promise
          .catch(err => {
            console.error('Get error: ', err);
          })
          */
    };
    ElectricityComponent.prototype.ngOnDestroy = function () {
        //Must unsub otherwise memory leak
        this.formSub.unsubscribe();
    };
    ElectricityComponent.prototype.processWaterHeater = function () {
        console.log('saving values');
        console.log(this.waterHeaterData);
        var promise = this.enlightenSvc.updateWaterHeater(this.waterHeaterData);
        promise.then(function () {
            console.log('we have save the data');
        });
        //reject/bad -> catch will be called
        promise.catch(function (err) {
            console.error('Update error: ', err);
        });
    };
    ElectricityComponent.prototype.dryer = function () {
        console.log('saving values');
        var promise = this.enlightenSvc.updateDryer(this.dryerData);
        promise.then(function () {
            console.log('we have save the data');
        });
        //reject/bad -> catch will be called
        promise.catch(function (err) {
            console.error('Update error: ', err);
        });
    };
    ElectricityComponent.prototype.saveValues = function () {
        console.log('saving values to database: ', this.electricityData);
        var promise = this.enlightenSvc.updateElectricity(this.electricityData);
        //resolve/good -> then will be called
        promise.then(function () {
            console.log('we have save the data');
        });
        //reject/bad -> catch will be called
        promise.catch(function (err) {
            console.error('Update error: ', err);
        });
    };
    ElectricityComponent.prototype.submit = function () {
        this.router.navigate(['/etotals']);
    };
    ElectricityComponent.prototype.exportData = function () {
        this.router.navigate(['/export']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dryerForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ElectricityComponent.prototype, "dryerForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('waterHeaterForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ElectricityComponent.prototype, "WaterHeaterForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('electricityForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ElectricityComponent.prototype, "electricityForm", void 0);
    ElectricityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-electricity',
            template: __webpack_require__(/*! ./electricity.component.html */ "./src/app/components/electricity.component.html"),
            styles: [__webpack_require__(/*! ./electricity.component.css */ "./src/app/components/electricity.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _enlighten_service__WEBPACK_IMPORTED_MODULE_3__["EnlightenService"]])
    ], ElectricityComponent);
    return ElectricityComponent;
}());



/***/ }),

/***/ "./src/app/components/enlighten.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/enlighten.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#enlighten-logo {\n    width:90vw;\n    position: center;\n}\nbody{\n    margin: 10;\n}"

/***/ }),

/***/ "./src/app/components/enlighten.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/enlighten.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<img src=\"assets/enlighten.png\" id=\"enlighten-logo\">\n<h3> A smart energy calculator with practical tips and exact information about your energy usage!</h3>\n<p>Here at Enlighten you can discover your true impact on the environment - and what's better, find out exactly how to reduce OR replenish your usage.</p>\n<p>Navigate to the different categories: Electricity, Car, Food, Air Travel in the side menu to get started!</p>\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/enlighten.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/enlighten.component.ts ***!
  \***************************************************/
/*! exports provided: EnlightenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlightenComponent", function() { return EnlightenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnlightenComponent = /** @class */ (function () {
    function EnlightenComponent(router) {
        this.router = router;
    }
    EnlightenComponent.prototype.ngOnInit = function () { };
    EnlightenComponent.prototype.goto = function (route) {
        this.router.navigate(['/electricity-totals', route]);
    };
    EnlightenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enlighten',
            template: __webpack_require__(/*! ./enlighten.component.html */ "./src/app/components/enlighten.component.html"),
            styles: [__webpack_require__(/*! ./enlighten.component.css */ "./src/app/components/enlighten.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EnlightenComponent);
    return EnlightenComponent;
}());



/***/ }),

/***/ "./src/app/components/etotals.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/etotals.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    margin: 15px;\n}"

/***/ }),

/***/ "./src/app/components/etotals.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/etotals.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Electricity Totals</h1>\n  <form #form=\"ngForm\" fxLayout=\"column\">\n    <h2>Electricity</h2>\n    <mat-form-field>\n      <input type=\"number\" placeholder=\"Monthly Total\" readonly name=\"eMonthlyTotal\"\n          matInput [ngModel]=\"monthlyTotal\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"number\" placeholder=\"Yearly Total\" readonly name=\"eYearlyTotal\"\n          matInput [ngModel]=\"yearlyTotal\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input type=\"number\" placeholder=\"CO2\" readonly name=\"eCO2\"\n          matInput [ngModel]=\"co2Total\">\n    </mat-form-field>\n\n  </form>\n\n  <app-pie-chart *ngFor=\"let d of pieData\"\n      [title]=\"d.name\" [pieData]=\"d.data\"></app-pie-chart>\n\n  <button type=\"button\" mat-button mat-raised-button color=\"accent\" (click)=\"submit()\">\n      Submit\n  </button>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/etotals.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/etotals.component.ts ***!
  \*************************************************/
/*! exports provided: EtotalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtotalsComponent", function() { return EtotalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enlighten.service */ "./src/app/enlighten.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LABELS = ['Electricity', 'Water Heater', 'Dryer'];
var EtotalsComponent = /** @class */ (function () {
    function EtotalsComponent(enlightenSvc, router) {
        this.enlightenSvc = enlightenSvc;
        this.router = router;
        this.monthlyTotal = 0;
        this.yearlyTotal = 0;
        this.co2Total = 0;
        this.pieData = [];
    }
    EtotalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enlightenSvc.getAllData()
            .then(function (data) {
            console.log('data:\n', data);
            _this.electricity = data[0];
            _this.waterHeater = data[1];
            _this.dryer = data[2];
            _this.monthlyTotal = _this.electricity.monthlyTotal +
                _this.waterHeater.WHmonthlyTotal + _this.dryer.CDmonthlyTotal;
            _this.pieData.push({
                name: 'Monthly Total',
                data: _this.normalize(_this.monthlyTotal, [_this.electricity.monthlyTotal, _this.waterHeater.WHmonthlyTotal,
                    _this.dryer.CDmonthlyTotal], LABELS)
            });
            _this.yearlyTotal = _this.electricity.yearlyTotal +
                _this.waterHeater.WHyearlyTotal + _this.dryer.CDyearlyTotal;
            _this.pieData.push({
                name: 'Yearly Total',
                data: _this.normalize(_this.yearlyTotal, [_this.electricity.yearlyTotal, _this.waterHeater.WHyearlyTotal,
                    _this.dryer.CDyearlyTotal], LABELS)
            });
            _this.co2Total = _this.electricity.co2 +
                _this.waterHeater.WHco2 + _this.dryer.CDco2;
            _this.pieData.push({
                name: 'CO2 Emission',
                data: _this.normalize(_this.co2Total, [_this.electricity.co2, _this.waterHeater.WHco2,
                    _this.dryer.CDco2], LABELS)
            });
        });
    };
    EtotalsComponent.prototype.normalize = function (total, data, label) {
        var normData = [];
        for (var i in data) {
            normData.push({
                name: label[i],
                y: Math.round((data[i] / total) * 100)
            });
        }
        return (normData);
    };
    EtotalsComponent.prototype.submit = function () {
        this.router.navigate(['/reduceorreplenish']);
    };
    EtotalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-etotals',
            template: __webpack_require__(/*! ./etotals.component.html */ "./src/app/components/etotals.component.html"),
            styles: [__webpack_require__(/*! ./etotals.component.css */ "./src/app/components/etotals.component.css")]
        }),
        __metadata("design:paramtypes", [_enlighten_service__WEBPACK_IMPORTED_MODULE_2__["EnlightenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EtotalsComponent);
    return EtotalsComponent;
}());



/***/ }),

/***/ "./src/app/components/export.component.css":
/*!*************************************************!*\
  !*** ./src/app/components/export.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-10 {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/components/export.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/export.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #toBeExported class=\"space-10\">\n  <form #summaryForm=\"ngForm\" fxLayout=\"column row\" fxLayoutAlign=\"start stretch\">\n    <mat-form-field>\n      <textarea name=\"summaryData\" cols=\"100\" rows=\"5\" \n          #summaryData\n          matInput [ngModel]=\"all\" readonly>\n      </textarea>\n    </mat-form-field>\n  </form>\n\n<div class=\"space-10\" fxLayoutAlign=\"space-between\">\n  <button type=\"button\" mat-raised-button color=\"accent\" \n      [disabled]=\"!hasShare\" (click)=\"share()\">\n    <mat-icon>share</mat-icon>\n    Share\n  </button>\n  <button type=\"button\" (click)=\"copyIt(summaryForm, summaryData)\" mat-raised-button \n      color=\"accent\">\n    <mat-icon>file_copy</mat-icon>\n    Copy \n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/export.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/export.component.ts ***!
  \************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enlighten.service */ "./src/app/enlighten.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExportComponent = /** @class */ (function () {
    function ExportComponent(enlightenSvc) {
        this.enlightenSvc = enlightenSvc;
        this.electricityCSV = "";
        this.dryerCSV = "";
        this.waterHeaterCSV = "";
        this.all = "";
        this.hasShare = false;
    }
    ExportComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('navigator: ', navigator);
        this.hasShare = !!navigator.share;
        this.enlightenSvc.getAllData()
            .then(function (results) {
            _this.electricityData = results[0];
            _this.waterHeaterData = results[1];
            _this.dryerData = results[2];
            _this.electricityCSV = "electricity, " + _this.electricityData.AChrs + " " + _this.electricityData.ACqty + ", " +
                (_this.electricityData.co2 + ", " + _this.electricityData.monthlyTotal + ", " + _this.electricityData.yearlyTotal);
            _this.dryerCSV = "dryer, " + _this.dryerData.CDhrs + " " + _this.dryerData.CDqty + ", " +
                (_this.dryerData.CDco2 + ", " + _this.dryerData.CDmonthlyTotal + ", " + _this.dryerData.CDyearlyTotal);
            _this.waterHeaterCSV = "waterheater, " + _this.waterHeaterData.WHhrs + ", " + _this.waterHeaterData.WHqty +
                (_this.waterHeaterData.WHco2 + ", " + _this.waterHeaterData.WHmonthlyTotal + ", " + _this.waterHeaterData.WHyearlyTotal);
            _this.all = _this.electricityCSV + "\n" + _this.dryerCSV + "\n" + _this.waterHeaterCSV;
        });
    };
    ExportComponent.prototype.share = function () {
        navigator.share({
            title: 'Enlighten',
            text: this.electricityCSV + "\n" + this.dryerCSV + "\n" + this.waterHeaterCSV
        });
    };
    ExportComponent.prototype.copyIt = function (form, textArea) {
        textArea.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    };
    ExportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export',
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/components/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.css */ "./src/app/components/export.component.css")]
        }),
        __metadata("design:paramtypes", [_enlighten_service__WEBPACK_IMPORTED_MODULE_1__["EnlightenService"]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/components/pie-chart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/pie-chart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pie-chart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/pie-chart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [chart]=\"pieChart\"></div>"

/***/ }),

/***/ "./src/app/components/pie-chart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/pie-chart.component.ts ***!
  \***************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.title = "Pie Chart title";
        this.pieData = [];
    }
    PieChartComponent.prototype.ngOnInit = function () { };
    PieChartComponent.prototype.ngAfterContentInit = function () {
        this.pieChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: { type: 'pie' },
            title: { text: this.title },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> {point.percentage:.1f}%'
                    }
                }
            },
            series: [{
                    data: this.pieData
                }]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PieChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PieChartComponent.prototype, "pieData", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/components/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/components/pie-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/components/reduce-or-replenish.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/reduce-or-replenish.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-slider {\n    width: 300px;\n  }\n.margin-10 {\n  margin: 10px;\n}"

/***/ }),

/***/ "./src/app/components/reduce-or-replenish.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/reduce-or-replenish.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-tab-group>\n  <mat-tab label=\"Reduce\">\n    <div class=\"margin-10\">\n      <h1>Reduce</h1>\n    <h3>Airconditioner Savings</h3>\n    <p>Move the slider to see how much you can save</p>\n    <p>If you change your aircon usage to <span>{{ acNumHrs }} </span> hours a day, it will cost you: <span> {{ reducedElectricity | currency }} </span></p>\n    <mat-slider thumbLabel [displayWith]=\"formatLabel\" \n        tickInterval=\"1\" min=\"0\" [max]=\"maxAC\" thumbLabel\n        (change)=\"reduceElectricity($event)\">\n      \n    </mat-slider>\n    <h3>Water Heater Savings</h3>\n    <p>Move the slider to see how much you can save</p>\n    <p>If you change your water heater usage to <span>{{ numHrs }} </span> hours a day, it will cost you: <span> {{ reducedElectricity }} </span></p>\n    <!-- add reduce water -->\n    <mat-slider thumbLabel [displayWith]=\"formatLabel\" \n        tickInterval=\"1\" min=\"0\" [max]=\"maxWH\" thumbLabel\n        (change)=\"reduceElectricity($event)\"  (change)=\"reduceHours($event)\">\n      \n    </mat-slider>\n    <h3>Clothes Dryer Savings</h3>\n    <p>Move the slider to see how much you can save</p>\n    <p>If you change your clothes dryer usage to <span>{{ numHrs }} </span> hours a day, it will cost you: <span> {{ reducedElectricity }} </span></p>\n    <!-- add reduce dryer -->\n    <mat-slider thumbLabel [displayWith]=\"formatLabel\" \n        tickInterval=\"1\" min=\"0\" [max]=\"maxCD\" thumbLabel\n        (change)=\"reduceElectricity($event)\"  (change)=\"reduceHours($event)\">\n    </mat-slider>\n   \n    </div>\n\n  </mat-tab>\n\n  <mat-tab label=\"Replenish\">\n      <div class=\"margin-10\">\n    <h2>Replenish</h2>\n<h4>Incase you find it difficult to reduce your electricity consumption, an alternative is to continue consuming at the same level but plant trees instead to offset your C02 emissions.</h4>\n<h3>1 tonne of CO2 emitted can be replenished by 5 trees</h3>\n<h4>Airconditioner</h4>\n<p>Your total CO2 emissions for your airconditioner = {{ co2Total }}</p>\n<p>Number of trees {{ co2Trees }}</p>\n</div>\n\n\n  </mat-tab>\n\n</mat-tab-group>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/reduce-or-replenish.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/reduce-or-replenish.component.ts ***!
  \*************************************************************/
/*! exports provided: ReduceOrReplenishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceOrReplenishComponent", function() { return ReduceOrReplenishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enlighten_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enlighten.service */ "./src/app/enlighten.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReduceOrReplenishComponent = /** @class */ (function () {
    function ReduceOrReplenishComponent(enlightenSvc) {
        this.enlightenSvc = enlightenSvc;
        this.reducedElectricity = 0.0;
        this.acNumHrs = 0;
        this.numHrs = 0;
        this.maxAC = 0;
        this.maxWH = 0;
        this.maxCD = 0;
        this.co2Total = 0;
        this.co2Trees = 0;
        this.YEARLYACCONSTANT = 1.5 * 30 * 0.23 * 12;
    }
    ReduceOrReplenishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enlightenSvc.getAllData()
            .then(function (data) {
            console.log('data:\n', data);
            _this.electricity = data[0];
            _this.waterHeater = data[1];
            _this.dryer = data[2];
            //Initialize all reductions
            _this.reducedElectricity = _this.electricity.yearlyTotal;
            _this.acNumHrs = _this.electricity.AChrs;
            _this.maxAC = _this.electricity.AChrs;
            _this.maxWH = _this.waterHeater.WHhrs;
            _this.maxCD = _this.dryer.CDhrs;
            //Initiaize all hours
            _this.acNumHrs = _this.electricity.AChrs;
            _this.co2Total = _this.electricity.co2 +
                _this.waterHeater.WHco2 + _this.dryer.CDco2;
        });
    };
    ReduceOrReplenishComponent.prototype.formatLabel = function (val) {
        return (val);
    };
    ReduceOrReplenishComponent.prototype.reduceElectricity = function (event) {
        var percentage = event.value;
        this.reducedElectricity = Math.round(percentage * this.electricity.ACqty * this.YEARLYACCONSTANT * 100) / 100;
        // if (event.value == 0) {
        //     this.reducedElectricity = Math.round(this.electricity.yearlyTotal*100)/100;
        //    return;
        // }
        //  percentage = 100 - percentage;
        //  this.reducedElectricity = this.electricity.yearlyTotal * (percentage/100);
        //  this.reducedElectricity = Math.round(this.reducedElectricity * 100)/100;
        this.acNumHrs = event.value;
    };
    ReduceOrReplenishComponent.prototype.reduceHours = function (event) {
        var hours = event.value;
        if (event.value == 0) {
            this.acNumHrs = this.electricity.AChrs;
            return;
        }
        this.numHrs = this.electricity.AChrs * (hours / 100);
    };
    ReduceOrReplenishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reduce-or-replenish',
            template: __webpack_require__(/*! ./reduce-or-replenish.component.html */ "./src/app/components/reduce-or-replenish.component.html"),
            styles: [__webpack_require__(/*! ./reduce-or-replenish.component.css */ "./src/app/components/reduce-or-replenish.component.css")]
        }),
        __metadata("design:paramtypes", [_enlighten_service__WEBPACK_IMPORTED_MODULE_1__["EnlightenService"]])
    ], ReduceOrReplenishComponent);
    return ReduceOrReplenishComponent;
}());



/***/ }),

/***/ "./src/app/enlighten.service.ts":
/*!**************************************!*\
  !*** ./src/app/enlighten.service.ts ***!
  \**************************************/
/*! exports provided: EnlightenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlightenService", function() { return EnlightenService; });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");

var EnlightenService = /** @class */ (function () {
    function EnlightenService() {
        this.db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('enlightendb');
        console.info('in create db');
        this.db.version(1).stores({
            //Schema - one for each category - go and delete the database
            electricity: "name,ACqty, AChrs,ACkWH, monthlyTotal, yearlyTotal, co2",
            waterHeater: "name, WHqty, WHhrs, WHkWH, WHmonthlyTotal, WHyearlyTotal,WHco2",
            dryer: "name, CDqty, CDhrs, CDkWH, CDmonthlyTotal, CDyearlyTotal,CDco2",
            car: "name,Cqty, Chrs, CmonthlyTotal, CyearlyTotal, Cco2",
        });
        //this.db.open();
    }
    EnlightenService.prototype.updateCar = function (data) {
        return (this.db['car'].put(data));
    };
    EnlightenService.prototype.getCar = function () {
        return (this.db['car']
            .where('name').equals('car')
            .toArray()
            .then(function (result) {
            if (!result.length)
                result.push({
                    name: 'car',
                    Cqty: 0,
                    Chrs: 0,
                    CmonthlyTotal: 0,
                    CyearlyTotal: 0,
                    Cco2: 0,
                });
            return (result);
        }));
    };
    EnlightenService.prototype.updateElectricity = function (data) {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['electricity'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    };
    EnlightenService.prototype.getElectricity = function () {
        return (
        //query the electricity table, return the records, if any as any array
        this.db['electricity']
            .where('name').equals('electricity') //this is the query
            .toArray() //analogy carpark, default each - highway
            .then(function (result) {
            if (!result.length)
                result.push({
                    name: 'electricity',
                    ACqty: 0,
                    AChrs: 0,
                    ACkWH: 0,
                    monthlyTotal: 0,
                    yearlyTotal: 0,
                    co2: 0
                });
            return (result);
        }));
    };
    EnlightenService.prototype.updateWaterHeater = function (data) {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['waterHeater'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    };
    EnlightenService.prototype.getWaterHeater = function () {
        return (
        //query the electricity table, return the records, if any as any array
        this.db['waterHeater']
            .where('name').equals('waterHeater') //this is the query
            .toArray() //analogy carpark, default each - highway
            .then(function (result) {
            if (!result.length)
                result.push({
                    name: 'waterHeater',
                    WHqty: 0,
                    WHhrs: 0,
                    WHmonthlyTotal: 0,
                    WHyearlyTotal: 0,
                    WHco2: 0
                });
            return (result);
        }));
    };
    EnlightenService.prototype.updateDryer = function (data) {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['dryer'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    };
    EnlightenService.prototype.getDryer = function () {
        return (
        //query the electricity table, return the records, if any as any array
        this.db['dryer']
            .where('name').equals('dryer') //this is the query
            .toArray() //analogy carpark, default each - highway
            .then(function (result) {
            if (!result.length)
                result.push({
                    name: 'dryer',
                    CDqty: 0,
                    CDhrs: 0,
                    CDmonthylTotal: 0,
                    CDyearlyTotal: 0,
                    CDco2: 0
                });
            return (result);
        }));
    };
    EnlightenService.prototype.getAllData = function () {
        //Each return a promise, call their respective get methods
        //and save the promise in an array
        var promises = [];
        promises.push(this.getElectricity());
        promises.push(this.getWaterHeater());
        promises.push(this.getDryer());
        promises.push(this.getCar());
        //Now wait for all the promises to resolve. See 
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
        //When all the promises resolve, you'll get an array. The data in the array 
        //is in the same sequence as we queried them above
        var allResults = Promise.all(promises)
            .then(function (results) {
            //results is an array of [ electricity, water heater, dryer ]
            //Since each of them is an array, we 'flatten' the result by
            //retrieving the data and placing them in an array
            //We now return the array. 
            //If you return something from within a promise (then), you'll get another
            //promise
            var data = [];
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var i = results_1[_i];
                data.push(i[0]);
            }
            //This will be wrapped in a promise
            return (data);
        });
        return (allResults);
    };
    return EnlightenService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MODULES = [
    angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["ChartModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MODULES,
            exports: MODULES
        })
    ], MaterialModule);
    return MaterialModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Kablongshot/Desktop/Internship/csia/myproject/csia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map