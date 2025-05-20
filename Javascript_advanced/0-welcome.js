function welcome(firstName, lastName) {
    // Concatenate firstName and lastName to create fullName
    const fullName = `${firstName} ${lastName}`;

    // Function to display a welcome alert
    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }

    // Call the displayFullName function
    displayFullName();
}
