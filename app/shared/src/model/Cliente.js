Ext.define("MyClassicApp.model.Cliente", {
  idProperty: "id",
  extend: "Ext.data.Model",
  fields: [
    {
      name: "id",
      type: "int",
    },
    {
      name: "nome",
      type: "string",
    },
    {
      name: "sobrenome",
      type: "string",
    },
    {
      name: "name_completo",
      type: "string",
      convert: function(value, record){//concatenar com nome e sobrenome
        return record.get('nome')+record.get('sobrenome')
      }
    },
    {
      name: "data_nascimento",
      type: "date",
    },
    {
      name: "ativo",
      type: "boolean",
    },
    {
      name: "peso",
      type: "float",
    },
  ],
});
//phanton true = ta salvo só no navegador

//instanciar o model: var cliente = Ext.create("MyClassicApp.model.Cliente")
//cliente.set({chave: valor})
//cliente.get("campo")