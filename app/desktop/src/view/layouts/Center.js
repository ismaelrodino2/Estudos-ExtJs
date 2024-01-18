Ext.define("MyClassicApp.view.layouts.Center", {
  extend: "Ext.Panel",
  alias: "widget.center_layout",
  title: "Exemplo Center layout",
  layout: "center",
  //não é necessário especificar o layout na toolkit modern

  /**
   * top, bottom, left, right
   */
  items: [
    {
      xtype: "panel",
      title: "Panel centralizado",
      height: "50%",
      width: "50%",
      border: 1,
      shadow:true,
    },
  ], //nesse caso precisa de xtype
});
