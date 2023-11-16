/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
 const proxy = require('./config/proxy.js');
 const mix = require('laravel-mix');
 const glob = require('glob');
 require('laravel-mix-stylelint');
 require('laravel-mix-copy-watched');
 
/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */
 mix
 .sourceMaps()
 .webpackConfig({
   // Use the jQuery shipped with Drupal to avoid conflicts.
   externals: {
     jquery: "jQuery",
   },
   devtool: 'source-map'
 })
 .setPublicPath("assets")
 .disableNotifications()
 .options({
   processCssUrls: false,
 });


 

 /*
 |--------------------------------------------------------------------------
 | Browsersync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
	proxy: proxy.proxy,
	files: [
		'assets/js/**/*.js',
		'assets/css/**/*.css',
		'assets/components/**/*.css',
		'assets/components/**/*.js',
		'src/**/*.twig',
		'templates/**/*.twig',
	],
	stream: true,
});

 /*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */
mix.sass('src/sass/penn_starter.style.scss', 'css');

glob.sync('src/components/**/*.scss').forEach((sourcePath) => {
	const destinationPath = sourcePath.replace(
		/^src\/(components\/.+)\/_?(.+)\.scss$/,
		'$1/$2.css'
	);

	mix.sass(sourcePath, destinationPath);
});


 /*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
 */
mix.js('src/js/penn_starter.script.js', 'js');

glob.sync('src/components/**/*.js').forEach((sourcePath) => {
	const destinationPath = sourcePath.replace(
		/^src\/(components\/.+)\/(.+)\.js$/,
		'$1/$2.js'
	);

	mix.js(sourcePath, destinationPath);
});
/*
 |--------------------------------------------------------------------------
 | Style Lint
 |--------------------------------------------------------------------------
 */
mix.stylelint({
	configFile: './.stylelintrc.json',
	context: './src',
	failOnError: false,
	files: ['**/*.scss'],
	quiet: false,
	customSyntax: 'postcss-scss',
});
