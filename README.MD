Шаблон Gulp Проекта для быстрого развертывание workflow для Адаптивной верстки
===================

### Инструкция по установке
Данный шаблон создан для себя. Если он попал вам каким-нибудь способом, можете пользоваться. Только я не могу вам помоч если вы чего-нибудь не поняли.

1. Установить node.js
2. Установить gulp cli
3. Скачать данный проект и любим удобным способом
4. Установить gulp 4 локально. Следующим способом
	  **npm install 'gulpjs/gulp.git#4.0' --save-dev**   или
	  **npm install 'gulpjs/gulp#4.0' --save-dev**
5. Установить следующие плагины если не установлены
	- browser-sync
	- gulp-autoprefixer
	- gulp-cheerio
	- gulp-concat
	- gulp-concat-css
	- gulp-csso
	- gulp-eslint
	- gulp-html-beautify
	- gulp-imagemin
	- gulp-load-plugins
	- gulp-newer
	- gulp-notify
	- gulp-pug
	- gulp-sass
	- gulp-sourcemaps
	- gulp-svgmin
	- gulp-uglify
	- gulp-util
	- gulp-replace
	- gulp-rename
	- gulp-svg-sprite
	- rimraf
5. Плагины можно установить локально либо глобально. 
   -  Если локально то,
	   -    npm i browser-sync gulp-autoprefixer gulp-cheerio gulp-concat gulp-concat-css gulp-csso gulp-eslint gulp-html-beautify gulp-imagemin gulp-load-plugins gulp-newer gulp-notify gulp-pug gulp-sass gulp-sourcemaps gulp-svgmin gulp-uglify gulp-util gulp-replace gulp-rename gulp-svg-sprite rimraf --save-dev
   -  Если глабально то,
	   -   npm i browser-sync gulp-autoprefixer gulp-cheerio gulp-concat gulp-concat-css gulp-csso gulp-eslint gulp-html-beautify gulp-imagemin gulp-load-plugins gulp-newer gulp-notify gulp-pug gulp-sass gulp-sourcemaps gulp-svgmin gulp-uglify gulp-util gulp-replace gulp-rename gulp-svg-sprite rimraf -g
	   -  npm link browser-sync gulp-autoprefixer gulp-cheerio gulp-concat gulp-concat-css gulp-csso gulp-eslint gulp-html-beautify gulp-imagemin gulp-load-plugins gulp-newer gulp-notify gulp-pug gulp-sass gulp-sourcemaps gulp-svgmin gulp-uglify gulp-util gulp-replace gulp-rename gulp-svg-sprite rimraf
     - npm init --yes
7.1 Создать .gitignore и bower.json. Установить плагины
	1. Установить jquery
	2. BEMTO
Или
7.2 Скопировать .gitignore и bower.json. 
	sudo bower i --allow-root
