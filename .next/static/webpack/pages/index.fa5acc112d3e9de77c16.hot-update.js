webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_includes/navbar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar_header__2AnZb, .navbar_glassyHeader__2kUaw, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999; }\\n  .navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n    color: #000;\\n    font-weight: 500;\\n    text-decoration: none;\\n    padding: 8px; }\\n  .navbar_header__2AnZb a:hover, .navbar_glassyHeader__2kUaw a:hover {\\n    background: rgba(255, 102, 51, 0.3);\\n    border-radius: 4px; }\\n\\n.navbar_glassyHeader__2kUaw {\\n  background: white;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    .navbar_glassyHeader__2kUaw {\\n      background: rgba(255, 255, 255, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\\n.navbar_navigationBar__1NnAl ul {\\n  display: flex;\\n  list-style-type: none; }\\n  .navbar_navigationBar__1NnAl ul li {\\n    padding-right: 24px; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_header__2AnZb a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #fff; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  background: black;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n      background: rgba(0, 0, 0, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EACN,2CAA2C;EAC3C,0BAA0B;EAC1B,YAAY,EAAA;EAVd;IAYI,WAAW;IACX,gBAAgB;IAChB,qBAAqB;IACrB,YAAY,EAAA;EAfhB;IAkBI,mCAAmC;IACnC,kBAAkB,EAAA;;AAItB;EAGE,iBAAkC;EAClC,mFACoC,EAAA;EAEG;IAPzC;MAQI,oCAAoC;MACpC,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B;;AAED;EAEI,aAAa;EACb,qBAAqB,EAAA;EAHzB;IAKM,mBAAmB,EAAA;;AAPzB;EAcI,WAAW,EAAA;;AAXf;EAiBI,iBAA4B;EAC5B,mFACoC,EAAA;EAEG;IAjBvC;MAkBE,8BAA8B;MAC9B,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B\",\"sourcesContent\":[\".header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999;\\n  a {\\n    color: #000;\\n    font-weight: 500;\\n    text-decoration: none;\\n    padding: 8px;\\n  }\\n  a:hover {\\n    background: rgba(255, 102, 51, 0.3);\\n    border-radius: 4px;\\n  }\\n}\\n\\n.glassyHeader {\\n  @extend .header;\\n\\n  background: rgba(255, 255, 255, 1);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n  @supports (backdrop-filter: blur(12px)) {\\n    background: rgba(255, 255, 255, 0.7);\\n    backdrop-filter: blur(12px);\\n  }\\n}\\n\\n.navigationBar {\\n  ul {\\n    display: flex;\\n    list-style-type: none;\\n    li {\\n      padding-right: 24px;\\n    }\\n  }\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n  .header a {\\n    color: #fff;\\n  }\\n\\n  .glassyHeader {\\n    @extend .header;\\n\\n    background: rgba(0, 0, 0, 1);\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n      0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n    @supports (backdrop-filter: blur(12px)) {\\n      background: rgba(0, 0, 0, 0.7);\\n      backdrop-filter: blur(12px);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"navbar_header__2AnZb\",\n\t\"glassyHeader\": \"navbar_glassyHeader__2kUaw\",\n\t\"navigationBar\": \"navbar_navigationBar__1NnAl\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcz82YjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwR0FBMEcsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyxnREFBZ0QsK0JBQStCLGlCQUFpQixFQUFFLGlIQUFpSCxrQkFBa0IsdUJBQXVCLDRCQUE0QixtQkFBbUIsRUFBRSx3RUFBd0UsMENBQTBDLHlCQUF5QixFQUFFLGlDQUFpQyxzQkFBc0Isd0ZBQXdGLEVBQUUsd0ZBQXdGLG1DQUFtQyw2Q0FBNkMsNENBQTRDLDRDQUE0QyxFQUFFLEVBQUUscUNBQXFDLGtCQUFrQiwwQkFBMEIsRUFBRSx3Q0FBd0MsMEJBQTBCLEVBQUUsd0dBQXdHLGdCQUFnQixFQUFFLHVEQUF1RCxzQkFBc0Isd0ZBQXdGLEVBQUUsd0ZBQXdGLHlEQUF5RCx1Q0FBdUMsNENBQTRDLDRDQUE0QyxFQUFFLEVBQUUsU0FBUyxtRkFBbUYsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGtCQUFrQixLQUFLLE1BQU0sWUFBWSxhQUFhLHlCQUF5QixLQUFLLFVBQVUsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssYUFBYSxrQkFBa0IsS0FBSyxPQUFPLGFBQWEsYUFBYSxxREFBcUQsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyxnREFBZ0QsK0JBQStCLGlCQUFpQixPQUFPLGtCQUFrQix1QkFBdUIsNEJBQTRCLG1CQUFtQixLQUFLLGFBQWEsMENBQTBDLHlCQUF5QixLQUFLLEdBQUcsbUJBQW1CLG9CQUFvQix5Q0FBeUMsNkZBQTZGLCtDQUErQywyQ0FBMkMsa0NBQWtDLEtBQUssR0FBRyxvQkFBb0IsUUFBUSxvQkFBb0IsNEJBQTRCLFVBQVUsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLDJCQUEyQixlQUFlLGtCQUFrQixLQUFLLHFCQUFxQixzQkFBc0IscUNBQXFDLGlHQUFpRyxpREFBaUQsdUNBQXVDLG9DQUFvQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDenBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9faW5jbHVkZXMvbmF2YmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdmJhcl9oZWFkZXJfXzJBblpiLCAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjQ1cztcXG4gIHotaW5kZXg6IDk5OTsgfVxcbiAgLm5hdmJhcl9oZWFkZXJfXzJBblpiIGEsIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhLCBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4OyB9XFxuICAubmF2YmFyX2hlYWRlcl9fMkFuWmIgYTpob3ZlciwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTAyLCA1MSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuXFxuLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSkge1xcbiAgICAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfSB9XFxuXFxuLm5hdmJhcl9uYXZpZ2F0aW9uQmFyX18xTm5BbCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHVsIGxpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDsgfVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9oZWFkZXJfXzJBblpiIGEsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyB9XFxuICBAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSkpIHtcXG4gICAgW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25hdmJhci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLFlBQVksRUFBQTtFQVZkO0lBWUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWSxFQUFBO0VBZmhCO0lBa0JJLG1DQUFtQztJQUNuQyxrQkFBa0IsRUFBQTs7QUFJdEI7RUFHRSxpQkFBa0M7RUFDbEMsbUZBQ29DLEVBQUE7RUFFRztJQVB6QztNQVFJLG9DQUFvQztNQUNwQyxtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUEsRUFFOUI7O0FBRUQ7RUFFSSxhQUFhO0VBQ2IscUJBQXFCLEVBQUE7RUFIekI7SUFLTSxtQkFBbUIsRUFBQTs7QUFQekI7RUFjSSxXQUFXLEVBQUE7O0FBWGY7RUFpQkksaUJBQTRCO0VBQzVCLG1GQUNvQyxFQUFBO0VBRUc7SUFqQnZDO01Ba0JFLDhCQUE4QjtNQUM5QixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUEsRUFFOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogNTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE2cHggNjRweDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40NXM7XFxuICB6LWluZGV4OiA5OTk7XFxuICBhIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcbiAgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDIsIDUxLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB9XFxufVxcblxcbi5nbGFzc3lIZWFkZXIge1xcbiAgQGV4dGVuZCAuaGVhZGVyO1xcblxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcbiAgICAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcbiAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuICB9XFxufVxcblxcbi5uYXZpZ2F0aW9uQmFyIHtcXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBsaSB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXG4gIC5oZWFkZXIgYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmdsYXNzeUhlYWRlciB7XFxuICAgIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5hdmJhcl9oZWFkZXJfXzJBblpiXCIsXG5cdFwiZ2xhc3N5SGVhZGVyXCI6IFwibmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXdcIixcblx0XCJuYXZpZ2F0aW9uQmFyXCI6IFwibmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss\n");

/***/ })

})