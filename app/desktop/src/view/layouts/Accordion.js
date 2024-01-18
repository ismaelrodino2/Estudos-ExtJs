Ext.define("MyClassicApp.view.layouts.Accordion", {
  extend: "Ext.panel.Accordion",
  alias: "widget.accordion_layout",
  title: "Exemplo Accordion layout",
  //não é necessário especificar o layout na toolkit modern

  defaults: {
    border: 1,
    shadow: true,
    margin: 5,
  },

  openable: 2, //apenas 2 podem ser expandidos de cada vez

  items: [
    {
      xtype: "panel",
      title: "Panel 1",
      html: 'texto aqui', //texto após expandir
    },
    {
      xtype: "panel",
      title: "Panel 2",
    },
    {
      xtype: "panel",
      title: "Panel 3",
    },
  ],
});
