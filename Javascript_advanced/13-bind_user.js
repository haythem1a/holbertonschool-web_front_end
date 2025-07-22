// Create an object user
const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
};

// Create a function logWelcomeUser
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind the logWelcomeUser function to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string 'Welcome'
bindLogWelcomeUser('Welcome');
