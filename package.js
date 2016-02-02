Package.describe({
    summary: 'A Meteor.js / Blaze integration for bootstrap-tour',
    version: '1.1.0',
    name: 'flowkey:bootstrap-tour',
    git: 'https://github.com/nerdmed/bootstrap-tour.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use(['jquery', 'templating'], 'client');

    // add dependency for bootstrap3
    api.addFiles([
        'lib/bootstrap-tour-standalone.js',
        'lib/bootstrap-tour-standalone.css'
        ], 'client');
});
