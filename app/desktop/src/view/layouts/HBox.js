Ext.define("MyClassicApp.view.layouts.HBox", {
  extend: "Ext.Panel",
  // requires:['Ext.field.HBox'],
  alias: "widget.hbox_layout",
  title: "Exemplo HBox layout",

  layout: {
    type: "hbox",
    align: "middle", //vertical stretch -> estica p 100% do h do componente, stretchmax -> estica para a altura do maior item, caso um dos itens tenha height já, por ex, os outros acompanham essa altura.
    pack: "center", //horizontal ou spacebetween, around, etc do flex-box
  },

  defaults: {
    magin: 5,
    shadow: true,
    border: 1,
  },

  items: [
    { xtype: "panel", title: "Panel 1", html: "content here", width: 200 }, //flex: 3 },
    {
      xtype: "panel",
      title: "Panel 2",
      height: 200,
      width: 200,
      html: "content here",
      //flex: 1, //flex se todos flex deram 6, flex 1 ocupa 1/6 do width, n pode ser utilizado em conjunto com width
    },
    { xtype: "panel", title: "Panel 3", html: "content here", width: 200 }, //flex: 2 },
  ],
});
