webpackHotUpdate_N_E("pages/articles/[slug]",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_includes/navbar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar_header__2AnZb, .navbar_glassyHeader__2kUaw, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999; }\\n\\n.navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none; }\\n\\n.navbar_glassyHeader__2kUaw {\\n  background: white;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    .navbar_glassyHeader__2kUaw {\\n      background: rgba(255, 255, 255, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\\n.navbar_navigationBar__1NnAl ul {\\n  display: flex;\\n  list-style-type: none; }\\n  .navbar_navigationBar__1NnAl ul li {\\n    padding-right: 24px; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_header__2AnZb a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #fff; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  background: black;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n      background: rgba(0, 0, 0, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EAEN,2CAA2C;EAC3C,0BAA0B;EAC1B,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,gBAAgB;EAChB,qBAAqB,EAAA;;AAGvB;EAOE,iBAAkC;EAClC,mFACoC,EAAA;EAEG;IAXzC;MAYI,oCAAoC;MACpC,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B;;AAED;EAEI,aAAa;EACb,qBAAqB,EAAA;EAHzB;IAKM,mBAAmB,EAAA;;AAVzB;EAiBI,WAAW,EAAA;;AAdf;EAoBI,iBAA4B;EAC5B,mFACoC,EAAA;EAEG;IApBvC;MAqBE,8BAA8B;MAC9B,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B\",\"sourcesContent\":[\".header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  // text-transform: uppercase;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999;\\n}\\n.header a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none;\\n}\\n\\n.glassyHeader {\\n  @extend .header;\\n\\n  // a:hover {\\n  //   text-decoration: underline;\\n  // }\\n\\n  background: rgba(255, 255, 255, 1);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n  @supports (backdrop-filter: blur(12px)) {\\n    background: rgba(255, 255, 255, 0.7);\\n    backdrop-filter: blur(12px);\\n  }\\n}\\n\\n.navigationBar {\\n  ul {\\n    display: flex;\\n    list-style-type: none;\\n    li {\\n      padding-right: 24px;\\n    }\\n  }\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n  .header a {\\n    color: #fff;\\n  }\\n\\n  .glassyHeader {\\n    @extend .header;\\n\\n    background: rgba(0, 0, 0, 1);\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n      0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n    @supports (backdrop-filter: blur(12px)) {\\n      background: rgba(0, 0, 0, 0.7);\\n      backdrop-filter: blur(12px);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"navbar_header__2AnZb\",\n\t\"glassyHeader\": \"navbar_glassyHeader__2kUaw\",\n\t\"navigationBar\": \"navbar_navigationBar__1NnAl\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcz82YjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwR0FBMEcsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyxnREFBZ0QsK0JBQStCLGlCQUFpQixFQUFFLGlIQUFpSCxnQkFBZ0IscUJBQXFCLDBCQUEwQixFQUFFLGlDQUFpQyxzQkFBc0Isd0ZBQXdGLEVBQUUsd0ZBQXdGLG1DQUFtQyw2Q0FBNkMsNENBQTRDLDRDQUE0QyxFQUFFLEVBQUUscUNBQXFDLGtCQUFrQiwwQkFBMEIsRUFBRSx3Q0FBd0MsMEJBQTBCLEVBQUUsd0dBQXdHLGdCQUFnQixFQUFFLHVEQUF1RCxzQkFBc0Isd0ZBQXdGLEVBQUUsd0ZBQXdGLHlEQUF5RCx1Q0FBdUMsNENBQTRDLDRDQUE0QyxFQUFFLEVBQUUsU0FBUyxtRkFBbUYsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksa0JBQWtCLEtBQUssTUFBTSxZQUFZLGFBQWEseUJBQXlCLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxpQkFBaUIsS0FBSyxhQUFhLGtCQUFrQixLQUFLLE9BQU8sYUFBYSxhQUFhLHFEQUFxRCxrQkFBa0Isd0JBQXdCLGlCQUFpQixtQ0FBbUMsdUJBQXVCLHFCQUFxQixXQUFXLGlDQUFpQyxnREFBZ0QsK0JBQStCLGlCQUFpQixHQUFHLGFBQWEsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLGtCQUFrQixvQ0FBb0MsUUFBUSx5Q0FBeUMsNkZBQTZGLCtDQUErQywyQ0FBMkMsa0NBQWtDLEtBQUssR0FBRyxvQkFBb0IsUUFBUSxvQkFBb0IsNEJBQTRCLFVBQVUsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLDJCQUEyQixlQUFlLGtCQUFrQixLQUFLLHFCQUFxQixzQkFBc0IscUNBQXFDLGlHQUFpRyxpREFBaUQsdUNBQXVDLG9DQUFvQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDMTdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9faW5jbHVkZXMvbmF2YmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdmJhcl9oZWFkZXJfXzJBblpiLCAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjQ1cztcXG4gIHotaW5kZXg6IDk5OTsgfVxcblxcbi5uYXZiYXJfaGVhZGVyX18yQW5aYiBhLCAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcgYSwgW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcgYSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4ubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgfVxcbiAgQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpKSB7XFxuICAgIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9IH1cXG5cXG4ubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG4gIC5uYXZiYXJfbmF2aWdhdGlvbkJhcl9fMU5uQWwgdWwgbGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyB9XFxuXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2hlYWRlcl9fMkFuWmIgYSwgW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcgYSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSkge1xcbiAgICBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbmF2YmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUVOLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFPRSxpQkFBa0M7RUFDbEMsbUZBQ29DLEVBQUE7RUFFRztJQVh6QztNQVlJLG9DQUFvQztNQUNwQyxtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUEsRUFFOUI7O0FBRUQ7RUFFSSxhQUFhO0VBQ2IscUJBQXFCLEVBQUE7RUFIekI7SUFLTSxtQkFBbUIsRUFBQTs7QUFWekI7RUFpQkksV0FBVyxFQUFBOztBQWRmO0VBb0JJLGlCQUE0QjtFQUM1QixtRkFDb0MsRUFBQTtFQUVHO0lBcEJ2QztNQXFCRSw4QkFBOEI7TUFDOUIsbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBLEVBRTlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjQ1cztcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmhlYWRlciBhIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmdsYXNzeUhlYWRlciB7XFxuICBAZXh0ZW5kIC5oZWFkZXI7XFxuXFxuICAvLyBhOmhvdmVyIHtcXG4gIC8vICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvLyB9XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFxuICBAc3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gIH1cXG59XFxuXFxuLm5hdmlnYXRpb25CYXIge1xcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgLmhlYWRlciBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAuZ2xhc3N5SGVhZGVyIHtcXG4gICAgQGV4dGVuZCAuaGVhZGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4gICAgICAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcbiAgICBAc3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSkge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwibmF2YmFyX2hlYWRlcl9fMkFuWmJcIixcblx0XCJnbGFzc3lIZWFkZXJcIjogXCJuYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1Vhd1wiLFxuXHRcIm5hdmlnYXRpb25CYXJcIjogXCJuYXZiYXJfbmF2aWdhdGlvbkJhcl9fMU5uQWxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss\n");

/***/ })

})