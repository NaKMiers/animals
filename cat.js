var mouse = require('./mouse')

function cat() {
	this.stomach = []
}

cat.prototype.eat = function(animal) {
	if (animal instanceof mouse) {
		this.stomach.push(mouse)
	} else {
		throw new Error('Cat can only eat mouse!')
	}
}

cat.prototype.sleep = function() {
	console.log('sleeping')
}

module.exports = cat