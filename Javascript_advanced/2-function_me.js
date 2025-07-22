// Write a function named welcomeMessage
function welcomeMessage(fullName) {
	// Define a closure for displaying an alert with the welcome message
	return function() {
	  alert(`Welcome ${fullName}`);
	};
  }
  
  // Create three variables using welcomeMessage with different arguments
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');