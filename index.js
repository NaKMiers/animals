var cat = require('./cat')
var mouse = require('./mouse')
var dog = require('./dog')

var cat1 = new cat()
var mouse1 = new mouse('jerry')
var dog1 = new dog('nobi')

try {
	cat1.eat(dog1)
} catch(error) {
	console.log('Error while cat eating dog!')
}

