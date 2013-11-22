Package.describe({
	summary: "ZURB Foundation Javascript-only package; allows for per-project/non-package use of Foundation's SCSS/Compass version."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.add_files(path.join('client', 'vendor/custom.modernizr.js'), 'client');
	api.add_files(path.join('client', 'vendor/fastclick.js'), 'client');
	api.add_files(path.join('client', 'vendor/jquery.autocomplete.js'), 'client');
	api.add_files(path.join('client', 'vendor/jquery.cookie.js'), 'client');
	api.add_files(path.join('client', 'vendor/placeholder.js'), 'client');
	api.add_files(path.join('client', 'foundation.js'), 'client');
	api.add_files(path.join('client', 'activate-foundation.js'), 'client');
});