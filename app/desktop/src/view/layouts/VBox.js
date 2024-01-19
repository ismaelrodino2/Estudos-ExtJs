Ext.define("MyClassicApp.view.layouts.VBox", {
  extend: "Ext.Panel",
  // requires:['Ext.field.HBox'],
  alias: "widget.vbox_layout",
  title: "Exemplo VBox layout",

  layout: {
    type: "vbox",
    align: "middle", //alinhamento horizontal, stretch vai esticar horintalmente
    pack: "center", //alinhamento vertical
  },

  defaults: {
    magin: 5,
    shadow: true,
    border: 1,
  },

  items: [
    { xtype: "panel", title: "Panel 1", html: "content here", flex: 3 },
    {
      xtype: "panel",
      title: "Panel 2",
      height: 200,
      html: "content here",
      flex: 1, //flex se todos flex deram 6, flex 1 ocupa 1/6 do width, n pode ser utilizado em conjunto com width
    },
    { xtype: "panel", title: "Panel 3", html: "content here", flex: 2 }, //flex: 2 },
  ],
});
