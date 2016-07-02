
const koa = require('koa')
,serve = require('koa-static')
,port = 8555
,app = koa()
,Jade = require('koa-jade')
,Router = require('koa-router')
,route = new Router()
,read = require('..')
,icons = read(__dirname + '/fontello.svg')
,_ = require('lodash')

route.get('/', function* (next) {
	this.render('index', {
		icons: icons
		,_: _
	})
})

//view engine
var jade = new Jade({
	viewPath: __dirname
	,debug: false
	,pretty: false
	,compileDebug: true
	//basedir: 'path/for/jade/extends',
	,noCache: true
})

app.use( serve( __dirname ) )
app.use( jade.middleware )
app.use( route.routes() )
app.use( route.allowedMethods() )

app.listen(port, function() {
	console.log('' + new Date(), 'svg-reader test server', 'runs on port', port)
})