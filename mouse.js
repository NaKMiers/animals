function mouse(name) {
	this.name = name
	this.isDead = false
}

mouse.prototype.die = function() {
	this.isDead = true
}

module.exports = mouse