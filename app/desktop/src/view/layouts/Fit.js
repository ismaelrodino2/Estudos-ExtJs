Ext.define("MyClassicApp.view.layouts.Fit", {
  extend: "Ext.Panel",
  alias: "widget.fit_layout",
  title: "Exemplo Fit layout",
  layout: "fit",
  //não é necessário especificar o layout na toolkit modern
  defaults: {
    border: 1,
    shadow: true,
    margin: 10,
  },

  /**
   * top, bottom, left, right
   */
  items: [{ xtype: "panel", title: "Panel 1" }], //nesse caso precisa de xtype
});
