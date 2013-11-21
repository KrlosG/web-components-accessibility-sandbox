(function() {
  var ShadowTemplate;

  HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.createShadowRoot || HTMLElement.prototype.webkitCreateShadowRoot || function() {};

  ShadowTemplate = (function() {
    function ShadowTemplate(templateSelector, hostSelector) {
      var shadowHost, shadowRoot, shadowTmpl;
      shadowHost = document.querySelector(hostSelector);
      shadowTmpl = document.querySelector(templateSelector);
      shadowRoot = shadowHost.createShadowRoot();
      shadowRoot.appendChild(shadowTmpl.content.cloneNode(true));
    }

    return ShadowTemplate;

  })();

  window.ShadowTemplate = ShadowTemplate;

}).call(this);
