webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_includes/navbar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar_header__2AnZb, .navbar_glassyHeader__2kUaw, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  text-transform: uppercase;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999; }\\n\\n.navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none; }\\n\\n.navbar_glassyHeader__2kUaw {\\n  background: white;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  .navbar_glassyHeader__2kUaw .navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw .navbar_glassyHeader__2kUaw a {\\n    color: #ffffff; }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    .navbar_glassyHeader__2kUaw {\\n      background: rgba(255, 255, 255, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\\n.navbar_navigationBar__1NnAl ul {\\n  display: flex;\\n  list-style-type: none; }\\n  .navbar_navigationBar__1NnAl ul li {\\n    padding-right: 24px; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  background: black;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n      background: rgba(0, 0, 0, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EACN,yBAAyB;EACzB,2CAA2C;EAC3C,0BAA0B;EAC1B,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,gBAAgB;EAChB,qBAAqB,EAAA;;AAGvB;EAKE,iBAAkC;EAClC,mFACoC,EAAA;EAPtC;IAGI,cAAc,EAAA;EAMuB;IATzC;MAUI,oCAAoC;MACpC,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B;;AAED;EAEI,aAAa;EACb,qBAAqB,EAAA;EAHzB;IAKM,mBAAmB,EAAA;;AALzB;EAcI,iBAA4B;EAC5B,mFACoC,EAAA;EAEG;IAdvC;MAeE,8BAA8B;MAC9B,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B\",\"sourcesContent\":[\".header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  text-transform: uppercase;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999;\\n}\\n.header a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none;\\n}\\n\\n.glassyHeader {\\n  @extend .header;\\n  .header a {\\n    color: #ffffff;\\n  }\\n  background: rgba(255, 255, 255, 1);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n  @supports (backdrop-filter: blur(12px)) {\\n    background: rgba(255, 255, 255, 0.7);\\n    backdrop-filter: blur(12px);\\n  }\\n}\\n\\n.navigationBar {\\n  ul {\\n    display: flex;\\n    list-style-type: none;\\n    li {\\n      padding-right: 24px;\\n    }\\n  }\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n  .glassyHeader {\\n    @extend .header;\\n\\n    background: rgba(0, 0, 0, 1);\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n      0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n    @supports (backdrop-filter: blur(12px)) {\\n      background: rgba(0, 0, 0, 0.7);\\n      backdrop-filter: blur(12px);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"navbar_header__2AnZb\",\n\t\"glassyHeader\": \"navbar_glassyHeader__2kUaw\",\n\t\"navigationBar\": \"navbar_navigationBar__1NnAl\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcz82YjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwR0FBMEcsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyw4QkFBOEIsZ0RBQWdELCtCQUErQixpQkFBaUIsRUFBRSxpSEFBaUgsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsRUFBRSxpQ0FBaUMsc0JBQXNCLHdGQUF3RixFQUFFLG9IQUFvSCxxQkFBcUIsRUFBRSx3RkFBd0YsbUNBQW1DLDZDQUE2Qyw0Q0FBNEMsNENBQTRDLEVBQUUsRUFBRSxxQ0FBcUMsa0JBQWtCLDBCQUEwQixFQUFFLHdDQUF3QywwQkFBMEIsRUFBRSx1REFBdUQsc0JBQXNCLHdGQUF3RixFQUFFLHdGQUF3Rix5REFBeUQsdUNBQXVDLDRDQUE0Qyw0Q0FBNEMsRUFBRSxFQUFFLFNBQVMsbUZBQW1GLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sZUFBZSxNQUFNLE1BQU0sWUFBWSxhQUFhLHlCQUF5QixLQUFLLFVBQVUsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsS0FBSyxNQUFNLFlBQVksYUFBYSxxREFBcUQsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyw4QkFBOEIsZ0RBQWdELCtCQUErQixpQkFBaUIsR0FBRyxhQUFhLGdCQUFnQixxQkFBcUIsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQixlQUFlLHFCQUFxQixLQUFLLHVDQUF1Qyw2RkFBNkYsK0NBQStDLDJDQUEyQyxrQ0FBa0MsS0FBSyxHQUFHLG9CQUFvQixRQUFRLG9CQUFvQiw0QkFBNEIsVUFBVSw0QkFBNEIsT0FBTyxLQUFLLEdBQUcsMkJBQTJCLG1CQUFtQixzQkFBc0IscUNBQXFDLGlHQUFpRyxpREFBaUQsdUNBQXVDLG9DQUFvQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDajdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9faW5jbHVkZXMvbmF2YmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdmJhcl9oZWFkZXJfXzJBblpiLCAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40NXM7XFxuICB6LWluZGV4OiA5OTk7IH1cXG5cXG4ubmF2YmFyX2hlYWRlcl9fMkFuWmIgYSwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG4gIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyAubmF2YmFyX2hlYWRlcl9fMkFuWmIgYSwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSkge1xcbiAgICAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfSB9XFxuXFxuLm5hdmJhcl9uYXZpZ2F0aW9uQmFyX18xTm5BbCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHVsIGxpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDsgfVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSkge1xcbiAgICBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbmF2YmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBS0UsaUJBQWtDO0VBQ2xDLG1GQUNvQyxFQUFBO0VBUHRDO0lBR0ksY0FBYyxFQUFBO0VBTXVCO0lBVHpDO01BVUksb0NBQW9DO01BQ3BDLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQSxFQUU5Qjs7QUFFRDtFQUVJLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtFQUh6QjtJQUtNLG1CQUFtQixFQUFBOztBQUx6QjtFQWNJLGlCQUE0QjtFQUM1QixtRkFDb0MsRUFBQTtFQUVHO0lBZHZDO01BZUUsOEJBQThCO01BQzlCLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQSxFQUU5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40NXM7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5nbGFzc3lIZWFkZXIge1xcbiAgQGV4dGVuZCAuaGVhZGVyO1xcbiAgLmhlYWRlciBhIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFxuICBAc3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gIH1cXG59XFxuXFxuLm5hdmlnYXRpb25CYXIge1xcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgLmdsYXNzeUhlYWRlciB7XFxuICAgIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5hdmJhcl9oZWFkZXJfXzJBblpiXCIsXG5cdFwiZ2xhc3N5SGVhZGVyXCI6IFwibmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXdcIixcblx0XCJuYXZpZ2F0aW9uQmFyXCI6IFwibmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss\n");

/***/ })

})