Ext.define("MyClassicApp.view.layouts.Border", {
  extend: "Ext.Panel",
  alias: "widget.border_layout",
  title: "Exemplo Border Layout",
  // requires: [
  //     'Ext.panel.Collapser'
  // ],
  layout: {
    type: "vbox", //tudo vertical
  },
  defaults: {
    border: 1,
    shadow: true,
    margin: 5,
  },

  weighted: true,
  items: [

    {
      xtype: "panel",
      title: "West Panel1", //left
      collapsible: 'left',
      docked: 'left',
      width: 250,
    },
    {
      xtype: "panel",
      title: "West Panel2", //right
      collapsible: 'right',
      docked: 'right',
      width: 250,
      flex: 1
    },
    {
      xtype: "panel",
      title: "East Panel",
      collapsible: true,
      docked: 'left',
      collapsible:{
        animation: false,
        direction: 'left'
      },
      width: 250,
    },
    {
      xtype: "panel",
      title: "North Panel",
      html: "Header",//remover docked e flex 1 para height 100%
      flex: 1,
    },
    {
      xtype: "panel",
      title: "South Panel",
      docked: 'bottom',
      html: "Footer here",
      height:100
    },
  ],
});
