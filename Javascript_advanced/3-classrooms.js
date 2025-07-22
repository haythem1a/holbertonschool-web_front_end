// Write a function named createClassRoom
function createClassRoom(numberOfStudents) {
	// Inside createClassRoom, define a function studentSeat
	function studentSeat(seat) {
	  // Return a function that returns the seat number
	  return function() {
		return seat;
	  };
	}
  
	// Create and populate a variable students (array)
	var students = [];
  
	// Using a loop from 0 to numberOfStudents, pass the iteration number + 1 to studentSeat
	// and add its return value to the students array
	for (var i = 0; i < numberOfStudents; i++) {
	  students.push(studentSeat(i + 1));
	}
  
	// Return the students array
	return students;
  }
  
  // Create a closure classRoom, calling createClassRoom with 10 students
  var classRoom = createClassRoom(10);
  