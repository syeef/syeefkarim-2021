webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_layouts/homepage.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@keyframes homepage_bg-animation__N2_KG {\\n  0% {\\n    background-position: left; }\\n  100% {\\n    background-position: right; } }\\n\\n.homepage_pageContainer__1sgMO {\\n  position: relative;\\n  min-height: 100vh; }\\n\\n.homepage_contentWrap__zH2Al {\\n  padding-bottom: 2.5rem;\\n  /* Footer height */ }\\n\\n.homepage_hero__1l7nz {\\n  animation: homepage_bg-animation__N2_KG 60s infinite alternate;\\n  background-image: linear-gradient(45deg, #e2a634, #d86b34, #c1363f, #a6529a, #645ca3, #475a95);\\n  background-size: 400%;\\n  margin-top: -56px;\\n  min-height: 75vh; }\\n  .homepage_hero__1l7nz h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px; }\\n  @media (max-width: 688x) {\\n    .homepage_hero__1l7nz h1 {\\n      color: blue; } }\\n\\n.homepage_heroContent__1ptM_ {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%; }\\n  .homepage_heroContent__1ptM_ p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0; }\\n\\n.homepage_logopoolWrapper__5j7g- {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center; }\\n  .homepage_logopoolWrapper__5j7g- .homepage_logopool__39psx {\\n    display: flex;\\n    justify-content: space-around; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://homepage.module.scss\"],\"names\":[],\"mappings\":\"AAYA;EACE;IACE,yBAAyB,EAAA;EAE3B;IACE,0BAA0B,EAAA,EAAA;;AAK9B;EACE,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACE,sBAAsB;EAAE,kBAAA,EAAmB;;AAI7C;EACE,8DAA8C;EAC9C,8FAzBD;EA0BC,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB,EAAA;EALlB;IAOI,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,qBAAqB;IACrB,wBAAwB;IACxB,sBAAsB,EAAA;EAExB;IAfF;MAiBM,WAAW,EAAA,EACZ;;AAIL;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,UAAU,EAAA;EALZ;IAOI,kBAAkB;IAClB,mBAAmB,EAAA;;AAGvB;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB,EAAA;EANpB;IAQI,aAAa;IACb,6BAA6B,EAAA\",\"sourcesContent\":[\"// variables\\n$gradient: linear-gradient(\\n  45deg,\\n  #e2a634,\\n  #d86b34,\\n  #c1363f,\\n  #a6529a,\\n  #645ca3,\\n  #475a95\\n);\\n\\n// animations\\n@keyframes bg-animation {\\n  0% {\\n    background-position: left;\\n  }\\n  100% {\\n    background-position: right;\\n  }\\n}\\n\\n// page basics\\n.pageContainer {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n.contentWrap {\\n  padding-bottom: 2.5rem; /* Footer height */\\n}\\n\\n// styles\\n.hero {\\n  animation: bg-animation 60s infinite alternate;\\n  background-image: $gradient;\\n  background-size: 400%;\\n  margin-top: -56px;\\n  min-height: 75vh;\\n  h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px;\\n  }\\n  @media (max-width: 688x) {\\n    h1 {\\n      color: blue;\\n    }\\n  }\\n}\\n\\n.heroContent {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%;\\n  p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0;\\n  }\\n}\\n.logopoolWrapper {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center;\\n  .logopool {\\n    display: flex;\\n    justify-content: space-around;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pageContainer\": \"homepage_pageContainer__1sgMO\",\n\t\"contentWrap\": \"homepage_contentWrap__zH2Al\",\n\t\"hero\": \"homepage_hero__1l7nz\",\n\t\"bg-animation\": \"homepage_bg-animation__N2_KG\",\n\t\"heroContent\": \"homepage_heroContent__1ptM_\",\n\t\"logopoolWrapper\": \"homepage_logopoolWrapper__5j7g-\",\n\t\"logopool\": \"homepage_logopool__39psx\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3M/N2NhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLFFBQVEsZ0NBQWdDLEVBQUUsVUFBVSxpQ0FBaUMsRUFBRSxFQUFFLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEVBQUUsa0NBQWtDLDJCQUEyQix5QkFBeUIsMkJBQTJCLG1FQUFtRSxtR0FBbUcsMEJBQTBCLHNCQUFzQixxQkFBcUIsRUFBRSw4QkFBOEIsMkNBQTJDLHNCQUFzQix1QkFBdUIsOEJBQThCLDRCQUE0QiwrQkFBK0IsNkJBQTZCLEVBQUUsOEJBQThCLGdDQUFnQyxvQkFBb0IsRUFBRSxFQUFFLGtDQUFrQyxrQkFBa0IsMkJBQTJCLG1CQUFtQix3QkFBd0IsZUFBZSxFQUFFLG9DQUFvQyx5QkFBeUIsMEJBQTBCLEVBQUUsc0NBQXNDLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLEVBQUUsZ0VBQWdFLG9CQUFvQixvQ0FBb0MsRUFBRSxTQUFTLHFGQUFxRixLQUFLLGlCQUFpQixNQUFNLHVCQUF1QixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLEtBQUssc0JBQXNCLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxVQUFVLG1LQUFtSyw0Q0FBNEMsUUFBUSxnQ0FBZ0MsS0FBSyxVQUFVLGlDQUFpQyxLQUFLLEdBQUcsb0NBQW9DLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0IsMkJBQTJCLHVCQUF1QixzQkFBc0IsbURBQW1ELGdDQUFnQywwQkFBMEIsc0JBQXNCLHFCQUFxQixRQUFRLDJDQUEyQyxzQkFBc0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsK0JBQStCLDZCQUE2QixLQUFLLDhCQUE4QixVQUFVLG9CQUFvQixPQUFPLEtBQUssR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixtQkFBbUIsd0JBQXdCLGVBQWUsT0FBTyx5QkFBeUIsMEJBQTBCLEtBQUssR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qix1QkFBdUIsZUFBZSxvQkFBb0Isb0NBQW9DLEtBQUssR0FBRyxxQkFBcUI7QUFDejNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL19sYXlvdXRzL2hvbWVwYWdlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBob21lcGFnZV9iZy1hbmltYXRpb25fX04yX0tHIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDsgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0OyB9IH1cXG5cXG4uaG9tZXBhZ2VfcGFnZUNvbnRhaW5lcl9fMXNnTU8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG5cXG4uaG9tZXBhZ2VfY29udGVudFdyYXBfX3pIMkFsIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuICAvKiBGb290ZXIgaGVpZ2h0ICovIH1cXG5cXG4uaG9tZXBhZ2VfaGVyb19fMWw3bnoge1xcbiAgYW5pbWF0aW9uOiBob21lcGFnZV9iZy1hbmltYXRpb25fX04yX0tHIDYwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlMmE2MzQsICNkODZiMzQsICNjMTM2M2YsICNhNjUyOWEsICM2NDVjYTMsICM0NzVhOTUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoOyB9XFxuICAuaG9tZXBhZ2VfaGVyb19fMWw3bnogaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY4OHgpIHtcXG4gICAgLmhvbWVwYWdlX2hlcm9fXzFsN256IGgxIHtcXG4gICAgICBjb2xvcjogYmx1ZTsgfSB9XFxuXFxuLmhvbWVwYWdlX2hlcm9Db250ZW50X18xcHRNXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCA2NHB4O1xcbiAgcGFkZGluZzogODBweCAwIDAgMDtcXG4gIHdpZHRoOiA1MCU7IH1cXG4gIC5ob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDsgfVxcblxcbi5ob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctIHtcXG4gIGNvbG9yOiAjYWRhZGFkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjRweCAwIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhvbWVwYWdlX2xvZ29wb29sV3JhcHBlcl9fNWo3Zy0gLmhvbWVwYWdlX2xvZ29wb29sX18zOXBzeCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2hvbWVwYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0U7SUFDRSx5QkFBeUIsRUFBQTtFQUUzQjtJQUNFLDBCQUEwQixFQUFBLEVBQUE7O0FBSzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHNCQUFzQjtFQUFFLGtCQUFBLEVBQW1COztBQUk3QztFQUNFLDhEQUE4QztFQUM5Qyw4RkF6QkQ7RUEwQkMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUxsQjtJQU9JLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQixFQUFBO0VBRXhCO0lBZkY7TUFpQk0sV0FBVyxFQUFBLEVBQ1o7O0FBSUw7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0VBTFo7SUFPSSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQU5wQjtJQVFJLGFBQWE7SUFDYiw2QkFBNkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyB2YXJpYWJsZXNcXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcXG4gIDQ1ZGVnLFxcbiAgI2UyYTYzNCxcXG4gICNkODZiMzQsXFxuICAjYzEzNjNmLFxcbiAgI2E2NTI5YSxcXG4gICM2NDVjYTMsXFxuICAjNDc1YTk1XFxuKTtcXG5cXG4vLyBhbmltYXRpb25zXFxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5cXG4vLyBwYWdlIGJhc2ljc1xcbi5wYWdlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudFdyYXAge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgLyogRm9vdGVyIGhlaWdodCAqL1xcbn1cXG5cXG4vLyBzdHlsZXNcXG4uaGVybyB7XFxuICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiA2MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyYWRpZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2ODh4KSB7XFxuICAgIGgxIHtcXG4gICAgICBjb2xvcjogYmx1ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGVyb0NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgNjRweDtcXG4gIHBhZGRpbmc6IDgwcHggMCAwIDA7XFxuICB3aWR0aDogNTAlO1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDtcXG4gIH1cXG59XFxuLmxvZ29wb29sV3JhcHBlciB7XFxuICBjb2xvcjogI2FkYWRhZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDI0cHggMCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAubG9nb3Bvb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGFnZUNvbnRhaW5lclwiOiBcImhvbWVwYWdlX3BhZ2VDb250YWluZXJfXzFzZ01PXCIsXG5cdFwiY29udGVudFdyYXBcIjogXCJob21lcGFnZV9jb250ZW50V3JhcF9fekgyQWxcIixcblx0XCJoZXJvXCI6IFwiaG9tZXBhZ2VfaGVyb19fMWw3bnpcIixcblx0XCJiZy1hbmltYXRpb25cIjogXCJob21lcGFnZV9iZy1hbmltYXRpb25fX04yX0tHXCIsXG5cdFwiaGVyb0NvbnRlbnRcIjogXCJob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV9cIixcblx0XCJsb2dvcG9vbFdyYXBwZXJcIjogXCJob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctXCIsXG5cdFwibG9nb3Bvb2xcIjogXCJob21lcGFnZV9sb2dvcG9vbF9fMzlwc3hcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss\n");

/***/ })

})