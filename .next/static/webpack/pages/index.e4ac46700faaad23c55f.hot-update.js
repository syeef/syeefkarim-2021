webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_layouts/homepage.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@keyframes homepage_bg-animation__N2_KG {\\n  0% {\\n    background-position: left; }\\n  100% {\\n    background-position: right; } }\\n\\n.homepage_pageContainer__1sgMO {\\n  position: relative;\\n  min-height: 100vh; }\\n\\n.homepage_contentWrap__zH2Al {\\n  padding-bottom: 2.5rem;\\n  /* Footer height */ }\\n\\n.homepage_hero__1l7nz {\\n  animation: homepage_bg-animation__N2_KG 60s infinite alternate;\\n  background-image: linear-gradient(45deg, #e2a634, #d86b34, #c1363f, #a6529a, #645ca3, #475a95);\\n  background-size: 400%;\\n  margin-top: -56px;\\n  min-height: 75vh; }\\n  .homepage_hero__1l7nz h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px; }\\n\\n@media (max-width: 688px) {\\n  .homepage_hero__1l7nz {\\n    height: 100%; }\\n    .homepage_hero__1l7nz h1 {\\n      font-size: 4rem; } }\\n\\n.homepage_heroContent__1ptM_ {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%; }\\n  .homepage_heroContent__1ptM_ p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0; }\\n\\n.homepage_logopoolWrapper__5j7g- {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center; }\\n  .homepage_logopoolWrapper__5j7g- .homepage_logopool__39psx {\\n    display: flex;\\n    justify-content: space-around; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://homepage.module.scss\"],\"names\":[],\"mappings\":\"AAYA;EACE;IACE,yBAAyB,EAAA;EAE3B;IACE,0BAA0B,EAAA,EAAA;;AAK9B;EACE,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACE,sBAAsB;EAAE,kBAAA,EAAmB;;AAI7C;EACE,8DAA8C;EAC9C,8FAzBD;EA0BC,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB,EAAA;EALlB;IAOI,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,qBAAqB;IACrB,wBAAwB;IACxB,sBAAsB,EAAA;;AAG1B;EACE;IACE,YAAY,EAAA;IADd;MAGI,eAAe,EAAA,EAChB;;AAIL;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,UAAU,EAAA;EALZ;IAOI,kBAAkB;IAClB,mBAAmB,EAAA;;AAGvB;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB,EAAA;EANpB;IAQI,aAAa;IACb,6BAA6B,EAAA\",\"sourcesContent\":[\"// variables\\n$gradient: linear-gradient(\\n  45deg,\\n  #e2a634,\\n  #d86b34,\\n  #c1363f,\\n  #a6529a,\\n  #645ca3,\\n  #475a95\\n);\\n\\n// animations\\n@keyframes bg-animation {\\n  0% {\\n    background-position: left;\\n  }\\n  100% {\\n    background-position: right;\\n  }\\n}\\n\\n// page basics\\n.pageContainer {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n.contentWrap {\\n  padding-bottom: 2.5rem; /* Footer height */\\n}\\n\\n// styles\\n.hero {\\n  animation: bg-animation 60s infinite alternate;\\n  background-image: $gradient;\\n  background-size: 400%;\\n  margin-top: -56px;\\n  min-height: 75vh;\\n  h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px;\\n  }\\n}\\n@media (max-width: 688px) {\\n  .hero {\\n    height: 100%;\\n    h1 {\\n      font-size: 4rem;\\n    }\\n  }\\n}\\n\\n.heroContent {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%;\\n  p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0;\\n  }\\n}\\n.logopoolWrapper {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center;\\n  .logopool {\\n    display: flex;\\n    justify-content: space-around;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pageContainer\": \"homepage_pageContainer__1sgMO\",\n\t\"contentWrap\": \"homepage_contentWrap__zH2Al\",\n\t\"hero\": \"homepage_hero__1l7nz\",\n\t\"bg-animation\": \"homepage_bg-animation__N2_KG\",\n\t\"heroContent\": \"homepage_heroContent__1ptM_\",\n\t\"logopoolWrapper\": \"homepage_logopoolWrapper__5j7g-\",\n\t\"logopool\": \"homepage_logopool__39psx\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3M/N2NhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLFFBQVEsZ0NBQWdDLEVBQUUsVUFBVSxpQ0FBaUMsRUFBRSxFQUFFLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEVBQUUsa0NBQWtDLDJCQUEyQix5QkFBeUIsMkJBQTJCLG1FQUFtRSxtR0FBbUcsMEJBQTBCLHNCQUFzQixxQkFBcUIsRUFBRSw4QkFBOEIsMkNBQTJDLHNCQUFzQix1QkFBdUIsOEJBQThCLDRCQUE0QiwrQkFBK0IsNkJBQTZCLEVBQUUsK0JBQStCLDJCQUEyQixtQkFBbUIsRUFBRSxnQ0FBZ0Msd0JBQXdCLEVBQUUsRUFBRSxrQ0FBa0Msa0JBQWtCLDJCQUEyQixtQkFBbUIsd0JBQXdCLGVBQWUsRUFBRSxvQ0FBb0MseUJBQXlCLDBCQUEwQixFQUFFLHNDQUFzQyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHVCQUF1QixFQUFFLGdFQUFnRSxvQkFBb0Isb0NBQW9DLEVBQUUsU0FBUyxxRkFBcUYsS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxLQUFLLGVBQWUsS0FBSyxzQkFBc0IsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsbUtBQW1LLDRDQUE0QyxRQUFRLGdDQUFnQyxLQUFLLFVBQVUsaUNBQWlDLEtBQUssR0FBRyxvQ0FBb0MsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixtREFBbUQsZ0NBQWdDLDBCQUEwQixzQkFBc0IscUJBQXFCLFFBQVEsMkNBQTJDLHNCQUFzQix1QkFBdUIsOEJBQThCLDRCQUE0QiwrQkFBK0IsNkJBQTZCLEtBQUssR0FBRyw2QkFBNkIsV0FBVyxtQkFBbUIsVUFBVSx3QkFBd0IsT0FBTyxLQUFLLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsbUJBQW1CLHdCQUF3QixlQUFlLE9BQU8seUJBQXlCLDBCQUEwQixLQUFLLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLGVBQWUsb0JBQW9CLG9DQUFvQyxLQUFLLEdBQUcscUJBQXFCO0FBQ3YrRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9fbGF5b3V0cy9ob21lcGFnZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgaG9tZXBhZ2VfYmctYW5pbWF0aW9uX19OMl9LRyB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfSB9XFxuXFxuLmhvbWVwYWdlX3BhZ2VDb250YWluZXJfXzFzZ01PIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmhvbWVwYWdlX2NvbnRlbnRXcmFwX196SDJBbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbiAgLyogRm9vdGVyIGhlaWdodCAqLyB9XFxuXFxuLmhvbWVwYWdlX2hlcm9fXzFsN256IHtcXG4gIGFuaW1hdGlvbjogaG9tZXBhZ2VfYmctYW5pbWF0aW9uX19OMl9LRyA2MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTJhNjM0LCAjZDg2YjM0LCAjYzEzNjNmLCAjYTY1MjlhLCAjNjQ1Y2EzLCAjNDc1YTk1KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXG4gIG1hcmdpbi10b3A6IC01NnB4O1xcbiAgbWluLWhlaWdodDogNzV2aDsgfVxcbiAgLmhvbWVwYWdlX2hlcm9fXzFsN256IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjg4cHgpIHtcXG4gIC5ob21lcGFnZV9oZXJvX18xbDdueiB7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAuaG9tZXBhZ2VfaGVyb19fMWw3bnogaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTsgfSB9XFxuXFxuLmhvbWVwYWdlX2hlcm9Db250ZW50X18xcHRNXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCA2NHB4O1xcbiAgcGFkZGluZzogODBweCAwIDAgMDtcXG4gIHdpZHRoOiA1MCU7IH1cXG4gIC5ob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDsgfVxcblxcbi5ob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctIHtcXG4gIGNvbG9yOiAjYWRhZGFkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjRweCAwIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhvbWVwYWdlX2xvZ29wb29sV3JhcHBlcl9fNWo3Zy0gLmhvbWVwYWdlX2xvZ29wb29sX18zOXBzeCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2hvbWVwYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0U7SUFDRSx5QkFBeUIsRUFBQTtFQUUzQjtJQUNFLDBCQUEwQixFQUFBLEVBQUE7O0FBSzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHNCQUFzQjtFQUFFLGtCQUFBLEVBQW1COztBQUk3QztFQUNFLDhEQUE4QztFQUM5Qyw4RkF6QkQ7RUEwQkMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUxsQjtJQU9JLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0lBRGQ7TUFHSSxlQUFlLEVBQUEsRUFDaEI7O0FBSUw7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0VBTFo7SUFPSSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQU5wQjtJQVFJLGFBQWE7SUFDYiw2QkFBNkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyB2YXJpYWJsZXNcXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcXG4gIDQ1ZGVnLFxcbiAgI2UyYTYzNCxcXG4gICNkODZiMzQsXFxuICAjYzEzNjNmLFxcbiAgI2E2NTI5YSxcXG4gICM2NDVjYTMsXFxuICAjNDc1YTk1XFxuKTtcXG5cXG4vLyBhbmltYXRpb25zXFxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5cXG4vLyBwYWdlIGJhc2ljc1xcbi5wYWdlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudFdyYXAge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgLyogRm9vdGVyIGhlaWdodCAqL1xcbn1cXG5cXG4vLyBzdHlsZXNcXG4uaGVybyB7XFxuICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiA2MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyYWRpZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4OHB4KSB7XFxuICAuaGVybyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGVyb0NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgNjRweDtcXG4gIHBhZGRpbmc6IDgwcHggMCAwIDA7XFxuICB3aWR0aDogNTAlO1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDtcXG4gIH1cXG59XFxuLmxvZ29wb29sV3JhcHBlciB7XFxuICBjb2xvcjogI2FkYWRhZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDI0cHggMCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAubG9nb3Bvb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGFnZUNvbnRhaW5lclwiOiBcImhvbWVwYWdlX3BhZ2VDb250YWluZXJfXzFzZ01PXCIsXG5cdFwiY29udGVudFdyYXBcIjogXCJob21lcGFnZV9jb250ZW50V3JhcF9fekgyQWxcIixcblx0XCJoZXJvXCI6IFwiaG9tZXBhZ2VfaGVyb19fMWw3bnpcIixcblx0XCJiZy1hbmltYXRpb25cIjogXCJob21lcGFnZV9iZy1hbmltYXRpb25fX04yX0tHXCIsXG5cdFwiaGVyb0NvbnRlbnRcIjogXCJob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV9cIixcblx0XCJsb2dvcG9vbFdyYXBwZXJcIjogXCJob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctXCIsXG5cdFwibG9nb3Bvb2xcIjogXCJob21lcGFnZV9sb2dvcG9vbF9fMzlwc3hcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss\n");

/***/ })

})