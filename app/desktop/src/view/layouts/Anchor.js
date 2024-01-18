Ext.define('MyClassicApp.view.layouts.Anchor', {
    extend: 'Ext.Panel',
    alias: 'widget.anchor_layout',
    // layout: {
    //     type: 'anchor'
    // },
    //não é necessário especificar o layout na toolkit modern
    defaults: {
        margin: 8,
        shadow: true,
        border: 1,
        xtype: 'panel'
    },

    items: [
        {            
            title: 'Panel 1 - 98% width 58% height',
            width: '98%',
            height: '58%'
        },
        {
            title: 'Panel 2 - 75% width 15% height',
            width: '75%',
            height: '15%'
        },
        {
            title: 'Panel 3 - 35% width',
            width: '35%',
            height: 100
        }
    ]
})