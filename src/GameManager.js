function GameManager() {
	// Private menbers
	var self = this;
	var time;
	var state;
	
	// Public members
	self.START_MODE = 'start';
	
	self.init = function() {
		time = 0;
		state = self.START_MODE;
	};
	
	self.getTime = function() {
		return time;
	};
	
	self.getState = function() {
		return state;
	};
}

module.exports = GameManager;