webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_layouts/homepage.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@keyframes homepage_rotate-hue__2TlfP {\\n  from {\\n    filter: hue-rotate(0deg); }\\n  to {\\n    filter: hue-rotate(360deg); } }\\n\\n.homepage_pageContainer__1sgMO {\\n  position: relative;\\n  min-height: 100vh; }\\n\\n.homepage_contentWrap__zH2Al {\\n  padding-bottom: 2.5rem;\\n  /* Footer height */ }\\n\\n.homepage_hero__1l7nz {\\n  margin-top: -56px;\\n  min-height: 75vh; }\\n\\n.homepage_heroInner__iKxgM::after {\\n  position: absolute;\\n  top: 0;\\n  z-index: -1;\\n  animation: homepage_rotate-hue__2TlfP 30s linear infinite;\\n  background-image: conic-gradient(at 40% 75%, #e2a634, #d86b34 20%, #c1363f 35%, #a6529a 75%, #645ca3 90%, #475a95 100%);\\n  filter: blur(12px);\\n  -webkit-filter: blur(12px);\\n  -webkit-backdrop-filter: blur(12px);\\n          backdrop-filter: blur(12px); }\\n\\n.homepage_hero__1l7nz h1 {\\n  font-family: \\\"DM Sans\\\", sans-serif;\\n  font-size: 5rem;\\n  font-weight: 700;\\n  margin-block-start: 0em;\\n  margin-block-end: 0em;\\n  margin-inline-start: 0px;\\n  margin-inline-end: 0px; }\\n\\n.homepage_heroContent__1ptM_ {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%;\\n  z-index: 900; }\\n  .homepage_heroContent__1ptM_ p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0; }\\n\\n.homepage_logopoolWrapper__5j7g- {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center; }\\n  .homepage_logopoolWrapper__5j7g- .homepage_logopool__39psx {\\n    display: flex;\\n    justify-content: space-around; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://homepage.module.scss\"],\"names\":[],\"mappings\":\"AA6BA;EACE;IACE,wBAAwB,EAAA;EAE1B;IACE,0BAA0B,EAAA,EAAA;;AAK9B;EACE,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACE,sBAAsB;EAAE,kBAAA,EAAmB;;AAqB7C;EACE,iBAAiB;EACjB,gBAAgB,EAAA;;AAElB;EAGE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,yDAAyC;EACzC,uHA3DD;EA4DC,kBAAkB;EAClB,0BAA0B;EAC1B,mCAA2B;UAA3B,2BAA2B,EAAA;;AAE7B;EACE,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,wBAAwB;EACxB,sBAAsB,EAAA;;AAYxB;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,UAAU;EACV,YAAY,EAAA;EANd;IAQI,kBAAkB;IAClB,mBAAmB,EAAA;;AAIvB;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB,EAAA;EANpB;IAQI,aAAa;IACb,6BAA6B,EAAA\",\"sourcesContent\":[\"// variables\\n// $gradient: linear-gradient(\\n//   45deg,\\n//   #e2a634,\\n//   #d86b34,\\n//   #c1363f,\\n//   #a6529a,\\n//   #645ca3,\\n//   #475a95\\n// );\\n$gradient: conic-gradient(\\n  at 40% 75%,\\n  #e2a634,\\n  #d86b34 20%,\\n  #c1363f 35%,\\n  #a6529a 75%,\\n  #645ca3 90%,\\n  #475a95 100%\\n);\\n\\n// animations\\n// @keyframes bg-animation {\\n//   0% {\\n//     background-position: left;\\n//   }\\n//   100% {\\n//     background-position: right;\\n//   }\\n// }\\n@keyframes rotate-hue {\\n  from {\\n    filter: hue-rotate(0deg);\\n  }\\n  to {\\n    filter: hue-rotate(360deg);\\n  }\\n}\\n\\n// page basics\\n.pageContainer {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n.contentWrap {\\n  padding-bottom: 2.5rem; /* Footer height */\\n}\\n\\n// styles\\n// .hero {\\n//   animation: bg-animation 60s infinite alternate;\\n//   background-image: $gradient;\\n//   background-size: 400%;\\n//   margin-top: -56px;\\n//   min-height: 75vh;\\n//   h1 {\\n//     font-family: \\\"DM Sans\\\", sans-serif;\\n//     font-size: 5rem;\\n//     font-weight: 700;\\n//     margin-block-start: 0em;\\n//     margin-block-end: 0em;\\n//     margin-inline-start: 0px;\\n//     margin-inline-end: 0px;\\n//   }\\n// }\\n\\n.hero {\\n  margin-top: -56px;\\n  min-height: 75vh;\\n}\\n.heroInner::after {\\n  // display: block;\\n  // content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  z-index: -1;\\n  animation: rotate-hue 30s linear infinite;\\n  background-image: $gradient;\\n  filter: blur(12px);\\n  -webkit-filter: blur(12px);\\n  backdrop-filter: blur(12px);\\n}\\n.hero h1 {\\n  font-family: \\\"DM Sans\\\", sans-serif;\\n  font-size: 5rem;\\n  font-weight: 700;\\n  margin-block-start: 0em;\\n  margin-block-end: 0em;\\n  margin-inline-start: 0px;\\n  margin-inline-end: 0px;\\n}\\n\\n// @media (max-width: 688px) {\\n//   .hero {\\n//     min-height: -webkit-fill-available;\\n//     h1 {\\n//       font-size: 4rem;\\n//     }\\n//   }\\n// }\\n\\n.heroContent {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 64px;\\n  padding: 80px 0 0 0;\\n  width: 50%;\\n  z-index: 900;\\n  p {\\n    font-size: 1.25rem;\\n    padding: 24px 0 0 0;\\n  }\\n}\\n\\n.logopoolWrapper {\\n  color: #adadad;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 24px 0 0 0;\\n  text-align: center;\\n  .logopool {\\n    display: flex;\\n    justify-content: space-around;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pageContainer\": \"homepage_pageContainer__1sgMO\",\n\t\"contentWrap\": \"homepage_contentWrap__zH2Al\",\n\t\"hero\": \"homepage_hero__1l7nz\",\n\t\"heroInner\": \"homepage_heroInner__iKxgM\",\n\t\"rotate-hue\": \"homepage_rotate-hue__2TlfP\",\n\t\"heroContent\": \"homepage_heroContent__1ptM_\",\n\t\"logopoolWrapper\": \"homepage_logopoolWrapper__5j7g-\",\n\t\"logopool\": \"homepage_logopool__39psx\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3M/N2NhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMENBQTBDLFVBQVUsK0JBQStCLEVBQUUsUUFBUSxpQ0FBaUMsRUFBRSxFQUFFLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEVBQUUsa0NBQWtDLDJCQUEyQix5QkFBeUIsMkJBQTJCLHNCQUFzQixxQkFBcUIsRUFBRSx1Q0FBdUMsdUJBQXVCLFdBQVcsZ0JBQWdCLDhEQUE4RCw0SEFBNEgsdUJBQXVCLCtCQUErQix3Q0FBd0Msd0NBQXdDLEVBQUUsOEJBQThCLHlDQUF5QyxvQkFBb0IscUJBQXFCLDRCQUE0QiwwQkFBMEIsNkJBQTZCLDJCQUEyQixFQUFFLGtDQUFrQyxrQkFBa0IsMkJBQTJCLG1CQUFtQix3QkFBd0IsZUFBZSxpQkFBaUIsRUFBRSxvQ0FBb0MseUJBQXlCLDBCQUEwQixFQUFFLHNDQUFzQyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHVCQUF1QixFQUFFLGdFQUFnRSxvQkFBb0Isb0NBQW9DLEVBQUUsU0FBUyxzRkFBc0YsS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGVBQWUsS0FBSyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxVQUFVLDhMQUE4TCwySUFBMkksK0NBQStDLFdBQVcsbUNBQW1DLFFBQVEsYUFBYSxvQ0FBb0MsUUFBUSxNQUFNLHlCQUF5QixVQUFVLCtCQUErQixLQUFLLFFBQVEsaUNBQWlDLEtBQUssR0FBRyxvQ0FBb0MsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQiwyQkFBMkIsdUJBQXVCLHlCQUF5QixzREFBc0QsbUNBQW1DLDZCQUE2Qix5QkFBeUIsd0JBQXdCLFdBQVcsOENBQThDLHlCQUF5QiwwQkFBMEIsaUNBQWlDLCtCQUErQixrQ0FBa0MsZ0NBQWdDLFFBQVEsTUFBTSxXQUFXLHNCQUFzQixxQkFBcUIsR0FBRyxxQkFBcUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsV0FBVyxnQkFBZ0IsOENBQThDLGdDQUFnQyx1QkFBdUIsK0JBQStCLGdDQUFnQyxHQUFHLFlBQVkseUNBQXlDLG9CQUFvQixxQkFBcUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLEdBQUcsa0NBQWtDLGNBQWMsNENBQTRDLGFBQWEsMkJBQTJCLFVBQVUsUUFBUSxNQUFNLGtCQUFrQixrQkFBa0IsMkJBQTJCLG1CQUFtQix3QkFBd0IsZUFBZSxpQkFBaUIsT0FBTyx5QkFBeUIsMEJBQTBCLEtBQUssR0FBRyxzQkFBc0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qix1QkFBdUIsZUFBZSxvQkFBb0Isb0NBQW9DLEtBQUssR0FBRyxxQkFBcUI7QUFDN2lKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vX2xheW91dHMvaG9tZXBhZ2UubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGhvbWVwYWdlX3JvdGF0ZS1odWVfXzJUbGZQIHtcXG4gIGZyb20ge1xcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7IH1cXG4gIHRvIHtcXG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5ob21lcGFnZV9wYWdlQ29udGFpbmVyX18xc2dNTyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5ob21lcGFnZV9jb250ZW50V3JhcF9fekgyQWwge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG4gIC8qIEZvb3RlciBoZWlnaHQgKi8gfVxcblxcbi5ob21lcGFnZV9oZXJvX18xbDdueiB7XFxuICBtYXJnaW4tdG9wOiAtNTZweDtcXG4gIG1pbi1oZWlnaHQ6IDc1dmg7IH1cXG5cXG4uaG9tZXBhZ2VfaGVyb0lubmVyX19pS3hnTTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBhbmltYXRpb246IGhvbWVwYWdlX3JvdGF0ZS1odWVfXzJUbGZQIDMwcyBsaW5lYXIgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBjb25pYy1ncmFkaWVudChhdCA0MCUgNzUlLCAjZTJhNjM0LCAjZDg2YjM0IDIwJSwgI2MxMzYzZiAzNSUsICNhNjUyOWEgNzUlLCAjNjQ1Y2EzIDkwJSwgIzQ3NWE5NSAxMDAlKTtcXG4gIGZpbHRlcjogYmx1cigxMnB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfVxcblxcbi5ob21lcGFnZV9oZXJvX18xbDdueiBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDsgfVxcblxcbi5ob21lcGFnZV9oZXJvQ29udGVudF9fMXB0TV8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgNjRweDtcXG4gIHBhZGRpbmc6IDgwcHggMCAwIDA7XFxuICB3aWR0aDogNTAlO1xcbiAgei1pbmRleDogOTAwOyB9XFxuICAuaG9tZXBhZ2VfaGVyb0NvbnRlbnRfXzFwdE1fIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDI0cHggMCAwIDA7IH1cXG5cXG4uaG9tZXBhZ2VfbG9nb3Bvb2xXcmFwcGVyX181ajdnLSB7XFxuICBjb2xvcjogI2FkYWRhZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDI0cHggMCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5ob21lcGFnZV9sb2dvcG9vbFdyYXBwZXJfXzVqN2ctIC5ob21lcGFnZV9sb2dvcG9vbF9fMzlwc3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ob21lcGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2QkE7RUFDRTtJQUNFLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0UsMEJBQTBCLEVBQUEsRUFBQTs7QUFLOUI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usc0JBQXNCO0VBQUUsa0JBQUEsRUFBbUI7O0FBcUI3QztFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFHRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCx5REFBeUM7RUFDekMsdUhBM0REO0VBNERDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHNCQUFzQixFQUFBOztBQVl4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWSxFQUFBO0VBTmQ7SUFRSSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQU5wQjtJQVFJLGFBQWE7SUFDYiw2QkFBNkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyB2YXJpYWJsZXNcXG4vLyAkZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcXG4vLyAgIDQ1ZGVnLFxcbi8vICAgI2UyYTYzNCxcXG4vLyAgICNkODZiMzQsXFxuLy8gICAjYzEzNjNmLFxcbi8vICAgI2E2NTI5YSxcXG4vLyAgICM2NDVjYTMsXFxuLy8gICAjNDc1YTk1XFxuLy8gKTtcXG4kZ3JhZGllbnQ6IGNvbmljLWdyYWRpZW50KFxcbiAgYXQgNDAlIDc1JSxcXG4gICNlMmE2MzQsXFxuICAjZDg2YjM0IDIwJSxcXG4gICNjMTM2M2YgMzUlLFxcbiAgI2E2NTI5YSA3NSUsXFxuICAjNjQ1Y2EzIDkwJSxcXG4gICM0NzVhOTUgMTAwJVxcbik7XFxuXFxuLy8gYW5pbWF0aW9uc1xcbi8vIEBrZXlmcmFtZXMgYmctYW5pbWF0aW9uIHtcXG4vLyAgIDAlIHtcXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4vLyAgIH1cXG4vLyAgIDEwMCUge1xcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4vLyAgIH1cXG4vLyB9XFxuQGtleWZyYW1lcyByb3RhdGUtaHVlIHtcXG4gIGZyb20ge1xcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vLyBwYWdlIGJhc2ljc1xcbi5wYWdlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudFdyYXAge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgLyogRm9vdGVyIGhlaWdodCAqL1xcbn1cXG5cXG4vLyBzdHlsZXNcXG4vLyAuaGVybyB7XFxuLy8gICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiA2MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogJGdyYWRpZW50O1xcbi8vICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbi8vICAgbWFyZ2luLXRvcDogLTU2cHg7XFxuLy8gICBtaW4taGVpZ2h0OiA3NXZoO1xcbi8vICAgaDEge1xcbi8vICAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbi8vICAgICBmb250LXNpemU6IDVyZW07XFxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuLy8gICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbi8vICAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XFxuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4vLyAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4vLyAgIH1cXG4vLyB9XFxuXFxuLmhlcm8ge1xcbiAgbWFyZ2luLXRvcDogLTU2cHg7XFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcbn1cXG4uaGVyb0lubmVyOjphZnRlciB7XFxuICAvLyBkaXNwbGF5OiBibG9jaztcXG4gIC8vIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBhbmltYXRpb246IHJvdGF0ZS1odWUgMzBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRncmFkaWVudDtcXG4gIGZpbHRlcjogYmx1cigxMnB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbn1cXG4uaGVybyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG59XFxuXFxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDY4OHB4KSB7XFxuLy8gICAuaGVybyB7XFxuLy8gICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuLy8gICAgIGgxIHtcXG4vLyAgICAgICBmb250LXNpemU6IDRyZW07XFxuLy8gICAgIH1cXG4vLyAgIH1cXG4vLyB9XFxuXFxuLmhlcm9Db250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDY0cHg7XFxuICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHotaW5kZXg6IDkwMDtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDI0cHggMCAwIDA7XFxuICB9XFxufVxcblxcbi5sb2dvcG9vbFdyYXBwZXIge1xcbiAgY29sb3I6ICNhZGFkYWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyNHB4IDAgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLmxvZ29wb29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBhZ2VDb250YWluZXJcIjogXCJob21lcGFnZV9wYWdlQ29udGFpbmVyX18xc2dNT1wiLFxuXHRcImNvbnRlbnRXcmFwXCI6IFwiaG9tZXBhZ2VfY29udGVudFdyYXBfX3pIMkFsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVwYWdlX2hlcm9fXzFsN256XCIsXG5cdFwiaGVyb0lubmVyXCI6IFwiaG9tZXBhZ2VfaGVyb0lubmVyX19pS3hnTVwiLFxuXHRcInJvdGF0ZS1odWVcIjogXCJob21lcGFnZV9yb3RhdGUtaHVlX18yVGxmUFwiLFxuXHRcImhlcm9Db250ZW50XCI6IFwiaG9tZXBhZ2VfaGVyb0NvbnRlbnRfXzFwdE1fXCIsXG5cdFwibG9nb3Bvb2xXcmFwcGVyXCI6IFwiaG9tZXBhZ2VfbG9nb3Bvb2xXcmFwcGVyX181ajdnLVwiLFxuXHRcImxvZ29wb29sXCI6IFwiaG9tZXBhZ2VfbG9nb3Bvb2xfXzM5cHN4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_layouts/homepage.module.scss\n");

/***/ })

})