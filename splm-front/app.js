/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Splm.Application',

    name: 'Splm',

    requires: [
        // This will automatically load all classes in the Splm namespace
        // so that application classes do not need to require each other.
        'Splm.*'
    ],

    // The name of the initial view to create.
    mainView: 'Splm.view.main.Main'
});
