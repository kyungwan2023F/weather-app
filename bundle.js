/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding-top: 200px;\n}\n\n#weather-form {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem auto;\n  gap: 10px;\n}\n\n#city-input {\n  padding: 10px 15px;\n  font-size: 1rem;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition:\n    border-color 0.3s,\n    box-shadow 0.3s;\n  width: 500px;\n}\n\n#city-input:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);\n}\n\n#weather-form button {\n  padding: 10px 20px;\n  font-size: 1rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#weather-form button:hover {\n  background-color: #0056b3;\n}\n\n#current-weather-card {\n  width: 800px;\n  padding: 30px;\n  border-radius: 12px;\n  background: #f8f9fa;\n  box-sizing: border-box;\n}\n\n#current-weather-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8rem;\n}\n\n/* Current weather card icon styling */\n#current-weather-card .icon-container {\n  flex-shrink: 0;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n}\n\n#current-weather-card .icon-container img {\n  width: 150px; /* Larger than forecast icons */\n  height: 150px;\n  object-fit: contain;\n}\n\n.card-body {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  padding-top: 20px;\n}\n\n.body-item {\n  display: flex;\n  border-bottom: 1px solid #ccc; /* Thin gray line */\n  padding-bottom: 2px;\n}\n\n.body-item:last-child {\n  border-bottom: none;\n}\n\n.temperature-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 40px 0;\n}\n\n.main-temp {\n  display: flex;\n  align-items: flex-start;\n  line-height: 0.8;\n  margin-bottom: 5px;\n}\n\n.temp-number {\n  font-size: 5rem; /* Very large - adjust as needed */\n  font-weight: 900; /* Extra bold/black */\n  color: #000;\n  letter-spacing: -2px; /* Tighter spacing */\n}\n\n.temp-unit {\n  font-size: 2.5rem; /* Medium size for degree symbol */\n  font-weight: 300; /* Light weight */\n  color: #000;\n  margin-left: 2px;\n  margin-top: -5px; /* Align with top of number */\n}\n\n#forecast-weather-card {\n  margin-top: 2rem;\n  border-radius: 12px;\n  padding: 30px;\n  width: 800px;\n  box-sizing: border-box;\n  background: #f8f9fa;\n}\n\n#forecast-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n\n.forecast-item {\n  display: flex;\n  align-items: center;\n  padding: 15px 1rem;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n  border-radius: 12px;\n}\n\n.forecast-item:hover {\n  background-color: #f8f9fa;\n}\n\n.forecast-item:last-child {\n  border-bottom: none;\n}\n\n/* Day and date */\n.forecast-item .date {\n  width: 200px;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n  text-align: left;\n}\n\n/* Weather icon */\n.forecast-item .icon-container {\n  margin: 0 20px;\n  flex-shrink: 0;\n}\n\n#forecast-body .forecast-item .icon-container img {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n\n/* Temperature section */\n.forecast-temp {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  width: 200px;\n  margin-right: 20px;\n}\n\n.forecast-item .temperature {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.forecast-item .feels-like {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n\n/* Weather description */\n.forecast-description {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.forecast-item .conditions {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 2px;\n}\n\n.forecast-item .night-conditions {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n\n/* Precipitation */\n.forecast-item .precipitation {\n  min-width: 60px;\n  text-align: right;\n  color: #6c757d;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/weather.js":
/*!****************************!*\
  !*** ./src/api/weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather),\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location) {\n  const response = await fetch(\n    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&key=FVAZZZCELHADSYHLG3DZJ5X3N&contentType=json`,\n    {\n      method: \"GET\",\n      mode: \"cors\",\n    },\n  );\n  const data = await response.json();\n  console.log(data);\n  data.days?.forEach((day, index) => {\n    console.log(`Day ${index} icon:`, day.icon);\n  });\n  return data;\n}\n\nfunction getCurrentWeather(data) {\n  const currentConditions = data.currentConditions;\n\n  return {\n    address: data.address,\n    conditions: currentConditions.conditions,\n    dateTimeEpoch: currentConditions.datetimeEpoch,\n    feelsLike: currentConditions.feelslike,\n    humidity: currentConditions.humidity,\n    icon: currentConditions.icon,\n    precipitation: currentConditions.precip,\n    temp: currentConditions.temp,\n  };\n}\n\nfunction getForecast(data) {\n  const foreCast = data.days.map((day) => ({\n    conditions: day.conditions,\n    dateTimeEpoch: day.datetimeEpoch,\n    feelsLike: day.feelslike,\n    humidity: day.humidity,\n    icon: day.icon,\n    precipitation: day.precip,\n    temp: day.temp,\n  }));\n\n  return foreCast;\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/api/weather.js?");

/***/ }),

/***/ "./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$":
/*!***************************************************************!*\
  !*** ./src/assets/icons/ lazy ^\.\/.*\.svg$ namespace object ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-day.svg\": [\n\t\t\"./src/assets/icons/clear-day.svg\",\n\t\t\"src_assets_icons_clear-day_svg\"\n\t],\n\t\"./clear-night.svg\": [\n\t\t\"./src/assets/icons/clear-night.svg\",\n\t\t\"src_assets_icons_clear-night_svg\"\n\t],\n\t\"./cloudy.svg\": [\n\t\t\"./src/assets/icons/cloudy.svg\",\n\t\t\"src_assets_icons_cloudy_svg\"\n\t],\n\t\"./fog.svg\": [\n\t\t\"./src/assets/icons/fog.svg\",\n\t\t\"src_assets_icons_fog_svg\"\n\t],\n\t\"./hail.svg\": [\n\t\t\"./src/assets/icons/hail.svg\",\n\t\t\"src_assets_icons_hail_svg\"\n\t],\n\t\"./partly-cloudy-day.svg\": [\n\t\t\"./src/assets/icons/partly-cloudy-day.svg\",\n\t\t\"src_assets_icons_partly-cloudy-day_svg\"\n\t],\n\t\"./partly-cloudy-night.svg\": [\n\t\t\"./src/assets/icons/partly-cloudy-night.svg\",\n\t\t\"src_assets_icons_partly-cloudy-night_svg\"\n\t],\n\t\"./rain-snow-showers-day.svg\": [\n\t\t\"./src/assets/icons/rain-snow-showers-day.svg\",\n\t\t\"src_assets_icons_rain-snow-showers-day_svg\"\n\t],\n\t\"./rain-snow-showers-night.svg\": [\n\t\t\"./src/assets/icons/rain-snow-showers-night.svg\",\n\t\t\"src_assets_icons_rain-snow-showers-night_svg\"\n\t],\n\t\"./rain-snow.svg\": [\n\t\t\"./src/assets/icons/rain-snow.svg\",\n\t\t\"src_assets_icons_rain-snow_svg\"\n\t],\n\t\"./rain.svg\": [\n\t\t\"./src/assets/icons/rain.svg\",\n\t\t\"src_assets_icons_rain_svg\"\n\t],\n\t\"./showers-day.svg\": [\n\t\t\"./src/assets/icons/showers-day.svg\",\n\t\t\"src_assets_icons_showers-day_svg\"\n\t],\n\t\"./showers-night.svg\": [\n\t\t\"./src/assets/icons/showers-night.svg\",\n\t\t\"src_assets_icons_showers-night_svg\"\n\t],\n\t\"./sleet.svg\": [\n\t\t\"./src/assets/icons/sleet.svg\",\n\t\t\"src_assets_icons_sleet_svg\"\n\t],\n\t\"./snow-showers-day.svg\": [\n\t\t\"./src/assets/icons/snow-showers-day.svg\",\n\t\t\"src_assets_icons_snow-showers-day_svg\"\n\t],\n\t\"./snow-showers-night.svg\": [\n\t\t\"./src/assets/icons/snow-showers-night.svg\",\n\t\t\"src_assets_icons_snow-showers-night_svg\"\n\t],\n\t\"./snow.svg\": [\n\t\t\"./src/assets/icons/snow.svg\",\n\t\t\"src_assets_icons_snow_svg\"\n\t],\n\t\"./thunder-rain.svg\": [\n\t\t\"./src/assets/icons/thunder-rain.svg\",\n\t\t\"src_assets_icons_thunder-rain_svg\"\n\t],\n\t\"./thunder-showers-day.svg\": [\n\t\t\"./src/assets/icons/thunder-showers-day.svg\",\n\t\t\"src_assets_icons_thunder-showers-day_svg\"\n\t],\n\t\"./thunder-showers-night.svg\": [\n\t\t\"./src/assets/icons/thunder-showers-night.svg\",\n\t\t\"src_assets_icons_thunder-showers-night_svg\"\n\t],\n\t\"./thunder.svg\": [\n\t\t\"./src/assets/icons/thunder.svg\",\n\t\t\"src_assets_icons_thunder_svg\"\n\t],\n\t\"./wind.svg\": [\n\t\t\"./src/assets/icons/wind.svg\",\n\t\t\"src_assets_icons_wind_svg\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/assets/icons lazy recursive ^\\\\.\\\\/.*\\\\.svg$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://weatherapp/./src/assets/icons/_lazy_^\\.\\/.*\\.svg$_namespace_object?");

/***/ }),

/***/ "./src/dom/render.js":
/*!***************************!*\
  !*** ./src/dom/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForm: () => (/* binding */ createForm),\n/* harmony export */   renderCurrentWeather: () => (/* binding */ renderCurrentWeather),\n/* harmony export */   renderForecast: () => (/* binding */ renderForecast)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nfunction createForm() {\n  const form = document.createElement(\"form\");\n  form.id = \"weather-form\";\n\n  // Create input field\n  const input = document.createElement(\"input\");\n  input.type = \"text\";\n  input.name = \"city\";\n  input.id = \"city-input\";\n  input.placeholder = \"Enter city\";\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.type = \"submit\";\n  submitBtn.textContent = \"Get Weather\";\n\n  form.appendChild(input);\n  form.appendChild(submitBtn);\n\n  content.appendChild(form);\n}\n\nasync function renderCurrentWeather(currentData) {\n  let currentDiv = document.getElementById(\"current-weather-card\");\n  if (!currentDiv) {\n    currentDiv = document.createElement(\"div\");\n    currentDiv.id = \"current-weather-card\";\n  } else {\n    currentDiv.innerHTML = \"\";\n  }\n\n  const headerDiv = document.createElement(\"div\");\n  headerDiv.classList.add(\"card-header\");\n\n  const cardHeader = document.createElement(\"h2\");\n  const capitalized = currentData.address\n    .split(\" \")\n    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))\n    .join(\" \");\n  cardHeader.textContent = `Current Weather - ${capitalized}`;\n\n  const bodyDiv = document.createElement(\"div\");\n  bodyDiv.classList.add(\"card-body\");\n\n  const iconContainer = document.createElement(\"div\");\n  iconContainer.className = \"icon-container\";\n\n  // Wait for icon to load before continuing\n  const iconModule = await getWeatherIcon(currentData.icon);\n  appendSVGAsImage(iconModule, iconContainer);\n  bodyDiv.appendChild(iconContainer);\n\n  const tempertureDiv = document.createElement(\"div\");\n  tempertureDiv.innerHTML = `\n    <div class=\"temperature-container\">\n      <div class=\"main-temp\">\n        <span class=\"temp-number\">${currentData.temp}</span>\n        <span class=\"temp-unit\">°</span>\n        <span class=\"temp-scale\">F</span>\n      </div>\n      <div class=\"feels-like\">\n        Feels Like* ${currentData.feelsLike}°\n      </div>\n    </div>\n  `;\n  bodyDiv.appendChild(tempertureDiv);\n\n  const additionalDetailsDiv = document.createElement(\"div\");\n  additionalDetailsDiv.classList.add(\"addtional-details\");\n  const otherWeatherData = [\n    { label: \"Conditions\", value: `${currentData.conditions}` },\n    { label: \"Humidity\", value: `${currentData.humidity}%` },\n    {\n      label: \"Precipitation\",\n      value: currentData.precipitation\n        ? `${currentData.precipitation}`\n        : \"No Precipitation\",\n    },\n  ];\n\n  otherWeatherData.forEach((data) => {\n    const bodyItem = document.createElement(\"div\");\n    bodyItem.className = \"body-item\";\n    bodyItem.innerHTML = `\n      <p class=\"label\">${data.label}: </p>\n      <p class=\"value\">${data.value}</p>\n    `;\n\n    additionalDetailsDiv.appendChild(bodyItem);\n  });\n\n  headerDiv.appendChild(cardHeader);\n  renderDate(currentData, headerDiv);\n  currentDiv.appendChild(headerDiv);\n  currentDiv.appendChild(bodyDiv);\n  currentDiv.appendChild(additionalDetailsDiv);\n  content.appendChild(currentDiv);\n}\n\nasync function renderForecast(foreCast) {\n  let foreCastDiv = document.getElementById(\"forecast-weather-card\");\n  if (!foreCastDiv) {\n    foreCastDiv = document.createElement(\"div\");\n    foreCastDiv.id = \"forecast-weather-card\";\n  } else {\n    foreCastDiv.innerHTML = \"\";\n  }\n\n  const processedForecast = foreCast.map(\n    ({\n      conditions,\n      dateTimeEpoch,\n      feelsLike,\n      humidity,\n      icon,\n      precipitation,\n      temp,\n    }) => {\n      return {\n        date: dateTransformer(dateTimeEpoch),\n        conditions: conditions,\n        icon: icon,\n        temperature: temp,\n        feelsLike: feelsLike,\n        humidity: humidity,\n        precipitation: precipitation,\n      };\n    },\n  );\n\n  const foreCastHeader = document.createElement(\"h2\");\n  foreCastHeader.id = \"forecast-header\";\n  foreCastHeader.textContent = \"14-Day Weather Forecast\";\n\n  foreCastDiv.appendChild(foreCastHeader);\n\n  const foreCastBody = document.createElement(\"div\");\n  foreCastBody.id = \"forecast-body\";\n\n  let isFirst = true;\n\n  for (const day of processedForecast) {\n    if (isFirst) {\n      isFirst = false;\n      continue;\n    }\n    const foreCastItem = document.createElement(\"div\");\n    foreCastItem.classList.add(\"forecast-item\");\n\n    // Date\n    const date = document.createElement(\"div\");\n    date.classList.add(\"date\");\n    date.textContent = day.date;\n\n    // Icon container\n    const iconContainer = document.createElement(\"div\");\n    iconContainer.classList.add(\"icon-container\");\n    const iconModule = await getWeatherIcon(day.icon);\n    appendSVGAsImage(iconModule, iconContainer);\n\n    // Temperature section\n    const tempSection = document.createElement(\"div\");\n    tempSection.classList.add(\"forecast-temp\");\n\n    const temperature = document.createElement(\"div\");\n    temperature.classList.add(\"temperature\");\n    temperature.textContent = `${day.temperature}°`;\n\n    const feelsLike = document.createElement(\"div\");\n    feelsLike.classList.add(\"feels-like\");\n    feelsLike.textContent = `${day.feelsLike}°`;\n\n    tempSection.appendChild(temperature);\n    tempSection.appendChild(feelsLike);\n\n    // Description section\n    const descSection = document.createElement(\"div\");\n    descSection.classList.add(\"forecast-description\");\n\n    const conditions = document.createElement(\"div\");\n    conditions.classList.add(\"conditions\");\n    conditions.textContent = day.conditions;\n\n    const nightConditions = document.createElement(\"div\");\n    nightConditions.classList.add(\"night-conditions\");\n    nightConditions.textContent = `Night: ${day.conditions}`; // or separate night data\n\n    descSection.appendChild(conditions);\n    descSection.appendChild(nightConditions);\n\n    // Precipitation\n    const precipitation = document.createElement(\"div\");\n    precipitation.classList.add(\"precipitation\");\n    precipitation.innerHTML = `💧 ${day.precipitation || \"0%\"}`;\n\n    // Append everything\n    foreCastItem.appendChild(date);\n    foreCastItem.appendChild(iconContainer);\n    foreCastItem.appendChild(tempSection);\n    foreCastItem.appendChild(descSection);\n    foreCastItem.appendChild(precipitation);\n\n    foreCastBody.appendChild(foreCastItem);\n  }\n\n  foreCastDiv.appendChild(foreCastBody);\n  content.appendChild(foreCastDiv);\n}\n\nfunction dateTransformer(dateTimeEpoch) {\n  const dateObj = new Date(dateTimeEpoch * 1000);\n\n  // Helper function for ordinal suffix\n  function getOrdinalSuffix(n) {\n    if (n > 3 && n < 21) return \"th\";\n    switch (n % 10) {\n      case 1:\n        return \"st\";\n      case 2:\n        return \"nd\";\n      case 3:\n        return \"rd\";\n      default:\n        return \"th\";\n    }\n  }\n\n  const day = dateObj.getDate();\n  const formattedDate = dateObj.toLocaleDateString(\"en-US\", {\n    weekday: \"long\",\n    month: \"long\",\n    year: \"numeric\",\n    day: \"numeric\",\n  });\n\n  // Replace day with ordinal day\n  return formattedDate.replace(\n    day.toString(),\n    `${day}${getOrdinalSuffix(day)}`,\n  );\n}\n\nfunction renderDate(currentData, container) {\n  const rawDate = currentData.dateTimeEpoch;\n\n  const date = document.createElement(\"p\");\n  date.id = \"sub\";\n\n  // Replace day with ordinal day\n  date.textContent = dateTransformer(rawDate);\n\n  container.appendChild(date);\n}\n\nasync function getWeatherIcon(iconName) {\n  console.log(\"Looking for icon:\", iconName);\n  try {\n    const iconModule = await __webpack_require__(\"./src/assets/icons lazy recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${iconName}.svg`);\n    return iconModule.default;\n  } catch (error) {\n    console.error(`Icon ${iconName} not found`);\n    const fallBack = await __webpack_require__.e(/*! import() */ \"src_assets_icons_clear-day_svg\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/icons/clear-day.svg */ \"./src/assets/icons/clear-day.svg\", 17));\n    return fallBack.default;\n  }\n}\n\nfunction appendSVGAsImage(svgUrl, container) {\n  const img = document.createElement(\"img\");\n  img.src = svgUrl;\n  img.alt = \"Weather icon\";\n  img.className = \"weather-icon\";\n\n  container.appendChild(img);\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/dom/render.js?");

/***/ }),

/***/ "./src/dom/renderTitle.js":
/*!********************************!*\
  !*** ./src/dom/renderTitle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTitle: () => (/* binding */ createTitle)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nfunction createTitle() {\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Your Favorite Weather App\";\n\n  content.appendChild(title);\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/dom/renderTitle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _api_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/weather.js */ \"./src/api/weather.js\");\n/* harmony import */ var _dom_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/render.js */ \"./src/dom/render.js\");\n/* harmony import */ var _dom_renderTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/renderTitle.js */ \"./src/dom/renderTitle.js\");\n\n\n\n\n\n\n(0,_dom_renderTitle_js__WEBPACK_IMPORTED_MODULE_3__.createTitle)();\n(0,_dom_render_js__WEBPACK_IMPORTED_MODULE_2__.createForm)();\n\nconst form = document.getElementById(\"weather-form\");\nconst input = document.getElementById(\"city-input\");\n\ninput.addEventListener(\"input\", function () {\n  this.setCustomValidity(\"\");\n});\n\nform.addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n  console.clear();\n\n  const city = input.value.trim();\n\n  if (city === \"\") {\n    input.setCustomValidity(\"Enter a City\");\n    input.reportValidity();\n    return;\n  } else {\n    input.setCustomValidity(\"\");\n  }\n  try {\n    const data = await (0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city);\n    const current = (0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(data);\n    const foreCast = (0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.getForecast)(data);\n    console.log(current);\n    console.log(foreCast);\n\n    await (0,_dom_render_js__WEBPACK_IMPORTED_MODULE_2__.renderCurrentWeather)(current);\n    await (0,_dom_render_js__WEBPACK_IMPORTED_MODULE_2__.renderForecast)(foreCast);\n  } catch (error) {\n    console.error(\"Something went wrong:\", error);\n    input.setCustomValidity(\"City not found or invalid.\");\n    input.reportValidity();\n  }\n});\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weatherapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;