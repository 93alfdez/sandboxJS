(function () {
  var overrideCtx = {};
  overrideCtx.Templates = {};
  overrideCtx.Templates.Fields = { Body: { View: CBody } };
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

function CBody(ctx) {
  var ret =
    "<b>" +
    ctx.CurrentItem.Noticia +
    ctx.CurrentItem.Circular +
    "</b><hr/>" +
    ctx.CurrentItem.Body;
  return ret;
}
