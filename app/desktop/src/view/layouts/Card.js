Ext.define("MyClassicApp.view.layouts.Card", {
  extend: "Ext.Panel",
  requires: ["Ext.form.Panel", "Ext.layout.Form"],
  alias: "widget.card_layout",
  title: "Exemplo Card layout",
  layout: {
    type: "card",
    animation: {
      type: "slide",
      duration: 500,
    },
  },

  defaults: {
    margin: 5,
    shadow: true,
  },

  items: [
    {
      xtype: "container",
      html: "<h1>Seja bem vindo ao nosso assistente</h1>",
    }, //primeiro card/etapa
    {
      xtype: "formpanel",
      layout: "form",
      title: "Preencha os seus dados",
      items: [
        {
          xtype: "textfield",
          label: "Nome",
          placeholder: "Informe seu nome",
        },
        {
          xtype: "textfield",
          label: "Email",
          placeholder: "Informe seu email",
        },
      ],
    },
    {
      xtype: "container",
      html: "<h1>Parabéns vc chegou ao final</h1>",
    },
  ], //nesse caso precisa de xtype
  bbar: {
    items: [
      { xtype: "spacer", flex: 1 },
      {
        xtype: "button",
        text: "Anterior",
        handler: function (button) {
          var layout = button.up("card_layout").getLayout();
          //se existir um component a frente, move pra ele
          layout.previous();
        },
      },
      {
        xtype: "button",
        text: "Próximo",
        cls: "danger", // Adicione a classe de estilo personalizado aqui
        handler: function (button) {
          var layout = button.up("card_layout").getLayout();
          layout.next();
        },
      },
      {
        xtype: "button",
        text: "Próximo",
        handler: function (button) {
          var layout = button.up("card_layout").getLayout();
          layout.next();
        },
      },

      {
        xtype: "button",
        text: "Próximo round",
        ui: "button-smaller button-bigger-secondary", // Nome da sua nova UI
      },

      {
        xtype: "button",
        text: "Próximo123",
        cls: 'border-gray',
        ui: "button-bigger button-bigger-primary ", // Nome da sua UI personalizada

        handler: function (button) {
          var layout = button.up("card_layout").getLayout();
          layout.next();
        },
      },

      {
        xtype: "button",
        text: "Próximo321",
        ui: "button-bigger button-bigger-secondary ", // Nome da sua UI personalizada
      },
    ],
  },
});
