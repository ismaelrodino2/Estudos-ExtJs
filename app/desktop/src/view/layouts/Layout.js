Ext.define("MyClassicApp.view.layouts.Form", {
  extend: "Ext.form.Panel",
  requires:['Ext.field.ComboBox'],
  alias: "widget.form_layout",
  title: "Exemplo Form layout",
  layout: "form",

  defaults: {
    labelAlign: 'left' //label a esq dos campos e não em cima
  },

  /**
   * top, bottom, left, right
   */
  items: [
    { xtype: "textfield", label: "Nome", emptyText: "Informe seu nome" },
    { xtype: "datefield", label: "Nascimento" },
    {
      xtype: "combobox",
      label: "Sexo",
      valueField:"description",
      displayField:"description",
      store: {
        fields: ['description'],
        queryMode: 'local', //no cliente/local e n no db
        data: [
          {
            description: "Masculino",
          },
          {
            description: "Feminino",
          },
        ],
      },
    },
    { xtype: "textareafield", label: "Text area", height: 80 },

  ], 
});
