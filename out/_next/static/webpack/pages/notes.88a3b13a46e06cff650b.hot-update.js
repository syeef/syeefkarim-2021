webpackHotUpdate_N_E("pages/notes",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./_includes/navbar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar_header__2AnZb, .navbar_glassyHeader__2kUaw, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999; }\\n  .navbar_header__2AnZb a, .navbar_glassyHeader__2kUaw a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n    color: #000;\\n    font-weight: 500;\\n    text-decoration: none;\\n    padding: 8px; }\\n  .navbar_header__2AnZb a:hover, .navbar_glassyHeader__2kUaw a:hover {\\n    background: rgba(255, 102, 51, 0.3);\\n    border-radius: 4px; }\\n\\n.navbar_navigationBar__1NnAl {\\n  display: unset; }\\n  .navbar_navigationBar__1NnAl ul {\\n    display: flex;\\n    list-style-type: none; }\\n    .navbar_navigationBar__1NnAl ul li {\\n      padding-right: 24px; }\\n\\n.navbar_glassyHeader__2kUaw {\\n  background: white;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    .navbar_glassyHeader__2kUaw {\\n      background: rgba(255, 255, 255, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\\n[data-theme=\\\"dark\\\"] .navbar_header__2AnZb a, [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw a {\\n  color: #fff; }\\n\\n[data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n  background: black;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }\\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\\n    [data-theme=\\\"dark\\\"] .navbar_glassyHeader__2kUaw {\\n      background: rgba(0, 0, 0, 0.7);\\n      -webkit-backdrop-filter: blur(12px);\\n              backdrop-filter: blur(12px); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EACN,2CAA2C;EAC3C,0BAA0B;EAC1B,YAAY,EAAA;EAVd;IAYI,WAAW;IACX,gBAAgB;IAChB,qBAAqB;IACrB,YAAY,EAAA;EAfhB;IAkBI,mCAAmC;IACnC,kBAAkB,EAAA;;AAItB;EACE,cAAc,EAAA;EADhB;IAGI,aAAa;IACb,qBAAqB,EAAA;IAJzB;MAMM,mBAAmB,EAAA;;AAMzB;EAGE,iBAAkC;EAClC,mFACoC,EAAA;EAEG;IAPzC;MAQI,oCAAoC;MACpC,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B;;AAfD;EAmBI,WAAW,EAAA;;AAhBf;EAsBI,iBAA4B;EAC5B,mFACoC,EAAA;EAEG;IAtBvC;MAuBE,8BAA8B;MAC9B,mCAA2B;cAA3B,2BAA2B,EAAA,EAE9B\",\"sourcesContent\":[\"// .navigationBar {\\n//   display: none;\\n// }\\n\\n// @media (min-width: 992px) {\\n.header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 56px;\\n  justify-content: space-between;\\n  padding: 16px 64px;\\n  position: sticky;\\n  top: 0;\\n  transition-property: background, box-shadow;\\n  transition-duration: 0.45s;\\n  z-index: 999;\\n  a {\\n    color: #000;\\n    font-weight: 500;\\n    text-decoration: none;\\n    padding: 8px;\\n  }\\n  a:hover {\\n    background: rgba(255, 102, 51, 0.3);\\n    border-radius: 4px;\\n  }\\n}\\n\\n.navigationBar {\\n  display: unset;\\n  ul {\\n    display: flex;\\n    list-style-type: none;\\n    li {\\n      padding-right: 24px;\\n    }\\n  }\\n}\\n// }\\n\\n.glassyHeader {\\n  @extend .header;\\n\\n  background: rgba(255, 255, 255, 1);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n  @supports (backdrop-filter: blur(12px)) {\\n    background: rgba(255, 255, 255, 0.7);\\n    backdrop-filter: blur(12px);\\n  }\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n  .header a {\\n    color: #fff;\\n  }\\n\\n  .glassyHeader {\\n    @extend .header;\\n\\n    background: rgba(0, 0, 0, 1);\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\\n      0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\n    @supports (backdrop-filter: blur(12px)) {\\n      background: rgba(0, 0, 0, 0.7);\\n      backdrop-filter: blur(12px);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"navbar_header__2AnZb\",\n\t\"glassyHeader\": \"navbar_glassyHeader__2kUaw\",\n\t\"navigationBar\": \"navbar_navigationBar__1NnAl\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL25hdmJhci5tb2R1bGUuc2Nzcz82YjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwR0FBMEcsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUNBQW1DLHVCQUF1QixxQkFBcUIsV0FBVyxnREFBZ0QsK0JBQStCLGlCQUFpQixFQUFFLGlIQUFpSCxrQkFBa0IsdUJBQXVCLDRCQUE0QixtQkFBbUIsRUFBRSx3RUFBd0UsMENBQTBDLHlCQUF5QixFQUFFLGtDQUFrQyxtQkFBbUIsRUFBRSxxQ0FBcUMsb0JBQW9CLDRCQUE0QixFQUFFLDBDQUEwQyw0QkFBNEIsRUFBRSxpQ0FBaUMsc0JBQXNCLHdGQUF3RixFQUFFLHdGQUF3RixtQ0FBbUMsNkNBQTZDLDRDQUE0Qyw0Q0FBNEMsRUFBRSxFQUFFLHdHQUF3RyxnQkFBZ0IsRUFBRSx1REFBdUQsc0JBQXNCLHdGQUF3RixFQUFFLHdGQUF3Rix5REFBeUQsdUNBQXVDLDRDQUE0Qyw0Q0FBNEMsRUFBRSxFQUFFLFNBQVMsbUZBQW1GLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixNQUFNLGFBQWEsbUJBQW1CLE1BQU0sZUFBZSxNQUFNLFVBQVUsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsS0FBSyxNQUFNLFlBQVksYUFBYSx5QkFBeUIsS0FBSyxpQkFBaUIsTUFBTSxhQUFhLGtCQUFrQixLQUFLLE9BQU8sYUFBYSxhQUFhLCtEQUErRCxxQkFBcUIsTUFBTSxrQ0FBa0MsV0FBVyxrQkFBa0Isd0JBQXdCLGlCQUFpQixtQ0FBbUMsdUJBQXVCLHFCQUFxQixXQUFXLGdEQUFnRCwrQkFBK0IsaUJBQWlCLE9BQU8sa0JBQWtCLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLEtBQUssYUFBYSwwQ0FBMEMseUJBQXlCLEtBQUssR0FBRyxvQkFBb0IsbUJBQW1CLFFBQVEsb0JBQW9CLDRCQUE0QixVQUFVLDRCQUE0QixPQUFPLEtBQUssR0FBRyxNQUFNLG1CQUFtQixvQkFBb0IseUNBQXlDLDZGQUE2RiwrQ0FBK0MsMkNBQTJDLGtDQUFrQyxLQUFLLEdBQUcsMkJBQTJCLGVBQWUsa0JBQWtCLEtBQUsscUJBQXFCLHNCQUFzQixxQ0FBcUMsaUdBQWlHLGlEQUFpRCx1Q0FBdUMsb0NBQW9DLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMxMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL19pbmNsdWRlcy9uYXZiYXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyX2hlYWRlcl9fMkFuWmIsIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdywgW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNDVzO1xcbiAgei1pbmRleDogOTk5OyB9XFxuICAubmF2YmFyX2hlYWRlcl9fMkFuWmIgYSwgLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEsIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IGEge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7IH1cXG4gIC5uYXZiYXJfaGVhZGVyX18yQW5aYiBhOmhvdmVyLCAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDIsIDUxLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5cXG4ubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHtcXG4gIGRpc3BsYXk6IHVuc2V0OyB9XFxuICAubmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgIC5uYXZiYXJfbmF2aWdhdGlvbkJhcl9fMU5uQWwgdWwgbGkge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7IH1cXG5cXG4ubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgfVxcbiAgQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpKSB7XFxuICAgIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9IH1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfaGVhZGVyX18yQW5aYiBhLCBbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIC5uYXZiYXJfZ2xhc3N5SGVhZGVyX18ya1VhdyBhIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSAubmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXcge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgfVxcbiAgQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpKSB7XFxuICAgIFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0gLm5hdmJhcl9nbGFzc3lIZWFkZXJfXzJrVWF3IHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9uYXZiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sMkNBQTJDO0VBQzNDLDBCQUEwQjtFQUMxQixZQUFZLEVBQUE7RUFWZDtJQVlJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQWZoQjtJQWtCSSxtQ0FBbUM7SUFDbkMsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBR0ksYUFBYTtJQUNiLHFCQUFxQixFQUFBO0lBSnpCO01BTU0sbUJBQW1CLEVBQUE7O0FBTXpCO0VBR0UsaUJBQWtDO0VBQ2xDLG1GQUNvQyxFQUFBO0VBRUc7SUFQekM7TUFRSSxvQ0FBb0M7TUFDcEMsbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBLEVBRTlCOztBQWZEO0VBbUJJLFdBQVcsRUFBQTs7QUFoQmY7RUFzQkksaUJBQTRCO0VBQzVCLG1GQUNvQyxFQUFBO0VBRUc7SUF0QnZDO01BdUJFLDhCQUE4QjtNQUM5QixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUEsRUFFOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gLm5hdmlnYXRpb25CYXIge1xcbi8vICAgZGlzcGxheTogbm9uZTtcXG4vLyB9XFxuXFxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogNTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE2cHggNjRweDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40NXM7XFxuICB6LWluZGV4OiA5OTk7XFxuICBhIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcbiAgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDIsIDUxLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB9XFxufVxcblxcbi5uYXZpZ2F0aW9uQmFyIHtcXG4gIGRpc3BsYXk6IHVuc2V0O1xcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgICB9XFxuICB9XFxufVxcbi8vIH1cXG5cXG4uZ2xhc3N5SGVhZGVyIHtcXG4gIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4gICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gIEBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpKSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXG4gIC5oZWFkZXIgYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmdsYXNzeUhlYWRlciB7XFxuICAgIEBleHRlbmQgLmhlYWRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgICAgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5hdmJhcl9oZWFkZXJfXzJBblpiXCIsXG5cdFwiZ2xhc3N5SGVhZGVyXCI6IFwibmF2YmFyX2dsYXNzeUhlYWRlcl9fMmtVYXdcIixcblx0XCJuYXZpZ2F0aW9uQmFyXCI6IFwibmF2YmFyX25hdmlnYXRpb25CYXJfXzFObkFsXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./_includes/navbar.module.scss\n");

/***/ })

})