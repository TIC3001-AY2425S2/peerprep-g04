"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-set-tostringtag";
exports.ids = ["vendor-chunks/es-set-tostringtag"];
exports.modules = {

/***/ "(ssr)/./node_modules/es-set-tostringtag/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nvar hasOwn = __webpack_require__(/*! hasown */ \"(ssr)/./node_modules/hasown/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import('.')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;\n\tvar nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;\n\tif (\n\t\t(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')\n\t\t|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')\n\t) {\n\t\tthrow new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');\n\t}\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: !nonConfigurable,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2V0LXRvc3RyaW5ndGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLG9EQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFekM7O0FBRUEsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXE9uZURyaXZlXFxEZXNrdG9wXFxwZWVycHJlcC1nMDRcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXGVzLXNldC10b3N0cmluZ3RhZ1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJ2hhc293bicpO1xudmFyICRUeXBlRXJyb3IgPSByZXF1aXJlKCdlcy1lcnJvcnMvdHlwZScpO1xuXG52YXIgdG9TdHJpbmdUYWcgPSBoYXNUb1N0cmluZ1RhZyA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IG51bGw7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldFRvU3RyaW5nVGFnKG9iamVjdCwgdmFsdWUpIHtcblx0dmFyIG92ZXJyaWRlSWZTZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXSAmJiBhcmd1bWVudHNbMl0uZm9yY2U7XG5cdHZhciBub25Db25maWd1cmFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXSAmJiBhcmd1bWVudHNbMl0ubm9uQ29uZmlndXJhYmxlO1xuXHRpZiAoXG5cdFx0KHR5cGVvZiBvdmVycmlkZUlmU2V0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3ZlcnJpZGVJZlNldCAhPT0gJ2Jvb2xlYW4nKVxuXHRcdHx8ICh0eXBlb2Ygbm9uQ29uZmlndXJhYmxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygbm9uQ29uZmlndXJhYmxlICE9PSAnYm9vbGVhbicpXG5cdCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpZiBwcm92aWRlZCwgdGhlIGBvdmVycmlkZUlmU2V0YCBhbmQgYG5vbkNvbmZpZ3VyYWJsZWAgb3B0aW9ucyBtdXN0IGJlIGJvb2xlYW5zJyk7XG5cdH1cblx0aWYgKHRvU3RyaW5nVGFnICYmIChvdmVycmlkZUlmU2V0IHx8ICFoYXNPd24ob2JqZWN0LCB0b1N0cmluZ1RhZykpKSB7XG5cdFx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KG9iamVjdCwgdG9TdHJpbmdUYWcsIHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhbm9uQ29uZmlndXJhYmxlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvYmplY3RbdG9TdHJpbmdUYWddID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHR9XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-set-tostringtag/index.js\n");

/***/ })

};
;