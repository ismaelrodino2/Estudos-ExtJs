Ext.define('MyClassicApp.view.layouts.Absolute', {
    extend: 'Ext.Panel',
    alias: 'widget.absolute_layout',
    title: 'Exemplo Absolute layout',
    //não é necessário especificar o layout na toolkit modern
    defaults: {
        border: 1,
        shadow: true,
        height: 100,
        margin: 8,
        xtype: 'panel'
    },

    /**
     * top, bottom, left, right
     */
    items: [
        {            
            title: 'Panel 1 - right 100 y 100',
            width: '50%',
            //left: 100,
            right: 150,
            top: 100
        },
        {
            title: 'Panel 2 - x 150 y 260',
            left: 6,
            top: 260
        },
        {
            title: 'Panel 3 - x 300 y 400',
            left: 300,
            //top: 400
            bottom: 20
        }
    ]
})