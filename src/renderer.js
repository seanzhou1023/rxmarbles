/*
 * Renderer component.
 * Subscribes to vtree observables of all view components
 * and renders them as real DOM elements to the browser.
 */
var Package = require('package.json');
var Sandbox = require('rxmarbles/views/sandbox');
var OperatorsMenuView = require('rxmarbles/views/operators-menu');
var renderVTreeStream = require('rxmarbles/views/utils').renderVTreeStream;

function init() {
  var sandboxContainer = document.querySelector(".js-sandboxContainer");
  sandboxContainer.innerHTML = "";
  sandboxContainer.appendChild(Sandbox.render());

  renderVTreeStream(OperatorsMenuView.vtree$, ".js-operatorsMenuContainer");

  var versionElement = document.querySelector("a.js-appVersion");
  versionElement.textContent = "v" + Package.version;
  versionElement.href = "https://github.com/staltz/rxmarbles/releases/tag/v" + Package.version;

  var rxVersion = Package.dependencies.rx.replace(/(~|\^|\.\+)*/g, "");
  var rxElement = document.querySelector("a.js-rxjsVersion");
  rxElement.textContent = "RxJS v" + rxVersion;
  rxElement.href = "https://github.com/Reactive-Extensions/RxJS/tree/v" + rxVersion;
}

module.exports = {
  init: init
}
