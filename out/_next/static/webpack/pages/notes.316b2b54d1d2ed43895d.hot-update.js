webpackHotUpdate_N_E("pages/notes",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_includes/navbar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar_header__2AnZb, .navbar_glassyHeader__2kUaw, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999; }\\n\\n.navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none;\\n  padding: 8px; }\\n\\n.navbar_header__2AnZb a:hover, .navbar_glassyHeader__2kUaw a:hover {\\n  background: rgba(255, 102, 51, 0.3);\\n  border-radius: 4px; }\\n\\n.navbar_glassyHeader__2kUaw {\\n  background: white;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    .navbar_glassyHeader__2kUaw {\\n      background: rgba(255, 255, 255, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\\n.navbar_navigationBar__1NnAl ul {\\n  display: flex;\\n  list-style-type: none; }\\n  .navbar_navigationBar__1NnAl ul li {\\n    padding-right: 24px; }\\n\\n.navbar_homepageOverride__351VU a:hover {\\n  background: none;\\n  text-decoration: underline; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_header__2AnZb a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #fff; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  background: black;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n      background: rgba(0, 0, 0, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EAEN,2CAA2C;EAC3C,0BAA0B;EAC1B,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,gBAAgB;EAChB,qBAAqB;EACrB,YAAY,EAAA;;AAGd;EACE,mCAAmC;EACnC,kBAAkB,EAAA;;AAEpB;EAOE,iBAAkC;EAClC,mFACoC,EAAA;EAEG;IAXzC;MAYI,oCAAoC;MACpC,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B;;AAED;EAEI,aAAa;EACb,qBAAqB,EAAA;EAHzB;IAKM,mBAAmB,EAAA;;AAKzB;EAEI,gBAAgB;EAChB,0BAA0B,EAAA;;AAd9B;EAoBI,WAAW,EAAA;;AAjBf;EAuBI,iBAA4B;EAC5B,mFACoC,EAAA;EAEG;IAvBvC;MAwBE,8BAA8B;MAC9B,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B\",\"sourcesContent\":[\".header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  // text-transform: uppercase;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999;\\n}\\n.header a {\\n  color: #000;\\n  font-weight: 500;\\n  text-decoration: none;\\n  padding: 8px;\\n}\\n\\n.header a:hover {\\n  background: rgba(255, 102, 51, 0.3);\\n  border-radius: 4px;\\n}\\n.glassyHeader {\\n  @extend .header;\\n\\n  // a:hover {\\n  //   text-decoration: underline;\\n  // }\\n\\n  background: rgba(255, 255, 255, 1);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n  @supports (backdrop-filter: blur(12px)) {\\n    background: rgba(255, 255, 255, 0.7);\\n    backdrop-filter: blur(12px);\\n  }\\n}\\n\\n.navigationBar {\\n  ul {\\n    display: flex;\\n    list-style-type: none;\\n    li {\\n      padding-right: 24px;\\n    }\\n  }\\n}\\n\\n.homepageOverride {\\n  a:hover {\\n    background: none;\\n    text-decoration: underline;\\n  }\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n  .header a {\\n    color: #fff;\\n  }\\n\\n  .glassyHeader {\\n    @extend .header;\\n\\n    background: rgba(0, 0, 0, 1);\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n      0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n    @supports (backdrop-filter: blur(12px)) {\\n      background: rgba(0, 0, 0, 0.7);\\n      backdrop-filter: blur(12px);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"navbar_header__2AnZb\",\n\t\"glassyHeader\": \"navbar_glassyHeader__2kUaw\",\n\t\"navigationBar\": \"navbar_navigationBar__1NnAl\",\n\t\"homepageOverride\": \"navbar_homepageOverride__351VU\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcz82YjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwR0FBMEcsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyxnREFBZ0QsK0JBQStCLGlCQUFpQixFQUFFLGlIQUFpSCxnQkFBZ0IscUJBQXFCLDBCQUEwQixpQkFBaUIsRUFBRSx3RUFBd0Usd0NBQXdDLHVCQUF1QixFQUFFLGlDQUFpQyxzQkFBc0Isd0ZBQXdGLEVBQUUsd0ZBQXdGLG1DQUFtQyw2Q0FBNkMsNENBQTRDLDRDQUE0QyxFQUFFLEVBQUUscUNBQXFDLGtCQUFrQiwwQkFBMEIsRUFBRSx3Q0FBd0MsMEJBQTBCLEVBQUUsNkNBQTZDLHFCQUFxQiwrQkFBK0IsRUFBRSx3R0FBd0csZ0JBQWdCLEVBQUUsdURBQXVELHNCQUFzQix3RkFBd0YsRUFBRSx3RkFBd0YseURBQXlELHVDQUF1Qyw0Q0FBNEMsNENBQTRDLEVBQUUsRUFBRSxTQUFTLG1GQUFtRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLG1CQUFtQixNQUFNLFlBQVksa0JBQWtCLEtBQUssTUFBTSxZQUFZLGFBQWEseUJBQXlCLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGlCQUFpQixNQUFNLGFBQWEsa0JBQWtCLEtBQUssT0FBTyxhQUFhLGFBQWEscURBQXFELGtCQUFrQix3QkFBd0IsaUJBQWlCLG1DQUFtQyx1QkFBdUIscUJBQXFCLFdBQVcsaUNBQWlDLGdEQUFnRCwrQkFBK0IsaUJBQWlCLEdBQUcsYUFBYSxnQkFBZ0IscUJBQXFCLDBCQUEwQixpQkFBaUIsR0FBRyxxQkFBcUIsd0NBQXdDLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0Isa0JBQWtCLG9DQUFvQyxRQUFRLHlDQUF5Qyw2RkFBNkYsK0NBQStDLDJDQUEyQyxrQ0FBa0MsS0FBSyxHQUFHLG9CQUFvQixRQUFRLG9CQUFvQiw0QkFBNEIsVUFBVSw0QkFBNEIsT0FBTyxLQUFLLEdBQUcsdUJBQXVCLGFBQWEsdUJBQXVCLGlDQUFpQyxLQUFLLEdBQUcsMkJBQTJCLGVBQWUsa0JBQWtCLEtBQUsscUJBQXFCLHNCQUFzQixxQ0FBcUMsaUdBQWlHLGlEQUFpRCx1Q0FBdUMsb0NBQW9DLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUN0OUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZiYXJfaGVhZGVyX18yQW5aYiwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3LCBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogNTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE2cHggNjRweDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40NXM7XFxuICB6LWluZGV4OiA5OTk7IH1cXG5cXG4ubmF2YmFyX2hlYWRlcl9fMkFuWmIgYSwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogOHB4OyB9XFxuXFxuLm5hdmJhcl9oZWFkZXJfXzJBblpiIGE6aG92ZXIsIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDIsIDUxLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuXFxuLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSkge1xcbiAgICAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG4gICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfSB9XFxuXFxuLm5hdmJhcl9uYXZpZ2F0aW9uQmFyX18xTm5BbCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHVsIGxpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDsgfVxcblxcbi5uYXZiYXJfaG9tZXBhZ2VPdmVycmlkZV9fMzUxVlUgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfaGVhZGVyX18yQW5aYiBhLCBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgfVxcbiAgQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpKSB7XFxuICAgIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9uYXZiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixNQUFNO0VBRU4sMkNBQTJDO0VBQzNDLDBCQUEwQjtFQUMxQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCLEVBQUE7O0FBRXBCO0VBT0UsaUJBQWtDO0VBQ2xDLG1GQUNvQyxFQUFBO0VBRUc7SUFYekM7TUFZSSxvQ0FBb0M7TUFDcEMsbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBLEVBRTlCOztBQUVEO0VBRUksYUFBYTtFQUNiLHFCQUFxQixFQUFBO0VBSHpCO0lBS00sbUJBQW1CLEVBQUE7O0FBS3pCO0VBRUksZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQWQ5QjtFQW9CSSxXQUFXLEVBQUE7O0FBakJmO0VBdUJJLGlCQUE0QjtFQUM1QixtRkFDb0MsRUFBQTtFQUVHO0lBdkJ2QztNQXdCRSw4QkFBOEI7TUFDOUIsbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBLEVBRTlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjQ1cztcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmhlYWRlciBhIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmhlYWRlciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDIsIDUxLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uZ2xhc3N5SGVhZGVyIHtcXG4gIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gIC8vIGE6aG92ZXIge1xcbiAgLy8gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8vIH1cXG5cXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4gICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gIEBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgfVxcbn1cXG5cXG4ubmF2aWdhdGlvbkJhciB7XFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbGkge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhvbWVwYWdlT3ZlcnJpZGUge1xcbiAgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXG4gIC5oZWFkZXIgYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmdsYXNzeUhlYWRlciB7XFxuICAgIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5hdmJhcl9oZWFkZXJfXzJBblpiXCIsXG5cdFwiZ2xhc3N5SGVhZGVyXCI6IFwibmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXdcIixcblx0XCJuYXZpZ2F0aW9uQmFyXCI6IFwibmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsXCIsXG5cdFwiaG9tZXBhZ2VPdmVycmlkZVwiOiBcIm5hdmJhcl9ob21lcGFnZU92ZXJyaWRlX18zNTFWVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss\n");

/***/ })

})