(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

    function multiply(num1, num2) {
        return num1 * num2;
    }

    exports.multiply = multiply;

}));
