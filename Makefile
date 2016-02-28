NPM_BIN=./node_modules/.bin
PORT=3000

install:
	npm install
build:
	${NPM_BIN}/browserify ./index.js -t babelify -o ./public/bundle.js
tests:
	${NPM_BIN}/mocha --watch --compilers js:espower-babel/guess test/**/*.js
browser-tests:
	${NPM_BIN}/karma start
watch:
	${NPM_BIN}/watchify -d ./index.js -t babelify -o public/bundle.js -v
server:
	make watch & ${NPM_BIN}/browser-sync start --server public --files public/**/* --port ${PORT}
