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

/***/ "../../../../../src/app/account/account.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    // would never pass passwords around like this, but just for
    // the sample project
    function Account(firstname, lastname, accountType, email, password, confirm) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.accountType = accountType;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
    }
    Account.prototype.hiddenPassword = function () {
        var hidden = '';
        var length = this.password.length;
        for (var i = 0; i < length; i++) {
            hidden += '*';
        }
        return hidden;
    };
    Account.prototype.setSecurity = function (security) {
        this.security = security;
    };
    return Account;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountService = (function () {
    function AccountService() {
    }
    AccountService.prototype.confirm = function (account) {
        console.log(JSON.stringify(account));
        this.account = account;
    };
    AccountService.prototype.getAccount = function () {
        return this.account;
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/account/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".confirm-container small {\r\n  margin-left: 10px;\r\n}\r\n\r\n.confirm-label {\r\n  width: 120px;\r\n  display: inline-block;\r\n}\r\n\r\n.confirm-question-answer {\r\n  padding:10px 10px 0 10px;\r\n}\r\n\r\n/** hacky, but only a learning project... **/\r\n.confirm-question-answer-bottom {\r\n  padding-bottom:10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"account != null\">\n  <div class=\"confirm-container\">\n\n    <div class=\"page-header\">\n      <h3><span class=\"glyphicon glyphicon-ok\"></span> Confirm Account</h3>\n    </div>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><h4><span class=\"confirm-label\">First name</span><small>{{ account.firstname }}</small></h4></li>\n      <li class=\"list-group-item\"><h4><span class=\"confirm-label\">Last name</span><small>{{ account.lastname }}</small></h4></li>\n      <li class=\"list-group-item\"><h4><span class=\"confirm-label\">Account type</span><small>{{ account.accountType }}</small></h4></li>\n      <li class=\"list-group-item\"><h4><span class=\"confirm-label\">Email</span><small>{{ account.email }}</small></h4></li>\n      <li class=\"list-group-item\"><h4><span class=\"confirm-label\">Password</span><small>{{ account.hiddenPassword() }}</small></h4></li>\n    </ul>\n\n    <div class=\"panel panel-default confirm-question-answer-bottom\">\n      <div class=\"panel-heading\"><span class=\"glyphicon glyphicon-lock\"></span> Security</div>\n\n      <div class=\"confirm-question-answer\">\n        <label>Are you a robot?</label>\n        <input type=\"text\"\n               disabled=\"true\"\n               class=\"form-control\"\n               value=\"{{ account.security.robot }}\">\n      </div>\n\n      <div *ngFor=\"let q of account.security.questions\"\n        class=\"confirm-question-answer\">\n        <label>{{ q.question }}</label>\n        <input type=\"text\" disabled=\"true\"\n               class=\"form-control\"\n               [value]=\"q.answer\">\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmComponent = (function () {
    function ConfirmComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        // not exactly how account confirmation would play out in
        // the real world
        this.account = this.accountService.getAccount();
        // navigate away
        if (this.account == null) {
            this.router.navigate(['signup']);
        }
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm',
            template: __webpack_require__("../../../../../src/app/account/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n  width: 250px;\r\n  margin:150px auto 0;\r\n}\r\n\r\n.form-action-buttons {\r\n  width:145px;\r\n  margin:0 auto;\r\n}\r\n\r\n.sign-in-danger {\r\n  font-size:12px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"login-container\">\n\n    <form (ngSubmit)=\"onSubmit(loginForm)\" #loginForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"username\">Login</label>\n        <input type=\"text\" name=\"username\" class=\"form-control\"  id=\"username\" placeholder=\"Username or email\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n               placeholder=\"******************\">\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-action-buttons\">\n          <button type=\"submit\" class=\"btn btn-default\">Log in</button>\n          <button type=\"button\"\n                  class=\"btn btn-primary\"\n                  (click)=\"onSignUp()\">Sign up</button>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"alert alert-danger sign-in-danger\" role=\"alert\" *ngIf=\"isSubmitted\">\n          <p>Log in is not functional for this exercise.</p>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(router) {
        this.router = router;
        this.isSubmitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        this.isSubmitted = true;
        setTimeout(function () {
            _this.isSubmitted = false;
        }, 3000);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/security-questions/security-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question-select {\r\n  margin-bottom:10px;\r\n}\r\n\r\n.submit-row {\r\n  margin-top:10px;\r\n  margin-left:10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/security-questions/security-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"signup-container\">\r\n\r\n    <div class=\"page-header\">\r\n      <h3><span class=\"glyphicon glyphicon-lock\"></span> Security</h3>\r\n    </div>\r\n\r\n    <!-- use property binding to set the value as an object and not a string -->\r\n    <form [formGroup]=\"securityForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <div class=\"form-group\">\r\n        <label>Are you a robot?</label>\r\n        <input type=\"text\"\r\n               id=\"robot\"\r\n               formControlName=\"robot\"\r\n               class=\"form-control\">\r\n\r\n        <p class=\"invalid-field-message\"\r\n          *ngIf=\"!securityForm.get('robot').valid && securityForm.get('robot').touched\">\r\n\r\n          <span *ngIf=\"securityForm.get('robot').errors['required']\">\r\n            A response to this field is required.\r\n          </span>\r\n\r\n          <span *ngIf=\"securityForm.get('robot').errors['robotResponse']\">\r\n            Please enter a response of <strong>yes</strong>, <strong>no</strong>, or <strong>maybe</strong>\r\n          </span>\r\n        </p>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <h4>Questions <small>choose {{ minimumQuestions }}</small></h4>\r\n\r\n        <div class=\"form-group\"\r\n             formArrayName=\"securityQuestions\"\r\n             *ngFor=\"let i = index; let question of securityForm.get('securityQuestions').controls\">\r\n\r\n          <span>Question {{ i + 1}}</span>\r\n\r\n          <select\r\n            [id]=\"'question_' + i\"\r\n            [name]=\"'question_' + i\"\r\n            #questionSelect\r\n            class=\"form-control question-select\">\r\n            <option *ngFor=\"let q of securityQuestions\">{{q}}</option>\r\n          </select>\r\n\r\n          <!-- property bind to set the value, not the string -->\r\n          <input type=\"text\"\r\n            [id]=\"'answer_' + i\"\r\n            [name]=\"'answer_' + i\"\r\n            #answerInput\r\n            [formControlName]=\"i\"\r\n            class=\"form-control\"\r\n            required\r\n            (blur)=\"onAnswerBlur(i, questionSelect.value, answerInput.value)\">\r\n\r\n        </div>\r\n\r\n        <button type=\"button\"\r\n                [disabled]=\"isQuestionAddDisabled()\"\r\n                (click)=\"onQuestionAdd()\"\r\n                class=\"btn btn-default form-control\">\r\n          Add\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-xs-2\">\r\n            <button id='submit'\r\n                    type=\"submit\"\r\n                    [disabled]=\"isSubmitDisabled()\"\r\n                    class=\"btn btn-primary\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"col-xs-10\">\r\n            <p class=\"invalid-field-message submit-row\"\r\n              *ngIf=\"isFormSubmitted && !areQuestionsValid\">\r\n              You must select 3 different questions.\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/security-questions/security-questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityQuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecurityQuestionsComponent = (function () {
    function SecurityQuestionsComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.minimumQuestions = 3;
        this.validRobotResponse = ['yes', 'no', 'maybe'];
        this.securityQuestions = [
            'What is your favorite color?',
            'What is your first pet\'s name?',
            'What is your favorite number?',
            'What city were you born in?',
            'What was your first car?'
        ];
        this.selectedQuestions = [];
    }
    SecurityQuestionsComponent.prototype.ngOnInit = function () {
        if (this.accountService.getAccount() == null) {
            this.router.navigate(['']);
        }
        this.numberofQuestions = 0;
        // initialize the form
        this.securityForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'robot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                this.isValidRobotResponse.bind(this)
            ]),
            // initialize empty to dynamically populate
            'securityQuestions': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([])
        });
    };
    SecurityQuestionsComponent.prototype.isSubmitDisabled = function () {
        return !this.securityForm.valid;
    };
    SecurityQuestionsComponent.prototype.isValidRobotResponse = function (control) {
        var value = control.value !== null
            ? control.value.toLowerCase() : null;
        // ignore blank or null, 'required' validator will catch it
        if (value === '' || value === null) {
            return null;
        }
        if (this.validRobotResponse.indexOf(control.value) === -1) {
            return { 'robotResponse': true };
        }
        return null;
    };
    SecurityQuestionsComponent.prototype.isQuestionAddDisabled = function () {
        return this.numberofQuestions >= this.minimumQuestions;
    };
    SecurityQuestionsComponent.prototype.onQuestionAdd = function () {
        this.numberofQuestions++;
        var formArray = this.securityForm.get('securityQuestions');
        formArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
    };
    SecurityQuestionsComponent.prototype.onAnswerBlur = function (index, question, answer) {
        this.selectedQuestions[index] = { question: question, answer: answer };
    };
    SecurityQuestionsComponent.prototype.evaluateQuestions = function () {
        var totalSelectedQuestions = this.selectedQuestions.length;
        if (totalSelectedQuestions === 0 || totalSelectedQuestions < this.minimumQuestions) {
            return false;
        }
        // don't allow duplicates
        for (var i = 0; i < totalSelectedQuestions; i++) {
            for (var j = 0; j < totalSelectedQuestions; j++) {
                // avoid comparing against self
                if (i === j) {
                    continue;
                }
                // ensure that two of the same questions are not selected
                var current = this.selectedQuestions[i]['question'];
                var compare = this.selectedQuestions[j]['question'];
                if (current === compare) {
                    return false;
                }
            }
        }
        return true;
    };
    SecurityQuestionsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.areQuestionsValid = this.evaluateQuestions();
        if (!this.areQuestionsValid) {
            //clear the interval to prevent duplication
            if (typeof this.timeoutKey !== 'undefined') {
                clearTimeout(this.timeoutKey);
            }
            // set a timeout to clear the isFormSubmitted flag
            this.timeoutKey = setTimeout(function () {
                _this.isFormSubmitted = false;
            }, 3000);
            return;
        }
        //build a separate object to work around the hacky q&a impl.
        //update the account info captured earlier
        var account = this.accountService.getAccount();
        account.setSecurity({
            'robot': this.securityForm.get('robot').value,
            'questions': this.selectedQuestions
        });
        this.router.navigate(['confirm']);
    };
    SecurityQuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-security-questions',
            template: __webpack_require__("../../../../../src/app/account/security-questions/security-questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/security-questions/security-questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SecurityQuestionsComponent);
    return SecurityQuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-buttons {\r\n  width:140px;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n}\r\n\r\n.home-link {\r\n  display:block;\r\n  width:85px;\r\n  margin:0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"signup-container\">\n\n    <div class=\"page-header\">\n      <h3>Sign up</h3>\n    </div>\n\n    <form (ngSubmit)=\"onSubmit(signupForm)\" #signupForm=\"ngForm\">\n      <!-- ngModel tells angular that a field is an active control of the form -->\n      <div class=\"form-group\">\n        <label for=\"firstname\">First name</label>\n        <input type=\"text\"\n               id=\"firstname\"\n               name=\"firstname\"\n               class=\"form-control\"\n               required\n               ngModel\n               #firstname=\"ngModel\">\n        <p class=\"invalid-field-message\" *ngIf=\"!firstname.valid && firstname.touched\">\n          A first name <em>must</em> be supplied\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastname\">Last name</label>\n        <input type=\"text\"\n               id=\"lastname\"\n               name=\"lastname\"\n               class=\"form-control\"\n               required\n               ngModel\n               #lastname=\"ngModel\">\n        <p class=\"invalid-field-message\" *ngIf=\"!lastname.valid && lastname.touched\">\n          A last name <em>must</em> be supplied\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"accountType\">Account type</label>\n        <select id=\"accountType\"\n                name=\"accountType\"\n                [ngModel]=\"selectedAccountType\"\n                class=\"form-control\">\n          <option *ngFor=\"let type of accountTypes\"\n            [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\"\n               id=\"email\"\n               name=\"email\"\n               class=\"form-control\"\n               ngModel\n               required\n               email\n               #email=\"ngModel\">\n        <!-- email must be bound to ngModel in order to gain access in the control statement below -->\n        <p class='invalid-field-message' *ngIf=\"!email.valid && email.touched\">Please enter a valid email address.</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\"\n               id=\"password\"\n               name=\"password\"\n               class=\"form-control\"\n               required\n               ngModel\n               #password=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\"\n               id=\"confirmPassword\"\n               name=\"confirmPassword\"\n               class=\"form-control\"\n               required\n               ngModel\n               #confirmPassword=\"ngModel\">\n        <p class=\"invalid-field-message\" *ngIf=\"!arePasswordsValid() && arePasswordsTouched()\">\n          Password fields do not match.\n        </p>\n      </div>\n\n      <div class=\"form-group signup-buttons\">\n        <button type=\"submit\"\n                class='btn btn-primary'\n                [disabled]=\"!isSubmitEnabled()\">Submit</button>\n\n        <button type=\"button\"\n                class=\"btn btn-warning\"\n                (click)=\"onReset()\">Reset</button>\n\n      </div>\n\n      <div class=\"form-group\">\n        <a [routerLink]=\"['/']\" class=\"home-link\">Return home</a>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_model__ = __webpack_require__("../../../../../src/app/account/account.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(account, router) {
        this.account = account;
        this.router = router;
        this.accountTypes = ['Basic', 'Advanced', 'Pro'];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.selectedAccountType = 'Pro';
    };
    SignupComponent.prototype.onSubmit = function (signupForm) {
        if (signupForm.valid) {
            this.account.confirm(new __WEBPACK_IMPORTED_MODULE_4__account_model__["a" /* Account */](signupForm.value.firstname, signupForm.value.lastname, signupForm.value.accountType, signupForm.value.email, signupForm.value.password, signupForm.value.confirmPassword));
            this.router.navigate(['security']);
        }
    };
    SignupComponent.prototype.onReset = function () {
        this.signupForm.form.setValue({
            'firstname': 'test',
            'lastname': 'user',
            'accountType': 'Pro',
            'email': 'testuser@mail.com',
            'password': 'banana',
            'confirmPassword': 'banana'
        });
    };
    SignupComponent.prototype.isSubmitEnabled = function () {
        var enabled = this.arePasswordsValid()
            && this.arePasswordsTouched()
            && this.signupForm.valid;
        return enabled;
    };
    SignupComponent.prototype.arePasswordsTouched = function () {
        return (this.password.touched && this.confirmPassword.touched);
    };
    SignupComponent.prototype.arePasswordsValid = function () {
        var pw = this.password.value;
        var cpw = this.confirmPassword.value;
        return (pw === cpw && this.arePasswordsTouched());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('firstname'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "fieldname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgModel */])
    ], SignupComponent.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('confirmPassword'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgModel */])
    ], SignupComponent.prototype, "confirmPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('signupForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], SignupComponent.prototype, "signupForm", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/account/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signup_signup_component__ = __webpack_require__("../../../../../src/app/account/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/account/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_security_questions_security_questions_component__ = __webpack_require__("../../../../../src/app/account/security-questions/security-questions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__account_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__account_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'security', component: __WEBPACK_IMPORTED_MODULE_5__account_security_questions_security_questions_component__["a" /* SecurityQuestionsComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_4__account_confirm_confirm_component__["a" /* ConfirmComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onSubmit = function (loginForm) {
        console.log('form submitted');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_signup_signup_component__ = __webpack_require__("../../../../../src/app/account/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/account/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_security_questions_security_questions_component__ = __webpack_require__("../../../../../src/app/account/security-questions/security-questions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__account_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__account_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__account_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_10__account_security_questions_security_questions_component__["a" /* SecurityQuestionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__account_account_service__["a" /* AccountService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map