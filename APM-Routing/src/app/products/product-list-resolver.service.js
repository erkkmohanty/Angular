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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
var product_service_1 = require("./product.service");
var ProductListResolver = (function () {
    function ProductListResolver(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductListResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.productService.getProducts()
            .map(function (products) {
            if (products) {
                return products;
            }
            console.log("Products was not found");
            _this.router.navigate(['/products']);
            return null;
        })
            .catch(function (error) {
            console.log("Retrieval error:");
            _this.router.navigate(['/products']);
            return Observable_1.Observable.of(null);
        });
    };
    return ProductListResolver;
}());
ProductListResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductListResolver);
exports.ProductListResolver = ProductListResolver;
//# sourceMappingURL=product-list-resolver.service.js.map