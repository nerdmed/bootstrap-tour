Package.describe({
    summary: 'A Meteor.js / Blaze integration for bootstrap-tour',
    version: '1.0.2'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.1.1');
    api.use(['jquery', 'templating'], 'client');

    // add dependency for bootstrap3
    api.addFiles([
        'lib/bootstrap-tour-standalone.js',
        'lib/bootstrap-tour-standalone.css'
        ], 'client');
});
