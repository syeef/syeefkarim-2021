webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_layouts/homepage.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@keyframes homepage_bg-animation__N2_KG {\\n  0% {\\n    background-position: left; }\\n  100% {\\n    background-position: right; } }\\n\\n@keyframes homepage_rotate-hue__2TlfP {\\n  from {\\n    filter: blur(var(--blur)) hue-rotate(0deg); }\\n  to {\\n    filter: blur(var(--blur)) hue-rotate(360deg); } }\\n\\n.homepage_pageContainer__1sgMO {\\n  position: relative;\\n  min-height: 100vh; }\\n\\n.homepage_contentWrap__zH2Al {\\n  padding-bottom: 2.5rem;\\n  /* Footer height */ }\\n\\n.homepage_hero__1l7nz {\\n  animation: homepage_rotate-hue__2TlfP 30s linear infinite;\\n  background-image: conic-gradient(at 40% 75%, #e2a634, #d86b34 20%, #c1363f 35%, #a6529a 75%, #645ca3 90%, #475a95 100%);\\n  margin-top: -56px;\\n  min-height: 75vh; }\\n  .homepage_hero__1l7nz h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px; }\\n\\n@media (max-width: 688px) {\\n  .homepage_hero__1l7nz {\\n    min-height: -webkit-fill-available; }\\n    .homepage_hero__1l7nz h1 {\\n      font-size: 4rem; } }\\n\\n.homepage_heroContent__1ptM_ {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%; }\\n  .homepage_heroContent__1ptM_ p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0; }\\n\\n.homepage_logopoolWrapper__5j7g- {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center; }\\n  .homepage_logopoolWrapper__5j7g- .homepage_logopool__39psx {\\n    display: flex;\\n    justify-content: space-around; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://homepage.module.scss\"],\"names\":[],\"mappings\":\"AAqBA;EACE;IACE,yBAAyB,EAAA;EAE3B;IACE,0BAA0B,EAAA,EAAA;;AAG9B;EACE;IACE,0CAA0C,EAAA;EAE5C;IACE,4CAA4C,EAAA,EAAA;;AAKhD;EACE,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACE,sBAAsB;EAAE,kBAAA,EAAmB;;AAqB7C;EACE,yDAAyC;EACzC,uHAlDD;EAmDC,iBAAiB;EACjB,gBAAgB,EAAA;EAJlB;IAMI,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,qBAAqB;IACrB,wBAAwB;IACxB,sBAAsB,EAAA;;AAI1B;EACE;IACE,kCAAkC,EAAA;IADpC;MAGI,eAAe,EAAA,EAChB;;AAIL;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,UAAU,EAAA;EALZ;IAOI,kBAAkB;IAClB,mBAAmB,EAAA;;AAGvB;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB,EAAA;EANpB;IAQI,aAAa;IACb,6BAA6B,EAAA\",\"sourcesContent\":[\"// variables\\n// $gradient: linear-gradient(\\n//   45deg,\\n//   #e2a634,\\n//   #d86b34,\\n//   #c1363f,\\n//   #a6529a,\\n//   #645ca3,\\n//   #475a95\\n// );\\n$gradient: conic-gradient(\\n  at 40% 75%,\\n  #e2a634,\\n  #d86b34 20%,\\n  #c1363f 35%,\\n  #a6529a 75%,\\n  #645ca3 90%,\\n  #475a95 100%\\n);\\n\\n// animations\\n@keyframes bg-animation {\\n  0% {\\n    background-position: left;\\n  }\\n  100% {\\n    background-position: right;\\n  }\\n}\\n@keyframes rotate-hue {\\n  from {\\n    filter: blur(var(--blur)) hue-rotate(0deg);\\n  }\\n  to {\\n    filter: blur(var(--blur)) hue-rotate(360deg);\\n  }\\n}\\n\\n// page basics\\n.pageContainer {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n.contentWrap {\\n  padding-bottom: 2.5rem; /* Footer height */\\n}\\n\\n// styles\\n// .hero {\\n//   animation: bg-animation 60s infinite alternate;\\n//   background-image: $gradient;\\n//   background-size: 400%;\\n//   margin-top: -56px;\\n//   min-height: 75vh;\\n//   h1 {\\n//     font-family: \\\"DM Sans\\\", sans-serif;\\n//     font-size: 5rem;\\n//     font-weight: 700;\\n//     margin-block-start: 0em;\\n//     margin-block-end: 0em;\\n//     margin-inline-start: 0px;\\n//     margin-inline-end: 0px;\\n//   }\\n// }\\n\\n.hero {\\n  animation: rotate-hue 30s linear infinite;\\n  background-image: $gradient;\\n  margin-top: -56px;\\n  min-height: 75vh;\\n  h1 {\\n    font-family: \\\"DM Sans\\\", sans-serif;\\n    font-size: 5rem;\\n    font-weight: 700;\\n    margin-block-start: 0em;\\n    margin-block-end: 0em;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px;\\n  }\\n}\\n\\n@media (max-width: 688px) {\\n  .hero {\\n    min-height: -webkit-fill-available;\\n    h1 {\\n      font-size: 4rem;\\n    }\\n  }\\n}\\n\\n.heroContent {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%;\\n  p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0;\\n  }\\n}\\n.logopoolWrapper {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center;\\n  .logopool {\\n    display: flex;\\n    justify-content: space-around;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pageContainer\": \"homepage_pageContainer__1sgMO\",\n\t\"contentWrap\": \"homepage_contentWrap__zH2Al\",\n\t\"hero\": \"homepage_hero__1l7nz\",\n\t\"rotate-hue\": \"homepage_rotate-hue__2TlfP\",\n\t\"heroContent\": \"homepage_heroContent__1ptM_\",\n\t\"logopoolWrapper\": \"homepage_logopoolWrapper__5j7g-\",\n\t\"logopool\": \"homepage_logopool__39psx\",\n\t\"bg-animation\": \"homepage_bg-animation__N2_KG\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3M/N2NhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLFFBQVEsZ0NBQWdDLEVBQUUsVUFBVSxpQ0FBaUMsRUFBRSxFQUFFLDJDQUEyQyxVQUFVLGlEQUFpRCxFQUFFLFFBQVEsbURBQW1ELEVBQUUsRUFBRSxvQ0FBb0MsdUJBQXVCLHNCQUFzQixFQUFFLGtDQUFrQywyQkFBMkIseUJBQXlCLDJCQUEyQiw4REFBOEQsNEhBQTRILHNCQUFzQixxQkFBcUIsRUFBRSw4QkFBOEIsMkNBQTJDLHNCQUFzQix1QkFBdUIsOEJBQThCLDRCQUE0QiwrQkFBK0IsNkJBQTZCLEVBQUUsK0JBQStCLDJCQUEyQix5Q0FBeUMsRUFBRSxnQ0FBZ0Msd0JBQXdCLEVBQUUsRUFBRSxrQ0FBa0Msa0JBQWtCLDJCQUEyQixtQkFBbUIsd0JBQXdCLGVBQWUsRUFBRSxvQ0FBb0MseUJBQXlCLDBCQUEwQixFQUFFLHNDQUFzQyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHVCQUF1QixFQUFFLGdFQUFnRSxvQkFBb0Isb0NBQW9DLEVBQUUsU0FBUyxzRkFBc0YsS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLHVCQUF1QixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxrQkFBa0IsT0FBTyxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLHNCQUFzQixLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLEtBQUssWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSw4TEFBOEwsMklBQTJJLDRDQUE0QyxRQUFRLGdDQUFnQyxLQUFLLFVBQVUsaUNBQWlDLEtBQUssR0FBRyx5QkFBeUIsVUFBVSxpREFBaUQsS0FBSyxRQUFRLG1EQUFtRCxLQUFLLEdBQUcsb0NBQW9DLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0IsMkJBQTJCLHVCQUF1Qix5QkFBeUIsc0RBQXNELG1DQUFtQyw2QkFBNkIseUJBQXlCLHdCQUF3QixXQUFXLDhDQUE4Qyx5QkFBeUIsMEJBQTBCLGlDQUFpQywrQkFBK0Isa0NBQWtDLGdDQUFnQyxRQUFRLE1BQU0sV0FBVyw4Q0FBOEMsZ0NBQWdDLHNCQUFzQixxQkFBcUIsUUFBUSwyQ0FBMkMsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsNEJBQTRCLCtCQUErQiw2QkFBNkIsS0FBSyxHQUFHLCtCQUErQixXQUFXLHlDQUF5QyxVQUFVLHdCQUF3QixPQUFPLEtBQUssR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixtQkFBbUIsd0JBQXdCLGVBQWUsT0FBTyx5QkFBeUIsMEJBQTBCLEtBQUssR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qix1QkFBdUIsZUFBZSxvQkFBb0Isb0NBQW9DLEtBQUssR0FBRyxxQkFBcUI7QUFDMzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGhvbWVwYWdlX2JnLWFuaW1hdGlvbl9fTjJfS0cge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7IH0gfVxcblxcbkBrZXlmcmFtZXMgaG9tZXBhZ2Vfcm90YXRlLWh1ZV9fMlRsZlAge1xcbiAgZnJvbSB7XFxuICAgIGZpbHRlcjogYmx1cih2YXIoLS1ibHVyKSkgaHVlLXJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICBmaWx0ZXI6IGJsdXIodmFyKC0tYmx1cikpIGh1ZS1yb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLmhvbWVwYWdlX3BhZ2VDb250YWluZXJfXzFzZ01PIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmhvbWVwYWdlX2NvbnRlbnRXcmFwX196SDJBbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbiAgLyogRm9vdGVyIGhlaWdodCAqLyB9XFxuXFxuLmhvbWVwYWdlX2hlcm9fXzFsN256IHtcXG4gIGFuaW1hdGlvbjogaG9tZXBhZ2Vfcm90YXRlLWh1ZV9fMlRsZlAgMzBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGNvbmljLWdyYWRpZW50KGF0IDQwJSA3NSUsICNlMmE2MzQsICNkODZiMzQgMjAlLCAjYzEzNjNmIDM1JSwgI2E2NTI5YSA3NSUsICM2NDVjYTMgOTAlLCAjNDc1YTk1IDEwMCUpO1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoOyB9XFxuICAuaG9tZXBhZ2VfaGVyb19fMWw3bnogaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODhweCkge1xcbiAgLmhvbWVwYWdlX2hlcm9fXzFsN256IHtcXG4gICAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgfVxcbiAgICAuaG9tZXBhZ2VfaGVyb19fMWw3bnogaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTsgfSB9XFxuXFxuLmhvbWVwYWdlX2hlcm9Db250ZW50X18xcHRNXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCA2NHB4O1xcbiAgcGFkZGluZzogODBweCAwIDAgMDtcXG4gIHdpZHRoOiA1MCU7IH1cXG4gIC5ob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDsgfVxcblxcbi5ob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctIHtcXG4gIGNvbG9yOiAjYWRhZGFkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjRweCAwIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhvbWVwYWdlX2xvZ29wb29sV3JhcHBlcl9fNWo3Zy0gLmhvbWVwYWdlX2xvZ29wb29sX18zOXBzeCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2hvbWVwYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFCQTtFQUNFO0lBQ0UseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSwwQkFBMEIsRUFBQSxFQUFBOztBQUc5QjtFQUNFO0lBQ0UsMENBQTBDLEVBQUE7RUFFNUM7SUFDRSw0Q0FBNEMsRUFBQSxFQUFBOztBQUtoRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxzQkFBc0I7RUFBRSxrQkFBQSxFQUFtQjs7QUFxQjdDO0VBQ0UseURBQXlDO0VBQ3pDLHVIQWxERDtFQW1EQyxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7RUFKbEI7SUFNSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDRTtJQUNFLGtDQUFrQyxFQUFBO0lBRHBDO01BR0ksZUFBZSxFQUFBLEVBQ2hCOztBQUlMO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtFQUxaO0lBT0ksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFOcEI7SUFRSSxhQUFhO0lBQ2IsNkJBQTZCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gdmFyaWFibGVzXFxuLy8gJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXFxuLy8gICA0NWRlZyxcXG4vLyAgICNlMmE2MzQsXFxuLy8gICAjZDg2YjM0LFxcbi8vICAgI2MxMzYzZixcXG4vLyAgICNhNjUyOWEsXFxuLy8gICAjNjQ1Y2EzLFxcbi8vICAgIzQ3NWE5NVxcbi8vICk7XFxuJGdyYWRpZW50OiBjb25pYy1ncmFkaWVudChcXG4gIGF0IDQwJSA3NSUsXFxuICAjZTJhNjM0LFxcbiAgI2Q4NmIzNCAyMCUsXFxuICAjYzEzNjNmIDM1JSxcXG4gICNhNjUyOWEgNzUlLFxcbiAgIzY0NWNhMyA5MCUsXFxuICAjNDc1YTk1IDEwMCVcXG4pO1xcblxcbi8vIGFuaW1hdGlvbnNcXG5Aa2V5ZnJhbWVzIGJnLWFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlLWh1ZSB7XFxuICBmcm9tIHtcXG4gICAgZmlsdGVyOiBibHVyKHZhcigtLWJsdXIpKSBodWUtcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBmaWx0ZXI6IGJsdXIodmFyKC0tYmx1cikpIGh1ZS1yb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLy8gcGFnZSBiYXNpY3NcXG4ucGFnZUNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnRXcmFwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07IC8qIEZvb3RlciBoZWlnaHQgKi9cXG59XFxuXFxuLy8gc3R5bGVzXFxuLy8gLmhlcm8ge1xcbi8vICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gNjBzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6ICRncmFkaWVudDtcXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXG4vLyAgIG1hcmdpbi10b3A6IC01NnB4O1xcbi8vICAgbWluLWhlaWdodDogNzV2aDtcXG4vLyAgIGgxIHtcXG4vLyAgICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4vLyAgICAgZm9udC1zaXplOiA1cmVtO1xcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xcbi8vICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcXG4vLyAgICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcbi8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxuLy8gICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxuLy8gICB9XFxuLy8gfVxcblxcbi5oZXJvIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlLWh1ZSAzMHMgbGluZWFyIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyYWRpZW50O1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4OHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhlcm9Db250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDY0cHg7XFxuICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDI0cHggMCAwIDA7XFxuICB9XFxufVxcbi5sb2dvcG9vbFdyYXBwZXIge1xcbiAgY29sb3I6ICNhZGFkYWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyNHB4IDAgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLmxvZ29wb29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBhZ2VDb250YWluZXJcIjogXCJob21lcGFnZV9wYWdlQ29udGFpbmVyX18xc2dNT1wiLFxuXHRcImNvbnRlbnRXcmFwXCI6IFwiaG9tZXBhZ2VfY29udGVudFdyYXBfX3pIMkFsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVwYWdlX2hlcm9fXzFsN256XCIsXG5cdFwicm90YXRlLWh1ZVwiOiBcImhvbWVwYWdlX3JvdGF0ZS1odWVfXzJUbGZQXCIsXG5cdFwiaGVyb0NvbnRlbnRcIjogXCJob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV9cIixcblx0XCJsb2dvcG9vbFdyYXBwZXJcIjogXCJob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctXCIsXG5cdFwibG9nb3Bvb2xcIjogXCJob21lcGFnZV9sb2dvcG9vbF9fMzlwc3hcIixcblx0XCJiZy1hbmltYXRpb25cIjogXCJob21lcGFnZV9iZy1hbmltYXRpb25fX04yX0tHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss\n");

/***/ })

})