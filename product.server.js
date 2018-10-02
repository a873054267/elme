/**
 * Created by Administrator on 2018/10/2.
 */
var express=require('express')
var config=require('./config/index')
var port=process.env.PORT||config.build.port
var app=express()
var router=express.Router()
router.get('/',function(req,res){
  req.url='index.html'
  next()
})
app.use(router)
var appData=require('../data.json')
var seller=appData.seller
var goods=appData.seller
var ratings=appData.ratings
var apiRoutes=express.Router()
app.use('/api',apiRoutes)
app.use (express.static('./dist'))
